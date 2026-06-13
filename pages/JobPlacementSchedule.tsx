import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Printer, FileText, Download, Briefcase, Calendar } from 'lucide-react';
import { MAIN_MENU } from '../constants';

const SCHEDULE_DATA = [
  {
    id: '1',
    specialty: '2-740604 "Техническое обеспечение мелиоративных и водохозяйственных работ"',
    meetingDate: '28.11.2024 г.',
    meetingLocation: 'Главный корпус № 1, ауд. 113а',
    meetingTime: '15.00',
    graduationDate: '31.01.2025',
    arrivalDate: '01.03.2025'
  },
  {
    id: '2',
    specialty: '2-70 02 01 "Промышленное и гражданское строительство"',
    meetingDate: '26.11.2024 г.',
    meetingLocation: 'Главный корпус № 1, ауд. 113а',
    meetingTime: '14.30',
    graduationDate: '28.02.2025',
    arrivalDate: '01.04.2025'
  },
  {
    id: '3',
    specialty: '2-74 06 03 «Ремонтно-обслуживающее производство в сельском хозяйстве»',
    meetingDate: '19.12.2024 г.',
    meetingLocation: 'Главный корпус № 1, ауд. 113а',
    meetingTime: '14.00',
    graduationDate: '28.02.2025',
    arrivalDate: '01.04.2025'
  },
  {
    id: '4',
    specialty: '2-74 05 01 «Мелиорация и водное хозяйство»',
    meetingDate: '20.12.2024 г.',
    meetingLocation: 'Главный корпус № 1, ауд. 113а',
    meetingTime: '15.00',
    graduationDate: '28.02.2025',
    arrivalDate: '01.04.2025'
  },
  {
    id: '5',
    specialty: '2-70 03 31 «Строительство дорог и транспортных объектов»',
    meetingDate: '14.01.2025 г.',
    meetingLocation: 'Главный корпус № 1, ауд. 113а',
    meetingTime: '15.00',
    graduationDate: '31.03.2025',
    arrivalDate: '01.05.2025'
  }
];

const DOCUMENTS = [
  {
    title: 'ПОЛОЖЕНИЕ О ПОРЯДКЕ РАСПРЕДЕЛЕНИЯ, ПЕРЕРАСПРЕДЕЛЕНИЯ, НАПРАВЛЕНИЯ НА РАБОТУ, ПЕРЕНАПРАВЛЕНИЯ НА РАБОТУ, ПРЕДОСТАВЛЕНИЯ МЕСТА РАБОТЫ ВЫПУСКНИКАМ, ПОЛУЧИВШИМ НАУЧНО-ОРИЕНТИРОВАННОЕ, ВЫСШЕЕ, СРЕДНЕЕ СПЕЦИАЛЬНОЕ ИЛИ ПРОФЕССИОНАЛЬНОТЕХНИЧЕСКОЕ ОБРАЗОВАНИЕ',
    href: 'https://disk.yandex.ru/i/7nWPBCkccxy5Wg'
  },
  {
    title: 'ПОСТАНОВЛЕНИЕ СОВЕТА МИНИСТРОВ РЕСПУБЛИКИ БЕЛАРУСЬ 22 июня 2011 г. № 821 О некоторых вопросах распределения, перераспределения, направления на работу, последующего направления на работу выпускников, возмещения затраченных государством средств на их подготовку и целевой подготовки специалистов, рабочих, служащих',
    href: 'https://edu.gov.by/sistema-obrazovaniya/poslevuzovskoe-obrazovanie-i-nauka/normativnoe-pravovoe-obespechenie/%D0%9F%D0%9E%D0%A1%D0%A2%D0%90%D0%9D%D0%9E%D0%92%D0%9B%D0%95%D0%9D%D0%98%D0%95%20%D0%A1%D0%9E%D0%92%D0%95%D0%A2%D0%90%20%D0%9C%D0%98%D0%9D%D0%98%D0%A1%D0%A2%D0%A0%D0%9E%D0%92%20%D0%A0%D0%95%D0%A1%D0%9F%D0%A3%D0%91%D0%9B%D0%98%D0%9A%D0%98%20%D0%91%D0%95%D0%9B%D0%90%D0%A0%D0%A3%D0%A1%D0%AC%2022%20%D0%B8%D1%8E%D0%BD%D1%8F%202011%20%D0%B3.%20%E2%84%96%20821.docx'
  }
];

