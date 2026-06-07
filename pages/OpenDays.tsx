import React from 'react';
import { CalendarDays, Clock, MapPin, User, DoorOpen } from 'lucide-react';

const schedule = [
  {
    date: "15 февраля 2025",
    time: "11.00 часов",
    location: "Учебный корпус № 3 (г.Пинск, ул.Революционная,12)",
    responsible: "Макарушко Н.Н. заведующий отделением"
  },
  {
    date: "15 марта 2025",
    time: "12.00 часов",
    location: "Учебный корпус № 3 (г.Пинск, ул.Революционная,12)",
    responsible: "Пашкевич С.В., заместитель директора по воспитательной работе"
  },
  {
    date: "19 апреля 2025",
    time: "12.00 часов",
    location: "Учебный корпус 31 (г.Пинск, ул. Иркутско-Пинской дивизии, 25)",
    responsible: "Макарушко Н.Н. заведующий отделением"
  },
  {
    date: "16 мая 2025",
    time: "11.00 часов",
    location: "Учебный корпус 31 (г.Пинск, ул. Иркутско-Пинской дивизии, 25)",
    responsible: "Пашкевич С.В., заместитель директора по воспитательной работе"
  }
];

const OpenDays: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-10">
      
      {/* Intro section */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-shrink-0 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg">
            <DoorOpen className="w-12 h-12 text-yellow-300" />
          </div>
          <div>
            <div className="inline-block bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 backdrop-blur-md border border-white/30">
              Абитуриенту
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">Дни открытых дверей</h2>
            <p className="text-lg text-cyan-50 max-w-2xl leading-relaxed">
              Приглашаем будущих абитуриентов и их родителей посетить наш колледж, познакомиться с преподавателями, материально-технической базой и условиями поступления.
            </p>
          </div>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-100 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-primary-900 font-display flex items-center gap-3">
            <CalendarDays className="w-7 h-7 text-accent-500" />
            График проведения в 2025 году
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-4 md:p-6 text-sm font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100 w-1/4">Дата проведения</th>
                <th className="p-4 md:p-6 text-sm font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100 w-1/6">Время</th>
                <th className="p-4 md:p-6 text-sm font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100 w-1/3">Место проведения</th>
                <th className="p-4 md:p-6 text-sm font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100 w-1/4">Ответственные</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {schedule.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="p-4 md:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <CalendarDays className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-primary-900">{item.date}</span>
                    </div>
                  </td>
                  <td className="p-4 md:p-6">
                    <div className="flex items-center gap-2 text-slate-600 font-medium">
                      <Clock className="w-4 h-4 text-accent-500" />
                      {item.time}
                    </div>
                  </td>
                  <td className="p-4 md:p-6">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-rose-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 leading-snug">{item.location}</span>
                    </div>
                  </td>
                  <td className="p-4 md:p-6">
                    <div className="flex items-start gap-2">
                      <User className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-600 leading-snug">{item.responsible}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default OpenDays;
