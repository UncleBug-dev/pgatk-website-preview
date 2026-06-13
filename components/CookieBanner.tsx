import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none flex justify-center">
      {/* Banner Container */}
      <div className={`
        pointer-events-auto bg-white/95 backdrop-blur-md border border-slate-200 
        shadow-2xl rounded-2xl w-full max-w-5xl overflow-hidden
        transform transition-all duration-500 ease-out translate-y-0 opacity-100
      `}>
        <div className="p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 flex-1">
            <div className="bg-primary-100 p-3 rounded-full hidden sm:block flex-shrink-0">
              <Cookie className="w-6 h-6 text-primary-700" />
            </div>
            <div className="text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-800 text-base mb-1">Мы используем файлы cookie</p>
              Для того, чтобы мы могли качественно предоставить Вам услуги, мы используем cookies, которые сохраняются на Вашем компьютере. Нажимая «СОГЛАСЕН», Вы подтверждаете то, что Вы проинформированы об использовании cookies на нашем сайте.{' '}
              <Link to="/downloads/footer/poloshenie_cookie.pdf" target="_blank" className="text-accent-600 hover:text-accent-700 underline underline-offset-2 font-medium">
                Подробнее о Политике куки
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end md:justify-start">
            <button 
              onClick={acceptAll}
              className="px-6 py-2.5 text-sm font-bold text-white bg-accent-500 hover:bg-accent-600 rounded-lg transition-colors shadow-sm hover:shadow whitespace-nowrap"
            >
              СОГЛАСЕН
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
