import React, { lazy, Suspense, useLayoutEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
const Test001 = lazy(() => import('./pages/test001').then((module) => ({ default: module.Home })));

function AppContent() {
  const location = useLocation();
  const isTest001 = location.pathname === '/test001';
  const footerRef = useRef<HTMLDivElement>(null);

  // Measure footer height synchronously before paint so the curtain reveal
  // has the correct margin-bottom from the very first frame.
  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const update = () => {
      document.documentElement.style.setProperty('--footer-h', `${footer.offsetHeight}px`);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(footer);
    return () => ro.disconnect();
  }, []);

  return (
    <SmoothScroll disable={true}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f4f0e8] text-[#181715] selection:bg-[#c85d2f] selection:text-white">
        <Navbar />
        <main
          className="flex-grow relative z-10 bg-[#f4f0e8] shadow-[0_10px_30px_rgba(0,0,0,.15)]"
          style={{ marginBottom: 'var(--footer-h, 0px)' }}
        >
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
            <Route path="/test001" element={<Test001 />} />
            <Route path="*" element={<Home />} />
          </Routes>
          </Suspense>
        </main>
        <div ref={footerRef} className="fixed bottom-0 left-0 right-0 z-0">
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
