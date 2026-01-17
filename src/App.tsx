import React, { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import StructuredData from './components/StructuredData';
import Analytics from './components/Analytics';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import { useScrollToTop } from './hooks/useScrollToTop';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import { useWebVitals } from './hooks/useWebVitals';
import ChatbotComponent from './components/chatbot/ChatbotComponent';

// Lazy load page components
const HomePage = lazy(() => import('./pages/HomePage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
// const Blog = lazy(() => import('./pages/Blog'));
// const BlogPost = lazy(() => import('./pages/BlogPost'));

function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default function App() {
  usePerformanceMonitor();
  useWebVitals({ 
    debug: process.env.NODE_ENV === 'development',
    reportAllChanges: true 
  });
  
  return (
    <Router>
      <HelmetProvider>
        <ScrollToTop />
        <SEOHead />
        <StructuredData type="organization" />
        <Analytics />
        <div className="min-h-screen bg-white font-sans text-gray-900">
          <Header />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/:id" element={<CaseStudyPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<AdminPage />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
            </Routes>
          </Suspense>
          <Footer />
          <ChatbotComponent 
            initialMessage="👋 Hi there! How can I help you today?" 
            position="bottom-right"
            primaryColor="#00D4FF"
            apiBaseUrl={import.meta.env.VITE_API_URL || 'http://localhost:3001'}
          />
        </div>
      </HelmetProvider>
    </Router>
  );
}