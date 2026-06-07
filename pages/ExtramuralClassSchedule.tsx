import React from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, Info } from 'lucide-react';

const ExtramuralClassSchedule: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-10">
      
      {/* Intro section */}
      <div className="bg-gradient-to-r from-purple-500 to-fuchsia-700 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30">
            <CalendarDays className="w-5 h-5 text-purple-100" />
            <span className="text-sm font-bold uppercase tracking-wider text-white">Заочная форма обучения</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Расписание учебных занятий</h2>
          <p className="text-lg text-purple-100 max-w-2xl leading-relaxed">
            Актуальное расписание учебных занятий для учащихся заочной формы обучения.
          </p>
        </div>
      </div>

      {/* Empty State Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-12 text-center flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-300">
          <Info className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-primary-900 mb-4">Информация обновляется</h3>
        <p className="text-slate-500 max-w-lg mx-auto">
          В данный момент расписание учебных занятий формируется или раздел находится в стадии наполнения. Пожалуйста, загляните сюда немного позже.
        </p>
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
    </div>
  );
};

export default ExtramuralClassSchedule;
