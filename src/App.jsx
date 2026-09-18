import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LightboxModal from './components/common/LightboxModal';
import Toast from './components/common/Toast';
import ScrollToTop from './components/common/ScrollToTop';
import { BookingProvider } from './context/BookingContext';
import { LightboxProvider } from './context/LightboxContext';

// Pages
import HomePage from './pages/HomePage';
import GrandInnPage from './pages/GrandInnPage';
import RoyalParkPage from './pages/RoyalParkPage';
import AllHotelsPage from './pages/AllHotelsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BookingProvider>
        <LightboxProvider>
          <div className="flex flex-col min-h-screen bg-[#FCFBF7] text-slate-900 font-sans selection:bg-gold-500 selection:text-white">
            {/* Main Universal Header */}
            <Navbar />

            {/* Page Router */}
            <main className="flex-1">
              <Routes>
                {/* Main Unified Brand Landing Page */}
                <Route path="/" element={<HomePage />} />

                {/* Dedicated Hotel Experience Routes */}
                <Route path="/hotels" element={<AllHotelsPage />} />
                <Route path="/hotels/grand-inn" element={<GrandInnPage />} />
                <Route path="/hotels/grand-inn/rooms" element={<GrandInnPage />} />
                <Route path="/hotels/royal-park" element={<RoyalParkPage />} />
                <Route path="/hotels/royal-park/rooms" element={<RoyalParkPage />} />

                {/* Sub Pages */}
                <Route path="/experiences" element={<ExperiencesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Fallback 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>

            {/* Universal Brand Footer */}
            <Footer />

            {/* Global Modals & Notifications */}
            <LightboxModal />
            <Toast />
          </div>
        </LightboxProvider>
      </BookingProvider>
    </Router>
  );
}

export default App;
