import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Mail, MapPin, Eye, Search, Menu, X, ChevronDown, ChevronRight, FileText, ExternalLink, Activity, Sparkles, Instagram, Youtube 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MAIN_MENU } from '../constants';
import AddressLink from './AddressLink';
import { useAccessibility } from '../context/AccessibilityContext';
import SearchModal from './SearchModal';
import { useData } from '../context/DataContext';

const VKIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="-48 -48 672 608" fill="currentColor">
    <path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="-32 -48 512 608" fill="currentColor">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const Header: React.FC = () => {
  const { settings } = useData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(130);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolledRef = useRef(isScrolled);
  useEffect(() => {
    isScrolledRef.current = isScrolled;
  }, [isScrolled]);

  // Отслеживаем реальную высоту шапки — без хардкода пикселей
  // Важно: обновляем высоту только когда шапка НЕ в сжатом состоянии (isScrolled = false),
  // иначе изменение высоты спейсера вызывает скачок скролла и бесконечный цикл.
  useEffect(() => {
    if (!headerRef.current) return;
    const ro = new ResizeObserver(() => {
      if (headerRef.current && !isScrolledRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    });
    ro.observe(headerRef.current);
    // Первый замер сразу
    if (!isScrolledRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    return () => ro.disconnect();
  }, []);

  const getCookie = (name: string) => {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length >= 2) return parts.pop()?.split(';').shift();
    return null;
  };

  const currentLangCookie = getCookie('googtrans');
  let currentLang = 'RU';
  if (currentLangCookie?.endsWith('/be')) currentLang = 'BY';
  if (currentLangCookie?.endsWith('/en')) currentLang = 'EN';

  const setLanguage = (lang: string) => {
    let googtrans = '/ru/ru';
    if (lang === 'BY') googtrans = '/ru/be';
    if (lang === 'EN') googtrans = '/ru/en';
    
    document.cookie = `googtrans=${googtrans}; path=/;`;
    document.cookie = `googtrans=${googtrans}; domain=.${window.location.hostname}; path=/;`;
    
    window.location.reload();
  };

  const { 
    fontSize, setFontSize, contrast, setContrast, imageMode, setImageMode, letterSpacing, setLetterSpacing, lineHeight, setLineHeight, resetSettings, isPanelOpen, togglePanel, closePanel
  } = useAccessibility();

  const isLargeFont = fontSize === 'large' || fontSize === 'extra';

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSubmenu = (label: string) => setActiveSubmenu(activeSubmenu === label ? null : label);

  const resolvePath = (path: string) => {
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  return (
    <>
    {/* Spacer — всегда присутствует, высота = реальная высота шапки */}
    <div
      className="w-full"
      style={{ height: `${headerHeight}px` }}
      aria-hidden="true"
    />
    <header
      ref={headerRef}
      className={`font-display bg-white w-full z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : 'shadow-md'
      }`}
    >
      
      {/* Top Bar — скрывается при скролле */}
      <div
        className={`bg-primary-900 text-slate-200 text-xs px-4 md:px-8 transition-all duration-300 relative z-[60] ${
          isScrolled ? 'max-h-0 py-0 opacity-0 pointer-events-none overflow-hidden' : 'max-h-24 py-2 opacity-100 overflow-visible'
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-x-4 gap-y-2">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-1 text-center sm:text-left">
            <div className="flex items-center space-x-2 cursor-default whitespace-nowrap">
              <MapPin className="w-3 h-3 text-accent-500" />
              <span><AddressLink>{settings.address}</AddressLink></span>
            </div>
            <a href={`mailto:${settings.email}`} className="flex items-center space-x-2 hover:text-accent-500 transition-colors whitespace-nowrap">
              <Mail className="w-3 h-3 text-accent-500" />
              <span>{settings.email}</span>
            </a>
          </div>

          {settings.showAdmissionProgress && (
            <Link 
              to="/downloads/abiturient/hod_priema.pdf" 
              target="_blank"
              className="hidden xl:flex items-center bg-rose-600 hover:bg-rose-500 text-white font-bold py-1 px-4 rounded-full transition-colors shadow shadow-rose-500/50 animate-pulse whitespace-nowrap text-[11px] tracking-wide uppercase border border-rose-400/30"
            >
              <Activity className="w-3.5 h-3.5 mr-2" />
              Ход приема документов
            </Link>
          )}

          <div className="flex items-center space-x-6 relative flex-wrap justify-center">
            <button onClick={togglePanel} className={`flex items-center space-x-2 transition-colors group whitespace-nowrap ${isPanelOpen ? 'text-accent-500' : 'hover:text-white'}`}>
              <Eye className="w-4 h-4" />
              <span className="font-bold">Версия для слабовидящих</span>
            </button>
            


            <div className="h-4 w-px bg-primary-800 hidden sm:block"></div>
            
            {/* Языки */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setLanguage('RU')} 
                title="Русский"
                className={`relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border-2 transition-all duration-300 ${currentLang === 'RU' ? 'border-accent-500 scale-110 shadow-[0_0_10px_rgba(243,75,10,0.5)]' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-110'}`}
              >
                {imageMode === 'hidden' ? <span className="text-[9px] sm:text-[10px] font-bold font-sans">RU</span> : <img src="https://flagcdn.com/w40/ru.png" alt="RU" className="w-full h-full object-cover" />}
              </button>
              
              <button 
                onClick={() => setLanguage('BY')} 
                title="Беларуская"
                className={`relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border-2 transition-all duration-300 ${currentLang === 'BY' ? 'border-accent-500 scale-110 shadow-[0_0_10px_rgba(243,75,10,0.5)]' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-110'}`}
              >
                {imageMode === 'hidden' ? <span className="text-[9px] sm:text-[10px] font-bold font-sans">BY</span> : <img src="https://flagcdn.com/w40/by.png" alt="BY" className="w-full h-full object-cover" />}
              </button>
              
              <button 
                onClick={() => setLanguage('EN')} 
                title="English"
                className={`relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border-2 transition-all duration-300 ${currentLang === 'EN' ? 'border-accent-500 scale-110 shadow-[0_0_10px_rgba(243,75,10,0.5)]' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-110'}`}
              >
                {imageMode === 'hidden' ? <span className="text-[9px] sm:text-[10px] font-bold font-sans">EN</span> : <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-full h-full object-cover" />}
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <a href="https://www.instagram.com/pgatkk" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors p-1"><Instagram className="w-4 h-4" /></a>
              <a href="https://youtube.com/channel/UCx3boiuvaRX1PA-yEXi5hZw" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors p-1"><Youtube className="w-4 h-4" /></a>
              <a href="https://vk.com/pgatkk" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors p-1"><VKIcon className="w-4 h-4" /></a>
              <a href="https://t.me/pgatkk" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors p-1"><TelegramIcon className="w-4 h-4" /></a>
              <a href="https://www.tiktok.com/@_pgatkk" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors p-1"><TikTokIcon className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className={`bg-white border-b border-slate-100 relative z-50 transition-all duration-300 ${
        isScrolled ? 'border-b-2 border-accent-500/30' : ''
      }`}>
        <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6">
          <div className={`flex transition-all duration-300 ${
            isScrolled ? 'py-1 min-h-[56px]' : 'py-2 lg:py-2 min-h-[90px]'
          } ${isLargeFont ? 'flex-wrap gap-y-4' : 'flex-nowrap'}`}>
            
            {/* 1. Логотипы и Название слева */}
            <div className="flex items-center min-w-0 mr-2 sm:mr-4 flex-shrink flex-grow xl:flex-grow-0">
              <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 w-full">

                {/* ── КОМПАКТНЫЙ РЕЖИМ (sticky) ──────────────────────────────────── */}
                {isScrolled && (
                  <div className="flex items-center min-w-0 w-full animate-in fade-in slide-in-from-top-1 duration-300">
                    {/* Логотипы */}
                    <div className="flex items-center gap-0 flex-shrink-0">
                      <img
                        src={resolvePath('images/Gerb.webp')}
                        alt="Герб РБ"
                        className="h-6 sm:h-8 lg:h-9 w-auto object-contain"
                      />
                      <div className="h-5 sm:h-7 w-px bg-slate-200 mx-1.5 sm:mx-3" />
                      <img
                        src={resolvePath('images/logo/logo_pgatkk.webp')}
                        alt="Логотип ПГАТК"
                        className="h-7 sm:h-9 lg:h-10 w-auto object-contain drop-shadow-sm"
                      />
                      <div className="h-5 sm:h-7 w-px bg-slate-200 mx-1.5 sm:mx-3" />
                      <img
                        src={resolvePath('images/symbols/God2026.webp')}
                        alt="Год белорусской женщины"
                        title="2026 — Год белорусской женщины"
                        className="h-7 sm:h-9 lg:h-10 w-auto object-contain"
                      />
                    </div>
                    {/* Название */}
                    <div className="ml-2 sm:ml-4 pl-2 sm:pl-4 border-l border-slate-200 min-w-0">
                      <p className="text-[6.5px] sm:text-[9px] text-slate-400 font-bold tracking-widest uppercase leading-none mb-0.5 truncate">
                        Учреждение образования
                      </p>
                      <h1 className="text-primary-900 font-bold text-[7.5px] sm:text-[11px] lg:text-[12px] leading-[1.1] sm:leading-tight uppercase line-clamp-3 sm:line-clamp-none whitespace-normal xl:hidden 2xl:block">
                        «Пинский государственный<br className="hidden 2xl:block" /> аграрно-технический колледж<br className="hidden sm:block" /> имени А.Е.Клещева»
                      </h1>
                      <h1 className="text-primary-900 font-bold text-[11px] lg:text-[12px] leading-tight uppercase hidden xl:block 2xl:hidden">
                        «#ПГАТККЛЕЩЕВА»
                      </h1>
                    </div>
                  </div>
                )}

                {/* ── ОБЫЧНЫЙ РЕЖИМ ──────────────────────────────────────────────── */}
                {!isScrolled && (
                  <div className="flex items-center min-w-0 w-full animate-in fade-in duration-300">
                    {/* Группа логотипов */}
                    <div className="flex flex-col items-center gap-1 sm:gap-2 flex-shrink-0">
                      {/* Верхний ряд: Герб + Логотип */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        <img
                          src={resolvePath('images/Gerb.webp')}
                          alt="Герб РБ"
                          className="h-7 sm:h-10 lg:h-12 w-auto object-contain"
                        />
                        <div className="h-5 sm:h-8 w-px bg-slate-200" />
                        <img
                          src={resolvePath('images/logo/logo_pgatkk.webp')}
                          alt="Логотип #ПГАТККЛЕЩЕВА"
                          className="h-8 sm:h-12 lg:h-14 w-auto object-contain drop-shadow-sm"
                        />
                      </div>
                      {/* Нижний ряд: Символика года */}
                      <div className="flex items-center gap-3 justify-center w-full">
                        <img
                          src={resolvePath('images/symbols/God2026.webp')}
                          className="h-7 sm:h-10 lg:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300 -mt-1"
                          alt="Год белорусской женщины"
                          title="2026 — Год белорусской женщины"
                        />
                      </div>
                    </div>

                    {/* ТЕКСТОВОЕ НАЗВАНИЕ */}
                    <div className="ml-2 sm:ml-4 border-l border-slate-100 pl-2 sm:pl-3 min-w-0 xl:hidden 2xl:block">
                      <p className="text-[6.5px] sm:text-[9px] lg:text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-0.5 leading-none truncate">
                        Учреждение образования
                      </p>
                      <h1 className="text-primary-900 font-bold text-[7.5px] sm:text-[11px] lg:text-[12px] 2xl:text-[12px] leading-[1.1] uppercase line-clamp-4 sm:line-clamp-none whitespace-normal">
                        «Пинский государственный<br className="hidden 2xl:block" /> аграрно-технический колледж<br className="hidden sm:block" /> имени А.Е.Клещева»
                      </h1>
                    </div>
                  </div>
                )}
              </Link>
            </div>

            {/* 2. Центральная часть: Название (xl) + Меню */}
            <div className="flex flex-col justify-center flex-grow min-w-0">
              
              {/* ТЕКСТОВОЕ НАЗВАНИЕ (сверху на xl экранах) — скрывается при скролле */}
              {!isScrolled && (
                <div className="hidden xl:block 2xl:hidden w-full pb-1 mb-1 border-b border-slate-100/60 animate-in fade-in duration-300">
                  <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                    <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-0.5 leading-none">Учреждение образования</p>
                    <h1 className="text-primary-900 font-bold text-[11px] leading-[1.1] uppercase">«Пинский государственный аграрно-технический колледж имени А.Е.Клещева»</h1>
                  </Link>
                </div>
              )}

              {/* Меню */}
              {!isLargeFont && (
                <nav className="hidden xl:flex items-center gap-0 w-full justify-start xl:justify-center 2xl:justify-end">
                  {MAIN_MENU.map((item) => (
                    <div key={item.label} className="relative group">
                      {item.submenu ? (
                        <>
                          <Link to={item.href || '#'} className="px-1 2xl:px-1.5 py-1.5 text-[10.5px] 2xl:text-[11.5px] font-bold text-slate-700 hover:text-primary-900 hover:bg-slate-50 rounded-md flex items-center transition-all whitespace-nowrap tracking-tighter">
                            {item.label} <ChevronDown className="w-3 h-3 ml-0.5 opacity-50" />
                          </Link>
                          <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-4 border-accent-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                            <div className="py-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
                              {item.submenu.map((sub) => {
                                if (sub.label === "Информация о ходе приема документов" && !settings.showAdmissionProgress) return null;
                                const isExternal = sub.href.startsWith('http');
                                const isPdf = sub.href.toLowerCase().includes('.pdf');
                                return (
                                  <Link 
                                    key={sub.label} 
                                    to={sub.href} 
                                    target={isExternal ? "_blank" : undefined}
                                    rel={isExternal ? "noopener noreferrer" : undefined}
                                    className="flex items-center px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary-900 hover:pl-6 transition-all border-l-2 border-transparent hover:border-accent-500"
                                  >
                                    {isPdf ? <FileText className="w-3.5 h-3.5 mr-2 text-rose-500 flex-shrink-0" /> : isExternal ? <ExternalLink className="w-3.5 h-3.5 mr-2 text-blue-500 flex-shrink-0" /> : null}
                                    <span className="whitespace-normal">{sub.label}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      ) : (
                        <Link to={item.href || '#'} className="px-1 2xl:px-1.5 py-1.5 text-[10.5px] 2xl:text-[11.5px] font-bold text-slate-700 hover:text-primary-900 hover:bg-slate-50 rounded-md flex items-center transition-all whitespace-nowrap tracking-tighter">
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              )}
            </div>

            {/* 3. Правый блок: Контакты и кнопки */}
            <div className="flex items-center space-x-1 sm:space-x-3 lg:space-x-4 flex-shrink-0 ml-auto border-l border-slate-100 pl-2 lg:pl-4">
              <div className="hidden lg:flex flex-col items-end text-right">
                <a href={`tel:${settings.phone.replace(/[^\d+]/g, '')}`} className="flex items-center text-primary-900 font-bold text-sm hover:text-accent-600 transition-colors">
                  <Phone className="w-4 h-4 mr-2 fill-current" /> {settings.phone}
                </a>
                <span className="text-[10px] text-accent-600 font-semibold uppercase tracking-wide block">Приемная директора</span>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden lg:block"></div>
              <button onClick={() => setIsSearchOpen(true)} className="p-1.5 sm:p-2 text-slate-500 hover:text-accent-600 transition-colors hover:bg-slate-50 rounded-full">
                <Search className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
              <button className={`p-1.5 sm:p-2 text-slate-800 ${!isLargeFont ? 'xl:hidden' : ''}`} onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm" onClick={toggleMobileMenu}>
          <div className="bg-white w-full max-w-sm h-full overflow-y-auto shadow-2xl flex flex-col animate-in slide-in-from-left duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-white sticky top-0 z-10">
              <span className="font-bold text-lg text-primary-900">Меню</span>
              <button onClick={toggleMobileMenu} className="p-2 bg-slate-100 rounded-full hover:bg-accent-100 hover:text-accent-600 transition-colors"><X className="w-6 h-6" /></button>
            </div>
            
            {/* Полное название (Mobile) */}
            <div className="p-4 border-b border-slate-100 bg-slate-50 text-center">
              <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-1">Учреждение образования</p>
              <h1 className="text-primary-900 font-bold text-xs leading-tight uppercase">«Пинский государственный аграрно-технический колледж имени А.Е.Клещева»</h1>
            </div>

            <div className="bg-white p-4 border-b border-slate-100">
              <div className="flex items-start space-x-3 text-sm font-medium text-slate-700">
                <Phone className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:80165300688" className="hover:text-accent-600 transition-colors">8 (0165) 30-06-88 <span className="text-xs text-slate-400 block sm:inline">(Комиссия)</span></a>
                  <a href={`tel:${settings.phone.replace(/[^\d+]/g, '')}`} className="hover:text-accent-600 transition-colors">{settings.phone} <span className="text-xs text-slate-400 block sm:inline">(Приемная)</span></a>
                </div>
              </div>
            </div>
            
            <div className="py-2 flex-grow">
              {MAIN_MENU.map((item) => (
                <div key={item.label} className="border-b border-slate-100 last:border-0">
                  {item.submenu ? (
                    <div>
                      <button className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors" onClick={() => toggleSubmenu(item.label)}>
                        <span className="pr-4">{item.label}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${activeSubmenu === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {activeSubmenu === item.label && (
                        <div className="bg-slate-50 px-6 py-2 border-t border-slate-100 animate-in slide-in-from-top-2 duration-150">
                          {item.submenu.map((sub) => {
                            if (sub.label === "Информация о ходе приема документов" && !settings.showAdmissionProgress) return null;
                            const isExternal = sub.href.startsWith('http');
                            const isPdf = sub.href.toLowerCase().includes('.pdf');
                            return (
                              <Link 
                                key={sub.label} 
                                to={sub.href} 
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                className="flex items-center py-3 text-sm text-slate-600 border-l-2 border-slate-200 pl-4 hover:border-accent-500 hover:text-primary-900 transition-all" 
                                onClick={toggleMobileMenu}
                              >
                                {isPdf ? <FileText className="w-4 h-4 mr-2 text-rose-500 flex-shrink-0" /> : isExternal ? <ExternalLink className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" /> : null}
                                <span>{sub.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to={item.href || '#'} className="block px-6 py-4 font-semibold text-slate-800 hover:bg-slate-50 transition-colors" onClick={toggleMobileMenu}>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* === ГОСУДАРСТВЕННАЯ СИМВОЛИКА (MOBILE) === */}
            <div className="border-t border-slate-100 p-6 bg-slate-50">
              <p className="text-xs text-center text-slate-400 font-bold uppercase mb-4 tracking-widest">Символика</p>
              <div className="flex justify-center items-center gap-6 flex-wrap">
                <img src={resolvePath('images/Gerb.webp')} className="h-12 w-auto object-contain drop-shadow-sm" alt="Герб РБ" />
                <img src={resolvePath('images/logo/logo_pgatkk.webp')} className="h-14 w-auto object-contain drop-shadow-sm" alt="Логотип ПГАТК" />
                <img src={resolvePath('images/symbols/God2026.webp')} className="h-16 w-auto object-contain drop-shadow-sm" alt="Год белорусской женщины" />
              </div>
            </div>

          </div>
        </div>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
    </>
  );
};

export default Header;