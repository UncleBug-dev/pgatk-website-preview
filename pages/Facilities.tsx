import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu as MenuIcon, ChevronDown, FileText, ExternalLink, ChevronRight, 
  Wrench, Video, Image as ImageIcon, Play
} from 'lucide-react';
import { MAIN_MENU } from '../constants';
import { Lightbox } from '../components/Lightbox';

const IMAGES = [
  '1.jpg', '2.jpg', '3.jpg', '3.1.jpg', '4.jpg', '5.jpg', 
  '6.jpg', '7.jpg', '7.1.jpg', '8.jpg', '9.jpg', '10.jpg', 
  '11.jpg', '12.jpg', '13.jpg', '14.jpg', '18.jpg', '19.jpg'
];

const Facilities: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);

  const parentSection = MAIN_MENU.find(item => item.href === '/kolledg');
  const sidebarLinks = parentSection?.submenu || [];
  const currentPath = '/kolledg/materialno-tekhnicheskaya-baza';

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
            <span className="text-accent-500 font-bold truncate">Материально-техническая база</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-5xl">
            Материально-техническая база
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
              
              {/* Virtual Tour */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Play className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900">Виртуальная экскурсия</h2>
                    <p className="text-sm text-slate-500">Прогуляйтесь по колледжу онлайн</p>
                  </div>
                </div>
                
                <Link 
                  to="/virtual-tour" 
                  className="block group relative rounded-2xl overflow-hidden shadow-lg border-4 border-slate-100 hover:border-accent-400 transition-colors duration-300"
                >
                  <img 
                    src="/images/facilities/VEkskursiy.gif" 
                    alt="Виртуальная экскурсия по колледжу" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-primary-900/30 group-hover:bg-primary-900/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm text-primary-900 font-bold py-3 px-6 rounded-full shadow-xl transform group-hover:scale-110 transition-transform duration-300 flex items-center gap-2">
                      <Play className="w-5 h-5 text-accent-500 fill-accent-500" />
                      Начать экскурсию
                    </div>
                  </div>
                </Link>
              </div>

              {/* Videos */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center shrink-0">
                    <Video className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900">Видеообзоры</h2>
                    <p className="text-sm text-slate-500">Посмотрите ролики о нашей базе</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 aspect-video relative">
                    <iframe 
                      src="https://www.youtube.com/embed/OTu3lCE3zYQ?rel=0&fs=1&wmode=transparent" 
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; encrypted-media" 
                      allowFullScreen
                      frameBorder="0" 
                      title="Видео тур 1">
                    </iframe>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 aspect-video relative">
                    <iframe 
                      src="https://www.youtube.com/embed/5FEsel4wizU?rel=0&fs=1&wmode=transparent" 
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; encrypted-media" 
                      allowFullScreen
                      frameBorder="0" 
                      title="Видео тур 2">
                    </iframe>
                  </div>
                </div>
              </div>

              {/* Photo Gallery */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900">Фотогалерея</h2>
                    <p className="text-sm text-slate-500">Аудитории, лаборатории и техника</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {IMAGES.map((imgName, index) => (
                    <div 
                      key={index} 
                      onClick={() => setSelectedImageIndex(index)}
                      className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 aspect-square bg-slate-100 cursor-pointer"
                    >
                      <img 
                        src={`/images/facilities/${imgName}`} 
                        alt={`Фото базы ${index + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <Lightbox 
          images={IMAGES.map(img => `/images/facilities/${img}`)}
          selectedIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onSelectIndex={setSelectedImageIndex}
        />
      )}

    </div>
  );
};

export default Facilities;
