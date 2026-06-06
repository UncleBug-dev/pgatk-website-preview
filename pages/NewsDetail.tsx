import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  ChevronRight, 
  Home as HomeIcon, 
  ArrowLeft, 
  Share2, 
  Printer,
  Clock 
} from 'lucide-react';
import { MOCK_NEWS } from '../constants';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Ищем новость
  const newsItem = MOCK_NEWS.find(item => item.id === id);

  // Скролл наверх при открытии
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-primary-900 mb-4">Новость не найдена</h2>
        <button 
          onClick={() => navigate('/news')} 
          className="px-6 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition"
        >
          Вернуться к новостям
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header Strip (Small) */}
      <div className="bg-primary-900 text-white py-4 shadow-md sticky top-[116px] z-30">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-300 font-medium overflow-hidden whitespace-nowrap">
            <Link to="/" className="hover:text-white transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40 flex-shrink-0" />
            <Link to="/news" className="hover:text-white transition-colors">
              Новости
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40 flex-shrink-0" />
            <span className="text-accent-500 truncate">{newsItem.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 mt-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 w-full">
            <img 
              src={newsItem.imageUrl} 
              alt={newsItem.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
              <span className="bg-accent-500 text-primary-900 text-xs font-bold px-3 py-1 rounded mb-4 inline-block">
                {newsItem.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-display font-bold text-white leading-tight shadow-black drop-shadow-lg">
                {newsItem.title}
              </h1>
            </div>
          </div>

          {/* Meta & Actions */}
          <div className="px-6 md:px-10 py-4 border-b border-slate-100 bg-slate-50/50 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {newsItem.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                3 мин. чтения
              </span>
            </div>
            
            <div className="flex gap-3">
               <button className="p-2 text-slate-400 hover:text-primary-900 hover:bg-slate-100 rounded-full transition-colors" title="Поделиться">
                  <Share2 className="w-4 h-4" />
               </button>
               <button className="p-2 text-slate-400 hover:text-primary-900 hover:bg-slate-100 rounded-full transition-colors" title="Печать">
                  <Printer className="w-4 h-4" />
               </button>
            </div>
          </div>

          {/* Text Body */}
          <div className="p-6 md:p-10">
            {/* 
              Используем dangerouslySetInnerHTML для имитации HTML контента из CMS.
              В реальном проекте контент должен быть очищен (sanitized).
            */}
            <div 
              className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-primary-900 prose-a:text-accent-600 prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: newsItem.content || `<p>${newsItem.summary}</p>` }}
            />
          </div>

          {/* Footer Actions */}
          <div className="bg-slate-50 p-6 md:p-10 border-t border-slate-100 flex justify-between items-center">
            <Link 
              to="/news"
              className="flex items-center gap-2 text-slate-600 font-bold hover:text-accent-600 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-accent-500 transition-colors shadow-sm">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              Назад к новостям
            </Link>
          </div>

        </div>
      </article>

      {/* "Read Also" Section (Optional but nice) */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 mt-12">
         <h3 className="text-xl font-bold text-primary-900 mb-6">Читайте также</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_NEWS.filter(n => n.id !== id).slice(0, 2).map(news => (
               <Link key={news.id} to={`/news/${news.id}`} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all group">
                  <img src={news.imageUrl} alt="" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
                  <div>
                    <div className="flex flex-wrap gap-2 mb-1">
                      {(Array.isArray(news.category) ? news.category : [news.category || 'Telegram']).map((cat: string, idx: number) => (
                        <div key={idx} className="text-xs text-accent-600 font-bold">{cat}</div>
                      ))}
                    </div>
                     <h4 className="font-bold text-slate-800 leading-tight group-hover:text-primary-900 transition-colors line-clamp-2">{news.title}</h4>
                     <div className="text-xs text-slate-400 mt-2">{news.date}</div>
                  </div>
               </Link>
            ))}
         </div>
      </div>

    </div>
  );
};

export default NewsDetail;