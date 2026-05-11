import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import NetworkPage from './pages/NetworkPage';
import BlogPage from './pages/BlogPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ChatWidget from './components/ChatWidget';
import FlashScreen from './components/FlashScreen';
import './App.css';

import { useReveal } from './hooks/useReveal';

// Component to handle scroll to top and re-trigger animations on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useReveal(); // Initialize reveal logic

  useEffect(() => {
    window.scrollTo(0, 0);
    // Slight delay to allow DOM to render before re-scanning for reveals
    setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <FlashScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className={`min-h-screen bg-white flex flex-col ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        <ScrollToTop />
        {!isLoading && <Navbar />}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="*" 
                element={
                  <PageWrapper>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/services/:id" element={<ServiceDetailPage />} />
                      <Route path="/network" element={<NetworkPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/gallery" element={<GalleryPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                  </PageWrapper>
                } 
              />
            </Routes>
          </AnimatePresence>
        </main>
        {!isLoading && <Footer />}
        {!isLoading && <ChatWidget />}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

