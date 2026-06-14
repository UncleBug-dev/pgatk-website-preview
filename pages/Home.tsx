import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import QuickLinks from '../components/QuickLinks';
import ImportantSection from '../components/ImportantSection';
import { ArrowRight, Calendar } from 'lucide-react';
import { useData } from '../context/DataContext';
import StatsSection from '../components/StatsSection';
import NewsGridSkeleton from '../components/NewsGridSkeleton';
import NewsCarousel from '../components/NewsCarousel';
import MainNewsCard from '../components/MainNewsCard';
import SideNewsCard from '../components/SideNewsCard';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/ScrollReveal';
import { motion } from 'framer-motion';

const MotionLink = motion(Link as any);

const Home: React.FC = () => {
  const { news: localNews, newsLoading, settings } = useData();

  const displayNews = localNews.map(n => ({ ...n, link: `/news/${n.id}` }));
  const mainNews = displayNews[0];
  const sideNews = displayNews.slice(1, 4);
  const extraNews = displayNews.slice(4); // новости 5+ — в карусель

  const getImageUrl = (url?: string) => url || `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.webp`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "Пинский государственный аграрный технологический колледж",
    "url": "https://pgatk.by",
    "logo": "https://pgatk.by/images/logo/logo_pgatkk.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Иркутско-Пинской Дивизии, 42",
      "addressLocality": "Пинск",
      "addressRegion": "Брестская область",
      "postalCode": "225710",
      "addressCountry": "BY"
    },
    "telephone": "+375 165 31-62-09"
  };

  return (
    <main>
      <SEO title="Главная" description="Официальный веб-сайт УО «Пинский государственный аграрный технологический колледж». Последние новости, информация для абитуриентов и студентов." />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <Hero />
      
      <QuickLinks />

      <ScrollReveal delay={0.1}>
        <StatsSection />
      </ScrollReveal>

      {/* Основной блок новостей и баннер */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 pb-12">
        
        <ScrollReveal>
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
        {newsLoading ? (
          /* ── Skeleton — пока Firebase не ответил ── */
          <NewsGridSkeleton />
        ) : displayNews.length === 0 ? (
          /* ── Пустое состояние ── */
          <div className="flex flex-col justify-center items-center h-64 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <Calendar className="w-12 h-12 text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-700">Новостей пока нет</h3>
            <p className="text-slate-500 mt-2 text-center max-w-md">Здесь будут отображаться последние события колледжа. Секретарь скоро добавит новые материалы!</p>
          </div>
        ) : (
          /* ── Новости загрузились ── */
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {mainNews && (
                <Link to={`/news/${mainNews.id}`} className="lg:col-span-2 group cursor-pointer block">
                  <MainNewsCard news={mainNews} getImageUrl={getImageUrl} />
                </Link>
              )}
              <div className="space-y-6">
                {sideNews.map((news) => (
                  <MotionLink
                    key={news.id}
                    to={`/news/${news.id}`}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex gap-4 group cursor-pointer bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-accent-200 hover:shadow-md transition-all"
                  >
                    <SideNewsCard news={news} getImageUrl={getImageUrl} />
                  </MotionLink>
                ))}
              </div>
            </div>

            {/* Горизонтальная карусель для остальных новостей */}
            <ScrollReveal delay={0.2} direction="up">
              <NewsCarousel news={extraNews} getImageUrl={getImageUrl} />
            </ScrollReveal>
          </>
        )}
        </ScrollReveal>

        {/* Year Theme Banner */}
        {settings.showQualityYearBanner && (
          <ScrollReveal delay={0.3}>
            <div className="mt-20 bg-primary-900 rounded-2xl overflow-hidden relative shadow-2xl border border-slate-800">
              {/* Background effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>
              
              <div className="relative p-8 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
                
                {/* Logo/Image */}
                <div className="flex-shrink-0 rounded-2xl overflow-hidden shadow-xl lg:w-2/5 flex items-center justify-center border border-slate-700">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/slide/SlideYear2026.webp`} 
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
                      Документ принят в целях формирования nationalьного образа женщины-труженицы, популяризации роли женщин в сохранении и развитии общества.
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
                  </div>
                </div>
              </div>
          </div>
          </ScrollReveal>
        )}
      </div>

      {/* Секция "Это важно" теперь внизу */}
      <ScrollReveal delay={0.1}>
        <ImportantSection />
      </ScrollReveal>
      
    </main>
  );
};

export default Home;