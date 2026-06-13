import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Printer, UserCircle, BookOpen, MessageSquare, FileText } from 'lucide-react';
import { MAIN_MENU } from '../constants';

const experiences = [
  {
    year: "2022",
    items: [
      {
        name: "Козич Виктория Александровна",
        role: "преподаватель общепрофессиональных дисциплин первой квалификационной категории",
        theme: "Формирование экономической культуры учащихся аграрно-технического колледжа на основе реализации междисциплинарных связей",
        form: "доклад, выступление на заседании цикловой комиссии общепрофессиональных дисциплин"
      }
    ]
  },
  {
    year: "2021",
    items: [
      {
        name: "Наварич Валерий Адамович",
        role: "преподаватель первой квалификационной категории",
        theme: "Формирование положительного отношения учащихся к военной службе при обучении дисциплине «Допризывная подготовка» на основе использования интерактивных методов и форм обучения",
        form: "доклад, выступление на заседании Педагогической мастерской в рамках мероприятий недели цикловой комиссии физической культуры и здоровья"
      },
      {
        name: "Володкевич Николай Григорьевич",
        role: "преподаватель первой квалификационной категории",
        theme: "Использование компьютерной анимации как средства активизации учебно-познавательной деятельности и повышения качественной успеваемости учащихся на лекционных занятиях по дисциплине «Мелиоративные, строительные и дорожные машины»",
        form: "доклад, выступление на заседании цикловой комиссии специальных дисциплин по специальности 2-74 06 04 «Техническое обеспечение мелиоративных и водохозяйственных работ»"
      }
    ]
  },
  {
    year: "2020",
    items: [
      {
        name: "Лозицкая Татьяна Олеговна",
        role: "преподаватель первой квалификационной категории",
        theme: "Развитие творческих способностей учащихся при обучении дисциплине «Диагностика и техническое обслуживание сельскохозяйственной техники» на основе использования самостоятельной и внеаудиторной работы.",
        form: "доклад, выступление на заседании цикловой комиссии специальных дисциплин по специальности 2-74 06 03 «Ремонтно-обслуживающее производство в сельском хозяйстве»"
      }
    ]
  },
  {
    year: "2019",
    items: [
      {
        name: "Долмат Татьяна Павловна",
        role: "преподаватель первой квалификационной категории",
        theme: "Формирование правовой компетенции учащихся аграрно-технического колледжа при обучении дисциплине «Основы права» на основе использования технологии развития критического мышления.",
        form: "доклад, выступление на заседании цикловой комиссии социально-гуманитарных дисциплин"
      },
      {
        name: "Демчук Татьяна Вячеславовна",
        role: "преподаватель первой квалификационной категории",
        theme: "Использование логико-смысловых моделей как средства совершенствования техники запоминания учебной информации на занятиях и при подготовке к обязательному экзамену по дисциплине «История Беларуси».",
        form: "доклад, выступление на заседании цикловой комиссии социально-гуманитарных дисциплин"
      }
    ]
  }
];

const PedagogicalExperience: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sidebarLinks = MAIN_MENU.find(item => item.label === "Методическая работа")?.submenu || [];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* --- HEADER --- */}
      <div className="bg-primary-900 text-white pt-10 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="hover:text-white transition-colors">Методическая работа</span>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold">Обобщение педагогического опыта</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Обобщение педагогического опыта
          </h1>
        </div>
      </div>

      {/* --- MAIN LAYOUT --- */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 relative z-20">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* --- SIDEBAR --- */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 order-1 lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden sticky top-28">
              <div className="bg-primary-900 px-5 py-4 border-b border-primary-800">
                <span className="text-white text-sm font-bold uppercase tracking-widest block">
                  Методическая работа
                </span>
              </div>
              <nav className="flex flex-col p-2">
                {sidebarLinks.map((link) => {
                  const isActive = link.href.includes('obobshchenie-pedagogicheskogo-opyta');
                  const isExternal = link.href.startsWith('http');
                  const LinkComponent = isExternal ? 'a' : Link;
                  const linkProps = isExternal ? { href: link.href, target: "_blank", rel: "noopener noreferrer" } : { to: link.href };
                  
                  const isFile = link.href.endsWith('.pdf') || link.href.endsWith('.doc') || link.href.endsWith('.docx') || link.href.includes('disk.yandex.com');

                  return (
                    <LinkComponent
                      key={link.href}
                      {...linkProps}
                      className={`group flex items-center justify-between px-4 py-2.5 mb-1 text-[15px] font-medium transition-all rounded-lg ${isActive ? 'text-primary-900 bg-slate-50 border-l-4 border-accent-500' : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600 border-l-4 border-transparent'}`}
                    >
                      <div className="flex items-center gap-2">
                        {isFile && <FileText className="w-4 h-4 text-accent-500" />}
                        <span>{link.label}</span>
                      </div>
                      {isActive && <ChevronRight className="w-4 h-4 text-accent-500" />}
                    </LinkComponent>
                  );
                })}
              </nav>

              {/* Admission Committee */}
              <div className="m-4 p-4 bg-primary-900 rounded-lg text-white text-center">
                <p className="text-xs text-accent-500 font-bold uppercase mb-2">Приемная комиссия</p>
                <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block">8 (0165) 30-06-88</a>
              </div>
            </div>
          </aside>

          {/* --- CONTENT --- */}
          <main className="flex-1 w-full order-2">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-slate-100 min-h-[600px]">
              
              <div className="flex justify-end gap-4 mb-6 print:hidden">
                <button className="flex items-center text-xs text-slate-400 hover:text-primary-900 gap-1 transition-colors" onClick={() => window.print()}>
                  <Printer className="w-4 h-4" /> Печать
                </button>
              </div>

              {/* Experience Timeline / Cards */}
              <div className="space-y-12">
                {experiences.map((block, idx) => (
                  <div key={idx} className="relative">
                    <h2 className="text-2xl font-bold text-primary-900 mb-6 pb-4 border-b border-slate-200 flex items-center gap-3">
                      <span className="bg-primary-100 text-primary-800 px-4 py-1.5 rounded-full text-lg font-bold">
                        {block.year}
                      </span>
                      год
                    </h2>
                    
                    <div className="space-y-6">
                      {block.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="bg-slate-50 rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                          
                          {/* Teacher Info */}
                          <div className="flex items-start gap-4 mb-5 pb-5 border-b border-slate-200">
                            <div className="p-3 bg-primary-100 rounded-full text-primary-700 shrink-0 mt-1">
                              <UserCircle className="w-7 h-7" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-primary-900">{item.name}</h3>
                              <p className="text-slate-500 mt-1 text-sm font-medium">{item.role}</p>
                            </div>
                          </div>

                          {/* Theme & Form */}
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <BookOpen className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                              <div>
                                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block mb-1">Тема</span>
                                <p className="text-slate-800 font-medium leading-relaxed">{item.theme}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <MessageSquare className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                              <div>
                                <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block mb-1">Форма обобщения опыта</span>
                                <p className="text-slate-700 leading-relaxed">{item.form}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </main>
        </div>
      </div>
      
      {/* PARTNERS BOTTOM */}
    </div>
  );
};

export default PedagogicalExperience;
