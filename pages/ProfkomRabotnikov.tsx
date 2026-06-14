import React from 'react';
import { Users, Phone, UserCheck, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';

const ProfkomRabotnikov: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-8">
      
      {/* Header Profile Section */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        
        <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative z-10 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">
          <img 
            src="/images/Ideologiy/Organozacii/Pashkevich-jpg.webp" 
            alt="Пашкевич Владимир Георгиевич" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/f8fafc/94a3b8?text=Фото';
            }}
          />
        </div>
        
        <div className="flex-1 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-50 text-accent-700 font-medium text-sm mb-4">
            <Users className="w-4 h-4" />
            <span>Профсоюзный комитет</span>
          </div>
          
          <h2 className="text-3xl font-display font-bold text-primary-900 mb-2">
            Пашкевич Владимир Георгиевич
          </h2>
          <p className="text-lg text-slate-600 mb-6 font-medium">
            Председатель профсоюзного комитета ППО работников
          </p>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <a href="tel:+375291317540" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-accent-500 hover:text-accent-600 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-accent-500" />
              </div>
              <span className="font-bold text-slate-700 group-hover:text-accent-600">+375 (29) 131-75-40</span>
            </a>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
        <p className="text-lg text-slate-700 leading-relaxed text-justify">
          Первичная профсоюзная организация работников учреждения образования «Пинский государственный аграрно-технический колледж имени А.Е.Клещева» входит в состав Белорусского профсоюза работников агропромышленного комплекса.
        </p>
        <div className="mt-4 flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
          <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center shrink-0">
            <UserCheck className="w-6 h-6 text-accent-600" />
          </div>
          <p className="text-slate-700 font-medium">
            В первичной профсоюзной организации состоит <span className="font-bold text-primary-900">176</span> работников колледжа, что составляет <span className="font-bold text-accent-600 text-lg">96%</span> от общего числа работников.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Composition */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-accent-500" />
            Состав профсоюзного комитета
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-accent-200 hover:shadow-md transition-all">
              <p className="text-sm text-slate-500 mb-1">Председатель профкома</p>
              <p className="font-bold text-primary-900">Пашкевич Владимир Георгиевич</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-accent-200 hover:shadow-md transition-all">
              <p className="text-sm text-slate-500 mb-1">Заместитель председателя профкома</p>
              <p className="font-bold text-primary-900">Богнат Андрей Сергеевич</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-accent-200 hover:shadow-md transition-all">
              <p className="text-sm text-slate-500 mb-1">Казначей профкома</p>
              <p className="font-bold text-primary-900">Пашкевич Алла Владимировна</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-accent-200 hover:shadow-md transition-all">
              <p className="text-sm text-slate-500 mb-1">Председатель комиссии по охране труда</p>
              <p className="font-bold text-primary-900">Богданович Александр Александрович</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-accent-200 hover:shadow-md transition-all">
              <p className="text-sm text-slate-500 mb-1">Ответственная за культурно-массовую работу</p>
              <p className="font-bold text-primary-900">Козел Валентина Фёдоровна</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-accent-200 hover:shadow-md transition-all">
              <p className="text-sm text-slate-500 mb-1">Ответственный за спортивно-массовую работу</p>
              <p className="font-bold text-primary-900">Наварич Валерий Адамович</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-accent-200 hover:shadow-md transition-all">
              <p className="text-sm text-slate-500 mb-1">Ответственная за учет профсоюзных взносов</p>
              <p className="font-bold text-primary-900">Дубновицкая Наталья Андреевна</p>
            </div>
          </div>
        </div>

        {/* Directions */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <HeartHandshake className="w-6 h-6 text-accent-500" />
            Направления работы
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white border border-accent-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-500" />
              </div>
              <span className="text-slate-700">Реализация принципа партнёрства с Нанимателем в решении наиболее важных вопросов работы трудового коллектива.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white border border-accent-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Shield className="w-4 h-4 text-accent-500" />
              </div>
              <span className="text-slate-700">Защита трудовых, социально-экономических прав и законных интересов членов профсоюза.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white border border-accent-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-500" />
              </div>
              <span className="text-slate-700">Правовое просвещение членов профсоюзной организации.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white border border-accent-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-500" />
              </div>
              <span className="text-slate-700">Разработка и согласование мероприятий по вопросам охраны труда и соблюдением законодательства о труде.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white border border-accent-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-500" />
              </div>
              <span className="text-slate-700">Создание благоприятных условий труда работников.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white border border-accent-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-500" />
              </div>
              <span className="text-slate-700">Использование разнообразных форм культурно-массовой и спортивно-оздоровительной работы.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white border border-accent-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-500" />
              </div>
              <span className="text-slate-700">Повышение уровня жизни и благосостояния членов профсоюза.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white border border-accent-200 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-500" />
              </div>
              <span className="text-slate-700">Материальное и моральное стимулирование работников.</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-white rounded-xl border border-accent-100 shadow-sm mt-4">
              <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center shrink-0 mt-0.5">
                <HeartHandshake className="w-4 h-4 text-accent-600" />
              </div>
              <span className="text-slate-700 font-medium">Работа с ветеранами. Вторичная занятость - организация деятельности добровольческих отрядов, профильных лагерей, индивидуальной занятости молодежи, стимулирование развития предпринимательства в молодежной среде.</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default ProfkomRabotnikov;