const JobPlacementSchedule: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const parentSection = MAIN_MENU.find(item => item.href === '/uchashchimsya');
  const sidebarLinks = parentSection?.submenu || [];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* HEADER */}
      <div className="bg-primary-900 text-white pt-10 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <Link to="/uchashchimsya" className="hover:text-white transition-colors">{parentSection?.label}</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold truncate">Распределение</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-4xl">
            График работы по распределению
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 order-1 lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden sticky top-28">
              <div className="bg-primary-900 px-5 py-4 border-b border-primary-800">
                <Link to="/uchashchimsya" className="text-white text-xs font-bold uppercase tracking-widest hover:text-accent-300 transition-colors block">
                  {parentSection?.label}
                </Link>
              </div>
              <nav className="p-2 flex flex-col space-y-1">
                {sidebarLinks.map((link) => {
                  const isActive = link.href === currentPath;
                  const isFile = link.href.endsWith('.pdf') || link.href.endsWith('.doc') || link.href.endsWith('.docx') || link.href.includes('disk.yandex.com');

                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`group flex items-center justify-between px-4 py-3 mb-1 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-primary-50 text-primary-700 border-l-4 border-accent-500' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900 border-l-4 border-transparent'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isFile && <FileText className="w-4 h-4 text-rose-500" />}
                        {link.label}
                      </span>
                      {isActive && <ChevronRight className="w-4 h-4 text-accent-500" />}
                    </Link>
                  );
                })}
              </nav>

              <div className="m-4 p-4 bg-primary-900 rounded-lg text-white text-center">
                <p className="text-xs text-accent-500 font-bold uppercase mb-2">Приемная комиссия</p>
                <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block">8 (0165) 30-06-88</a>
              </div>
            </div>
          </aside>

          {/* PAGE CONTENT */}
          <main className="flex-1 w-full order-2">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 border border-slate-100 min-h-[600px]">
              
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <div className="text-sm text-slate-400">Обновлено: 06.06.2026</div>
                <button className="flex items-center text-sm text-slate-500 hover:text-primary-900 transition-colors gap-1.5 group" onClick={() => window.print()}>
                  <Printer className="w-4 h-4 group-hover:scale-110 transition-transform" /> <span className="hidden sm:inline">Распечатать</span>
                </button>
              </div>

              <div className="flex items-center gap-3 mb-8 bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
                <Briefcase className="w-8 h-8 text-blue-600 shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-blue-900 mb-1">Распределение выпускников</h2>
                  <p className="text-blue-800 text-sm">Информация о датах заседаний комиссии по распределению и направления на работу.</p>
                </div>
              </div>

              {/* SCHEDULE TABLE */}
              <div className="overflow-x-auto mb-12 bg-white rounded-xl shadow-sm border border-slate-200">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-4 w-12 text-center">№</th>
                      <th className="px-4 py-4">Специальность</th>
                      <th className="px-4 py-4 w-48">Заседание комиссии</th>
                      <th className="px-4 py-4 w-32 text-center">Дата окончания</th>
                      <th className="px-4 py-4 w-32 text-center">Прибытие на работу</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 align-top">
                    {SCHEDULE_DATA.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-4 text-center text-slate-400 font-medium">{item.id}</td>
                        <td className="px-4 py-4 font-bold text-primary-900">{item.specialty}</td>
                        <td className="px-4 py-4">
                          <div className="font-bold text-accent-600 mb-1 flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" /> {item.meetingDate}
                          </div>
                          <div className="text-xs text-slate-500 font-medium">{item.meetingLocation}</div>
                          <div className="text-xs text-slate-500 font-medium mt-0.5">Время: <span className="text-slate-800 font-bold">{item.meetingTime}</span></div>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">{item.graduationDate}</span>
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span className="inline-block px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-bold border border-emerald-100">{item.arrivalDate}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* DOCUMENTS */}
              <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-accent-500" />
                Нормативно-правовые акты
              </h3>
              
              <div className="space-y-4 mb-8">
                {DOCUMENTS.map((doc, idx) => (
                  <a 
                    key={idx}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 hover:border-accent-500 hover:shadow-md transition-all group bg-white"
                  >
                    <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Download className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-primary-900 text-sm leading-relaxed group-hover:text-accent-600 transition-colors">
                        {doc.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-2 flex items-center gap-1 uppercase tracking-wider font-bold">
                        Скачать документ <ChevronRight className="w-3 h-3" />
                      </p>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default JobPlacementSchedule;
