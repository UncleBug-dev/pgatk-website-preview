import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import QuickLinks from '../components/QuickLinks';
import ImportantSection from '../components/ImportantSection';
import { MOCK_NEWS } from '../constants';
import { Calendar, ArrowRight, Loader2, ExternalLink, Activity, Play } from 'lucide-react';
import { fetchTelegramPosts, TelegramPost } from '../utils/telegram';

const Home: React.FC = () => {
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
  const mainNews = displayNews[0];
  const sideNews = displayNews.slice(1, 4);

  const getImageUrl = (url?: string) => url || `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.png`;

  return (
    <main>
      <Hero />
      <QuickLinks />

      {/* Основной блок новостей и баннер */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 pb-12">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold text-primary-900">Новости и события</h2>
            <div className="h-1 w-20 bg-accent-500 mt-2 rounded-full"></div>
          </div>
          <Link to="/news" className="hidden md:flex items-center text-primary-800 font-semibold hover:text-accent-600 transition-colors">
            Все новости
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* News Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <Loader2 className="w-12 h-12 text-accent-500 animate-spin" />
            <span className="ml-4 text-slate-500 font-semibold">Загрузка новостей...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main News Item */}
            {mainNews && (
              <Link to={`/news/${mainNews.id}`} className="lg:col-span-2 group cursor-pointer block">
                <MainNewsCard news={mainNews} getImageUrl={getImageUrl} />
              </Link>
            )}

            {/* Side News List */}
            <div className="space-y-6">
              {sideNews.map((news) => (
                <Link 
                  key={news.id} 
                  to={`/news/${news.id}`}
                  className="flex gap-4 group cursor-pointer bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-accent-200 transition-colors"
                >
                  <SideNewsCard news={news} getImageUrl={getImageUrl} />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Year Theme Banner */}
        <div className="mt-20 bg-primary-900 rounded-2xl overflow-hidden relative shadow-2xl border border-slate-800">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>
            
            <div className="relative p-8 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
              
              {/* Logo/Image */}
              <div className="flex-shrink-0 rounded-2xl overflow-hidden shadow-xl lg:w-2/5 flex items-center justify-center border border-slate-700">
                <img 
                  src={`${import.meta.env.BASE_URL}images/slide/SlideYear2026.jpg`} 
                  className="w-full h-auto object-cover" 
                  alt="Год белорусской женщины" 
                />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                    Об объявлении 2026 года Годом белорусской женщины
                  </h3>
                </div>
                
                <div className="text-slate-300 space-y-4 max-w-4xl text-sm md:text-base leading-relaxed">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-accent-500 text-primary-900 text-xs sm:text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      Указ № 1 от 1 января 2026 г.
                    </span>
                    <span className="text-slate-400 text-sm font-medium">1 января</span>
                  </div>

                  <p>
                    <strong className="text-white font-semibold">Президент Беларуси Александр Лукашенко подписал Указ № 1</strong>, которым 2026 год объявлен Годом белорусской женщины.
                  </p>
                  <p>
                    Документ принят в целях формирования национального образа женщины-труженицы, популяризации роли женщин в сохранении и развитии общества.
                  </p>
                  <p>
                    Правительству с участием облисполкомов, Минского горисполкома поручено разработать и утвердить республиканский план мероприятий по проведению в 2026 году Года белорусской женщины. Также Правительство будет координировать деятельность государственных органов, других организаций по выполнению этого плана.
                  </p>
                  <p className="text-sm text-slate-400 italic pt-2 border-t border-slate-700/50 mt-4">
                    Указ вступает в силу после его официального опубликования.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="https://president.gov.by/ru/documents/ukaz-no-1-ot-1-anvara-2026-g" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-accent-500 text-primary-900 hover:bg-accent-600 font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-accent-500/20"
                  >
                    Читать официальный Указ
                  </a>
                  <Link 
                    to="/downloads/abiturient/hod_priema.pdf" 
                    className="inline-flex items-center justify-center bg-rose-600/90 hover:bg-rose-600 backdrop-blur-sm border-2 border-rose-500/50 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg animate-pulse"
                  >
                    <Activity className="w-5 h-5 mr-2" />
                    Ход приема документов
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Секция "Это важно" теперь внизу */}
      <ImportantSection />
      
    </main>
  );
};

// Вспомогательные компоненты для карточек новостей
const MainNewsCard = ({ news, getImageUrl }: { news: any, getImageUrl: (url?: string) => string }) => (
  <div className="relative h-96 rounded-2xl overflow-hidden shadow-md">
    <img 
      src={getImageUrl(news.imageUrl)} 
      alt={news.title} 
      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${!news.imageUrl ? 'p-12 bg-slate-100 object-contain' : ''}`}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10"></div>
    <div className="absolute bottom-0 left-0 p-8 text-white w-full">
      <div className="flex flex-wrap gap-2 mb-3">
        {(Array.isArray(news.category) ? news.category : [news.category || 'Telegram']).map((cat: string, idx: number) => (
          <span 
            key={idx} 
            className="bg-accent-500 text-primary-900 text-xs font-bold px-2 py-1 rounded inline-block"
            title={cat === 'ВПВ' ? 'Военно-патриотическое воспитание' : undefined}
          >
            {cat === 'ВПВ' ? '#ВПВ' : cat}
          </span>
        ))}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold font-display mb-3 leading-tight group-hover:text-accent-400 transition-colors line-clamp-2">
        {news.title}
      </h3>
      <p className="text-slate-300 line-clamp-2 mb-4">
        {news.summary}
      </p>
      <div className="flex items-center justify-between text-sm text-slate-300">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          {news.date}
        </div>
      </div>
    </div>
  </div>
);

const SideNewsCard = ({ news, getImageUrl }: { news: any, getImageUrl: (url?: string) => string }) => (
  <>
    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100">
      <img 
        src={getImageUrl(news.imageUrl)} 
        alt={news.title} 
        className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${!news.imageUrl ? 'p-4 object-contain opacity-50' : 'object-cover'}`}
      />
    </div>
    <div className="flex flex-col justify-center flex-grow pr-2">
      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
        <div className="flex items-center">
          {(Array.isArray(news.category) ? news.category : [news.category || 'Telegram']).map((cat: string, idx: number) => (
            <span key={idx} className="text-accent-600 font-semibold mr-2">{cat}</span>
          ))}
          <span>{news.date}</span>
        </div>
      </div>
      <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary-800 transition-colors line-clamp-2">
        {news.title}
      </h4>
    </div>
  </>
);

export default Home;