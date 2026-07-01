#!/usr/bin/env bash
set -euo pipefail

# Smoke test for ThreeDigital portfolio website.
# Launches both dev servers (Vite SPA + Astro blog), verifies key routes,
# checks HTML content, then tears down.
#
# Usage: bash .claude/skills/run-portfolio-website/smoke.sh
# Exit 0 = all checks passed. Non-zero = something failed.

ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
SPA_PORT=5173
BLOG_PORT=3001
PIDS=()

cleanup() {
  for pid in "${PIDS[@]}"; do
    kill "$pid" 2>/dev/null || true
  done
  lsof -ti :"$SPA_PORT" 2>/dev/null | xargs kill 2>/dev/null || true
  lsof -ti :"$BLOG_PORT" 2>/dev/null | xargs kill 2>/dev/null || true
}
trap cleanup EXIT

fail() { echo "FAIL: $1"; exit 1; }
pass() { echo "  OK: $1"; }

echo "=== Installing dependencies ==="
(cd "$ROOT" && npm install --silent 2>/dev/null)
(cd "$ROOT/blog" && npm install --silent 2>/dev/null)

echo "=== Starting Vite SPA (port $SPA_PORT) ==="
(cd "$ROOT" && npx vite --port "$SPA_PORT" &>/dev/null) &
PIDS+=($!)

echo "=== Starting Astro blog (port $BLOG_PORT) ==="
(cd "$ROOT/blog" && npx astro dev --port "$BLOG_PORT" &>/dev/null) &
PIDS+=($!)

echo "=== Waiting for servers ==="
for i in $(seq 1 15); do
  SPA_UP=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:$SPA_PORT" 2>/dev/null || echo "000")
  BLOG_UP=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:$BLOG_PORT/blog/" 2>/dev/null || echo "000")
  if [ "$SPA_UP" = "200" ] && [ "$BLOG_UP" = "200" ]; then
    break
  fi
  sleep 1
done

echo ""
echo "=== Checking SPA ==="
SPA_HTML=$(curl -s "http://localhost:$SPA_PORT")
echo "$SPA_HTML" | grep -q "ThreeDigital" || fail "SPA missing ThreeDigital title"
pass "SPA homepage (200, title present)"

echo ""
echo "=== Checking Blog listing ==="
BLOG_HTML=$(curl -s "http://localhost:$BLOG_PORT/blog/")
echo "$BLOG_HTML" | grep -q "ThreeDigital" || fail "Blog missing ThreeDigital branding"
echo "$BLOG_HTML" | grep -q "og:title" || fail "Blog listing missing og:title"
pass "Blog listing (/blog/ - 200, branding + OG tags)"

echo ""
echo "=== Checking Blog posts ==="
SLUGS=("technical-seo-audits-organic-growth" "ai-scale-content-marketing" "link-building-2026")
for slug in "${SLUGS[@]}"; do
  CODE=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:$BLOG_PORT/blog/$slug/")
  [ "$CODE" = "200" ] || fail "Blog post /$slug/ returned $CODE"
  POST_HTML=$(curl -s "http://localhost:$BLOG_PORT/blog/$slug/")
  echo "$POST_HTML" | grep -q "article:published_time" || fail "Post /$slug/ missing article meta"
  pass "Post /$slug/ (200, article meta present)"
done

echo ""
echo "=== Checking blog build ==="
(cd "$ROOT/blog" && npx astro build 2>&1) | tail -3
PAGES=$(find "$ROOT/blog/dist" -name "index.html" 2>/dev/null | wc -l | tr -d ' ')
[ "$PAGES" -ge 4 ] || fail "Blog build produced $PAGES pages, expected >= 4"
pass "Blog build ($PAGES pages)"

echo ""
echo "=== Checking SPA build ==="
(cd "$ROOT" && npx vite build 2>&1) | tail -3
[ -f "$ROOT/dist/index.html" ] || fail "SPA build missing dist/index.html"
pass "SPA build (dist/index.html exists)"

echo ""
echo "=== All checks passed ==="
