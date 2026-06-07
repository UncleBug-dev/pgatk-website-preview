import React from 'react';
import { Quote, GraduationCap, Award, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    author: "Владислав Кусько",
    text: "В приёмной комиссии очень приветливый персонал, чётко организована работа. Колледж выглядит обновлённым изнутри. Очень хорошие преподаватели, понятно и доступно объясняют.",
    icon: <MessageSquare className="w-6 h-6 text-accent-500" />
  },
  {
    author: "Михаил Макушик",
    subtitle: "Учился с 2016 по 2020 год",
    text: "Я учился в колледже им. А. Е. Клещева с 2016 по 2020 год. Хочу оставить положительный отзыв, преподаватели все хорошие, учебный процесс проходит с большим интересом, кабинеты просторные, хорошая учебная база. Если бы мне пришлось ещё раз выбрать колледж, то снова выбрал бы именно этот.",
    icon: <GraduationCap className="w-6 h-6 text-accent-500" />
  },
  {
    author: "Казанчук Ольга Юрьевна",
    subtitle: "Выпускница 2021 года",
    text: "Как выпускница УО «Пинского государственного аграрно-технического колледжа имени А.Е.Клещева» могу сказать, что очень рада тому, что поступила учится именно в этот колледж! Потому что здесь мне дали как теоретические, так и практические знания в сфере строительства. Положительными моментами обучения в колледже для меня был индивидуальный подход к каждому учащемуся, требовательность к подготовке и обширный спектр материала, который предоставляют преподаватели. Такое количество разнообразных видов практик готовит молодого специалиста к работе во всех сферах строительного производства. Могу сказать, что сама система обучения в колледже подразумевает большую работу над собой. Даже самые стеснительные студенты здесь раскрепощаются, становятся более открытыми, общительными и уверенными в себе людьми. Этот колледж стал для меня очень родным местом, и расстаться с ним было очень тяжело. Жизнь в колледже была настолько насыщенная, что года обучения пролетели незаметно. Поэтому, когда я окончила обучение, то смогла остаться здесь же и работать. Передавать полученные знания следующим поколениям в роли мастера производственного обучения. И теперь, уже в качестве молодого специалиста я могу уверенно, с хорошими базовыми знаниями влиться в рабочий процесс. Преподавателям хочу сказать отдельное спасибо за добро, заботу, тепло, за то, что всегда верили в нас, поддерживали, не давая опустить руки в трудную минуту, а самое главное за ваше огромное терпение. Большое спасибо!",
    icon: <GraduationCap className="w-6 h-6 text-accent-500" />
  },
  {
    author: "Дмитрий Наливайко",
    subtitle: "Выпускник 2012 года",
    text: "За полученные знания огромная благодарность! Качество образования на высоком уровне. Высокая квалификация преподавателей и хорошая образовательная программа дали возможность наработать большую базу знаний и умений. То, чему нас научили, реально применяю на практике.",
    icon: <GraduationCap className="w-6 h-6 text-accent-500" />
  }
];

const kachnovich = {
  author: "Кахнович Геннадий Иосифович",
  subtitle: "Выпускник 1966 года",
  images: [
    "/images/Abiturientu/2022/Kachnovich.gif",
    "/images/Abiturientu/2022/PismoKachnovich.jpg"
  ]
};

const YoungSpecialists: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-12">
      {/* Intro section */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30">
            <Award className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-bold uppercase tracking-wider text-white">Отзывы</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">Из уст молодых специалистов</h2>
          <p className="text-lg text-teal-50 max-w-2xl leading-relaxed">
            Реальные истории и впечатления наших выпускников, которые уже применяют полученные знания на практике и строят свою профессиональную карьеру.
          </p>
        </div>
      </div>

      {/* Testimonials list */}
      <div className="grid grid-cols-1 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-100 -z-0" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 shadow-sm">
                  {testimonial.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-900 font-display">{testimonial.author}</h3>
                  {testimonial.subtitle && (
                    <p className="text-accent-600 font-medium text-sm">{testimonial.subtitle}</p>
                  )}
                </div>
              </div>
              
              <div className="text-slate-600 text-lg leading-relaxed italic border-l-4 border-accent-500 pl-6 space-y-4">
                {testimonial.text.split('\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Highlight: Kachnovich */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 border border-white/20 backdrop-blur-sm">
            <Award className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{kachnovich.author}</h3>
          <p className="text-accent-400 font-bold uppercase tracking-wider">{kachnovich.subtitle}</p>
          <p className="text-slate-400 mt-4 max-w-2xl">
            Мы гордимся нашими выпускниками, чьи успехи сквозь десятилетия подтверждают высокое качество образования в нашем колледже.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {kachnovich.images.map((src, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl group">
              <img 
                src={src} 
                alt={`${kachnovich.author} фото ${idx + 1}`} 
                className="w-full h-auto object-contain bg-slate-800 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default YoungSpecialists;
