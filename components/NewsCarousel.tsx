import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface NewsItem {
  id: string | number;
  title: string;
  category: string | string[];
  date: string;
  imageUrl?: string;
  hasVideo?: boolean;
}

interface Props {
  news: NewsItem[];
  getImageUrl: (url?: string) => string;
}

const CARD_GAP   = 20;   // px между карточками (gap-5)
const SCROLL_STEP = 3;   // на сколько карточек за клик
const CHUNK_SIZE  = 10;  // сколько карточек показываем сразу

const NewsCarousel: React.FC<Props> = ({ news, getImageUrl }) => {
  const scrollRef   = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null); // sentinel для подгрузки
  const [canScrollLeft,  setCanScrollLeft]  = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [cardWidth, setCardWidth]           = useState(280);
  const [visibleCount, setVisibleCount]     = useState(CHUNK_SIZE);

  // ── Drag-to-scroll ────────────────────────────────────────────────────
  const isDragging  = useRef(false);
  const startX      = useRef(0);
  const startScroll = useRef(0);
  const hasDragged  = useRef(false);  // различаем клик и перетаскивание

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current  = true;
    hasDragged.current  = false;
    startX.current      = e.clientX;
    startScroll.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const delta = startX.current - e.clientX;
    if (Math.abs(delta) > 4) hasDragged.current = true;
    el.scrollLeft = startScroll.current + delta;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    const el = scrollRef.current;
    if (!el) return;
    el.releasePointerCapture(e.pointerId);
    el.style.cursor = 'grab';
    el.style.userSelect = '';
  };

  // Блокируем переход по ссылке если было перетаскивание
  const onLinkClick = (e: React.MouseEvent) => {
    if (hasDragged.current) {
      e.preventDefault();
      hasDragged.current = false;
    }
  };

  // ── Ширина карточки ───────────────────────────────────────────────────
  useEffect(() => {
    const measure = () => {
      const el = scrollRef.current?.firstElementChild as HTMLElement | null;
      if (el) setCardWidth(el.offsetWidth + CARD_GAP);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [news]);

  // ── Кнопки ‹ › ───────────────────────────────────────────────────────
  const updateButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateButtons, { passive: true });
    updateButtons();
    return () => el.removeEventListener('scroll', updateButtons);
  }, [updateButtons, news]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -cardWidth * SCROLL_STEP : cardWidth * SCROLL_STEP, behavior: 'smooth' });
  };

  // ── Ленивая подгрузка карточек при скролле к правому краю ─────────────
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCount < news.length) {
          setVisibleCount(prev => Math.min(prev + CHUNK_SIZE, news.length));
        }
      },
      { root: scrollRef.current, rootMargin: '0px 200px 0px 0px', threshold: 0 }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, [visibleCount, news.length]);

  const visibleNews = news.slice(0, visibleCount);

  if (news.length === 0) return null;

  return (
    <div className="relative mt-10 -mx-1">
      {/* Заголовок */}
      <div className="flex items-center justify-between mb-5 px-1">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          Ещё новости
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Прокрутить влево"
            className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${
              canScrollLeft
                ? 'border-slate-300 text-slate-600 hover:bg-accent-500 hover:border-accent-500 hover:text-white'
                : 'border-slate-200 text-slate-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Прокрутить вправо"
            className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${
              canScrollRight
                ? 'border-slate-300 text-slate-600 hover:bg-accent-500 hover:border-accent-500 hover:text-white'
                : 'border-slate-200 text-slate-300 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Fade-маски */}
      <div className="relative">
        <div className={`absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />

        {/* Скроллируемый контейнер с drag */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-3 px-1 scroll-smooth select-none"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            cursor: 'grab',
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {visibleNews.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              onClick={onLinkClick}
              draggable={false}
              className="group flex-shrink-0 w-[260px] sm:w-[280px] bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Картинка — lazy */}
              <div className="relative h-40 overflow-hidden bg-slate-100">
                {!item.imageUrl ? (
                  <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center text-slate-300 transition-transform duration-500 group-hover:scale-105">
                    <img src={`${import.meta.env.BASE_URL}images/logo/logo_pgatkk.webp`} alt="Логотип" className="w-12 h-12 mb-2 opacity-50 object-contain grayscale" loading="lazy" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider opacity-60">Нет фото</span>
                  </div>
                ) : (
                  <img
                    src={getImageUrl(item.imageUrl)}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {/* Категория */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {(Array.isArray(item.category) ? item.category : [item.category || 'Telegram']).map((cat, idx) => (
                    <span key={idx} className="bg-accent-500 text-white px-2 py-0.5 rounded text-[10px] font-medium shadow-sm">
                      {cat}
                    </span>
                  ))}
                </div>
                {item.hasVideo && (
                  <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-md text-white p-1.5 rounded-full shadow-lg border border-white/10 group-hover:bg-accent-500 transition-colors duration-300">
                    <Play className="w-3 h-3 fill-white translate-x-[1px]" />
                  </div>
                )}
              </div>

              {/* Текст */}
              <div className="p-4">
                <h4 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-primary-800 transition-colors line-clamp-3 mb-3">
                  {item.title}
                </h4>
                <div className="flex items-center text-xs text-slate-400">
                  <Calendar className="w-3 h-3 mr-1.5 flex-shrink-0" />
                  <span>{item.date}</span>
                </div>
              </div>
            </Link>
          ))}

          {/* Sentinel — триггер для подгрузки следующего чанка */}
          <div ref={sentinelRef} className="flex-shrink-0 w-1 h-full" aria-hidden="true" />

          {/* Финальная плитка «Все новости» — только когда всё загружено */}
          {visibleCount >= news.length && (
            <Link
              to="/news"
              onClick={onLinkClick}
              draggable={false}
              className="group flex-shrink-0 w-[200px] sm:w-[220px] bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl border border-primary-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-4 p-6 text-center"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="w-12 h-12 rounded-full bg-accent-500/20 border border-accent-500/40 flex items-center justify-center group-hover:bg-accent-500 transition-colors duration-300">
                <ChevronRight className="w-6 h-6 text-accent-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Все новости</p>
                <p className="text-slate-400 text-xs mt-1">Архив событий</p>
              </div>
            </Link>
          )}

          {/* Скелетон загрузки пока подгружается следующий чанк */}
          {visibleCount < news.length && (
            <>
              {[...Array(3)].map((_, i) => (
                <div key={`skel-${i}`} className="flex-shrink-0 w-[260px] sm:w-[280px] bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden animate-pulse">
                  <div className="h-40 bg-slate-200" />
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-full" />
                    <div className="h-4 bg-slate-200 rounded w-3/4" />
                    <div className="h-3 bg-slate-100 rounded w-1/3 mt-3" />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;
