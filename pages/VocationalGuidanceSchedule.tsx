import React from 'react';
import { Calendar, Clock, User, MapPin, Phone } from 'lucide-react';

const VocationalGuidanceSchedule: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-10">
      
      {/* Intro section */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30">
            <Calendar className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-bold uppercase tracking-wider text-white">2025/2026 учебный год</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">График проведения профориентационных консультаций</h2>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <Clock className="w-6 h-6 text-accent-500" />
            Когда проводятся консультации?
          </h3>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex-1">
              <p className="text-lg text-slate-700 font-medium mb-2">Дни проведения</p>
              <p className="text-xl font-bold text-primary-900">Первая суббота месяца</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex-1">
              <p className="text-lg text-slate-700 font-medium mb-2">Время проведения</p>
              <p className="text-xl font-bold text-primary-900">с 08:30 до 14:30</p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <User className="w-6 h-6 text-accent-500" />
            Ответственный за проведение
          </h3>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100">
            <div className="flex-1 space-y-4">
              <div>
                <p className="text-sm text-blue-600 font-bold uppercase tracking-wider mb-1">Должность</p>
                <p className="text-lg text-slate-700 font-medium">заместитель директора по воспитательной работе</p>
              </div>
              <div>
                <p className="text-sm text-blue-600 font-bold uppercase tracking-wider mb-1">ФИО</p>
                <p className="text-2xl font-bold text-primary-900">Семен Васильевич Пашкевич</p>
              </div>
            </div>
            
            <div className="w-full md:w-auto bg-white p-6 rounded-xl shadow-md border border-slate-100 flex flex-col gap-4 min-w-[280px]">
              <a href="tel:80165639324" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Телефон</p>
                  <p className="text-lg font-bold text-primary-900 group-hover:text-accent-600 transition-colors">8 (0165) 63-93-24</p>
                </div>
              </a>
              
              <div className="h-px w-full bg-slate-100"></div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Адрес</p>
                  <p className="text-base font-bold text-slate-700 leading-snug mt-1">г. Пинск,<br/>ул. Иркутско-Пинской дивизии, 25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default VocationalGuidanceSchedule;
