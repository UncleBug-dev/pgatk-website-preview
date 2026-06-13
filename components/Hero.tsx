import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useData } from '../context/DataContext';

const SWIPE_THRESHOLD = 50;

const Hero: React.FC = () => {
  const { slides, slidesLoading } = useData();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Только включённые слайды, отсортированные по order
  const activeSlides = slides.filter(s => s.enabled);

  const resolvePath = (path: string) =>
    path.startsWith('http')
      ? path
      : `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === activeSlides.length - 1 ? 0 : prev + 1));
  }, [activeSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? activeSlides.length - 1 : prev - 1));
  }, [activeSlides.length]);

  // Сброс индекса если количество слайдов изменилось
  useEffect(() => {
    setCurrentSlide(prev => (activeSlides.length > 0 ? Math.min(prev, activeSlides.length - 1) : 0));
  }, [activeSlides.length]);

  useEffect(() => {
    if (isPaused || activeSlides.length < 2) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, activeSlides.length]);

  useEffect(() => {
    const t = setTimeout(() => setShowSwipeHint(false), 2500);
    return () => clearTimeout(t);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      setShowSwipeHint(false);
      dx < 0 ? nextSlide() : prevSlide();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // ── Skeleton пока слайды не загружены ──────────────────────────────────────
  if (slidesLoading || activeSlides.length === 0) {
    return (
      <div className="relative w-full h-[420px] sm:h-[500px] md:h-[600px] bg-slate-800 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-700/40" />
        <div className="absolute bottom-0 left-0 p-8 md:p-16 space-y-4 w-full max-w-2xl">
          <div className="h-4 w-24 bg-slate-600 rounded" />
          <div className="h-10 w-3/4 bg-slate-600 rounded" />
          <div className="h-10 w-1/2 bg-slate-600 rounded" />
          <div className="h-5 w-2/3 bg-slate-700 rounded" />
          <div className="h-12 w-36 bg-slate-600 rounded-lg mt-4" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-700" />
      </div>
    );
  }

  return (
    <section
      className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] bg-slate-900 overflow-hidden group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => { setIsPaused(false); touchStartX.current = null; }}
      aria-label="Слайдер новостей"
    >
      {/* ── Слайды ── */}
      {activeSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${resolvePath(slide.image)}")` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/60 to-black/30" />
          </div>

          <div className="relative z-20 w-full max-w-[1600px] mx-auto px-5 md:px-8 h-full flex flex-col justify-center pb-32 sm:pb-28 md:pb-32">
            <div className={`max-w-2xl transition-all duration-1000 transform ${
              index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="inline-block px-3 py-1 bg-accent-500 text-primary-900 font-bold text-xs uppercase tracking-wider rounded-sm mb-3 md:mb-4">
                {slide.subtitle}
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3 md:mb-6 leading-tight drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="hidden sm:block text-base md:text-xl text-slate-200 mb-6 md:mb-8 max-w-lg leading-relaxed drop-shadow-md">
                {slide.description}
              </p>
              <p className="sm:hidden text-sm text-slate-300 mb-5 leading-relaxed line-clamp-2 drop-shadow-md">
                {slide.description}
              </p>
              {slide.href && slide.buttonLabel && (
                <a
                  href={slide.isExternal ? slide.href : undefined}
                  {...(slide.isExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : { href: slide.href }
                  )}
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg shadow-accent-500/20 transition-all hover:-translate-y-1 text-sm md:text-base"
                >
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{slide.buttonLabel}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* ── Стрелки (только md+) ── */}
      {activeSlides.length > 1 && (
        <>
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
        </>
      )}

      {/* ── Точки-индикаторы ── */}
      {activeSlides.length > 1 && (
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5">
          {activeSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-accent-500 w-7 h-2.5' : 'bg-white/50 hover:bg-white w-2.5 h-2.5'
              }`}
              aria-label={`Перейти к слайду ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* ── Счётчик (мобиле) ── */}
      {activeSlides.length > 1 && (
        <div className="absolute top-4 right-4 z-30 md:hidden">
          <div className="bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/20">
            {currentSlide + 1} / {activeSlides.length}
          </div>
        </div>
      )}

      {/* ── Подсказка свайпа (мобиле) ── */}
      {activeSlides.length > 1 && (
        <div className={`absolute bottom-16 left-1/2 -translate-x-1/2 z-30 md:hidden pointer-events-none transition-all duration-700 ${
          showSwipeHint ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-4 py-2 rounded-full border border-white/20">
            <span className="animate-bounce-x-left inline-block">←</span>
            <span>Проведите для переключения</span>
            <span className="animate-bounce-x-right inline-block">→</span>
          </div>
        </div>
      )}

      {/* ── Декоративная полоса ── */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-accent-500 via-primary-500 to-primary-900 z-10" />
    </section>
  );
};

export default Hero;