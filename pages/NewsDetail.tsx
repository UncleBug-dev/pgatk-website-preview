import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  ChevronRight, 
  Home as HomeIcon, 
  ArrowLeft, 
  Share2, 
  Printer,
  Clock,
  ExternalLink
} from 'lucide-react';
import { MOCK_NEWS } from '../constants';

interface NewsDetailProps {
  isVocational?: boolean;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ isVocational = false }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [newsItem, setNewsItem] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [showVideo, setShowVideo] = React.useState(false);

  const getImageUrl = (url?: string) => {
    if (!url) return `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.png`;
    if (url.startsWith('http')) return url;
    return `${import.meta.env.BASE_URL}${url.replace(/^\//, '')}`;
  };

  const NewsSlider = ({ images }: { images: string[] }) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    return (
      <div className="relative w-full h-full bg-slate-900 overflow-hidden group">
        {images.map((img, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear ${
                idx === currentSlide ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${getImageUrl(img)})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
        ))}
        
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all shadow-lg hidden group-hover:block"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all shadow-lg hidden group-hover:block"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
        
        <div className="absolute top-4 right-4 z-30 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentSlide(idx); }}
              className={`transition-all duration-300 rounded-full ${
                idx === currentSlide 
                  ? 'w-8 h-2.5 bg-accent-500 shadow-[0_0_10px_rgba(251,191,36,0.5)]' 
                  : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const TelegramEmbed = ({ url }: { url: string }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = '';
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-widget.js?22';
      script.async = true;
      const match = url.match(/t\.me\/([^/]+\/\d+)/);
      if (match) {
        script.setAttribute('data-telegram-post', match[1]);
        script.setAttribute('data-width', '100%');
        script.setAttribute('data-color', '0088cc');
        containerRef.current.appendChild(script);
      }
    }, [url]);
    return <div ref={containerRef} className="w-full mx-auto flex justify-center bg-white rounded-xl"></div>;
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: newsItem?.title || 'Новость',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Ссылка скопирована в буфер обмена!');
      }
    } catch (error) {
      console.error('Ошибка при попытке поделиться:', error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Скролл наверх при открытии
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!id) return;
    
    // Ищем в моковых новостях
    const localItem = MOCK_NEWS.find(item => item.id === id);
    if (localItem) {
      setNewsItem(localItem);
      setLoading(false);
      return;
    }

    // Если нет, ищем в Telegram новостях
    import('../utils/telegram').then(({ fetchTelegramPosts }) => {
      fetchTelegramPosts().then(posts => {
        const found = posts.find(p => p.id === id);
        if (found) {
          setNewsItem({
            id: found.id,
            title: found.title,
            date: found.date,
            category: found.category,
            imageUrl: found.imageUrl || `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.png`,
            summary: found.summary,
            content: `<p>${found.summary.replace(/\n/g, '<br/>')}</p>`,
            link: found.link,
            hasVideo: found.hasVideo,
            images: found.images
          });
        }
        setLoading(false);
      });
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-accent-500 font-bold">Загрузка...</div>
      </div>
    );
  }

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
      <div className="bg-primary-900 text-white py-4 shadow-md z-30 relative">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-300 font-medium overflow-hidden whitespace-nowrap">
            <Link to="/" className="hover:text-white transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40 flex-shrink-0" />
            {isVocational ? (
              <>
                <Link to="/abiturientam" className="hover:text-white transition-colors">
                  Абитуриентам
                </Link>
                <ChevronRight className="w-3 h-3 opacity-40 flex-shrink-0" />
                <Link to="/abiturientam/proforientatsionnye-novosti-o-nas-v-smi" className="hover:text-white transition-colors">
                  Профориентационные новости
                </Link>
              </>
            ) : (
              <Link to="/news" className="hover:text-white transition-colors">
                Новости
              </Link>
            )}
            <ChevronRight className="w-3 h-3 opacity-40 flex-shrink-0" />
            <span className="text-accent-500 truncate">{newsItem.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 mt-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Hero Image / Slider */}
          <div className="relative h-64 md:h-96 w-full bg-slate-200">
            {newsItem.images && newsItem.images.length > 1 ? (
              <NewsSlider images={newsItem.images} />
            ) : (
              <img 
                src={getImageUrl(newsItem.imageUrl)} 
                alt={newsItem.title} 
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full z-20 pointer-events-none">
              <div className="flex flex-wrap gap-2 mb-4 pointer-events-auto">
                {(Array.isArray(newsItem.category) ? newsItem.category : [newsItem.category || 'Telegram']).map((cat, idx) => (
                    <span 
                      key={idx} 
                      className="bg-accent-500 text-primary-900 text-xs font-bold px-3 py-1 rounded inline-block shadow-sm"
                      title={cat === 'ВПВ' ? 'Военно-патриотическое воспитание' : undefined}
                    >
                      {cat === 'ВПВ' ? '#ВПВ' : cat}
                    </span>
                  ))}
              </div>
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
               <button onClick={handleShare} className="p-2 text-slate-400 hover:text-primary-900 hover:bg-slate-100 rounded-full transition-colors" title="Поделиться">
                  <Share2 className="w-4 h-4" />
               </button>
               <button onClick={handlePrint} className="p-2 text-slate-400 hover:text-primary-900 hover:bg-slate-100 rounded-full transition-colors" title="Печать">
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

            {newsItem.hasVideo && (
              <div className="mt-10 border-t border-slate-100 pt-8">
                <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
                  <span className="text-2xl">🎬</span> Прикрепленное видео
                </h3>
                {!showVideo ? (
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="w-full py-8 bg-slate-50 hover:bg-slate-100 text-primary-900 font-bold rounded-xl border-2 border-dashed border-slate-200 transition-colors flex flex-col items-center justify-center gap-4 group"
                  >
                    <span className="bg-[#0088cc] text-white p-4 rounded-full shadow-md group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Загрузить видеоплеер Telegram
                  </button>
                ) : (
                  <TelegramEmbed url={newsItem.link} />
                )}
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="bg-slate-50 p-6 md:p-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <Link 
              to={isVocational ? "/abiturientam/proforientatsionnye-novosti-o-nas-v-smi" : "/news"}
              className="flex items-center gap-2 text-slate-600 font-bold hover:text-accent-600 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-accent-500 transition-colors shadow-sm">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </div>
              {isVocational ? "Назад к профориентационным новостям" : "Назад к новостям"}
            </Link>

            {newsItem.link && newsItem.link.includes('t.me') && (
              <a 
                href={newsItem.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0088cc] text-white rounded-xl font-bold shadow-md shadow-[#0088cc]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm text-center md:text-left"
              >
                Больше вы сможете узнать в нашем ТГ канале!
                <ExternalLink className="w-5 h-5 flex-shrink-0" />
              </a>
            )}
          </div>

        </div>
      </article>

      {/* "Read Also" Section (Optional but nice) */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 mt-12">
         <h3 className="text-xl font-bold text-primary-900 mb-6">Читайте также</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_NEWS.filter(n => n.id !== id && (!isVocational || (Array.isArray(n.category) ? n.category : [n.category]).some(c => c && c.toLowerCase() === 'профориентация'))).slice(0, 2).map(news => (
               <Link key={news.id} to={isVocational ? `/abiturientam/proforientatsionnye-novosti-o-nas-v-smi/${news.id}` : `/news/${news.id}`} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all group">
                  <img src={getImageUrl(news.imageUrl)} alt="" className="w-24 h-24 object-cover rounded-lg flex-shrink-0 bg-slate-100" />
                  <div>
                    <div className="flex flex-wrap gap-2 mb-1">
                      {(Array.isArray(news.category) ? news.category : [news.category]).map((cat, idx) => (
                        <span 
                          key={idx} 
                          className="bg-accent-500 text-primary-900 text-[10px] font-bold px-2 py-0.5 rounded"
                          title={cat === 'ВПВ' ? 'Военно-патриотическое воспитание' : undefined}
                        >
                          {cat === 'ВПВ' ? '#ВПВ' : cat}
                        </span>
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