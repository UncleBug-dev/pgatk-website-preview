import React, { useState, useEffect } from 'react';
import { Shield, Flag, Target, Book, FileText, ChevronRight, Compass, ShieldCheck, Loader2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchTelegramPosts, TelegramPost } from '../utils/telegram';

const TASKS = [
  'Привитие глубокого уважения к национальному наследию, традициям, обычаям, культуре, религиям народа Беларуси',
  'Разъяснение Конституции Республики Беларусь, создающей условия для демократии и гражданского согласия',
  'Привитие уважения к Государственному гербу и Государственному флагу Республики Беларусь',
  'Воспитание понимания, что под этим гербом и флагом новые поколения будут строить высокоразвитую Республику Беларусь',
  'Воспитание чувства гордости за свою страну и готовности к выполнению социальной роли гражданина',
  'Воспитание в духе национального взаимодействия и дружелюбия, монолитного единства народа. Интернациональное воспитание',
  'Привитие любви и уважения к белорусскому языку как языку коренного населения, русскому и другим языкам народа Беларуси',
  'Раскрытие красот белорусской природы, убеждение в необходимости охраны экологической среды',
  'Организация выполнения оборонно-спортивных комплексов и нормативов',
  'Воспитание уважения к Вооруженным Силам Республики Беларусь и к защитнику Отечества, воину',
  'Формирование у юношей морально-психологической и физической готовности к выполнению конституционной обязанности по защите Республики Беларусь',
  'Убеждение в необходимости для Беларуси мира и международного сотрудничества'
];

const DOCUMENTS = [
  { title: 'Кодекс Республики Беларусь об образовании', href: 'https://pravo.by/document/?guid=3871&p0=hk1100243' },
  { title: 'Концепция непрерывного воспитания детей и учащейся молодежи', href: 'http://www.college.by/pages/vir/curator/koncepciia_vospitaniia.pdf' },
  { title: 'Программа непрерывного воспитания детей и учащейся молодежи на 2021-2025 гг.', href: 'https://adu.by/images/2023/vosp/programma-vospitaniya-2021-2025.pdf' },
  { title: 'Комплексная программа воспитания детей и учащейся молодежи в Минской области на 2021-2025 гг.', href: 'https://ltk.grsu.by/attachments/article/325/Kompleksnaya_programma_vospitanya_na_2021-2025.pdf' },
  { title: 'Конституция Республики Беларусь', href: 'https://pravo.by/pravovaya-informatsiya/normativnye-dokumenty/konstitutsiya-respubliki-belarus/' },
  { title: 'ПОСТАНОВЛЕНИЕ МИНИСТЕРСТВА ТРУДА И СОЦИАЛЬНОЙ ЗАЩИТЫ РЕСПУБЛИКИ БЕЛАРУСЬ от 24 февраля 2022 г. № 13', href: 'https://tnpa.by/#!/OrdersText/660233/526100' },
  { title: 'КОНЦЕПЦИЯ информационной безопасности Республики Беларусь', href: 'https://pravo.by/upload/docs/op/P219s0001_1553029200.pdf' },
  { title: 'Указ президента Республики Беларусь «О развитии военно-патриотических клубов»', href: 'https://groiro.by/files/01030/obj/145/31613/doc/Указ о военно-патриотических клубах.pdf' },
  { title: 'Концепция национальной безопасности Республики Беларусь', href: 'https://pravo.by/document/?guid=3871&p0=P31000575' },
  { title: 'Военная доктрина Республики Беларусь', href: 'https://pravo.by/document/?guid=3871&p0=H11600412' },
  { title: 'Закон Республики Беларусь Об Обороне', href: 'https://pravo.by/document/?guid=3961&p0=V19201902' },
  { title: 'Закон Республики Беларусь О Вооруженных Силах Республики Беларусь', href: 'https://pravo.by/document/?guid=3871&p0=v19201904' },
  { title: 'Закон Республики Беларусь О статусе военнослужащих', href: 'https://kodeksy-bel.com/zakon_rb_o_statuse_voennosluzhawih.htm' },
  { title: 'Закон Республики Беларусь О воинской обязанности и воинской службе', href: 'https://kodeksy-bel.com/zakon_rb_o_voinskoj_obyazannosti.htm' },
  { title: 'О Программе патриотического воспитания населения Республики Беларусь на 2022–2025 годы', href: 'https://pravo.by/document/?guid=12551&p0=C22100773&p1=1' },
  { title: 'О Государственной программе «Образование и молодежная политика» на 2021–2025 годы', href: 'https://pravo.by/document/?guid=12551&p0=C22100057&p1=1' },
  { title: 'Методические рекомендации по организации работы руководителя по военно-патриотическому воспитанию в учреждениях образования', href: 'https://ripo.by/index.php?id=6126' },
];

