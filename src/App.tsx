import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SmoothScroll } from './components/SmoothScroll';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })));
const Capabilities = lazy(() => import('./pages/Capabilities').then((module) => ({ default: module.Capabilities })));
const Work = lazy(() => import('./pages/Work').then((module) => ({ default: module.Work })));
const Process = lazy(() => import('./pages/Process').then((module) => ({ default: module.Process })));
const FAQ = lazy(() => import('./pages/FAQ').then((module) => ({ default: module.FAQ })));
const Contact = lazy(() => import('./pages/Contact').then((module) => ({ default: module.Contact })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then((module) => ({ default: module.PrivacyPolicy })));
const TermsConditions = lazy(() => import('./pages/TermsConditions').then((module) => ({ default: module.TermsConditions })));

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#f4f0e8] text-[#181715] selection:bg-[#c85d2f] selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<div className="min-h-[45vh]" aria-busy="true" aria-label="Loading page" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/capabilities" element={<Capabilities />} />
              <Route path="/work" element={<Work />} />
              <Route path="/process" element={<Process />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/terms-and-conditions" element={<TermsConditions />} />
              <Route path="*" element={<Home />} />
            </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
