import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import UncleBug from '../components/UncleBug';
import AccessibilityDrawer from '../components/AccessibilityDrawer';

const MainLayout: React.FC = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      prevPath.current = location.pathname;
      window.scrollTo(0, 0); // Scroll to top on navigation

      // Fix for Google Translate in SPA:
      // If language is not RU, force a hard reload so the widget translates new DOM
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
        return null;
      };
      const googtrans = getCookie('googtrans');
      if (googtrans && googtrans !== '/ru/ru') {
        window.location.reload();
      }
    }
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col min-h-screen w-full relative">
      <Header />
      
      <div className="flex-grow">
        <Outlet />
      </div>
      
      <Footer />

      <button
        onClick={scrollToTop}
        className={`
          scroll-to-top-btn fixed bottom-8 right-8 z-40 p-4 rounded-full bg-accent-500 text-primary-900 
          shadow-xl border-2 border-white hover:bg-accent-400 hover:scale-110 
          transition-all duration-500 ease-in-out
          ${showScrollBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
        title="Наверх"
        aria-label="Вернуться наверх"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <CookieBanner />
      <UncleBug />
      <AccessibilityDrawer />
    </div>
  );
};

export default MainLayout;