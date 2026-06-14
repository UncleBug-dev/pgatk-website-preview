import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Folder, Shield, Heart, BookOpen } from 'lucide-react';
import { useData } from '../context/DataContext';

const getSectionIcon = (sectionName: string) => {
  const name = String(sectionName || '').toLowerCase();
  if (name.includes('безопасн')) return <Shield className="w-4 h-4 text-emerald-600" />;
  if (name.includes('профилактик') || name.includes('психолог') || name.includes('здоров')) return <Heart className="w-4 h-4 text-rose-600" />;
  if (name.includes('учеб') || name.includes('работ') || name.includes('оплат')) return <BookOpen className="w-4 h-4 text-blue-600" />;
  return <Folder className="w-4 h-4 text-amber-600" />;
};

const ImportantSection: React.FC = () => {
  const { importantDocs } = useData();
  const [activeSection, setActiveSection] = useState<string>('');

  // Хелпер для путей к картинкам
  const resolvePath = (path: string) => {
    if (!path) return `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.webp`;
    if (path.startsWith('http') || path.startsWith('data:')) return path;
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  // Вычисляем все уникальные разделы
  const sections = Array.from(
    new Set(importantDocs.map(d => d.section || 'Общие ресурсы').filter(Boolean))
  ) as string[];

  useEffect(() => {
    if (sections.length > 0 && !activeSection) {
      // Приоритетные разделы для отображения по умолчанию
      const preferred = sections.find(s => s === 'Безопасность') || 
                        sections.find(s => s === 'Профилактика и психология') || 
                        sections[0];
      setActiveSection(preferred);
    }
  }, [sections, activeSection]);

  if (importantDocs.length === 0) return null;

  const displayedDocs = importantDocs.filter(d => (d.section || 'Общие ресурсы') === activeSection);

  return (
    <section className="w-full max-w-[1600px] mx-auto px-4 md:px-8 mb-20">
      {/* Заголовок секции */}
      <div className="flex items-center mb-8">
        <div className="h-10 w-1.5 bg-amber-500 mr-4 rounded-full"></div>
        <div>
          <h2 className="text-3xl font-display font-bold text-slate-800 flex items-center gap-3">
            Важные разделы и документы
            <AlertCircle className="w-6 h-6 text-amber-500" />
          </h2>
          <p className="text-sm text-slate-500 mt-1">Ознакомьтесь с официальными документами, правилами и полезными материалами</p>
        </div>
      </div>

      {/* Переключатель вкладок (папок) */}
      <div className="flex flex-wrap items-center gap-2 mb-8 bg-slate-50 p-2 rounded-2xl border border-slate-100/80">
        {sections.map((sec) => {
          const docCount = importantDocs.filter(d => (d.section || 'Общие ресурсы') === sec).length;
          const isActive = activeSection === sec;
          
          return (
            <button
              key={sec}
              onClick={() => setActiveSection(sec)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-white text-slate-800 shadow-sm border border-slate-200/60 ring-2 ring-amber-500/10'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-white/50'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${isActive ? 'bg-amber-50' : 'bg-slate-100'}`}>
                {getSectionIcon(sec)}
              </div>
              <span>{sec}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                isActive ? 'bg-amber-100 text-amber-800' : 'bg-slate-200/60 text-slate-600'
              }`}>
                {docCount}
              </span>
            </button>
          );
        })}
      </div>

      {/* Сетка карточек документов */}
      {displayedDocs.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 animate-in fade-in duration-500">
          {displayedDocs.map((item) => (
            <Link 
              key={item.id} 
              to={`/important/${item.id}`}
              className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100/80 overflow-hidden h-full"
            >
              {/* Контейнер картинки */}
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-50 border-b border-slate-100">
                <img 
                  src={resolvePath(item.image)} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.webp`;
                  }}
                />
                
                {/* Дата */}
                <div className="absolute bottom-2 left-2 bg-slate-900/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm z-10">
                  {item.date}
                </div>
                
                {/* Градиент при наведении */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>

              {/* Контент */}
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h3 className="font-bold text-slate-800 text-xs md:text-sm leading-snug group-hover:text-amber-600 transition-colors line-clamp-3">
                  {item.title}
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 mt-2 block hover:underline">
                  Подробнее →
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <Folder className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500 font-medium">В этой папке пока нет документов.</p>
        </div>
      )}
    </section>
  );
};

export default ImportantSection;