import React, { useState } from 'react';
import { 
  ShieldCheck, AlertTriangle, ArrowLeft, BookOpen, 
  FileText, ExternalLink, Phone, Users, MapPin, 
  PlayCircle, X, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const crimes = [
  "Хищение путем злоупотребления служебными полномочиями (ст. 210 УК)",
  "Контрабанда, совершенная должностным лицом с использованием своих служебных полномочий (ч.3 ст. 228 УК)",
  "Легализация («отмывание») материальных ценностей, приобретенных преступным путем (ч. 2 и ч.3 ст. 235 УК)",
  "Финансирование террористической деятельности, совершенное должностным лицом (ч. 2 ст. 290-1 УК)",
  "Злоупотребление властью или служебными полномочиями из корыстной заинтересованности (ч. 2 и ч.3 ст. 424 УК)",
  "Бездействие должностного лица из корыстной или иной личной заинтересованности (ч. 2 и ч.3 ст. 425 УК)",
  "Превышение власти или служебных полномочий, совершенное из корыстной заинтересованности (ч. 2 и ч.3 ст. 426 УК)",
  "Служебный подлог (ст. 427 УК)",
  "Незаконное участие в предпринимательской деятельности (ст. 429 УК)",
  "Получение взятки (ст. 430 УК)",
  "Дача взятки (ст. 431 УК)",
  "Посредничество во взяточничестве (ст. 432 УК)",
  "Получение незаконного вознаграждения работниками госорганов (ст. 433 УК)",
  "Злоупотребление властью, превышение власти либо бездействие власти (ст. 455 УК)"
];

const inspectors = [
  { region: "Брестская область", address: "г. Брест, ул. Гоголя, 75-312", phone: "8 (0162) 20-72-50" },
  { region: "Витебская область", address: "г. Витебск, ул. Гагарина, 12-121", phone: "8 (0212) 43-24-15" },
  { region: "Гомельская область", address: "г. Гомель, ул. Кожара, 5А-33", phone: "8 (0232) 58-11-51" },
  { region: "Гродненская область", address: "г. Гродно, ул. Космонавтов, 60-17", phone: "8 (0152) 75-58-98" },
  { region: "Могилевская область", address: "г. Могилев, ул. Лазаренко, 58а-24", phone: "8 (0222) 72-20-79" },
  { region: "г. Минск", address: "г. Минск, ул. Фабрициуса, 12-315", phone: "8 (017) 239-40-46" },
  { region: "Минская область", address: "г. Минск, ул. Кижеватова, 60-7-19", phone: "8 (017) 372-02-48" }
];

const poloshenieImages = [
  import.meta.env.BASE_URL + 'downloads/PoloshenieKor__1.jpg',
  import.meta.env.BASE_URL + 'downloads/PoloshenieKor__2.jpg',
  import.meta.env.BASE_URL + 'downloads/PoloshenieKor__3.jpg',
  import.meta.env.BASE_URL + 'downloads/PoloshenieKor__4.jpg',
  import.meta.env.BASE_URL + 'downloads/PoloshenieKor__5.jpg',
  import.meta.env.BASE_URL + 'downloads/PoloshenieKor__6.jpg'
];

const posters = [
  import.meta.env.BASE_URL + 'downloads/0001.jpg',
  import.meta.env.BASE_URL + 'downloads/0002.jpg'
];

const CorruptionPrevention: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 pt-16 md:pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Вернуться на главную
        </Link>

        {/* Hero Section */}
        <div className="bg-red-700 rounded-3xl shadow-lg overflow-hidden mb-12 text-white p-8 md:p-14 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black opacity-10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-md shadow-inner">
                <ShieldCheck className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Профилактика коррупции</h1>
            <p className="text-red-100 text-xl max-w-2xl font-light leading-relaxed">
              Антикоррупционное законодательство основывается на Конституции и включает в себя профильные законы и международные договоры Республики Беларусь.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Левая колонка (Основной контент) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Определение */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-800">Что такое коррупция?</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                <strong className="text-slate-800 font-bold">Коррупция</strong> – это умышленное использование государственным должностным лицом своего служебного положения и связанных с ним возможностей, сопряженное с противоправным получением имущества или другой выгоды... а равно подкуп такого лица.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl text-blue-900">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Государственные должностные лица:
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Президент Республики Беларусь, депутаты, члены Совета Республики, а также иные государственные служащие, лица, занимающие должности в государственных организациях и Вооруженных Силах, относящиеся к должностным лицам.
                </p>
              </div>
            </section>

            {/* Перечень преступлений */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
                <h2 className="text-2xl font-bold text-slate-800">Перечень коррупционных преступлений</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {crimes.map((crime, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all group">
                    <div className="bg-amber-100 text-amber-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-slate-700 leading-snug">{crime}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Видеоматериал */}
            <section className="bg-slate-900 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 pb-0 text-white flex items-center gap-3 mb-6">
                <PlayCircle className="w-8 h-8 text-red-500" />
                <h2 className="text-2xl font-bold">Скажи коррупции НЕТ!</h2>
              </div>
              <div className="aspect-video w-full bg-black">
                <iframe 
                  src="https://www.youtube.com/embed/lPLHkZuVpwk?rel=0&fs=1&wmode=transparent" 
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media" 
                  allowFullScreen
                  title="Скажи коррупции НЕТ"
                ></iframe>
              </div>
            </section>

            {/* Положение о комиссии */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-emerald-600" />
                <h2 className="text-2xl font-bold text-slate-800">Положение о комиссии по противодействию коррупции</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {poloshenieImages.map((src, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(src)}
                    className="relative aspect-[1/1.4] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-slate-200"
                  >
                    <img src={src} alt={`Страница ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Правая колонка (Сайдбар) */}
          <div className="space-y-8">
            
            {/* Документы */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-4">
                <FileText className="w-6 h-6 text-indigo-600" />
                Нормативные акты
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://pravo.by/document/?guid=3871&p0=H11500305" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex flex-col gap-2 p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 transition-colors group"
                >
                  <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-800 leading-snug">
                    Закон Республики Беларусь от 15 июля 2015 г. № 305-З "О борьбе с коррупцией"
                  </span>
                  <div className="flex items-center text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                    <ExternalLink className="w-3 h-3 mr-1" /> pravo.by
                  </div>
                </a>
                <a 
                  href="https://pravo.by/document/?guid=3871&p0=C21101732" 
                  target="_blank" rel="noopener noreferrer"
                  className="flex flex-col gap-2 p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 transition-colors group"
                >
                  <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-800 leading-snug">
                    Постановление Совмина от 26.12.2011 №1732 "Об утверждении Типового положения..."
                  </span>
                  <div className="flex items-center text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                    <ExternalLink className="w-3 h-3 mr-1" /> pravo.by
                  </div>
                </a>
              </div>
            </section>

            {/* Плакаты */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b pb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                Наглядные материалы
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {posters.map((src, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(src)}
                    className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-slate-200 bg-slate-100 flex items-center justify-center p-2"
                  >
                    <img src={src} alt="Плакат" className="w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </button>
                ))}
              </div>
            </section>

            {/* Контакты УСБ */}
            <section className="bg-gradient-to-br from-red-600 to-rose-700 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b border-red-500/50 pb-4">
                <Phone className="w-6 h-6 text-red-200" />
                Куда сообщить?
              </h3>
              <p className="text-red-100 text-sm leading-relaxed mb-6">
                Об указанных правонарушениях сотрудников (лиц гражданского персонала) Государственного комитета судебных экспертиз можно сообщить в управление собственной безопасности:
              </p>

              <div className="bg-black/20 rounded-xl p-5 mb-6 backdrop-blur-sm">
                <p className="text-xs text-red-200 uppercase tracking-wider mb-1 font-semibold">Начальник управления</p>
                <p className="font-bold text-lg mb-3">Ридецкий Александр Михайлович</p>
                <div className="space-y-2 text-sm text-red-50">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-70" />
                    <span>г. Минск, ул. Кальварийская, 43-323</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 opacity-70" />
                    <span className="font-semibold">8 (017) 308-63-23</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-red-100 uppercase tracking-wider">Региональные инспекторы</p>
                {inspectors.map((insp, i) => (
                  <div key={i} className="flex flex-col gap-1 border-b border-red-500/30 pb-3 last:border-0 last:pb-0">
                    <span className="font-medium text-white">{insp.region}</span>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-red-200 gap-1">
                      <span>{insp.address}</span>
                      <span className="font-semibold text-white bg-black/10 px-2 py-0.5 rounded">{insp.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Lightbox / Modal for Images */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity" 
            onClick={() => setActiveImage(null)}
          ></div>
          <div className="relative z-10 max-w-5xl max-h-[90vh] flex flex-col items-center">
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-red-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={activeImage} 
              alt="Увеличенное изображение" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default CorruptionPrevention;
