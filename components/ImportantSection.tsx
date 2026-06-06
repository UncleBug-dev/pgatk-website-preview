import React from 'react';
import { Link } from 'react-router-dom';
import { IMPORTANT_NEWS } from '../constants';
import { AlertCircle } from 'lucide-react';

const ImportantSection: React.FC = () => {
  // Хелпер для путей к картинкам
  const resolvePath = (path: string) => {
    if (path.startsWith('http')) return path;
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 mb-20">
      {/* Заголовок секции */}
      <div className="flex items-center mb-8">
        <div className="h-10 w-1.5 bg-accent-500 mr-4 rounded-full"></div>
        <div>
          <h2 className="text-3xl font-display font-bold text-primary-900 flex items-center gap-3">
            Это важно
            <AlertCircle className="w-6 h-6 text-accent-500" />
          </h2>
        </div>
      </div>

      {/* Сетка карточек */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
        {IMPORTANT_NEWS.map((item) => (
          <Link 
            key={item.id} 
            to={`/important/${item.id}`}
            className="group flex flex-col bg-white rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden h-full"
          >
            {/* Контейнер картинки */}
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img 
                src={resolvePath(item.image)} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  // Фоллбэк, если картинки нет
                  e.currentTarget.src = 'https://via.placeholder.com/400x300?text=#ПГАТККЛЕЩЕВА';
                }}
              />
              
              {/* Синий бейдж с датой */}
              <div className="absolute top-0 left-0 bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-br-lg shadow-md z-10">
                {item.date}
              </div>
              
              {/* Градиент при наведении */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* Контент */}
            <div className="p-3 flex-grow flex flex-col justify-center">
              <h3 className="font-bold text-slate-800 text-xs md:text-sm leading-snug group-hover:text-accent-600 transition-colors line-clamp-3">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ImportantSection;