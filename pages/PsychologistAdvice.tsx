import React from 'react';
import { Lightbulb, CheckCircle, Quote } from 'lucide-react';

const tips = [
  "Узнай о своих индивидуальных способностях и склонностях больше, тогда ты будешь знать, к чему у тебя есть задатки (можно обратиться к педагогу-психологу своего учреждения образования, он подберет необходимые диагностические методики и даст доступную интерпретацию, полученных результатов);",
  "Изучи рынок труда: мир меняется и потребности людей также. Следовательно востребованность профессий в той или иной сфере изменчива;",
  "Выбери для себя наиболее привлекательные варианты профессий; изучи доступную информацию об этих профессиях; используй возможность попробовать себя в выбранной профессии – посещая кружки, секции, курсы;",
  "Определи лично для себя «плюсы» и «минусы» выбранных вариантов, так как каждый человек индивидуален и имея определенный набор личных качеств и способностей может достигнуть высоких результатов в такой сфере, в которой другому не под силу;",
  "Найди учреждение образования, которое поможет тебе получить соответствующие профессиональные знания, умения и навыки."
];

const PsychologistAdvice: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-12">
      {/* Intro section */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-shrink-0 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg">
            <Lightbulb className="w-12 h-12 text-yellow-300" />
          </div>
          <div>
            <div className="inline-block bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 backdrop-blur-md">
              Профориентация
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">Советы психолога по выбору профессии</h2>
            <p className="text-lg text-indigo-50 max-w-2xl leading-relaxed">
              Выбор профессии — это один из самых важных шагов в жизни. Следуй этим простым рекомендациям, чтобы сделать осознанный выбор.
            </p>
          </div>
        </div>
      </div>

      {/* Tips list */}
      <div className="grid grid-cols-1 gap-6">
        {tips.map((tip, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 flex gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              {idx + 1}
            </div>
            <p className="text-slate-700 text-lg leading-relaxed pt-2.5">
              {tip}
            </p>
          </div>
        ))}
      </div>

      {/* Motivational message & Quote */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="bg-accent-500 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <CheckCircle className="w-16 h-16 text-white mb-6 animate-bounce" />
          <h3 className="text-3xl md:text-4xl font-display font-bold">Дерзай!</h3>
          <p className="text-xl mt-4 font-medium opacity-90">И у тебя все получится!</p>
        </div>

        <div className="bg-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col justify-center relative">
          <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5" />
          <p className="text-xl md:text-2xl font-medium leading-relaxed italic relative z-10 text-slate-300">
            P.S. «Выберете себе работу по душе, и тогда вам не придется работать ни одного дня в своей жизни»
          </p>
          <div className="mt-8 flex items-center gap-4 relative z-10">
            <div className="w-12 h-1 bg-accent-500 rounded-full"></div>
            <p className="text-lg font-bold tracking-wider text-white">Конфуций</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychologistAdvice;
