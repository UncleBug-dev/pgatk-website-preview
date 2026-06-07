import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    </div>
  );
};

export default MainLayout;