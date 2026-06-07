import React, { useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import { Lightbox } from '../components/Lightbox';

const ExtramuralOrientationSchedule: React.FC = () => {
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    '/images/1Novosti/2026/Fevral/Kovakchuk/Ustanovochnie/__1.jpg',
    '/images/1Novosti/2026/Fevral/Kovakchuk/Ustanovochnie/__2.jpg',
    '/images/1Novosti/2026/Fevral/Kovakchuk/Ustanovochnie/__3.jpg',
    '/images/1Novosti/2026/Fevral/Kovakchuk/Ustanovochnie/__4.jpg'
  ];

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-10">
      
      {/* Intro section */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30">
            <CalendarDays className="w-5 h-5 text-indigo-100" />
            <span className="text-sm font-bold uppercase tracking-wider text-white">Заочная форма обучения</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Расписание установочных занятий</h2>
          <p className="text-lg text-indigo-100 max-w-2xl leading-relaxed">
            График проведения установочных занятий для учащихся заочной формы обучения.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div 
              key={index}
              onClick={() => {
                setLightboxImages(images);
                setSelectedImageIndex(index);
              }}
              className="cursor-pointer group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 bg-slate-50 aspect-[3/4]"
            >
              <img src={img} alt={`Расписание ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                 <span className="text-white font-bold drop-shadow-md text-sm">Страница {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination (mimicking original joomla setup) */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-200">
        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-600 font-bold hover:bg-slate-50 hover:text-primary-900 transition-colors shadow-sm group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Назад
        </button>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary-900 border border-primary-900 rounded-lg text-white font-bold hover:bg-primary-800 transition-colors shadow-md group">
          Вперёд 
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <Lightbox 
          images={lightboxImages}
          selectedIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onSelectIndex={setSelectedImageIndex}
        />
      )}
    </div>
  );
};

export default ExtramuralOrientationSchedule;
