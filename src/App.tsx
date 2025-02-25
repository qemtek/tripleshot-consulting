import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import HomePage from './pages/HomePage';
// import Blog from './pages/Blog';
// import BlogPost from './pages/BlogPost';
import CaseStudyPage from './pages/CaseStudyPage';
import { useScrollToTop } from './hooks/useScrollToTop';
import ChatbotComponent from './components/chatbot/ChatbotComponent';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default function App() {
  return (
    <Router>
      <HelmetProvider>
        <ScrollToTop />
        <SEOHead />
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/blog/:slug" element={<BlogPost />} /> */}
            <Route path="/case-studies/:id" element={<CaseStudyPage />} />
          </Routes>
          <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; 2025 Tripleshot Consulting. All rights reserved.</p>
            </div>
          </footer>
          <ChatbotComponent 
            initialMessage="👋 Hi there! How can I help you today?" 
            position="bottom-right"
            primaryColor="#4f46e5"
            apiBaseUrl={import.meta.env.VITE_API_URL || 'http://localhost:3001'}
          />
        </div>
      </HelmetProvider>
    </Router>
  );
}