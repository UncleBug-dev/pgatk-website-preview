import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, ChevronRight, Home as HomeIcon, ChevronLeft, Loader2, ExternalLink, Image as ImageIcon, Play } from 'lucide-react';
import { MOCK_NEWS } from '../constants';
import { fetchTelegramPosts, TelegramPost } from '../utils/telegram';
import { useData } from '../context/DataContext';
import SEO from '../components/SEO';

const ITEMS_PER_PAGE = 6;

const NEWS_CATEGORIES = [
  'Все',
  'Профориентация',
  'Профилактика',
  'Достижения',
  'Год белорусской женщины',
  'Жизнь колледжа',
  'Общежитие',
  'БРСМ',
  'ВПВ',
  'Спорт'
];

interface NewsListProps {
  initialCategory?: string;
}

const NewsList: React.FC<NewsListProps> = ({ initialCategory = 'Все' }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const selectedCategory = searchParams.get('category') || initialCategory;
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const handleSetCategory = (cat: string) => {
    setSearchParams(prev => {
      if (cat === 'Все' && initialCategory === 'Все') prev.delete('category');
      else prev.set('category', cat);
      prev.delete('page'); // сбрасываем страницу на 1
      return prev;
    });
  };

  const handleSetPage = (pageUpdater: number | ((p: number) => number)) => {
    setSearchParams(prev => {
      const next = typeof pageUpdater === 'function' ? pageUpdater(currentPage) : pageUpdater;
      if (next === 1) prev.delete('page');
      else prev.set('page', next.toString());
      return prev;
    });
  };

  const { news: localNews } = useData();
  const displayNews = localNews.map(n => ({ ...n, link: `/news/${n.id}` }));
  
  const filteredNews = displayNews.filter(news => {
    if (selectedCategory === 'Все') return true;
    if (!news.category) return false;
    const cats = Array.isArray(news.category) ? news.category : [news.category];
    return cats.some(c => c.toLowerCase() === selectedCategory.toLowerCase());
  });

  const getImageUrl = (url?: string) => url || `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.webp`;

  // Логика пагинации
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      <SEO 
        title={selectedCategory === 'Все' ? 'Новости' : `Новости - ${selectedCategory}`} 
        description={`Архив новостей и событий Пинского государственного аграрного технологического колледжа. Категория: ${selectedCategory}.`}
      />
      
      {/* Header Block (Unified Style) */}
      <div className="bg-primary-900 text-white pt-8 pb-12 md:pt-12 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold">Новости</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8 md:mb-10">
            Новости и события
          </h1>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3">
            {NEWS_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => {
                  handleSetCategory(category);
                }}
                title={category === 'ВПВ' ? 'Военно-патриотическое воспитание' : undefined}
                className={`whitespace-nowrap px-4 py-2 md:px-5 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all border shadow-sm ${
                  selectedCategory === category
                    ? 'bg-accent-500 text-primary-900 border-accent-500 shadow-accent-500/30'
                    : 'bg-white/10 text-white border-white/20 hover:border-accent-400 hover:text-accent-400'
                }`}
              >
                {category === 'ВПВ' ? '#ВПВ' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-6 md:-mt-8 relative z-20">
        {/* News Grid */}
        {filteredNews.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-64 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <Calendar className="w-12 h-12 text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-700">Новостей не найдено</h3>
            <p className="text-slate-500 mt-2 text-center">Попробуйте выбрать другую категорию или зайдите позже.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((news) => (
              <Link 
                key={news.id} 
                to={`/news/${news.id}`}
                state={{ from: `?${searchParams.toString()}` }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
              >
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  {!news.imageUrl ? (
                    <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center text-slate-300 transition-transform duration-700 group-hover:scale-105">
                      <img src={`${import.meta.env.BASE_URL}images/logo/logo_pgatkk.webp`} alt="Логотип" className="w-16 h-16 mb-2 opacity-50 object-contain grayscale" />
                      <span className="text-xs font-semibold uppercase tracking-wider opacity-60">Нет фото</span>
                    </div>
                  ) : (
                    <img 
                      src={getImageUrl(news.imageUrl)} 
                      alt={news.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {(() => {
                      const cats = Array.isArray(news.category) ? news.category : [news.category || 'Telegram'];
                      const displayCats = cats.slice(0, 2);
                      const remaining = cats.length - 2;
                      return (
                        <>
                          {displayCats.map((cat: string, idx: number) => (
                            <span 
                              key={idx} 
                              className="bg-accent-500 text-primary-900 text-xs font-bold px-3 py-1 rounded shadow-sm"
                              title={cat === 'ВПВ' ? 'Военно-патриотическое воспитание' : undefined}
                            >
                              {cat === 'ВПВ' ? '#ВПВ' : cat}
                            </span>
                          ))}
                          {remaining > 0 && (
                            <span className="bg-slate-800/80 text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                              +{remaining}
                            </span>
                          )}
                        </>
                      );
                    })()}
                  </div>
                  {(news as any).hasVideo && (
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-md text-white p-2 rounded-full shadow-lg border border-white/10 group-hover:bg-accent-500 transition-colors duration-300">
                      <Play className="w-4 h-4 fill-white translate-x-[1px]" />
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {news.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-slate-600 line-clamp-3 mb-6 flex-grow text-sm">
                    {news.content}
                  </p>
                  
                  <div className="mt-auto flex items-center text-primary-600 font-semibold group-hover:text-accent-600 transition-colors text-sm">
                    Читать далее
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-12">
            <button
              onClick={() => handleSetPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-slate-200 hover:bg-white hover:text-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {(() => {
              const getVisiblePages = (current: number, total: number) => {
                if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
                if (current <= 4) return [1, 2, 3, 4, 5, '...', total];
                if (current >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
                return [1, '...', current - 1, current, current + 1, '...', total];
              };

              return getVisiblePages(currentPage, totalPages).map((page, index) => {
                if (page === '...') {
                  return (
                    <span key={`ellipsis-${index}`} className="px-2 text-slate-400">
                      ...
                    </span>
                  );
                }
                return (
                  <button
                    key={`page-${page}`}
                    onClick={() => handleSetPage(page as number)}
                    className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                      currentPage === page
                        ? 'bg-accent-500 text-primary-900 shadow-lg shadow-accent-500/30 scale-110'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-accent-400 hover:text-accent-600'
                    }`}
                  >
                    {page}
                  </button>
                );
              });
            })()}

            <button
              onClick={() => handleSetPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-slate-200 hover:bg-white hover:text-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsList;