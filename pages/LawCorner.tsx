import React, { useEffect, useState } from 'react';
import { 
  Scale, ArrowLeft, ShieldAlert, Shield, Skull, 
  Users, Gavel, ExternalLink, X, FileText, 
  Train, Smartphone 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface LawData {
  tabs: { title: string; html: string }[];
}

const lawCards = [
  {
    id: 'law',
    title: 'Уголовная и административная ответственность',
    icon: Gavel,
    color: 'bg-slate-700',
    tabIndices: [1, 2], // Indices from the JSON
    documents: [
      { name: 'КоАП Республики Беларусь', url: 'https://pravo.by/document/?guid=12551&p0=HK2100091&p1=1' },
      { name: 'Это нужно знать. Выписки из КоАП', url: '/downloads/ETONUSHNOZNAT.pdf' },
      { name: 'Выписка из УК Республики Беларусь', url: '/downloads/UK_RB.pdf' },
      { name: 'Об основах системы профилактики безнадзорности', url: '/downloads/BeznadzornostIPravonarusheniy.pdf' }
    ]
  },
  {
    id: 'cyber',
    title: 'Профилактика киберпреступности',
    icon: ShieldAlert,
    color: 'bg-blue-600',
    tabIndices: [], // No specific tab, just documents
    documents: [
      { name: 'Информационная безопасность', url: '/downloads/InfBezopasnost.pdf' },
      { name: 'Фишинг - как не попасться', url: '/downloads/Fishing.pdf' },
      { name: 'Вишинг - телефонные мошенники', url: '/downloads/Vishing.pdf' },
      { name: 'Сбережения и их защита', url: '/downloads/Sberesheniy.pdf' },
      { name: 'Безопасные покупки в сети', url: '/downloads/PokupkiVSetiInternet.pdf' },
      { name: 'Мобильные устройства и безопасность', url: '/downloads/MobilnieUstroystvaIBezopasnost.pdf' }
    ]
  },
  {
    id: 'drugs',
    title: 'Профилактика оборота наркотиков',
    icon: Skull,
    color: 'bg-purple-600',
    tabIndices: [5], // Молодежь против наркотиков
    documents: [
      { name: 'Декрет №6. О мерах по противодействию незаконному обороту', url: 'https://president.gov.by/ru/documents/dekret-10535' }
    ]
  },
  {
    id: 'extremism',
    title: 'Профилактика экстремизма',
    icon: Shield,
    color: 'bg-red-600',
    tabIndices: [7], // Профилактика экстремизма
    documents: [
      { name: 'Памятка по профилактике экстремизма', url: 'https://pgatkk.by/podrostok-i-zakon/2-uncategorised/1823-pamyatka-po-profilaktike-ekstremizma-i-terrorizma' }
    ]
  },
  {
    id: 'transport',
    title: 'Правила поведения на транспорте',
    icon: Train,
    color: 'bg-amber-600',
    tabIndices: [3], // Правила на ЖД
    documents: []
  },
  {
    id: 'virtual',
    title: 'Виртуальное общение',
    icon: Smartphone,
    color: 'bg-pink-600',
    tabIndices: [6], // Виртуальная дружба
    documents: []
  },
  {
    id: 'parents',
    title: 'Родителям на заметку',
    icon: Users,
    color: 'bg-teal-600',
    tabIndices: [4], // Профилактика насилия в семье
    documents: []
  }
];

const LawCorner: React.FC = () => {
  const [data, setData] = useState<LawData | null>(null);
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'data/law_data.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(e => console.error(e));
  }, []);

  const activeCard = lawCards.find(c => c.id === activeModalId);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalId(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-16 md:pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Вернуться на главную
        </Link>

        <div className="bg-blue-600 rounded-2xl shadow-sm overflow-hidden mb-10 text-white p-8 md:p-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Scale className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Подросток и закон</h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl">
              Раздел профилактики. Выберите интересующую вас категорию для ознакомления с материалами.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {lawCards.map((card) => (
            <button 
              key={card.id}
              onClick={() => setActiveModalId(card.id)}
              className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 flex flex-col h-full text-left"
            >
              <div className="p-6 flex-grow flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${card.color} text-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 leading-snug">
                  {card.title}
                </h3>
              </div>
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-center text-slate-500 text-sm font-medium group-hover:text-primary-600 transition-colors mt-auto w-full">
                Подробнее
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModalId && activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setActiveModalId(null)}
          ></div>
          
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className={`px-6 py-4 flex items-center justify-between text-white ${activeCard.color}`}>
              <div className="flex items-center gap-3">
                <activeCard.icon className="w-6 h-6" />
                <h2 className="text-xl font-bold">{activeCard.title}</h2>
              </div>
              <button 
                onClick={() => setActiveModalId(null)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-grow custom-scrollbar">
              
              {/* Documents Section */}
              {activeCard.documents.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-slate-500" />
                    Документы и памятки
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCard.documents.map((doc, i) => (
                      <a 
                        key={i} 
                        href={doc.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                      >
                        <ExternalLink className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">
                          {doc.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Special Parent Warning for 'parents' card */}
              {activeCard.id === 'parents' && (
                <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl mb-8">
                  <h3 className="text-rose-800 font-bold text-lg mb-2 uppercase">Родители, Внимание!!!</h3>
                  <div className="text-rose-700 space-y-3 text-sm md:text-base leading-relaxed">
                    <p>
                      Обратите внимание на движение ЧВК «Редан»! Участники движения носят одежду с символом группировки – пауком, а также клетчатые штаны.
                    </p>
                    <p className="font-semibold">
                      Уважаемые родители! Обращайте внимание на увлечения ваших детей, интересуйтесь их жизнью, контролируйте, с кем они общаются, в том числе в интернете. Подпишитесь на них в социальных сетях.
                    </p>
                  </div>
                </div>
              )}

              {/* Scraped Text Sections */}
              {activeCard.tabIndices.map((idx) => {
                if (!data || !data.tabs[idx]) return null;
                return (
                  <div key={idx} className="mb-10 last:mb-0">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-3">
                      {data.tabs[idx].title}
                    </h3>
                    <div 
                      className="prose prose-lg max-w-none prose-slate prose-img:mx-auto prose-a:text-blue-600 prose-headings:text-slate-800 prose-p:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: data.tabs[idx].html }} 
                    />
                  </div>
                );
              })}

              {!data && activeCard.tabIndices.length > 0 && (
                <div className="text-center text-slate-500 py-8">Загрузка информации...</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LawCorner;
