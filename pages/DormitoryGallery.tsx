import React, { useEffect, useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { Lightbox } from '../components/Lightbox';
import galleryDataRaw from '../src/data/galleryData.json';

// Cast the imported JSON to our expected type
interface GalleryItem {
  image: string;
  title: string;
  subtitle?: string;
}
const galleryData = galleryDataRaw as GalleryItem[];

const DormitoryGallery: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="space-y-4 max-w-2xl text-center md:text-left">
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold tracking-wider uppercase text-blue-100">
            Жизнь в общежитии
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-200">
            Фотогалерея
          </h1>
        </div>
        <div className="hidden md:flex p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
          <ImageIcon className="w-24 h-24 text-blue-200 opacity-80" />
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 space-y-6 text-lg text-slate-700 leading-relaxed">
        <p>
          <strong className="text-blue-900">Воспитательная работа в общежитии является составной частью и продолжением образовательного процесса.</strong> Она направлена на формирование нравственных качеств, на воспитание здорового образа жизни и обеспечения разумной занятости проживающих в общежитии учащихся. Формы и методы работы определялись с учётом возрастных, морально-психологических особенностей, интересов и запросов учащихся.
        </p>
        <p>
          В общежитиях имеются: кабинет воспитателя, кабинет оказания социально-педагогической поддержки и оказание психологической помощи всем участникам образовательного процесса, комнаты самоподготовки для учащихся, комната отдыха, бытовая комната, сушилка.
        </p>
        <p>
          В общежитии организовано информационное пространство с периодически сменяемой информацией по актуальной тематике.
        </p>
        <div className="grid md:grid-cols-2 gap-6 pt-4">
           <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
             <h3 className="font-bold text-blue-900 mb-2">Печатные издания</h3>
             <p className="text-blue-800 text-base">Организована индивидуальная подписка на печатные издания: ”Пинский Вестник”, ”Советская Белоруссия“, ”Белорусский час“, ”Знамя Юности“</p>
           </div>
           <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
             <h3 className="font-bold text-indigo-900 mb-2">Взаимодействие</h3>
             <p className="text-indigo-800 text-base">Организация и проведения воспитательной работы в общежитии реализуется с взаимодействием “Профсоюзной общественной организацией учащихся” и общественной организацией “БРСМ”.</p>
           </div>
        </div>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 pb-12">
        {galleryData.map((item, idx) => (
          <div 
            key={idx}
            className="break-inside-avoid animate-in zoom-in-95 duration-500 rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all border border-slate-200 bg-white"
            style={{ animationDelay: `${idx * 50}ms` }}
            onClick={() => setSelectedImageIndex(idx)}
          >
            <div className="relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300 flex items-center justify-center">
                 <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-xl">
                   <ImageIcon className="w-6 h-6 text-blue-900" />
                 </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-slate-800 text-lg leading-snug mb-1">{item.title}</h3>
              {item.subtitle && (
                <p className="text-slate-500 text-sm">{item.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <Lightbox 
          images={galleryData.map(item => item.image)}
          titles={galleryData.map(item => item.title)}
          selectedIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onSelectIndex={setSelectedImageIndex}
        />
      )}
    </div>
  );
};

export default DormitoryGallery;
