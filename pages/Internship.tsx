import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Printer, FileText } from 'lucide-react';
import { MAIN_MENU } from '../constants';

const internships = [
  {
    name: "БОГНАТ Андрей Сергеевич",
    role: "Преподаватель специальных предметов",
    disciplines: "Нормирование точности и технические измерения, Ремонт мелиоративных, строительных и дорожных машин",
    period: "Ноябрь 2024"
  },
  {
    name: "БУРАЧЕВСКАЯ Мария Ивановна",
    role: "Преподаватель специальных предметов",
    disciplines: "Технология и организация мелиоративных и водохозяйственных работ, Мелиоративные системы и сооружения на них",
    period: "Ноябрь 2025"
  },
  {
    name: "ВОЛОДКЕВИЧ Николай Григорьевич",
    role: "Преподаватель специальных предметов",
    disciplines: "Строительные машины и оборудование, Мелиоративные, строительные и дорожные машины, Тракторы",
    period: "Февраль 2025"
  },
  {
    name: "КУЛЕШ Елена Ананьевна",
    role: "Преподаватель общепрофессиональных предметов",
    disciplines: "Охрана труда",
    period: "Июнь 2025"
  },
  {
    name: "ЛОЗИЦКАЯ Татьяна Олеговна",
    role: "Преподаватель специальных предметов",
    disciplines: "Диагностика и техническое обеспечение сельскохозяйственной техники, Основы организации технического сервиса",
    period: "Июнь 2024"
  },
  {
    name: "ЛОЗИЦКИЙ Дмитрий Иванович",
    role: "Преподаватель специальных предметов",
    disciplines: "Правила дорожного движения, Диагностика и техническое обеспечение сельскохозяйственной техники",
    period: "Июнь 2024"
  },
  {
    name: "РЫЖКОВЕЦ Виктория Леонидовна",
    role: "Преподаватель общепрофессиональных и специальных предметов",
    disciplines: "Геология и грунтоведение, Гидрология и гидрометрия, Геология, гидрогеология и мелиоративные изыскания",
    period: "Ноябрь 2025"
  },
  {
    name: "ФИЛИМОНОВ Владимир Михайлович",
    role: "Преподаватель специальных предметов",
    disciplines: "Ремонт с/х техники, Техническое обеспечение процессов в животноводстве",
    period: "Июнь 2024"
  },
  {
    name: "ФОНОБРОВИЧ Денис Валерьевич",
    role: "Преподаватель общепрофессиональных предметов",
    disciplines: "Организация строительного производства, Инженерная графика",
    period: "Ноябрь 2025"
  },
  {
    name: "ШПАКОВСКАЯ Ольга Алексеевна",
    role: "Преподаватель специальных предметов",
    disciplines: "Машины и оборудование в растениеводстве, Основы с/х производства, С/х машины",
    period: "Июнь 2024"
  },
  {
    name: "САТИШУР Сергей Степанович",
    role: "Мастер производственного обучения",
    disciplines: "Индивидуальное обучение вождению автомобилей",
    period: "Июль 2025"
  },
  {
    name: "КАЗАНЧУК Ольга Юрьевна",
    role: "Мастер производственного обучения",
    disciplines: "Общестроительные работы",
    period: "Апрель 2024"
  },
  {
    name: "КУКЛЕВА Анастасия Юрьевна",
    role: "Мастер производственного обучения",
    disciplines: "Общестроительные работы",
    period: "Май 2024"
  },
  {
    name: "ЛЕМЕШЕВСКИЙ Игорь Александрович",
    role: "Мастер производственного обучения",
    disciplines: "Общестроительные работы",
    period: "Октябрь 2024"
  }
];

const Internship: React.FC = () => {
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
            <span className="text-accent-500 font-bold">Стажировка</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Стажировка
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
                  const isActive = link.href.includes('stazhirovka');
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
              
              <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-6">
                <h2 className="text-xl lg:text-2xl font-bold text-primary-900 leading-tight">
                  План направления мастеров производственного обучения и преподавателей дисциплин профессионального компонента учебного плана для прохождения стажировки в организациях на 2021-2025 годы
                </h2>
                <button className="flex items-center shrink-0 text-xs text-slate-400 hover:text-primary-900 gap-1 transition-colors print:hidden ml-4" onClick={() => window.print()}>
                  <Printer className="w-4 h-4" /> Печать
                </button>
              </div>

              {/* Table wrapper for responsive scrolling */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-primary-50 text-primary-900 text-sm font-bold border-b border-primary-100">
                      <th className="p-4 w-12 text-center border-r border-primary-100">№</th>
                      <th className="p-4 border-r border-primary-100">Ф.И.О. стажера</th>
                      <th className="p-4 border-r border-primary-100">Должность</th>
                      <th className="p-4 border-r border-primary-100">Преподаваемые дисциплины</th>
                      <th className="p-4 w-32 text-center">Период стажировки</th>
                    </tr>
                  </thead>
                  <tbody className="text-[15px] text-slate-700">
                    {internships.map((intern, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                      >
                        <td className="p-4 text-center font-bold text-slate-400 border-r border-slate-100">{index + 1}</td>
                        <td className="p-4 font-bold text-primary-900 border-r border-slate-100">{intern.name}</td>
                        <td className="p-4 border-r border-slate-100">{intern.role}</td>
                        <td className="p-4 border-r border-slate-100">{intern.disciplines}</td>
                        <td className="p-4 text-center font-semibold text-accent-600">
                          <span className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full whitespace-nowrap">
                            {intern.period}
                          </span>
                        </td>
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

export default Internship;
