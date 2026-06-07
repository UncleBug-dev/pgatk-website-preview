import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Palette, FileText, Download, CheckCircle2, Quote, Users, Lightbulb, Music, Award } from 'lucide-react';

const DOCUMENTS = [
  {
    title: 'Расписание объединений по интересам',
    href: 'https://disk.yandex.com/i/PHaPeu4ksiWvww',
    type: 'Внешний ресурс'
  },
  {
    title: 'Заявление на зачисление',
    href: 'https://disk.yandex.com/i/K1YDRw_XFZ8VIA',
    type: 'Документ'
  },
  {
    title: 'В помощь педагогу дополнительного образования',
    href: '/images/Ideologiy/PoInteresam/PedagoguDopObrazovaniy.rar',
    type: 'Архив'
  },
  {
    title: 'Планирование реализации программы объединения по интересам',
    href: 'https://ndtp.by/wp-content/uploads/2023/08/Planavannie-pracy-abjadnannia-pa-intaresach-2023.pdf',
    type: 'PDF'
  }
];

const BENEFITS = [
  'Компетентность',
  'Собственная значимость в коллективной деятельности',
  'Уверенность в успехе и достижениях',
  'Высокий статус в группе и признание личных достоинств',
  'Принадлежность к совместному интересному делу и творческому коллективу',
  'Причастность к деятельности, в которой нет угрозы или беспокойства за неудачу',
  'Возможность раскрыть свои способности',
  'Возможность принимать решения в выборе собственной позиции',
  'Гордость за свои достижения',
  'Удовлетворенность от помощи и поддержки своих сверстников'
];

const IMAGES = Array.from({ length: 10 }, (_, i) => `${import.meta.env.BASE_URL}images/1Novosti/2025/9Sentybr/Obied1111/${i + 1}.png`);

// Simple Lightbox component for the gallery
const Lightbox = ({ images, selectedIndex, onClose, onSelectIndex }: any) => {
  if (selectedIndex === null) return null;
  
  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
      >
        <span className="text-4xl">&times;</span>
      </button>
      
      <button 
        onClick={(e) => { e.stopPropagation(); onSelectIndex((selectedIndex - 1 + images.length) % images.length); }}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>

      <img 
        src={images[selectedIndex]} 
        alt={`Фото ${selectedIndex + 1}`}
        className="max-h-[85vh] max-w-[85vw] object-contain rounded-xl shadow-2xl"
      />

      <button 
        onClick={(e) => { e.stopPropagation(); onSelectIndex((selectedIndex + 1) % images.length); }}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
      
      <div className="absolute bottom-6 text-white/70 text-sm tracking-widest font-medium">
        {selectedIndex + 1} / {images.length}
      </div>
    </div>,
    document.body
  );
};

const InterestGroups: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-12">
      
      {/* Hero Quote Block */}
      <div className="relative bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
           <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-500 blur-3xl"></div>
           <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-400 blur-3xl"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          <Quote className="w-16 h-16 text-purple-300 opacity-80" />
          <blockquote className="text-2xl md:text-3xl font-display font-light italic leading-relaxed text-white">
            «Один день – это маленькая жизнь.»
          </blockquote>
          <cite className="text-lg font-bold text-purple-200 tracking-wider uppercase">— А.М. Горький</cite>
        </div>
      </div>

      {/* Intro and Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            Одним из важнейших аспектов деятельности в колледже является формирование системы организации досуга молодёжи, которая включает в себя занятия учащихся в объединениях по интересам, кружках при кабинетах, лабораториях, факультативные занятия, воспитательные мероприятия во внеучебное время и шестой день.
          </p>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
             <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
               <Award className="w-6 h-6 text-purple-600" />
             </div>
             <div>
               <h4 className="font-bold text-primary-900 mb-2">Надлежащие условия для досуга</h4>
               <p className="text-base text-slate-600">Оборудовано 3 спортивных и 2 актовых зала, современные мастерские и лаборатории, аудитории для занятий, уютные читальные залы в учебных корпусах №1 и №3.</p>
             </div>
          </div>
          <p>
            В нашем учреждении образования работают творческие, активные, грамотные педагоги дополнительного образования, владеющие современными средствами, формами и методами организации досуговой деятельности. Мы реализуем программы по различным профилям: техническому, физкультурно-спортивному, художественному, общественно-гуманитарному, социально-экономическому и культурно-досуговому.
          </p>
        </div>
        
        {/* Documents Sidebar */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
             <FileText className="w-5 h-5 text-purple-600" /> Документы и расписание
          </h3>
          {DOCUMENTS.map((doc, idx) => (
            <a 
              key={idx} 
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:bg-purple-50 hover:border-purple-200 transition-all shadow-sm group"
            >
              <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-purple-100 transition-colors">
                <Download className="w-5 h-5 text-slate-500 group-hover:text-purple-600" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-purple-800 leading-snug mb-1">{doc.title}</h4>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 group-hover:text-purple-400">{doc.type}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-900 mb-4">Деятельность учащихся в выходные дни позволяет развивать:</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
              <CheckCircle2 className="w-6 h-6 text-purple-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <Palette className="w-8 h-8 text-purple-600" />
          <h3 className="text-3xl font-display font-bold text-primary-900">Галерея</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {IMAGES.map((img, index) => (
            <div 
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img 
                src={img} 
                alt={`Галерея ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for Images */}
      <Lightbox 
        images={IMAGES}
        selectedIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onSelectIndex={setSelectedImageIndex}
      />

    </div>
  );
};

export default InterestGroups;
