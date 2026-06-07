import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Maximize2, Menu as MenuIcon, ChevronDown, ExternalLink, FileText } from 'lucide-react';
import { MAIN_MENU } from '../constants';
import { Lightbox } from '../components/Lightbox';

const STRUCTURE_IMAGES = [
  'Struktura.jpg'
];

const OrganizationalStructure: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentPath = useLocation().pathname;
  const parentSection = MAIN_MENU.find(item => item.href === '/kolledg');
  const sidebarLinks = parentSection?.submenu || [];

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
            <span className="text-accent-500 font-bold truncate">Организационная структура</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-5xl">
            Организационная структура
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

          {/* MAIN CONTENT */}
          <main className="flex-1 min-w-0 order-2 w-full">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
              
              <div className="prose prose-slate max-w-none mb-10 relative z-10">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
                  Здесь представлена наглядная схема, отражающая структуру управления и взаимодействия нашего учреждения образования.
                </p>
              </div>

              {/* Structure Image */}
              <div className="flex justify-center relative z-10">
                {STRUCTURE_IMAGES.map((img, index) => {
                  const imagePath = `${import.meta.env.BASE_URL}images/1Novosti/2026/Jznvar/Struktura/${img}`;
                  return (
                    <div 
                      key={index}
                      className="group relative w-full max-w-3xl rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white border border-slate-200 p-2 md:p-4"
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img 
                        src={imagePath} 
                        alt={`Структура колледжа`}
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02] rounded-xl"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-2xl">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2">
                           <Maximize2 className="w-6 h-6 text-white drop-shadow-md" />
                           <span className="text-white text-sm font-bold uppercase tracking-wider drop-shadow-md">Нажмите для увеличения</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </main>

        </div>
      </div>

      {/* Lightbox for Images */}
      {selectedImageIndex !== null && (
        <Lightbox 
          images={STRUCTURE_IMAGES.map(img => `${import.meta.env.BASE_URL}images/1Novosti/2026/Jznvar/Struktura/${img}`)}
          selectedIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onSelectIndex={setSelectedImageIndex}
        />
      )}

    </div>
  );
};

export default OrganizationalStructure;
