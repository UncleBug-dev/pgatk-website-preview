import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Printer, FileText } from 'lucide-react';
import { MAIN_MENU } from '../constants';

const scheduleData = [
  { commission: "Общеобразовательных предметов", time: "Май", chairman: "Я.И. Петрович" },
  { commission: "Общепрофессиональных предметов", time: "Декабрь", chairman: "В.А. Козич" },
  { commission: "Физической культуры и здоровья", time: "Июнь", chairman: "В.М. Сукач" },
  { commission: "Специальных предметов по специальностям 5-04-0732-01 «Строительство зданий и сооружений» и 5-04-0732-08 «Строительство и эксплуатация автомобильных дорог»", time: "Октябрь", chairman: "С.М. Пикула" },
  { commission: "Специальных предметов по специальности 5-04-0811-03 «Мелиорация земель»", time: "Февраль", chairman: "М.И. Бурачевская" },
  { commission: "Специальных предметов по специальности 5-04-0812-01 «Техническое обслуживание и ремонт сельскохозяйственной техники»", time: "Март", chairman: "Т.О. Лозицкая" },
  { commission: "Специальных предметов по специальности 5-04-0715-20 «Техническая эксплуатация подъемно-транспортных, дорожно-строительных машин и оборудования»", time: "Ноябрь", chairman: "Н.Г. Володкевич" },
  { commission: "Мастеров производственного обучения", time: "Апрель", chairman: "А.С. Богнат" }
];

const CyclicCommissionsSchedule: React.FC = () => {
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
            <span className="text-accent-500 font-bold">График недель цикловых комиссий</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            График проведения недель цикловых комиссий на 2024/2025 учебный год
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
                  const isActive = link.href.includes('grafik-provedeniya-nedel-tsiklovykh-komissij');
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
            <div className="bg-white rounded-xl shadow-xl p-8 border border-slate-100 min-h-[600px] overflow-hidden">
              
              <div className="flex justify-end items-center mb-8 pb-6 border-b border-slate-200">
                <button className="flex items-center shrink-0 text-xs text-slate-400 hover:text-primary-900 gap-1 transition-colors print:hidden" onClick={() => window.print()}>
                  <Printer className="w-4 h-4" /> Печать
                </button>
              </div>

              {/* Table wrapper for responsive scrolling */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-primary-50 text-primary-900 text-[15px] font-bold border-b border-primary-100">
                      <th className="p-4 w-12 text-center border-r border-primary-100">№ п/п</th>
                      <th className="p-4 border-r border-primary-100">Название цикловых комиссий</th>
                      <th className="p-4 border-r border-primary-100 w-32 text-center">Время проведения</th>
                      <th className="p-4 w-48 text-center">Председатель цикловой комиссии</th>
                    </tr>
                  </thead>
                  <tbody className="text-[15px] text-slate-700">
                    {scheduleData.map((row, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                      >
                        <td className="p-4 text-center font-bold text-slate-400 border-r border-slate-100">{index + 1}</td>
                        <td className="p-4 font-bold text-primary-900 border-r border-slate-100">{row.commission}</td>
                        <td className="p-4 text-center font-semibold text-accent-600 border-r border-slate-100">
                          <span className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full whitespace-nowrap">
                            {row.time}
                          </span>
                        </td>
                        <td className="p-4 text-center font-medium">{row.chairman}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </main>
        </div>
      </div>
      
      {/* PARTNERS BOTTOM */}
    </div>
  );
};

export default CyclicCommissionsSchedule;
