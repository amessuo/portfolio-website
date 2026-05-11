import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageTransition from './components/layout/PageTransition'
import HomePage from './pages/HomePage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import CaseStudyDetail from './pages/CaseStudyDetail'
import useCanonical from './hooks/useCanonical'
import './App.css'

function AnimatedRoutes() {
  const location = useLocation()
  useCanonical()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/case-studies"
          element={
            <PageTransition>
              <CaseStudiesPage />
            </PageTransition>
          }
        />
        <Route
          path="/case-studies/:slug"
          element={
            <PageTransition>
              <CaseStudyDetail />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}
