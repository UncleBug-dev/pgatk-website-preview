import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu as MenuIcon, ChevronDown, FileText, ExternalLink, ChevronRight, 
  Clock, Building, Wrench, Dumbbell, BookOpen, Home
} from 'lucide-react';
import { MAIN_MENU } from '../constants';

const SCHEDULE_DATA = [
  {
    day: 'Понедельник – Пятница',
    color: 'bg-blue-50 border-blue-200 text-blue-900',
    badge: 'bg-blue-100 text-blue-700',
    items: [
      { name: 'Учебный корпус', icon: Building, time: '8:30 – 13:00\n14:00 – 17:30' },
      { name: 'Мастерские', icon: Wrench, time: '9:00 – 14:55\n15:05 – 21:00' },
      { name: 'Спортивный зал', icon: Dumbbell, time: '9:00 – 21:00' },
      { name: 'Библиотека', icon: BookOpen, time: '№1: 8:30 – 13:00\n№2: 14:00 – 17:30' },
      { name: 'Общежитие', icon: Home, time: '16:00 – 18:00\n19:00 – 23:00' },
    ]
  },
  {
    day: 'Суббота',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    badge: 'bg-emerald-100 text-emerald-700',
    items: [
      { name: 'Учебный корпус', icon: Building, time: '8:30 – 14:00' },
      { name: 'Мастерские', icon: Wrench, time: '9:00 – 14:00' },
      { name: 'Спортивный зал', icon: Dumbbell, time: '9:00 – 14:00' },
      { name: 'Библиотека', icon: BookOpen, time: 'Выходной' },
      { name: 'Общежитие', icon: Home, time: '14:00 – 19:00' },
    ]
  },
  {
    day: 'Воскресенье',
    color: 'bg-rose-50 border-rose-200 text-rose-900',
    badge: 'bg-rose-100 text-rose-700',
    isWeekend: true,
    items: [
      { name: 'Все объекты', icon: Clock, time: 'Выходной день' },
    ]
  }
];

const WorkingHours: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const parentSection = MAIN_MENU.find(item => item.href === '/kolledg');
  const sidebarLinks = parentSection?.submenu || [];
  const currentPath = '/kolledg/rezhimraboty';

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header Block */}
      <div className="bg-primary-900 text-white pt-10 pb-20 md:pt-14 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              Главная
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <Link to="/kolledg" className="hover:text-white transition-colors">Колледж</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold truncate">Режим работы</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-5xl">
            Режим работы
          </h1>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 md:-mt-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 order-1 lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="lg:hidden mb-4">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full bg-white p-4 rounded-xl shadow-md border border-slate-100 flex items-center justify-between text-primary-900 font-bold"
              >
                <span className="flex items-center gap-2"><MenuIcon className="w-5 h-5" /> Навигация раздела</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className={`bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden sticky top-28 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-slate-50 px-5 py-4 border-b border-slate-100">
                <Link to="/kolledg" className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-accent-600 transition-colors block">
                  {parentSection?.label}
                </Link>
              </div>
              
              <nav className="p-2 flex flex-col space-y-1">
                {sidebarLinks.map((link) => {
                  const isActive = link.href === currentPath;
                  const isExternal = link.href.startsWith('http');
                  const isPdf = link.href.toLowerCase().endsWith('.pdf') || link.href.toLowerCase().includes('disk.yandex.');
                  
                  const LinkContent = (
                    <>
                      <span className="flex items-center gap-2 leading-snug">
                        {isPdf ? (
                          <FileText className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        ) : isExternal ? (
                          <ExternalLink className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        ) : null}
                        <span>{link.label}</span>
                      </span>
                      {isActive && <ChevronRight className="w-4 h-4 text-accent-500 flex-shrink-0 ml-2" />}
                    </>
                  );

                  const linkClass = `group flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-primary-50 text-primary-700 border-l-4 border-accent-500 translate-x-1' : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900 border-l-4 border-transparent hover:translate-x-1'}`;

                  if (isExternal) {
                    return (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {LinkContent}
                      </a>
                    );
                  }

                  return (
                    <Link key={link.href} to={link.href} className={linkClass}>
                      {LinkContent}
                    </Link>
                  );
                })}
              </nav>

              <div className="m-2 p-4 bg-primary-900 rounded-lg text-white text-center">
                <p className="text-xs text-accent-500 font-bold uppercase mb-2">Приемная комиссия</p>
                <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block">8 (0165) 30-06-88</a>
                </div>
            </div>
          </aside>

          {/* CONTENT */}
          <main className="flex-1 w-full order-2">
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-6 md:p-10">
              
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-900">Режим работы</h2>
                  <p className="text-sm text-slate-500">Время работы учебных корпусов, мастерских, спортивного зала и общежития</p>
                </div>
              </div>

              <div className="space-y-8">
                {SCHEDULE_DATA.map((schedule, idx) => (
                  <div key={idx} className={`rounded-2xl border ${schedule.color} overflow-hidden shadow-sm`}>
                    <div className="px-6 py-4 flex items-center justify-between border-b border-inherit bg-white/50 backdrop-blur-sm">
                      <h3 className="text-xl font-bold">{schedule.day}</h3>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${schedule.badge}`}>
                        {schedule.isWeekend ? 'Выходной' : 'Рабочие дни'}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      {schedule.isWeekend ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                          <Clock className="w-16 h-16 opacity-20 mb-4" />
                          <p className="text-lg font-medium opacity-80">Учреждение закрыто для посещений</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                          {schedule.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                              <div className="flex items-center gap-3 mb-3">
                                <div className={`p-2 rounded-lg ${schedule.badge}`}>
                                  <item.icon className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-slate-700">{item.name}</h4>
                              </div>
                              <div className="space-y-1">
                                {item.time.split('\n').map((line, i) => (
                                  <p key={i} className="text-lg font-medium text-primary-900">{line}</p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
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

export default WorkingHours;
