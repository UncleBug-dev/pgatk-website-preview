import React from 'react';
import { Users, CheckCircle2, GraduationCap, HeartHandshake, Home, Coins, Gift, HeartPulse } from 'lucide-react';

const ProfkomStudents: React.FC = () => {
  const responsibilities = [
    { icon: <Home className="w-5 h-5 text-indigo-500" />, text: "предоставление мест в общежитии" },
    { icon: <Coins className="w-5 h-5 text-indigo-500" />, text: "установление надбавок к стипендии" },
    { icon: <HeartHandshake className="w-5 h-5 text-indigo-500" />, text: "оказание и выплата материальной помощи (в т.ч. учащимся из малообеспеченных семей, учащимся-сиротам, инвалидам, учащимся, имеющим семью)" },
    { icon: <Users className="w-5 h-5 text-indigo-500" />, text: "организация культурно-массовых и спортивных мероприятий" },
    { icon: <GraduationCap className="w-5 h-5 text-indigo-500" />, text: "материальное поощрение лучших учащихся колледжа" },
    { icon: <Gift className="w-5 h-5 text-indigo-500" />, text: "ежегодное обеспечение новогодними подарками учащихся сирот, инвалидов, детей учащихся" },
    { icon: <HeartPulse className="w-5 h-5 text-indigo-500" />, text: "оздоровление" }
  ];

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-8">
      
      {/* Header Profile Section */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        
        <div className="w-48 md:w-56 aspect-[3/4] shrink-0 relative z-10 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">
          <img 
            src="/images/Ideologiy/_viber_2024-02-29_19-51-31-657.webp" 
            alt="Малыщик Татьяна Александровна" 
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/400x533/f8fafc/94a3b8?text=Фото';
            }}
          />
        </div>
        
        <div className="flex-1 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 font-medium text-sm mb-4">
            <Users className="w-4 h-4" />
            <span>Профсоюзный комитет учащихся</span>
          </div>
          
          <h2 className="text-3xl font-display font-bold text-primary-900 mb-2">
            Малыщик Татьяна Александровна
          </h2>
          <p className="text-lg text-slate-600 mb-6 font-medium">
            Председатель ППО учащихся
          </p>
        </div>
      </div>

      {/* Intro Stats */}
      <div className="bg-indigo-50/50 rounded-2xl p-8 border border-indigo-100">
        <p className="text-lg text-slate-700 leading-relaxed text-justify mb-4">
          Первичная профсоюзная организация УО «ПГАТК имени А.Е.Клещева» является самой большой общественной организацией учреждения образования.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
          <div className="w-20 h-20 rounded-full border-4 border-indigo-200 bg-white flex items-center justify-center shrink-0 shadow-sm">
            <span className="text-2xl font-black text-indigo-600">100%</span>
          </div>
          <div>
            <p className="font-bold text-primary-900 text-lg">Все учащиеся являются членами ППО!</p>
            <p className="text-slate-600">Профсоюз - это неполитическая молодежная организация, которая хорошо знает, а главное всегда защищает права учащихся.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Responsibilities */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-indigo-500" />
            Решение вопросов, согласовываемых с ППО:
          </h3>
          <p className="text-slate-500 mb-6 text-sm">Вопросы социальной защиты и поддержки, учебной деятельности, быта и досуга:</p>
          
          <div className="space-y-3">
            {responsibilities.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100 group">
                <div className="shrink-0 w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-slate-700 leading-snug pt-1">{item.text}{idx === responsibilities.length - 1 ? '.' : ';'}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Composition & Health Commission */}
        <div className="space-y-8">
          
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <Users className="w-32 h-32" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-3 relative z-10">
              <Users className="w-6 h-6 text-emerald-500" />
              Состав профкома ППО учащихся
            </h3>
            
            <div className="space-y-4 relative z-10">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                <span className="font-bold text-primary-900">Малыщик Татьяна Александровна</span>
                <span className="text-sm font-medium px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">председатель</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex justify-between items-center">
                <span className="font-bold text-primary-900">Козич Виктория Александровна</span>
                <span className="text-sm font-medium px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">казначей</span>
              </div>
            </div>
          </div>

          <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
              <HeartPulse className="w-8 h-8 text-rose-500" />
            </div>
            <p className="text-slate-700 leading-relaxed text-sm font-medium">
              <span className="font-bold text-rose-900 block mb-1">Комиссия по оздоровлению и санаторно-курортному лечению</span>
              ведет учет учащихся, нуждающихся в санаторно-курортном лечении, и предлагает путёвки в различные санатории Республики Беларусь.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfkomStudents;
