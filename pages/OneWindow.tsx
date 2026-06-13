import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, PhoneCall, Briefcase, MapPin, User, FileText, Network, Building2, Accessibility } from 'lucide-react';
import { MAIN_MENU } from '../constants';

const ICON_MAP: Record<string, React.ReactNode> = {
  '/odno-okno/uslugi': <Briefcase className="w-8 h-8" />,
  '/odno-okno/kontakty': <MapPin className="w-8 h-8" />,
  '/odno-okno/priem-grazhdan': <User className="w-8 h-8" />,
  '/odno-okno/admin-procedury': <FileText className="w-8 h-8" />,
  '/odno-okno/struktura': <Network className="w-8 h-8" />,
  '/odno-okno/vyshestoyashchie': <Building2 className="w-8 h-8" />,
  '/odno-okno/invalidy': <Accessibility className="w-8 h-8" />,
};

const OneWindow: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const parentSection = MAIN_MENU.find(item => item.href === '/odno-okno');
  const sidebarLinks = parentSection?.submenu || [];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* HEADER */}
      <div className="bg-primary-900 text-white pt-10 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold truncate">{parentSection?.label}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-4xl">
            {parentSection?.label}
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 order-1 lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden sticky top-28">
              <div className="bg-primary-900 px-5 py-4 border-b border-primary-800">
                <Link to="/odno-okno" className="text-white text-xs font-bold uppercase tracking-widest hover:text-accent-300 transition-colors block">
                  {parentSection?.label}
                </Link>
              </div>
              <nav className="p-2 flex flex-col space-y-1">
                {sidebarLinks.map((link) => {
                  const isActive = link.href === currentPath;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`group flex items-center justify-between px-4 py-3 mb-1 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-primary-50 text-primary-700 border-l-4 border-accent-500' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900 border-l-4 border-transparent'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <ChevronRight className="w-4 h-4 text-accent-500" />}
                    </Link>
                  );
                })}
              </nav>

              <div className="m-4 p-4 bg-primary-900 rounded-lg text-white text-center">
                <p className="text-xs text-accent-500 font-bold uppercase mb-2">Служба "Одно окно"</p>
                <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  8 (0165) 30-06-88
                </a>
              </div>
            </div>
          </aside>

          {/* PAGE CONTENT */}
          <main className="flex-1 w-full order-2">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 border border-slate-100 min-h-[600px]">
              
              <div className="prose prose-slate prose-lg max-w-none mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900 mb-4 border-l-4 border-accent-500 pl-4">
                  Добро пожаловать в раздел «Одно окно»
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Здесь вы можете найти всю необходимую информацию об административных процедурах, графиках приема граждан, контактах и услугах, предоставляемых колледжем. Выберите интересующий вас раздел ниже для получения подробной информации.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {sidebarLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    to={link.href}
                    className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-accent-500 transition-all flex flex-col relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-4 -mt-4 transition-colors group-hover:bg-accent-50"></div>
                    <div className="text-primary-600 mb-4 group-hover:text-accent-600 transition-colors relative z-10 group-hover:scale-110 transform origin-left duration-300">
                      {ICON_MAP[link.href] || <FileText className="w-8 h-8" />}
                    </div>
                    <h3 className="font-bold text-primary-900 text-lg mb-2 relative z-10 leading-tight group-hover:text-primary-700">
                      {link.label}
                    </h3>
                    <div className="mt-auto pt-4 flex items-center text-sm font-bold text-slate-400 uppercase tracking-wider group-hover:text-accent-600 transition-colors">
                      Подробнее <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default OneWindow;