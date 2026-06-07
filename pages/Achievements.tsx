import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu as MenuIcon, ChevronDown, FileText, ExternalLink, ChevronRight, 
  Trophy, Star, Award, Medal
} from 'lucide-react';
import { MAIN_MENU } from '../constants';

const ACHIEVEMENTS_DATA = [
  {
    year: '2025-2026',
    title: 'УЧЕБНЫЙ ГОД',
    link: 'https://disk.yandex.com/d/p99-27Npl_XWlw',
    icon: Trophy,
    color: 'from-amber-400 to-amber-600'
  },
  {
    year: '2024-2025',
    title: 'УЧЕБНЫЙ ГОД',
    link: 'https://disk.yandex.com/d/0zWLL__8xH2eEA',
    icon: Star,
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    year: '2023-2024',
    title: 'УЧЕБНЫЙ ГОД',
    link: 'https://disk.yandex.com/d/a4nSyUDcqWdj3w',
    icon: Award,
    color: 'from-blue-400 to-blue-600'
  },
  {
    year: '2022-2023',
    title: 'УЧЕБНЫЙ ГОД',
    link: 'https://disk.yandex.com/d/LipbkY7FYuru_A',
    icon: Trophy,
    color: 'from-purple-400 to-purple-600'
  },
  {
    year: '2021-2022',
    title: 'УЧЕБНЫЙ ГОД',
    link: 'https://disk.yandex.com/d/u-NlsO-ytsXILA',
    icon: Medal,
    color: 'from-rose-400 to-rose-600'
  },
];

const Achievements: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const parentSection = MAIN_MENU.find(item => item.href === '/kolledg');
  const sidebarLinks = parentSection?.submenu || [];
  const currentPath = '/kolledg/nashi-dostizheniya';

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header Block */}
      <div className="bg-primary-900 text-white pt-10 pb-20 md:pt-14 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              Главная
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <Link to="/kolledg" className="hover:text-white transition-colors">Колледж</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold truncate">Наши достижения</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-5xl">
            Наши достижения
          </h1>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 md:-mt-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 order-1 lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="lg:hidden mb-4">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full bg-white p-4 rounded-xl shadow-md border border-slate-100 flex items-center justify-between text-primary-900 font-bold"
              >
                <span className="flex items-center gap-2"><MenuIcon className="w-5 h-5" /> Навигация раздела</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className={`bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden sticky top-28 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-slate-50 px-5 py-4 border-b border-slate-100">
                <Link to="/kolledg" className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-accent-600 transition-colors block">
                  {parentSection?.label}
                </Link>
              </div>
              
              <nav className="p-2 flex flex-col space-y-1">
                {sidebarLinks.map((link) => {
                  const isActive = link.href === currentPath;
                  const isExternal = link.href.startsWith('http');
                  const isPdf = link.href.toLowerCase().endsWith('.pdf') || link.href.toLowerCase().includes('disk.yandex.');
                  
                  const LinkContent = (
                    <>
                      <span className="flex items-center gap-2 leading-snug">
                        {isPdf ? (
                          <FileText className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        ) : isExternal ? (
                          <ExternalLink className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        ) : null}
                        <span>{link.label}</span>
                      </span>
                      {isActive && <ChevronRight className="w-4 h-4 text-accent-500 flex-shrink-0 ml-2" />}
                    </>
                  );

                  const linkClass = `group flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-primary-50 text-primary-700 border-l-4 border-accent-500 translate-x-1' : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900 border-l-4 border-transparent hover:translate-x-1'}`;

                  if (isExternal) {
                    return (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {LinkContent}
                      </a>
                    );
                  }

                  return (
                    <Link key={link.href} to={link.href} className={linkClass}>
                      {LinkContent}
                    </Link>
                  );
                })}
              </nav>

              <div className="m-2 p-4 bg-primary-900 rounded-lg text-white text-center">
                <p className="text-xs text-accent-500 font-bold uppercase mb-2">Приемная комиссия</p>
                <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block">8 (0165) 30-06-88</a>
                </div>
            </div>
          </aside>

          {/* CONTENT */}
          <main className="flex-1 w-full order-2">
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-6 md:p-10">
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-900">Галерея достижений</h2>
                  <p className="text-sm text-slate-500">Награды, дипломы и кубки наших учащихся и преподавателей</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ACHIEVEMENTS_DATA.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 hover:border-transparent transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl p-8 flex flex-col items-center justify-center text-center"
                  >
                    {/* Background Gradient Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-white shadow-md group-hover:scale-110 transition-transform duration-500 z-10`}>
                      <item.icon className="w-8 h-8 text-primary-900" />
                    </div>
                    
                    <div className="z-10">
                      <h3 className="text-4xl md:text-5xl font-display font-black text-primary-900 tracking-tight mb-2 group-hover:text-accent-600 transition-colors">
                        {item.year}
                      </h3>
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                        {item.title}
                      </p>
                    </div>

                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                      <ExternalLink className="w-4 h-4 text-primary-500" />
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
