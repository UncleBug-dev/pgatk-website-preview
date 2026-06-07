import React, { useState } from 'react';
import { 
  Eye, Search, Menu, X, ChevronDown, MapPin, Mail, Instagram, Youtube, Phone, Type, Palette, RotateCcw, ExternalLink, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { MAIN_MENU } from '../constants';
import { useAccessibility } from '../context/AccessibilityContext';
import SearchModal from './SearchModal';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { 
    fontSize, setFontSize, contrast, setContrast, resetSettings, isPanelOpen, togglePanel, closePanel
  } = useAccessibility();

  const isLargeFont = fontSize === 'large' || fontSize === 'extra';

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSubmenu = (label: string) => setActiveSubmenu(activeSubmenu === label ? null : label);

  const resolvePath = (path: string) => {
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  return (
    <header className="relative z-50 w-full shadow-md font-display bg-white transition-all duration-300" onMouseLeave={closePanel}>
      
      {/* Top Bar */}
      <div className="bg-primary-900 text-slate-200 text-xs py-2 px-4 md:px-8 transition-colors duration-300 relative z-[60]">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-x-4 gap-y-2">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-1 text-center sm:text-left">
            <div className="flex items-center space-x-2 cursor-default whitespace-nowrap">
              <MapPin className="w-3 h-3 text-accent-500" />
              <span>г.Пинск, ул. Иркутско-Пинской дивизии, 25</span>
            </div>
            <a href="mailto:uo@pgatkk.by" className="flex items-center space-x-2 hover:text-accent-500 transition-colors whitespace-nowrap">
              <Mail className="w-3 h-3 text-accent-500" />
              <span>uo@pgatkk.by</span>
            </a>
          </div>

          <div className="flex items-center space-x-6 relative flex-wrap justify-center">
            <button onClick={togglePanel} className={`flex items-center space-x-2 transition-colors group whitespace-nowrap ${isPanelOpen ? 'text-accent-500' : 'hover:text-white'}`}>
              <Eye className="w-4 h-4" />
              <span className="font-bold">Версия для слабовидящих</span>
            </button>
            
            {isPanelOpen && (
              <div className="absolute top-full right-0 mt-3 w-72 max-w-[90vw] bg-white text-slate-800 shadow-2xl rounded-xl border border-slate-200 p-4 z-[100] animate-in fade-in slide-in-from-top-2">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-primary-900 mb-2"><Type className="w-4 h-4" /> Размер шрифта</div>
                  <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
                    <button onClick={() => setFontSize('normal')} className={`flex-1 py-1 px-2 rounded text-sm ${fontSize === 'normal' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-500'}`}>A</button>
                    <button onClick={() => setFontSize('large')} className={`flex-1 py-1 px-2 rounded text-base ${fontSize === 'large' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-500'}`}>A+</button>
                    <button onClick={() => setFontSize('extra')} className={`flex-1 py-1 px-2 rounded text-lg ${fontSize === 'extra' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-500'}`}>A++</button>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-primary-900 mb-2"><Palette className="w-4 h-4" /> Цветовая схема</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => setContrast('normal')} className={`px-3 py-2 rounded text-xs border ${contrast === 'normal' ? 'border-primary-900 bg-primary-50 font-bold' : 'border-slate-200 hover:bg-slate-50'}`}>Обычная</button>
                    <button onClick={() => setContrast('bw')} className={`px-3 py-2 rounded text-xs border filter grayscale ${contrast === 'bw' ? 'border-black font-bold ring-1 ring-black' : 'border-slate-200'}`}>Ч черно-белая</button>
                    <button onClick={() => setContrast('wb')} className={`px-3 py-2 rounded text-xs border bg-black text-white ${contrast === 'wb' ? 'ring-2 ring-accent-500 font-bold' : 'border-slate-800'}`}>Инверсия</button>
                    <button onClick={() => setContrast('blue')} className={`px-3 py-2 rounded text-xs border bg-[#cce5ff] text-[#003366] ${contrast === 'blue' ? 'ring-2 ring-blue-600 font-bold' : 'border-blue-200'}`}>Синяя</button>
                  </div>
                </div>
                <button onClick={resetSettings} className="w-full py-2 flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-red-500 hover:bg-red-50 rounded transition-colors"><RotateCcw className="w-3 h-3" /> Сбросить настройки</button>
              </div>
            )}

            <div className="h-4 w-px bg-primary-800 hidden sm:block"></div>
            
            {/* Языки */}
            <div className="flex items-center space-x-2 font-bold text-[10px] sm:text-xs tracking-wider">
              <button className="text-accent-500">RU</button>
              <span className="text-primary-800 font-normal">|</span>
              <button className="hover:text-accent-500 transition-colors">BY</button>
              <span className="text-primary-800 font-normal">|</span>
              <button className="hover:text-accent-500 transition-colors">EN</button>
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
      <div className="bg-white border-b border-slate-100 relative z-50">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6">
          <div className={`flex justify-between items-center py-2 lg:py-2 min-h-[90px] ${isLargeFont ? 'flex-wrap gap-y-4' : 'flex-nowrap'}`}>
            
            <div className="flex items-center flex-shrink-0 mr-4">
              <Link to="/" className="flex items-center gap-4 group">
                
                {/* БЛОК ЛОГОТИПОВ (Два ряда) */}
                <div className="flex flex-col items-center gap-2">
                  {/* Верхний ряд: Основной Герб и Логотип */}
                  <div className="flex items-center gap-3">
                    <img src={resolvePath('images/Gerb.gif')} alt="Герб РБ" className="h-10 lg:h-12 w-auto object-contain" />
                    <div className="h-8 w-px bg-slate-200"></div>
                    <img src={resolvePath('images/logo/logo_pgatkk.png')} alt="Логотип #ПГАТККЛЕЩЕВА" className="h-12 lg:h-14 w-auto object-contain drop-shadow-sm" />
                  </div>
                  
                  {/* Нижний ряд: Символика (Год белорусской женщины) */}
                  <div className="flex items-center gap-3 justify-center w-full">
                    <img src={resolvePath('images/symbols/God2026.png')} className="h-10 lg:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300 -mt-1" alt="Год белорусской женщины" title="2026 — Год белорусской женщины" />
                  </div>
                </div>

                {/* ТЕКСТОВОЕ НАЗВАНИЕ */}
                <div className="hidden xl:block ml-2 lg:ml-4 border-l border-slate-100 pl-3">
                  <p className="text-[9px] lg:text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-0.5">Учреждение образования</p>
                  <h1 className="text-primary-900 font-bold text-xs lg:text-[12px] 2xl:text-[13px] leading-[1.1] uppercase max-w-[250px] 2xl:max-w-[280px]">«Пинский государственный аграрно-технический колледж имени А.Е.Клещева»</h1>
                </div>
              </Link>
            </div>

            {!isLargeFont && (
              <nav className="hidden 2xl:flex items-center gap-0 ml-auto mr-2">
                {MAIN_MENU.map((item) => (
                  <div key={item.label} className="relative group">
                    {item.submenu ? (
                      <>
                        <Link to={item.href || '#'} className="px-1 py-2 text-[12px] font-bold text-slate-700 hover:text-primary-900 hover:bg-slate-50 rounded-md flex items-center transition-all whitespace-nowrap tracking-tighter">
                          {item.label} <ChevronDown className="w-3 h-3 ml-0.5 opacity-50" />
                        </Link>
                        <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-4 border-accent-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                          <div className="py-2 max-h-[70vh] overflow-y-auto custom-scrollbar">
                            {item.submenu.map((sub) => {
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
                      <Link to={item.href || '#'} className="px-1 py-2 text-[12px] font-bold text-slate-700 hover:text-primary-900 hover:bg-slate-50 rounded-md flex items-center transition-all whitespace-nowrap tracking-tighter">
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            )}

            <div className="flex items-center space-x-3 lg:space-x-4 flex-shrink-0 ml-auto 2xl:ml-4">
              <div className="hidden lg:flex flex-col items-end text-right">
                <a href="tel:80165639293" className="flex items-center text-primary-900 font-bold text-sm hover:text-accent-600 transition-colors">
                  <Phone className="w-4 h-4 mr-2 fill-current" /> 8 (0165) 63-92-93
                </a>
                <span className="text-[10px] text-accent-600 font-semibold uppercase tracking-wide block">Приемная директора</span>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden lg:block"></div>
              <button onClick={() => setIsSearchOpen(true)} className="p-2 text-slate-500 hover:text-accent-600 transition-colors hover:bg-slate-50 rounded-full">
                <Search className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
              <button className={`p-2 text-slate-800 ${!isLargeFont ? '2xl:hidden' : ''}`} onClick={toggleMobileMenu}>
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
                  <a href="tel:80165639293" className="hover:text-accent-600 transition-colors">8 (0165) 63-92-93 <span className="text-xs text-slate-400 block sm:inline">(Приемная)</span></a>
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
                <img src={resolvePath('images/symbols/gerb.png')} className="h-12 w-auto object-contain" alt="Герб РБ" />
                <img src={resolvePath('images/symbols/God2026.png')} className="h-16 w-auto object-contain" alt="Год белорусской женщины" />
              </div>
            </div>

          </div>
        </div>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Header;