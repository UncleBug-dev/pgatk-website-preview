import React from 'react';
import { Target, CheckCircle2, Navigation, FileText, Heart, Shield, Users, Leaf, Activity, Brain, Briefcase, GraduationCap } from 'lucide-react';

const Ideology: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-8">
      
      {/* Header section */}
      <div className="bg-gradient-to-r from-rose-600 to-red-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl backdrop-blur-sm border border-white/30 hidden md:block group-hover:rotate-12 transition-transform">
            <Heart className="w-16 h-16 text-white" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Идеологическая и воспитательная работа</h2>
            <p className="text-lg text-rose-100 max-w-3xl leading-relaxed">
              Цели и задачи, актуальные направления работы, организация досуга и формирование культуры учащихся колледжа.
            </p>
          </div>
        </div>
      </div>

      {/* Goal Section */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
          <Target className="w-48 h-48" />
        </div>
        <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3 relative z-10">
          <Target className="w-6 h-6 text-rose-600" />
          Главная цель
        </h3>
        <p className="text-lg text-slate-700 leading-relaxed relative z-10 bg-rose-50/50 p-6 rounded-xl border border-rose-100">
          <span className="font-bold text-rose-800">Создание условий</span> для формирования гражданских качеств и патриотических чувств обучающихся; развитие социально зрелой, творческой личности; усвоение учащимися гуманистических ценностей, идеологии белорусского государства, культурных и духовных традиций белорусского народа.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Tasks */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-rose-600" />
            Задачи
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
              <span className="text-slate-700">Продолжить работу по формированию у учащихся гражданско-патриотических качеств, способствующих активной жизненной позиции.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
              <span className="text-slate-700">Развивать информационное пространство через использование компьютерных технологий, наполнение сайта колледжа методическими материалами, участие в интернет-конференциях, выставках и т.д.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
              <span className="text-slate-700">Содействовать сохранению и улучшению здоровья учащихся и работников через пропаганду здорового образа жизни, применение здоровьесберегающих технологий, обеспечение возможности оздоровления.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
              <span className="text-slate-700">Усилить индивидуально-профилактическую работу с учащимися с целью повышения результативности обучения; развития мотивации к продолжению обучения; профилактики совершения противоправных поступков.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
              <span className="text-slate-700">Содействовать формированию у обучающихся культуры семейных отношений.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
              <span className="text-slate-700">Усилить работу по повышению стрессоустойчивости подростков.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
              <span className="text-slate-700">Создать условия для совершенствования профориентационной работы в учреждении образования, в том числе в шестой день.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></div>
              <span className="text-slate-700">Содействовать включению педагогов в творческий поиск с целью совершенствования педагогического мастерства.</span>
            </li>
          </ul>
        </div>

        {/* Directions */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <Navigation className="w-6 h-6 text-rose-600" />
            Актуальные направления работы
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/30 flex items-center gap-3 hover:bg-rose-50 transition-colors">
              <Shield className="w-5 h-5 text-rose-600 shrink-0" />
              <span className="text-sm font-medium text-slate-800">Идеологическое, гражданское и патриотическое воспитание</span>
            </div>
            <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/30 flex items-center gap-3 hover:bg-rose-50 transition-colors">
              <Shield className="w-5 h-5 text-amber-600 shrink-0" />
              <span className="text-sm font-medium text-slate-800">Военно-патриотическое воспитание</span>
            </div>
            <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/30 flex items-center gap-3 hover:bg-rose-50 transition-colors">
              <Heart className="w-5 h-5 text-pink-600 shrink-0" />
              <span className="text-sm font-medium text-slate-800">Духовно-нравственное воспитание</span>
            </div>
            <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/30 flex items-center gap-3 hover:bg-rose-50 transition-colors">
              <Leaf className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-medium text-slate-800">Экологическое воспитание</span>
            </div>
            <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/30 flex items-center gap-3 hover:bg-rose-50 transition-colors">
              <Activity className="w-5 h-5 text-sky-600 shrink-0" />
              <span className="text-sm font-medium text-slate-800">Культура безопасности и здоровый образ жизни</span>
            </div>
            <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/30 flex items-center gap-3 hover:bg-rose-50 transition-colors">
              <Brain className="w-5 h-5 text-purple-600 shrink-0" />
              <span className="text-sm font-medium text-slate-800">Воспитание психологической культуры</span>
            </div>
            <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/30 flex items-center gap-3 hover:bg-rose-50 transition-colors">
              <Briefcase className="w-5 h-5 text-indigo-600 shrink-0" />
              <span className="text-sm font-medium text-slate-800">Экономическое, трудовое и проф. воспитание</span>
            </div>
            <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/30 flex items-center gap-3 hover:bg-rose-50 transition-colors">
              <Users className="w-5 h-5 text-teal-600 shrink-0" />
              <span className="text-sm font-medium text-slate-800">Взаимодействие с семьей</span>
            </div>
            <div className="p-4 rounded-xl border border-rose-100 bg-rose-50/30 flex items-center gap-3 hover:bg-rose-50 transition-colors sm:col-span-2">
              <GraduationCap className="w-5 h-5 text-blue-600 shrink-0" />
              <span className="text-sm font-medium text-slate-800">Социально-педагогическая поддержка учащихся и оказание им психологической помощи</span>
            </div>
          </div>
        </div>

      </div>

      {/* Organization Block */}
      <div className="bg-gradient-to-br from-slate-800 to-primary-900 rounded-2xl p-8 md:p-10 text-white shadow-lg">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-rose-300">
          <FileText className="w-6 h-6" />
          Организация работы
        </h3>
        <div className="space-y-4 text-slate-200 text-justify leading-relaxed">
          <p>
            Планирование и организация социальной, воспитательной и идеологической работы в колледже осуществляется в соответствии с <strong>Кодексом Республики Беларусь об образовании</strong>, Государственной программой «Образование и молодежная политика» на 2021–2025 годы, Программой непрерывного воспитания детей и учащейся молодежи на 2021–2025 годы.
          </p>
          <p>
            Большое значение в реализации задач воспитания имеет использование новейших педагогических, воспитательных и информационных технологий, культурных традиций и ценностей белорусского народа, достижений мировой культуры. Одним из важнейших аспектов деятельности в колледже является формирование системы организации досуга молодёжи, которая включает в себя работу объединений по интересам и факультативных занятий, проведение воспитательных мероприятий во внеучебное время и шестой день.
          </p>
          <p>
            В нашем учреждении образования работают <strong>творческие, активные, грамотные специалисты</strong>, владеющие современными средствами, формами и методами организации социальной, воспитательной и идеологической работы, открытые к общению и сотрудничеству.
          </p>
        </div>
      </div>

      {/* Normative Documents Links */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-primary-900 mb-6 border-b border-slate-100 pb-4">
          Нормативные правовые акты
        </h3>
        <ul className="space-y-3">
          <li>
            <a href="https://www.grsu.by/images/Documents/Metodicheskiy%20kabinet/35149_2.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-rose-600 transition-colors group">
              <FileText className="w-5 h-5 text-slate-400 group-hover:text-rose-500 shrink-0" />
              <span className="font-medium">Кодекс Республики Беларусь об образовании</span>
            </a>
          </li>
          <li>
            <a href="https://www.grsu.by/images/Documents/Metodicheskiy%20kabinet/30483_1.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-rose-600 transition-colors group">
              <FileText className="w-5 h-5 text-slate-400 group-hover:text-rose-500 shrink-0" />
              <span className="font-medium">Стратегия развития государственной молодежной политики Республики Беларусь до 2030 года</span>
            </a>
          </li>
          <li>
            <a href="https://www.grsu.by/images/Documents/Metodicheskiy%20kabinet/30483_2_compressed.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-rose-600 transition-colors group">
              <FileText className="w-5 h-5 text-slate-400 group-hover:text-rose-500 shrink-0" />
              <span className="font-medium">Государственная программа "Образование и молодежная политика" на 2021-2025 годы</span>
            </a>
          </li>
          <li>
            <a href="https://www.grsu.by/images/Documents/Metodicheskiy%20kabinet/30483_3.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-rose-600 transition-colors group">
              <FileText className="w-5 h-5 text-slate-400 group-hover:text-rose-500 shrink-0" />
              <span className="font-medium">Программа непрерывного воспитания детей и учащейся молодежи на 2021-2025 годы</span>
            </a>
          </li>
          <li>
            <a href="https://www.grsu.by/images/Documents/Metodicheskiy%20kabinet/30483_4.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-rose-600 transition-colors group">
              <FileText className="w-5 h-5 text-slate-400 group-hover:text-rose-500 shrink-0" />
              <span className="font-medium">Программа развития студенческого спорта в Республике Беларусь на 2021-2024 годы</span>
            </a>
          </li>
          <li>
            <a href="https://www.grsu.by/images/Documents/Metodicheskiy%20kabinet/3819_1.docx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-rose-600 transition-colors group">
              <FileText className="w-5 h-5 text-slate-400 group-hover:text-rose-500 shrink-0" />
              <span className="font-medium">Концепция непрерывного воспитания детей и учащейся молодежи в Республике Беларусь</span>
            </a>
          </li>
          <li>
            <a href="https://www.grsu.by/images/Documents/Metodicheskiy%20kabinet/38852_0.RTF" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-rose-600 transition-colors group">
              <FileText className="w-5 h-5 text-slate-400 group-hover:text-rose-500 shrink-0" />
              <span className="font-medium">Закон Республики Беларусь от 07.12.2009 № 65-З «Об основах государственной молодежной политики»</span>
            </a>
          </li>
          <li>
            <a href="https://pravo.by/document/?guid=3871&p2=2/1050" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 hover:text-rose-600 transition-colors group">
              <FileText className="w-5 h-5 text-slate-400 group-hover:text-rose-500 shrink-0" />
              <span className="font-medium">Закон Республики Беларусь от 05.07.2004 № 301-3 «О государственных символах Республики Беларусь»</span>
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Ideology;