const MilitaryPatriotic: React.FC = () => {
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

  const filteredNews = newsList.filter(news => {
    if (!news.category) return false;
    const cats = Array.isArray(news.category) ? news.category : [news.category];
    return cats.some(c => c.toLowerCase() === 'впв');
  }).slice(0, 9); // Показываем последние 9 новостей

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-12">
      
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-red-800 to-rose-950 rounded-3xl p-8 md:p-12 text-white shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg className="absolute w-96 h-96 -top-10 -right-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
        </div>
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="w-full max-w-4xl mx-auto">
             <img 
               src={`${import.meta.env.BASE_URL}images/Ideologiy/VPV/VPV.webp`} 
               alt="Военно-патриотическое воспитание" 
               className="w-full h-auto object-contain rounded-2xl shadow-2xl border-2 border-white/20"
             />
          </div>
          <div className="w-full">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-center">Военно-патриотическое воспитание</h2>
            <div className="bg-red-900/40 p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm max-w-5xl mx-auto">
              <p className="text-lg leading-relaxed font-medium text-center">
                <span className="text-red-300 font-bold">Патриотизм</span> – это чувство любви к своей Родине, выраженное в активной деятельности по ее процветанию и защите от врагов. В этом определении заложена сущность идеологии патриотизма в общем виде. Конкретно направленность патриотизма определяется его идеологической основой.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Goal */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex items-start gap-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100">
           <Target className="w-8 h-8 text-rose-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary-900 mb-3">Главная цель</h3>
          <p className="text-slate-700 text-lg leading-relaxed text-justify">
            Развитие и воспитание ответственного отношения к себе, своей семье, обществу, людям, гражданско-патриотической компетентности, приобретение опыта участия в общественной жизни, гражданских инициативах, социально значимых проектах, воспитание личности, имеющей активную жизненную позицию, привитие молодежи любви к Беларуси, формирование у нее устойчивого желания способствовать ее процветанию и стремления защищать от врагов.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Tasks (Left Column) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-2xl font-bold text-primary-900 flex items-center gap-3">
             <Flag className="w-6 h-6 text-red-600" />
             Задачи для реализации целей
          </h3>
          <div className="space-y-4">
            {TASKS.map((task, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white text-red-600 font-bold flex items-center justify-center shadow-sm shrink-0 border border-slate-200 group-hover:border-red-300">
                  {idx + 1}
                </span>
                <p className="text-slate-700 font-medium leading-snug pt-1">
                  {task}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & News (Right Column) */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-lg border border-slate-700">
             <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                <Book className="w-6 h-6 text-red-400" />
                Нормативно-правовое обеспечение
             </h3>
             <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
               {DOCUMENTS.map((doc, idx) => (
                 <a 
                   key={idx} 
                   href={doc.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all"
                 >
                   <div className="flex gap-3">
                     <FileText className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                     <span className="text-sm text-slate-200 group-hover:text-white leading-snug line-clamp-3">
                       {doc.title}
                     </span>
                   </div>
                 </a>
               ))}
             </div>
          </div>

          <Link 
            to="/voenno-patrioticheskoe-vospitanie/8-novosti/2123-my-grazhdane-belarusi-plan-meropriyatij-mesyachnika-voenno-patrioticheskogo-vospitaniya"
            className="block p-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg hover:shadow-red-500/30 transition-all hover:-translate-y-1 group"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-lg mb-2">«Мы – граждане Беларуси»</h4>
                <p className="text-red-100 text-sm">План мероприятий месячника военно-патриотического воспитания с 10 февраля по 28 февраля 2025 года</p>
              </div>
              <ChevronRight className="w-8 h-8 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
          </Link>

        </div>
      </div>

      {/* News Feed */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mt-12">
        <div className="flex items-center justify-between mb-8">
           <h3 className="text-2xl font-bold text-primary-900 flex items-center gap-3">
             <ShieldCheck className="w-6 h-6 text-red-600" />
             Новости ВПВ
           </h3>
           <Link to="/news?category=ВПВ" className="text-red-600 font-medium hover:text-red-700 flex items-center gap-1 group transition-colors">
              Все новости
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
          </div>
        ) : filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((newsItem) => (
              <Link 
                key={newsItem.id}
                to={`/news/${newsItem.id}`}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-red-900/5 transition-all overflow-hidden"
              >
                 <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                   {newsItem.imageUrl ? (
                     <img 
                       src={newsItem.imageUrl} 
                       alt={newsItem.title} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center">
                        <Compass className="w-12 h-12 text-slate-300" />
                     </div>
                   )}
                   <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs font-bold text-red-600 px-3 py-1.5 rounded-full shadow-sm">
                      #ВПВ
                   </div>
                 </div>
                 <div className="p-5 flex flex-col flex-1">
                   <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-3">
                     <Calendar className="w-3.5 h-3.5" />
                     {newsItem.date}
                   </div>
                   <h4 className="text-base font-bold text-slate-800 group-hover:text-red-700 leading-snug line-clamp-3 mb-2">
                     {newsItem.title}
                   </h4>
                   {newsItem.summary && (
                     <p className="text-sm text-slate-500 line-clamp-2 mt-auto">
                        {newsItem.summary}
                     </p>
                   )}
                 </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
             <p className="text-slate-500 font-medium">Новостей с меткой #ВПВ пока нет.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default MilitaryPatriotic;
