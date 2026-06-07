import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Loader2, ExternalLink, Newspaper } from 'lucide-react';
import { MOCK_NEWS } from '../constants';
import { fetchTelegramPosts, TelegramPost } from '../utils/telegram';

const ITEMS_PER_PAGE = 6;

const VocationalGuidanceNews: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsList, setNewsList] = useState<TelegramPost[]>([]);
  const [loading, setLoading] = useState(true);

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
    if (!news.category) return false;
    const cats = Array.isArray(news.category) ? news.category : [news.category];
    return cats.some(c => c.toLowerCase() === 'профориентация');
  });

  const getImageUrl = (url?: string) => url || `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.png`;

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-10">
      
      {/* Intro section */}
      <div className="bg-gradient-to-r from-orange-500 to-rose-600 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30">
            <Newspaper className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-bold uppercase tracking-wider text-white">СМИ о нас</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Профориентационные новости</h2>
          <p className="text-lg text-rose-50 max-w-2xl leading-relaxed">
            Узнайте о наших последних мероприятиях, встречах с абитуриентами и достижениях в области профориентации.
          </p>
        </div>
      </div>

      {/* News Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64 mb-12">
          <Loader2 className="w-12 h-12 text-accent-500 animate-spin" />
          <span className="ml-4 text-slate-500 font-semibold">Загрузка новостей...</span>
        </div>
      ) : filteredNews.length === 0 ? (
        <div className="text-center p-12 bg-slate-50 rounded-2xl border border-slate-100">
          <Newspaper className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-600">Пока нет новостей в этой категории</h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
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
                to={`/abiturientam/proforientatsionnye-novosti-o-nas-v-smi/${news.id}`}
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
        <div className="flex justify-center items-center space-x-2 pt-4">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-slate-200 hover:bg-white hover:text-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                currentPage === page
                  ? 'bg-accent-500 text-primary-900 shadow-lg shadow-accent-500/30 scale-110'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-accent-400 hover:text-accent-600'
              }`}
            >
              {page}
            </button>
          ))}

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
  );
};

export default VocationalGuidanceNews;
