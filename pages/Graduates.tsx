import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Info, FileText, ChevronRightCircle } from 'lucide-react';

const Graduates: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-12">
      
      {/* Intro section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm border border-white/30 hidden md:block group-hover:rotate-6 transition-transform">
            <GraduationCap className="w-20 h-20 text-white" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30">
              <span className="text-sm font-bold uppercase tracking-wider text-white">Образовательный процесс</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Выпускникам</h2>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
              Вся необходимая информация, нормативные документы и памятки для выпускников нашего колледжа.
            </p>
          </div>
        </div>
      </div>

      {/* Subsections Grid */}
      <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100">
        <h3 className="text-3xl font-display font-bold text-center text-primary-900 mb-8">Разделы для выпускников</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { 
              label: 'Информация для выпускников', 
              icon: <Info className="w-8 h-8" />, 
              color: 'text-sky-500', 
              bg: 'bg-sky-100', 
              href: '/obrazovatelniy-process/vypusknikam/informatsiya' 
            },
            { 
              label: 'Документы', 
              icon: <FileText className="w-8 h-8" />, 
              color: 'text-emerald-500', 
              bg: 'bg-emerald-100', 
              href: '/obrazovatelniy-process/vypusknikam/dokumenty' 
            }
          ].map((item, index) => {
            const isPlaceholder = item.href === '#';
            const CardContent = (
              <>
                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-primary-900 group-hover:text-accent-600 transition-colors mb-4 flex-1">
                  {item.label}
                </h4>
                <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-accent-500 uppercase tracking-wider mt-auto">
                  Перейти <ChevronRightCircle className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </>
            );

            const cardClass = "group flex flex-col bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-accent-400 transition-all duration-300 transform hover:-translate-y-1";

            if (isPlaceholder) {
              return (
                <a 
                  key={index}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={cardClass}
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <Link key={index} to={item.href} className={cardClass}>
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Graduates;
