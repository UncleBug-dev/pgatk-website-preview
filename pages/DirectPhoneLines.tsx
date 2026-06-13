import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Phone, Calendar, User, Clock, PhoneCall } from 'lucide-react';
import { MAIN_MENU } from '../constants';

const DirectPhoneLines: React.FC = () => {
  const currentPath = useLocation().pathname;
  const parentSection = MAIN_MENU.find(item => item.href === '/odno-okno');
  const sidebarLinks = parentSection?.submenu || [];

  const schedule = [
    {
      date: '13.04.2026',
      time: '09:00-12:00',
      position: 'Заместитель директора по производственному обучению',
      name: 'Кулеш Игорь Леонидович',
      phone: '+375 (16) 63 93 33'
    },
    {
      date: '27.04.2026',
      time: '09:00-12:00',
      position: 'Директор',
      name: 'Колб Игорь Михайлович',
      phone: '+375 (16) 63 94 99'
    },
    {
      date: '05.05.2026',
      time: '09:00-12:00',
      position: 'Заместитель директора по воспитательной работе',
      name: 'Пашкевич Семен Васильевич',
      phone: '+375 (16) 63 93 24'
    },
    {
      date: '22.05.2026',
      time: '09:00-12:00',
      position: 'Заместитель директора по хозяйственной работе',
      name: 'Харитонович Дмитрий Степанович',
      phone: '+375 (16) 63 93 49'
    },
    {
      date: '02.06.2026',
      time: '09:00-12:00',
      position: 'Заместитель директора по воспитательной работе',
      name: 'Пашкевич Семен Васильевич',
      phone: '+375 (16) 63 93 24'
    },
    {
      date: '17.06.2026',
      time: '09:00-12:00',
      position: 'Заместитель директора по учебной работе',
      name: 'Бегер Олег Александрович',
      phone: '+375 (16) 61 27 91'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header Block */}
      <div className="bg-primary-900 text-white pt-10 pb-20 md:pt-14 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              Главная
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <Link to="/odno-okno" className="hover:text-white transition-colors">Одно окно</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold truncate">Прямые телефонные линии</span>
          </nav>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-5xl">
            График прямых телефонных линий
          </h1>
          <p className="mt-6 text-primary-100 text-lg md:text-xl max-w-3xl leading-relaxed">
            График проведения прямых телефонных линий руководством колледжа в апреле – июне 2026 года
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 md:-mt-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 order-2 lg:order-1 lg:sticky lg:top-8">
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-primary-900 px-5 py-4 border-b border-primary-800">
                <Link to="/odno-okno" className="text-white text-xs font-bold uppercase tracking-widest hover:text-accent-300 transition-colors block">
                  {parentSection?.label}
                </Link>
              </div>
              <nav className="p-2 flex flex-col space-y-1">
                {sidebarLinks.map((link) => {
                  const isActive = currentPath === link.href;
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
                      <span>{link.label}</span>
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

          {/* CONTENT */}
          <main className="flex-1 w-full order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 border border-slate-100 min-h-[500px]">
              
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="bg-accent-500/20 p-3 rounded-lg">
                  <PhoneCall className="w-8 h-8 text-accent-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-900">График звонков</h2>
                  <p className="text-slate-500 mt-1">Апрель – Июнь 2026 года</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                {schedule.map((item, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow hover:border-accent-200 group bg-slate-50 hover:bg-white">
                    <div className="flex flex-col gap-4 h-full justify-between">
                      
                      {/* DateTime Row */}
                      <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 pb-4">
                        <div className="flex items-center gap-2 text-primary-700 bg-primary-100/50 px-3 py-1.5 rounded-lg">
                          <Calendar className="w-5 h-5" />
                          <span className="font-bold">{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                          <Clock className="w-5 h-5 text-slate-400" />
                          <span className="font-medium">{item.time}</span>
                        </div>
                      </div>

                      {/* Person Info */}
                      <div className="flex-grow pt-2">
                        <div className="flex items-start gap-3">
                          <User className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm text-slate-500 mb-1">{item.position}</p>
                            <p className="font-bold text-slate-800 text-lg">{item.name}</p>
                          </div>
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div className="pt-4 mt-2 border-t border-slate-200">
                        <a 
                          href={`tel:${item.phone.replace(/[^0-9+]/g, '')}`}
                          className="flex items-center gap-3 w-full justify-center bg-white border-2 border-primary-100 hover:border-accent-500 hover:text-accent-600 text-primary-700 font-bold py-3 rounded-xl transition-colors group-hover:bg-accent-50"
                        >
                          <Phone className="w-5 h-5" />
                          <span>{item.phone}</span>
                        </a>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </main>
        </div>
      </div>
      
    </div>
  );
};

export default DirectPhoneLines;
