import React from 'react';

interface Partner {
  id: number;
  name: string;
  url: string;
  image: string;
}

const PARTNERS: Partner[] = [
  // ROW 1
  { 
    id: 1, 
    name: "Брестский облисполком", 
    url: "https://brest-region.gov.by", 
    image: "images/banneredu/BrObl.webp" 
  },
  { 
    id: 2, 
    name: "Пинский горисполком", 
    url: "http://pinsk.gov.by", 
    image: "images/banneredu/PinskGor_.webp" 
  },
  { 
    id: 3, 
    name: "ГУ 'Брестский областной учебно-методический центр ПО'", 
    url: "https://oumc.by", 
    image: "images/banneredu/UMC_PO.webp" 
  },
  { 
    id: 4, 
    name: "ГИАЦ Минобразования", 
    url: "https://giac.by", 
    image: "images/banneredu/GiACentr_.webp" 
  },

  // ROW 2
  { 
    id: 5, 
    name: "Министерство образования РБ", 
    url: "https://edu.gov.by", 
    image: "images/banneredu/MinObr.webp" 
  },
  { 
    id: 6, 
    name: "Главное управление по образованию Брестского облисполкома", 
    url: "https://brest-edu.gov.by", 
    image: "images/banneredu/GlUpr.webp" 
  },
  { 
    id: 7, 
    name: "Портал рейтинговой оценки", 
    url: "http://качество-услуг.бел", 
    image: "images/banneredu/KachUslObn.webp" 
  },
  { 
    id: 8, 
    name: "Pravo.by", 
    url: "https://pravo.by", 
    image: "images/banneredu/pravo.webp" 
  },

  // ROW 3
  { 
    id: 9, 
    name: "ВГМУ", 
    url: "https://www.vsmu.by", 
    image: "images/banneredu/vgmu.webp" 
  },
  { 
    id: 10, 
    name: "РИПО", 
    url: "https://ripo.by", 
    image: "images/banneredu/RIPO.webp" 
  },
  { 
    id: 11, 
    name: "Пiнскi Веснiк", 
    url: "https://p-v.by", 
    image: "images/banneredu/PV.webp" 
  },
  { 
    id: 12, 
    name: "УМЦ Минсельхозпрод", 
    url: "http://agroedu.by", 
    image: "images/banneredu/UMC_Minselchozprod.webp" 
  },

  // ROW 4
  { 
    id: 13, 
    name: "Официальный портал Президента РБ", 
    url: "https://president.gov.by", 
    image: "images/banneredu/OfIntPortalPr.webp" 
  },
  { 
    id: 14, 
    name: "Центр наглядной профилактики", 
    url: "https://vk.com/cnpcentrpro", 
    image: "images/banneredu/CentrNaglydnoyProfilakt.webp" 
  },
  { 
    id: 15, 
    name: "POMOGUT.BY", 
    url: "https://pomogut.by", 
    image: "images/banneredu/PomogutBy.webp" 
  },
  { 
    id: 16, 
    name: "Belarus.by", 
    url: "https://www.belarus.by", 
    image: "images/banneredu/Belarus.webp" 
  },

  // ROW 5
  { 
    id: 17, 
    name: "ПрофиТест", 
    url: "https://profitest.ripo.by", 
    image: "images/banneredu/ProfiTestBanner.webp" 
  },
  { 
    id: 18, 
    name: "ПОРТАЛ Профориентация", 
    url: "https://portal.oumc.by", 
    image: "images/banneredu/Portal.webp" 
  },
  { 
    id: 19, 
    name: "Молодежь Беларуси (БРСМ)", 
    url: "https://xn--d1acdremb9i.xn--90ais/", 
    image: "images/banneredu/molodesh.webp" 
  },
  { 
    id: 20, 
    name: "85 лет Брестской области / 1 регион", 
    url: "https://brest-region.gov.by/ru/85let-ru", 
    image: "images/banneredu/1region.webp" 
  },

  // ROW 6
  { 
    id: 21, 
    name: "Цели устойчивого развития", 
    url: "https://sdgs.by", 
    image: "images/banneredu/CUR.webp" 
  },
  { 
    id: 22, 
    name: "Региональная карта помощи несовершеннолетним", 
    url: "#", 
    image: "images/banneredu/RegKarta.webp" 
  },
  { 
    id: 23, 
    name: "ПАТРИОТ.BY", 
    url: "https://patriot.rcek.by", 
    image: "images/banneredu/patriot.webp" 
  },
  { 
    id: 24, 
    name: "Выборы Президента 2025", 
    url: "https://rec.gov.by", 
    image: "images/banneredu/banner-vibori.webp" 
  }
];

