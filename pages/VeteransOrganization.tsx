import React from 'react';
import { Award, Phone, Shield, Target, Users, CheckCircle2, HeartHandshake, Layers } from 'lucide-react';

const VeteransOrganization: React.FC = () => {
  const structure = [
    "общее собрание ветеранов",
    "совет ветеранов",
    "председатель первичной ветеранской организации",
    "заместитель председателя первичной ветеранской организации",
    "секретарь первичной ветеранской организации",
    "ревизор первичной ветеранской организации"
  ];

  const councilDuties = [
    "ведет персональный учет ветеранов",
    "проявляет заботу о ветеранах труда, одиноких и одиноко проживающих ветеранах",
    "содействует приобщению их к посильной трудовой и общественной деятельности",
    "осуществляет социальную защиту ветеранов, способствует улучшению их материального положения, обслуживания, жилищных условий",
    "приобщает их к общественной и посильной трудовой деятельности",
    "поддерживает мероприятия органов государственной власти",
    "принимает участие совместно с государственными органами и общественными объединениями в поддержании в надлежащем состоянии памятников боевой и трудовой славы, мест захоронений защитников Родины, увековечении их памяти",
    "участвует в патриотическом и нравственном воспитании молодежи",
    "защищает честь и достоинство своих членов и организации",
    "развивает и укрепляет единство ветеранского движения"
  ];

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-8">
      
      {/* Header Profile Section */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        
        <div className="w-48 md:w-56 aspect-[3/4] shrink-0 relative z-10 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">
          <img 
            src="/images/Ideologiy/Organozacii/Strelkova.webp" 
            alt="Стрелкова Татьяна Ивановна" 
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/400x533/f8fafc/94a3b8?text=Фото';
            }}
          />
        </div>
        
        <div className="flex-1 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 font-medium text-sm mb-4">
            <Award className="w-4 h-4" />
            <span>Ветеранская организация</span>
          </div>
          
          <h2 className="text-3xl font-display font-bold text-primary-900 mb-2">
            Стрелкова Татьяна Ивановна
          </h2>
          <p className="text-lg text-slate-600 mb-6 font-medium">
            Председатель первичной ветеранской организации
          </p>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <a href="tel:80165316239" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-amber-500" />
              </div>
              <span className="font-bold text-slate-700 group-hover:text-amber-600">8 (0165) 31-62-39</span>
            </a>
            <a href="tel:80165323747" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-amber-500" />
              </div>
              <span className="font-bold text-slate-700 group-hover:text-amber-600">8 (0165) 32-37-47</span>
            </a>
          </div>
        </div>
      </div>

      {/* Intro Stats */}
      <div className="bg-amber-50/50 rounded-2xl p-8 border border-amber-100 flex flex-col md:flex-row items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
          <Users className="w-8 h-8 text-amber-600" />
        </div>
        <p className="text-lg text-slate-700 leading-relaxed">
          Общественная первичная организация ветеранов (пенсионеров) труда, является некоммерческой организацией, образовалась в <span className="font-bold text-primary-900">апреле 1987 года</span>; общее количество ветеранов-пенсионеров составляет <span className="font-bold text-amber-600">90 человек</span>.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column */}
        <div className="space-y-8">
          
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-amber-200 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
              <Target className="w-32 h-32" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-3 relative z-10">
              <Target className="w-6 h-6 text-amber-500" />
              Миссия
            </h3>
            <p className="text-slate-700 relative z-10 leading-relaxed font-medium">
              Социальная защита бывших работников организации, защита их прав и законных интересов.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-amber-200 transition-colors">
             <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-32 h-32" />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-3 relative z-10">
              <HeartHandshake className="w-6 h-6 text-rose-500" />
              Цель и направления
            </h3>
            <div className="space-y-4 relative z-10">
              <div>
                <span className="font-bold text-slate-800 block mb-2">Цель деятельности:</span>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Защита гражданских, трудовых, социально-экономических прав ветеранов; предоставление юридической поддержки ветеранам и членам их семей; оказание помощи в налаживании медицинского и бытового обслуживания; просветительская деятельность, формирование у молодого поколения гражданско-патриотических чувств.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <span className="font-bold text-slate-800 block mb-2">Направление деятельности:</span>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Нравственно-патриотическое воспитание молодежи, приобщении ветеранов к общественной деятельности, их социальная поддержка.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 text-white shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <Layers className="w-32 h-32" />
            </div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10 border-b border-slate-700 pb-4">
              <Layers className="w-6 h-6 text-amber-400" />
              Структура
            </h3>
            <ul className="space-y-3 relative z-10">
              {structure.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></div>
                  <span className="text-slate-300 capitalize-first leading-snug text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right Column */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm h-full">
          <h3 className="text-2xl font-bold text-primary-900 mb-2 flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-500" />
            Совет ветеранов
          </h3>
          <p className="text-slate-500 mb-6 text-sm">в пределах своей компетенции и прав, предоставленных Уставом:</p>
          
          <div className="space-y-4">
            {councilDuties.map((duty, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 leading-snug">{duty};</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default VeteransOrganization;
