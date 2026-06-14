import React from 'react';
import { Briefcase, Coins, Users, Rocket, Target, ShieldCheck, HeartPulse, GraduationCap, MapPin, Calendar, FileText, CheckCircle2 } from 'lucide-react';

const LaborHQ: React.FC = () => {
  const whatIsIt = [
    { icon: <Coins className="w-5 h-5 text-amber-500" />, text: "возможность заработать" },
    { icon: <GraduationCap className="w-5 h-5 text-emerald-500" />, text: "дополнительная специальность или первые навыки профессиональной деятельности" },
    { icon: <Users className="w-5 h-5 text-blue-500" />, text: "атмосфера неформального общения" },
    { icon: <Target className="w-5 h-5 text-rose-500" />, text: "обретение уверенности в собственных силах" },
    { icon: <Rocket className="w-5 h-5 text-indigo-500" />, text: "практическая школа лидерства и работы в команде" }
  ];

  const advantages = [
    { icon: <HeartPulse className="w-5 h-5 text-teal-600" />, text: "бесплатное прохождение медицинского осмотра" },
    { icon: <ShieldCheck className="w-5 h-5 text-teal-600" />, text: "контроль за соблюдением прав трудящихся учащихся" },
    { icon: <Briefcase className="w-5 h-5 text-teal-600" />, text: "только официальное трудоустройство" },
    { icon: <Coins className="w-5 h-5 text-teal-600" />, text: "увеличение заработной платы (освобождение от подоходного налога)" },
    { icon: <Users className="w-5 h-5 text-teal-600" />, text: "финансирование досуговой деятельности в студенческом отряде" }
  ];

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-12">
      
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Ideologiy/ShtabTrDel/stud-otryady.webp" 
            alt="Студотряды" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-8 md:p-12 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-medium text-sm mb-6 backdrop-blur-sm">
            <Briefcase className="w-4 h-4" />
            <span>Штаб трудовых дел</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 leading-tight max-w-4xl">
            Ты активный? Целеустремленный? <br className="hidden md:block"/> Хочешь с пользой провести время и заработать?
          </h2>
          
          <p className="text-xl text-slate-300 max-w-2xl font-medium mb-10">
            Продолжая славные традиции студотрядовского движения Комсомола Беларуси, мы формируем сервисные студенческие отряды.
          </p>
          
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-70 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold px-8 py-4 rounded-xl text-xl shadow-lg border border-emerald-400/50 uppercase tracking-wide">
              Запишись в студенческий отряд!
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: What is it */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
              <Users className="w-32 h-32" />
            </div>
            
            <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              Студенческий отряд – это:
            </h3>
            
            <div className="space-y-4 relative z-10">
              {whatIsIt.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-slate-700 font-medium leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
            <h3 className="text-xl font-bold text-teal-900 mb-6 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-teal-600" />
              Преимущества трудоустройства через штаб
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((adv, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white/60 rounded-xl border border-teal-100/50">
                  <div className="mt-0.5 shrink-0">
                    {adv.icon}
                  </div>
                  <span className="text-teal-800 text-sm leading-snug font-medium">{adv.text}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Column: Info & Action */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white p-4 flex items-center justify-center aspect-square">
              <img 
                src="/images/Ideologiy/ShtabTrDel/ShTD.webp" 
                alt="Логотип Штаб трудовых дел" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-square">
              <img 
                src="/images/Ideologiy/ShtabTrDel/ShTD-1.webp" 
                alt="Студотряд" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600';
                }}
              />
            </div>
          </div>

          {/* Notice Block */}
          <div className="bg-slate-800 text-white rounded-2xl p-6 shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm leading-relaxed">Работа в составе студенческого отряда дисциплинирует и адаптирует к жизни!</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm leading-relaxed">Если тебе нужна работа в свободное от учёбы время, обращайся в Штаб трудовых дел и будь уверен – тебе помогут трудоустроиться!</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm leading-relaxed">Штаб создает и ведет базу данных нуждающихся в трудоустройстве.</span>
              </li>
            </ul>
          </div>

          {/* Action Call */}
          <div className="bg-white rounded-2xl p-8 border border-emerald-200 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            
            <h3 className="text-xl font-bold text-primary-900 mb-4 relative z-10">
              Как стать бойцом отряда?
            </h3>
            
            <div className="space-y-4 relative z-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Куда обращаться</p>
                  <p className="text-slate-800 font-medium">аудитория 222 (2-ой этаж)<br/>учебный корпус № 1</p>
                  <p className="text-sm text-slate-600 mt-1">к педагогу-организатору <span className="font-bold">Козубовской А.В.</span></p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Когда</p>
                  <p className="text-slate-800 font-medium">В любой рабочий день</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider font-bold mb-1">Что нужно</p>
                  <p className="text-slate-800 font-medium">Написать заявление</p>
                  <p className="text-sm text-rose-600 font-bold mt-1">При себе иметь паспорт!</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default LaborHQ;
