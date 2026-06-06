import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, Heart, Star, BrainCircuit } from 'lucide-react';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryAction?: {
    label: string;
    href: string;
    icon?: React.ElementType;
    external?: boolean;
  };
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    title: "Год белорусской женщины",
    subtitle: "Тематика 2026 года",
    description: "2026 год в Республике Беларусь объявлен Годом женщины. Признание особой роли женщины в обществе, хранении традиций и укреплении единства.",
    image: "images/slide/SlideYear2026.jpg",
    primaryAction: {
      label: "Подробнее",
      href: "https://president.gov.by/ru/documents/ukaz-no-1-ot-1-anvara-2026-g",
      icon: ArrowRight,
      external: true
    }
  },
  {
    id: 3,
    title: "Центр патриотического воспитания",
    subtitle: "Молодежь и будущее",
    description: "Объявлен сбор средств на реконструкцию Республиканского центра патриотического воспитания молодежи в Брестской крепости.",
    image: "images/slide/CentrPV.jpg",
    primaryAction: {
      label: "Подробнее",
      href: "/news/patriot-center",
      icon: ArrowRight
    }
  },
  {
    id: 4,
    title: "Абитуриенту 2026",
    subtitle: "Приемная кампания",
    description: "Твое будущее начинается с #ПГАТККЛЕЩЕВА. Современные специальности, гарантированное трудоустройство.",
    image: "images/slide/banner2022postupay.jpg",
    primaryAction: {
      label: "Подробнее",
      href: "/abiturientam",
      icon: ArrowRight
    }
  },
  {
    id: 5,
    title: "ПрофиТест",
    subtitle: "Профориентация",
    description: "Пройди комплексное тестирование и узнай, какая профессия подходит именно тебе. Сделай осознанный выбор.",
    image: "images/slide/ProfiTest.jpg",
    primaryAction: {
      label: "Пройти тест",
      href: "http://profitest.ripo.by",
      icon: BrainCircuit,
      external: true
    }
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Хелпер для корректных путей на GitHub Pages
  const resolvePath = (path: string) => {
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000); // 6 секунд на слайд
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="relative w-full h-[500px] md:h-[600px] bg-slate-900 overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Слайдер новостей"
    >
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${resolvePath(slide.image)}")` }}
          >
            {/* Gradient Overlay для читаемости текста на любых картинках */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/60 to-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 md:px-8 h-full flex flex-col justify-center pb-24 md:pb-32">
            <div className={`max-w-2xl transition-all duration-1000 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Badge/Subtitle */}
              <div className="inline-block px-3 py-1 bg-accent-500 text-primary-900 font-bold text-xs uppercase tracking-wider rounded-sm mb-4">
                {slide.subtitle}
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {slide.title}
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg leading-relaxed drop-shadow-md">
                {slide.description}
              </p>
              
              {/* Buttons */}
              {slide.primaryAction && (
                <div className="flex flex-col sm:flex-row gap-4">
                  {slide.primaryAction.href.startsWith('http') ? (
                    <a 
                      href={slide.primaryAction.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-accent-500/20 transition-all hover:-translate-y-1"
                    >
                      {slide.primaryAction.icon && <slide.primaryAction.icon className="w-5 h-5" />}
                      <span>{slide.primaryAction.label}</span>
                    </a>
                  ) : (
                    <a 
                      href={slide.primaryAction.href}
                      className="flex items-center justify-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-accent-500/20 transition-all hover:-translate-y-1"
                    >
                      {slide.primaryAction.icon && <slide.primaryAction.icon className="w-5 h-5" />}
                      <span>{slide.primaryAction.label}</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-accent-500 text-white backdrop-blur-sm transition-all border border-white/20 hover:border-transparent hidden md:flex"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-accent-500 text-white backdrop-blur-sm transition-all border border-white/20 hover:border-transparent hidden md:flex"
        aria-label="Следующий слайд"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-accent-500 w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Перейти к слайду ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Decorative strip */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-accent-500 via-primary-500 to-primary-900 z-10"></div>
    </section>
  );
};

export default Hero;