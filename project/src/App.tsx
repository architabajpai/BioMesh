import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SecurityPage from './pages/SecurityPage';
import RecoveryPage from './pages/RecoveryPage';
import MobileAppPage from './pages/MobileAppPage';
import DeveloperPage from './pages/DeveloperPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/recovery" element={<RecoveryPage />} />
            <Route path="/mobile-app" element={<MobileAppPage />} />
            <Route path="/developers" element={<DeveloperPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;