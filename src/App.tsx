import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import CareersPage from './pages/CareersPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'

function App() {

  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
