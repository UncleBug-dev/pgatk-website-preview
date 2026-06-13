import React, { useState } from 'react';
import { Trophy, ChevronRight, Medal, Users, MapPin, Activity, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

export default function SportsLife() {
  const [activeTab, setActiveTab] = useState(0);
  const { news } = useData();
  
  const sportNews = news.filter(n => {
    if (!n.category) return false;
    const cats = Array.isArray(n.category) ? n.category : [n.category];
    return cats.some(c => typeof c === 'string' && c.toLowerCase().includes('спорт'));
  });

  const getImageUrl = (url?: string) => url || `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.png`;

  const tabs = [
    {
      title: "Спортивные секции",
      icon: <Users className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Спортивные секции колледжа</h3>
        <p class="text-justify mb-4">В нашем колледже уделяется большое внимание физическому воспитанию и спортивному развитию учащихся. Работают различные спортивные секции, которые помогают поддерживать хорошую физическую форму и добиваться высоких спортивных результатов.</p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
          <li>Волейбол</li>
          <li>Баскетбол</li>
          <li>Мини-футбол</li>
          <li>Легкая атлетика</li>
          <li>Настольный теннис</li>
          <li>Плавание</li>
        </ul>
        <p class="text-justify mb-4">Занятия в секциях проводят опытные преподаватели физической культуры и спорта.</p>
      `
    },
    {
      title: "Спортивные достижения",
      icon: <Medal className="w-5 h-5" />,
      content: `
        <h3 class="text-xl font-bold text-slate-800 mb-4">Наши достижения</h3>
        <p class="text-justify mb-4">Учащиеся колледжа регулярно принимают участие в городских, областных и республиканских соревнованиях, занимая призовые места.</p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
          <li>1 место в Брестской области по плаванию</li>
          <li>Призеры областных финальных соревнований по летнему многоборью «Здоровье»</li>
          <li>Чемпионы Брестской области по легкоатлетическому многоборью</li>
          <li>2 место по мини-футболу среди студенческой молодежи г. Пинска</li>
        </ul>
      `
    },
    {
      title: "Спортивная база",
      icon: <MapPin className="w-5 h-5" />,
      link: "/materialno-tekhnicheskaya-baza"
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-8 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 shadow-lg text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform translate-x-10 -translate-y-10">
          <Trophy className="w-64 h-64" />
        </div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/30 border border-blue-400/30 text-blue-100 font-medium text-sm mb-6 backdrop-blur-sm">
            <Trophy className="w-4 h-4" />
            <span>Идеология и воспитание</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight max-w-4xl">
            Спортивная жизнь
          </h2>
          
          <p className="text-lg text-blue-100 max-w-3xl leading-relaxed">
            Развитие физической культуры и спорта — одно из приоритетных направлений воспитательной работы в колледже.
          </p>
        </div>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Tabs Navigation */}
        <div className="lg:w-1/3 shrink-0">
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden sticky top-24">
            <div className="p-4 bg-blue-50 border-b border-blue-100 text-blue-800 font-bold flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Материалы раздела
            </div>
            <div className="flex flex-col">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left px-5 py-4 border-b border-slate-50 last:border-0 transition-colors flex items-center justify-between group ${
                    activeTab === idx 
                      ? 'bg-blue-600 text-white font-medium' 
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {tab.icon && <span className={activeTab === idx ? "text-blue-100" : "text-blue-500"}>{tab.icon}</span>}
                    <span className="pr-4">{tab.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                    activeTab === idx ? 'text-blue-100 translate-x-1' : 'text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 min-h-[400px]">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              {tabs[activeTab]?.title}
            </h2>
            {tabs[activeTab]?.link ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-medium text-slate-700 mb-4 max-w-md">
                  Подробная информация находится в специальном разделе
                </h3>
                <Link 
                  to={tabs[activeTab].link!} 
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 hover:shadow-lg"
                >
                  Перейти к разделу
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            ) : (
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                <div dangerouslySetInnerHTML={{ __html: tabs[activeTab]?.content || '' }} />
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Sport News Section */}
      {sportNews.length > 0 && (
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <Activity className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold text-slate-800">
              Новости спорта
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportNews.slice(0, 6).map((newsItem) => (
              <Link 
                key={newsItem.id} 
                to={`/news/${newsItem.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
              >
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img 
                    src={getImageUrl(newsItem.imageUrl)} 
                    alt={newsItem.title} 
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${!newsItem.imageUrl ? 'p-8 object-contain opacity-50' : 'object-cover'}`}
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded shadow-sm">
                      #Спорт
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-slate-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {newsItem.date}
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {newsItem.title}
                  </h3>
                  
                  <p className="text-slate-600 line-clamp-2 mb-6 flex-grow text-sm">
                    {newsItem.summary}
                  </p>
                  
                  <div className="mt-auto flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors text-sm">
                    Читать далее
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {sportNews.length > 6 && (
            <div className="mt-8 text-center">
              <Link 
                to="/news?category=Спорт" 
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition-all"
              >
                Все спортивные новости
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      )}

    </div>
  );
}

