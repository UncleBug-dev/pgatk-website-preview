import React from 'react';
import { Users, Target, BookOpen, ShieldCheck, Scale, Award, Flag, ChevronRight, FileText } from 'lucide-react';

export default function StudentSelfGov() {
  const tasks = [
    'Содействовать гражданской, социальной и профессиональной самореализации',
    'Формировать гражданскую культуру и активную гражданскую позицию',
    'Формировать предложения по повышению качества образовательного процесса',
    'Повышать сознательность учащихся и бережное отношение к имуществу',
    'Содействовать реализации общественно значимых молодежных инициатив',
    'Организовывать мероприятия, конференции, круглые столы, выставки',
    'Помогать в адаптации первокурсникам',
    'Информировать учащихся о деятельности органов самоуправления',
  ];

  const principles = [
    'Взаимопомощь и доверие',
    'Стремление к развитию',
    'Равноправие всех обучающихся',
    'Коллегиальность принятия решений',
    'Приоритетность прав и интересов',
    'Гуманность к каждой личности',
    'Добровольность и сотрудничество',
    'Чередование творческих дел',
    'Добросовестность в выполнении поручений',
  ];

  const documents = [
    'УСТАВ КОЛЛЕДЖА',
    'ПРАВИЛА ВНУТРЕННЕГО РАСПОРЯДКА',
    'ПОЛОЖЕНИЕ ОБ УЧЕНИЧЕСКОМ САМОУПРАВЛЕНИИ',
    'ПОЛОЖЕНИЕ О КОНФЕРЕНЦИИ ОБУЧАЮЩИХСЯ',
    'ПРОГРАММА РАЗВИТИЯ УЧЕНИЧЕСКОГО САМОУПРАВЛЕНИЯ',
    'СОУПРАВЛЕНИЕ УЧАЩИХСЯ',
    'СТРУКТУРА САМОУПРАВЛЕНИЯ УЧЕБНОЙ ГРУППЫ',
    'СТРУКТУРА СОВЕТА УЧАЩИХСЯ',
    'СТРУКТУРА СОВЕТА УЧЕБНОЙ ГРУППЫ',
    'СТРУКТУРА УЧЕНИЧЕСКОГО САМОУПРАВЛЕНИЯ КОЛЛЕДЖА',
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans pt-12">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white overflow-hidden py-24 mb-12 rounded-3xl mx-4 lg:mx-8 shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-blue-100 font-medium">Молодежные инициативы</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Ученическое самоуправление
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto font-medium">
            "Будь активным, креативным, позитивным! <br /> Мы директору подмога, мы ведь сила! Можем много."
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Definition & Law */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-10 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Что это такое?</h3>
            <p className="text-slate-600 leading-relaxed text-justify">
              <strong>Ученическое самоуправление</strong> – форма реализации обучающимися права на участие в управлении образовательными организациями, предполагающее участие учеников в решении вопросов при организации учебно-воспитательного процесса совместно с педагогическим коллективом и администрацией учреждения.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-10 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
              <Scale className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Правовая основа</h3>
            <p className="text-slate-600 leading-relaxed text-justify mb-4">
              Развитие самоуправления консолидирует усилия преподавателей и учащихся в решении задач, поставленных перед колледжем. 
            </p>
            <p className="text-slate-600 leading-relaxed text-justify">
              Правовой основой деятельности являются: Закон «Об образовании в Республике Беларусь», Концепция и Программа непрерывного воспитания детей и учащейся молодежи на 2016-2020 годы, государственная программа «Образование и молодежная политика».
            </p>
          </div>
        </div>

        {/* Goal & Meaning */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-rose-500" />
                <h2 className="text-3xl font-bold text-slate-800">Наша Цель</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                Формирование саморазвивающейся, активной, самостоятельной личности на основе создания оптимальных условий для включения обучающихся в разнообразную содержательную коллективную деятельность, развитие её социальной активности и творчества.
              </p>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-amber-500" />
                <h2 className="text-3xl font-bold text-slate-800">Самоуправление – это:</h2>
              </div>
              <ul className="space-y-4">
                {[
                  'Необходимый компонент современного воспитания',
                  'Способ выражения личностных, творческих задатков',
                  'Радикальное средство совершенствования идейно-воспитательной работы',
                  'Фактор развития профессиональных качеств',
                  'Условие, способствующее социализации выпускников'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tasks and Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Tasks */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Задачи</h3>
            <ul className="space-y-4">
              {tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    {i + 1}
                  </div>
                  <span className="text-slate-600 leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Principles */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Принципы</h3>
            <div className="flex flex-wrap gap-3">
              {principles.map((principle, i) => (
                <span key={i} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl font-medium border border-indigo-100 shadow-sm">
                  {principle}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-6 border-b border-slate-100 pb-4">Функции системы</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Идейно-воспитательная', 'Коллективно-образующая', 'Социализирующая', 'Управленческая'].map((func, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="font-medium text-slate-700">{func}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Levels Structure */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Flag className="w-64 h-64" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-8 relative z-10">Уровни самоуправления</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Level 1 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-blue-500 text-white font-bold py-1 px-4 rounded-full shadow-md">
                1 Уровень
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">Индивидуальный</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-blue-500" /> Учащийся</li>
              </ul>
            </div>
            
            {/* Level 2 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-indigo-500 text-white font-bold py-1 px-4 rounded-full shadow-md">
                2 Уровень
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">Учебная группа</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-indigo-500" /> Собрание группы</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-indigo-500" /> Совет группы (актив)</li>
              </ul>
            </div>

            {/* Level 3 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative pt-12">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-emerald-500 text-white font-bold py-1 px-4 rounded-full shadow-md">
                3 Уровень
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">Колледж</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500" /> Ученическая конференция</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500" /> Старостат</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500" /> Профсоюзная организация</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-emerald-500" /> БРСМ</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dormitory & Final notes */}
        <div className="bg-amber-50 rounded-3xl shadow-sm border border-amber-100 p-8 md:p-12 mb-16 text-amber-900">
          <h3 className="text-2xl font-bold mb-4">Совет общежития</h3>
          <p className="text-lg leading-relaxed mb-6 text-justify">
            В учреждении образования создан также совет общежития, члены которого решают вопросы быта и досуга проживающих, обсуждают и оценивают работу старост этажей, выносят решения по вопросам поощрения и наказания учащихся. Ежегодно проводится смотр-конкурс на лучшую комнату, победители награждаются памятными сувенирами. Совет общежития еженедельно совершает рейд санитарного состояния.
          </p>
          <p className="text-lg leading-relaxed text-justify opacity-90">
            Работа педагогического коллектива по формированию навыков самоуправления способствует расширению кругозора будущего специалиста, усвоению новых знаний и активной гражданской позиции.
          </p>
        </div>

        {/* Documents */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <FileText className="w-7 h-7 text-slate-500" />
            Локальные нормативные правовые акты
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 hover:border-blue-400 hover:shadow-md transition-all cursor-default">
                <FileText className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="font-semibold text-slate-700 text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
