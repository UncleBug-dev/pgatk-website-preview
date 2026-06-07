import React, { useState } from 'react';
import { Clock, ChevronLeft, ChevronRight, UserCircle } from 'lucide-react';
import { Lightbox } from '../components/Lightbox';

const ExtramuralConsultations: React.FC = () => {
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const consultations = [
    {
      title: 'Заведующий отделением',
      name: 'Яромчик Ирина Михайловна',
      image: '/images/1Novosti/2026/Jznvar/KonsYaromchik/Kons1_2__1.jpg'
    },
    {
      title: 'Заведующий отделением',
      name: 'Ковальчук Евгения Васильевна',
      image: '/images/1Novosti/2026/Fevral/Kovakchuk/Konsult/Komsuly.jpg'
    }
  ];

  const handleImageClick = (index: number) => {
    setLightboxImages(consultations.map(c => c.image));
    setSelectedImageIndex(index);
  };

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-10">
      
      {/* Intro section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30">
            <Clock className="w-5 h-5 text-amber-100" />
            <span className="text-sm font-bold uppercase tracking-wider text-white">Заочная форма обучения</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Расписание консультаций</h2>
          <p className="text-lg text-amber-100 max-w-2xl leading-relaxed">
            График проведения консультаций заведующими отделениями для учащихся заочной формы обучения.
          </p>
        </div>
      </div>

      {/* Schedules Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {consultations.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 text-amber-600">
                <UserCircle className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{item.title}</p>
                <p className="text-xl font-bold text-primary-900">{item.name}</p>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-center items-center">
              <div 
                onClick={() => handleImageClick(index)}
                className="cursor-pointer group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 w-full"
              >
                <img src={item.image} alt={`Расписание ${item.name}`} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <span className="text-white font-bold drop-shadow-md text-center">Нажмите, чтобы увеличить</span>
                </div>
              </div>
            </div>
          </div>
        ))}
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

export default ExtramuralConsultations;