import { LayoutGrid, X } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const Partners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Хелпер для корректных путей на GitHub Pages
  const resolvePath = (path: string) => {
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  // Автопрокрутка
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const scroll = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (isAutoScrolling && scrollRef.current) {
        // Скорость прокрутки (пикселей в миллисекунду)
        const speed = 0.05;
        scrollRef.current.scrollLeft += speed * delta;
        
        // Логика бесконечного цикла
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
          scrollRef.current.scrollLeft -= scrollRef.current.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isAutoScrolling]);

  const handleInteractionStart = () => {
    setIsAutoScrolling(false);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
  };

  const handleInteractionEnd = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    // Возобновляем прокрутку через 1.5 секунды после того, как пользователь отпустил палец
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 1500);
  };

  // Очистка таймера при размонтировании
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Блокировка прокрутки body при открытом модальном окне
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  return (
    <div className="bg-white border-t border-slate-200 py-12">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
        
        <div className="flex items-center justify-center gap-3 mb-8">
          <h3 className="text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
            Полезные ресурсы и партнеры
          </h3>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="p-1.5 text-slate-400 hover:text-accent-500 hover:bg-accent-50 rounded-md transition-colors"
            title="Открыть полный список партнеров"
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
        </div>
        
        {/* Мобильная версия: Бегущая строка (JS-прокрутка + Native Scroll) */}
        <div className="md:hidden w-full pb-4 relative">
          {/* Градиенты по краям для красоты */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 px-4 touch-pan-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            onMouseDown={handleInteractionStart}
            onMouseUp={handleInteractionEnd}
            onMouseLeave={handleInteractionEnd}
          >
            {[...PARTNERS, ...PARTNERS].map((partner, index) => (
              <a 
                key={`${partner.id}-${index}`} 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center h-20 w-40 bg-white border border-slate-200 rounded-lg p-2 shadow-sm active:scale-95 transition-transform"
                title={partner.name}
              >
                <img 
                  src={resolvePath(partner.image)} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain" // Цветные картинки на мобильных
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-[10px] leading-tight text-center font-bold text-slate-400">${partner.name}</span>`;
                  }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Десктопная версия: Сетка */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PARTNERS.map((partner) => (
            <a 
              key={partner.id} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center h-24 w-full bg-white border border-slate-200 rounded-lg p-2 hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-300"
              title={partner.name}
            >
              <img 
                src={resolvePath(partner.image)} 
                alt={partner.name}
                className="w-full h-full object-contain filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `<span class="text-xs text-center font-bold text-slate-400">${partner.name}</span>`;
                }}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Модальное окно полного списка партнеров */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setIsModalOpen(false)}>
          <div 
            className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 md:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <h3 className="text-lg md:text-xl font-display font-bold text-slate-800">Все партнеры и полезные ресурсы</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            
            <div className="p-4 md:p-6 overflow-y-auto bg-slate-50/50">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {PARTNERS.map((partner) => (
                  <a 
                    key={partner.id} 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-3 md:p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md hover:border-slate-300 hover:-translate-y-1 transition-all duration-300"
                    title={partner.name}
                  >
                    <div className="h-16 md:h-20 w-full flex items-center justify-center mb-3">
                      <img 
                        src={resolvePath(partner.image)} 
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-[10px] md:text-xs leading-tight text-center font-semibold text-slate-600 group-hover:text-primary-600">{partner.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners;