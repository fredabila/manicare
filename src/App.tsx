import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import CareersPage from './pages/CareersPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsConditionsPage from './pages/TermsConditionsPage'
import ServiceRefundPolicyPage from './pages/ServiceRefundPolicyPage'
import NonDiscriminationPage from './pages/NonDiscriminationPage'
import HIPAAPrivacyStatementPage from './pages/HIPAAPrivacyStatementPage'
import PatientRightsResponsibilitiesPage from './pages/PatientRightsResponsibilitiesPage'

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full overflow-x-clip pb-20 md:pb-0">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/service-refund-policy" element={<ServiceRefundPolicyPage />} />
          <Route path="/non-discrimination" element={<NonDiscriminationPage />} />
          <Route path="/hipaa-privacy-statement" element={<HIPAAPrivacyStatementPage />} />
          <Route path="/patient-rights-responsibilities" element={<PatientRightsResponsibilitiesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
