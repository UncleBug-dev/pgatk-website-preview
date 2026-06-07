import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Home as HomeIcon, ChevronLeft, Loader2, ExternalLink } from 'lucide-react';
import { MOCK_NEWS } from '../constants';
import { fetchTelegramPosts, TelegramPost } from '../utils/telegram';

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
  'ВПВ'
];

interface NewsListProps {
  initialCategory?: string;
}

const NewsList: React.FC<NewsListProps> = ({ initialCategory = 'Все' }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const [newsList, setNewsList] = useState<TelegramPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Скролл наверх при смене страницы пагинации
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    fetchTelegramPosts().then(posts => {
      if (posts && posts.length > 0) {
        setNewsList(posts);
      }
      setLoading(false);
    });
  }, []);

  const displayNews = newsList.length > 0 ? newsList : MOCK_NEWS.map(n => ({ ...n, link: `/news/${n.id}` }));
  
  const filteredNews = displayNews.filter(news => {
    if (selectedCategory === 'Все') return true;
    if (!news.category) return false;
    const cats = Array.isArray(news.category) ? news.category : [news.category];
    return cats.some(c => c.toLowerCase() === selectedCategory.toLowerCase());
  });

  const getImageUrl = (url?: string) => url || `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.png`;

  // Логика пагинации
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header Block (Unified Style) */}
      <div className="bg-primary-900 text-white pt-8 pb-16 md:pt-12 md:pb-24 relative overflow-hidden">
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
          <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            Новости и события
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-8 md:-mt-16 relative z-20">
        
        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-6 md:mb-10 -mx-4 px-4 md:mx-0 md:px-0 gap-3 scrollbar-hide snap-x">
          {NEWS_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              title={category === 'ВПВ' ? 'Военно-патриотическое воспитание' : undefined}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full font-bold text-sm transition-all border shadow-sm snap-start ${
                selectedCategory === category
                  ? 'bg-accent-500 text-primary-900 border-accent-500 shadow-accent-500/30'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-accent-400 hover:text-accent-600'
              }`}
            >
              {category === 'ВПВ' ? '#ВПВ' : category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64 mb-12">
            <Loader2 className="w-12 h-12 text-accent-500 animate-spin" />
            <span className="ml-4 text-slate-500 font-semibold">Загрузка новостей...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentItems.map((news) => {
              const CardContent = (
                <>
                  <div className="relative aspect-video overflow-hidden bg-slate-50 border-b border-slate-100">
                    <img 
                      src={getImageUrl(news.imageUrl)} 
                      alt={news.title} 
                      className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${!news.imageUrl ? 'p-8 object-contain opacity-60' : 'object-cover'}`}
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10 max-w-[90%]">
                      {(Array.isArray(news.category) ? news.category : [news.category || 'Telegram']).map((cat, idx) => (
                        <span 
                          key={idx} 
                          className="bg-accent-500 text-primary-900 text-xs font-bold px-2 py-1 rounded shadow-sm"
                          title={cat === 'ВПВ' ? 'Военно-патриотическое воспитание' : undefined}
                        >
                          {cat === 'ВПВ' ? '#ВПВ' : cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1.5" />
                        {news.date}
                      </div>
                      {news.link.startsWith('http') && <ExternalLink className="w-3 h-3 text-slate-300" />}
                    </div>
                    
                    <h3 className="text-lg font-bold font-display text-primary-900 mb-3 leading-snug group-hover:text-accent-600 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
                      {news.summary}
                    </p>
                    
                    <div className="pt-4 border-t border-slate-100 flex items-center text-accent-600 font-bold text-sm">
                      Читать подробнее
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </>
              );

              const cardClasses = "group flex flex-col bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full";

              return (
                <Link 
                  key={news.id} 
                  to={`/news/${news.id}`}
                  className={cardClasses}
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
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
                    onClick={() => setCurrentPage(page as number)}
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
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
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