import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronDown, Map, Menu, X } from 'lucide-react';

const TOUR_DATA = [
  {
    title: 'Лабораторный корпус',
    items: [
      { id: 'pano273', label: 'Главный корпус' },
      { id: 'pano285', label: 'Кабинет технологии строительного производства' },
      { id: 'pano112', label: 'Лаборатория электротехники и электроники' },
      { id: 'pano167', label: 'Кабинет мелиорации, водоснабжения и ГТС' },
      { id: 'pano163', label: 'Кабинет организации строительного производства' },
      { id: 'pano283', label: 'Комната приема пищи' },
      { id: 'pano290', label: 'Лаборатория строительных материалов' },
    ]
  },
  {
    title: 'Главный корпус',
    items: [
      { id: 'pano131', label: 'Спортивный зал №1' },
      { id: 'pano133', label: 'Спортивный зал №2' },
      { id: 'pano194', label: 'Актовый зал' },
      { id: 'pano206', label: 'Кабинет истории и обществоведения' },
      { id: 'pano208', label: 'Кабинет геодезии' },
      { id: 'pano214', label: 'Кабинет допризывной и медицинской подготовки' },
      { id: 'pano217', label: 'Кабинет охраны труда' },
      { id: 'pano219', label: 'Кабинет экономики' },
      { id: 'pano221', label: 'Кабинет физики' },
      { id: 'pano226', label: 'Методический кабинет' },
      { id: 'pano271', label: 'Кабинет математики' },
      { id: 'pano288', label: 'Кабинет информатики и информационных технологий' },
    ]
  },
  {
    title: 'Учебный корпус №3',
    items: [
      { id: 'pano229', label: 'Кабинет устройства и эксплуатации автомобилей' },
      { id: 'pano230', label: 'Мастерская №1' },
      { id: 'pano231', label: 'Мастерская №2' },
      { id: 'pano235', label: 'Кабинет ПДД и безопасности дорожного движения' },
      { id: 'pano237', label: 'Кабинет инженерной графики' },
      { id: 'pano248', label: 'Кабинет технической механики' },
      { id: 'pano250', label: 'Кабинет ремонта дорожных и строительных машин' },
      { id: 'pano252', label: 'Кабинет менеджмента' },
    ]
  }
];

const VirtualTour: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<number | null>(0);
  const [activePano, setActivePano] = useState<string>('pano273');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Poll krpano to sync active scene if user navigates via 3D hotspots
    const interval = setInterval(() => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        try {
          const krpano = (iframeRef.current.contentWindow.document.getElementById('krpanoSWFObject') || 
                          iframeRef.current.contentWindow.document.querySelector('embed[name="krpanoSWFObject"]')) as any;
          if (krpano && typeof krpano.get === 'function') {
            const currentScene = krpano.get('xml.scene');
            if (currentScene && currentScene !== activePano) {
              setActivePano(currentScene);
            }
          }
        } catch (e) {
          // Ignore cross-origin or other errors just in case
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, [activePano]);

  const loadScene = (panoId: string) => {
    setActivePano(panoId);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      // Access the krpano instance inside the iframe
      const krpano = iframeRef.current.contentWindow.document.getElementById('krpanoSWFObject') as any;
      if (krpano && typeof krpano.call === 'function') {
        krpano.call(`loadscene(${panoId}, null, MERGE, BLEND(1));`);
      }
    }
    // Automatically close menu on smaller screens to show the panorama
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false);
    }
  };

  const currentLabel = TOUR_DATA.flatMap(g => g.items).find(i => i.id === activePano)?.label;

  return (
    <div className="fixed inset-0 w-full h-full bg-black z-[9999] overflow-hidden flex font-sans">
      
      {/* Iframe for the Tour */}
      <iframe 
        ref={iframeRef}
        src="/tour/gidro.html" 
        className="absolute inset-0 w-full h-full border-none"
        title="Виртуальная экскурсия"
      />

      {/* Current Location Indicator */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-none transition-all duration-500">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 text-white/90 px-6 py-2.5 rounded-2xl text-sm md:text-base font-medium shadow-[0_4px_30px_rgba(0,0,0,0.3)] tracking-wide">
          {currentLabel || "Загрузка..."}
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      {!isMenuOpen && (
        <div className="absolute top-4 left-4 z-50 flex items-center gap-3">
          <button 
            onClick={() => {
              setIsMenuOpen(true);
              setShowTooltip(false);
            }}
            className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-3 rounded-full shadow-lg border border-white/20 transition-all group relative"
          >
            <Menu className="w-6 h-6 group-hover:scale-110 transition-transform" />
            {showTooltip && (
              <>
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent-500 rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent-500 rounded-full"></span>
              </>
            )}
          </button>
          
          {showTooltip && (
            <div 
              className="bg-black/60 backdrop-blur-md text-white text-sm py-2 px-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-2 cursor-pointer transition-opacity"
              onClick={() => {
                setIsMenuOpen(true);
                setShowTooltip(false);
              }}
            >
              <span className="text-xl leading-none">👈</span>
              <span className="font-medium">Нажмите для выбора, куда отправиться</span>
            </div>
          )}
        </div>
      )}

      {/* Sidebar Overlay (Glassmorphism) */}
      <div 
        className={`absolute top-0 left-0 h-full w-[360px] max-w-[85vw] bg-slate-900/60 backdrop-blur-2xl border-r border-white/10 flex flex-col transition-transform duration-500 ease-out z-50 shadow-2xl ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between shrink-0 bg-gradient-to-b from-black/20 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center shadow-lg shadow-accent-500/20">
              <Map className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white text-lg font-bold leading-tight">Навигация</h2>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Виртуальная экскурсия</p>
            </div>
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-white/60 hover:text-white p-2 bg-white/5 rounded-full hover:bg-white/10 hover:rotate-90 transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-3">
          {TOUR_DATA.map((group, gIdx) => {
            const isActiveGroup = activeGroup === gIdx;
            
            return (
              <div key={gIdx} className="rounded-2xl overflow-hidden bg-white/[0.03] border border-white/5 transition-all">
                <button
                  onClick={() => setActiveGroup(isActiveGroup ? null : gIdx)}
                  className={`w-full flex items-center justify-between p-4 text-left transition-colors duration-300 ${isActiveGroup ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
                >
                  <span className="font-medium pr-2">{group.title}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isActiveGroup ? 'rotate-180 text-accent-400' : ''}`} />
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${isActiveGroup ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-2 space-y-1 bg-black/20">
                    {group.items.map((item) => {
                      const isActivePano = activePano === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => loadScene(item.id)}
                          className={`w-full text-left flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition-all duration-300 ${
                            isActivePano 
                              ? 'bg-accent-500/30 text-white font-medium border border-accent-500/50 shadow-inner' 
                              : 'text-white/60 hover:bg-white/5 hover:text-white/90 border border-transparent'
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 ${isActivePano ? 'bg-accent-400 shadow-[0_0_8px_rgba(251,146,60,0.8)] scale-150' : 'bg-white/20'}`} />
                          <span className="leading-snug">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-white/10 shrink-0 bg-gradient-to-t from-black/40 to-transparent">
          <Link 
            to="/kolledg/materialno-tekhnicheskaya-baza"
            className="group flex items-center justify-center gap-2 w-full py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all duration-300 font-medium text-sm border border-white/10 hover:border-white/20 backdrop-blur-md"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Вернуться на сайт
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
