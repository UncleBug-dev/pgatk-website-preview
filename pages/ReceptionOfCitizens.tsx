import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Printer, Phone, Calendar, Clock, User, PhoneCall, AlertCircle, PhoneForwarded } from 'lucide-react';
import { MAIN_MENU } from '../constants';

const RECEPTION_DATA = [
  {
    id: 1,
    name: 'Колб Игорь Михайлович',
    position: 'Директор',
    receptionTime: '2-й вторник месяца с 08.00 до 14.00',
    location: 'УК №1, 2 этаж, кабинет 205',
    substitute: 'Зам. директора по ПО Кулеш Игорь Леонидович\nУК№1, 2 этаж, кабинет 206'
  },
  {
    id: 2,
    name: 'Бегер Олег Александрович',
    position: 'Заместитель директора по учебной работе',
    receptionTime: '1-й понедельник месяца с 08.00 до 14.00',
    location: 'УК №1, 2 этаж, кабинет 208',
    substitute: 'Зам. директора по ВР Пашкевич Семен Васильевич\nУК№1, 2 этаж, кабинет 203'
  },
  {
    id: 3,
    name: 'Пашкевич Семен Васильевич',
    position: 'Заместитель директора по воспитательной работе',
    receptionTime: '2-й понедельник месяца с 08.00 до 14.00',
    location: 'УК №1, 2 этаж, кабинет 203',
    substitute: 'Педагог социальный Калюта Людмила Ивановна\nУК№1, 3 этаж, кабинет 307'
  },
  {
    id: 4,
    name: '—',
    position: 'Заместитель директора по учебно-методической работе',
    receptionTime: '1-й вторник с 08.00 до 14.00',
    location: 'УК №1, 2 этаж, кабинет 211',
    substitute: 'Зам.директора по УР Бегер Олег Александрович\nУК№1, 2 этаж, кабинет 208'
  },
  {
    id: 5,
    name: 'Кулеш Игорь Леонидович',
    position: 'Заместитель директора по производственному обучению',
    receptionTime: '3-й вторник месяца с 08.00 до 14.00',
    location: 'УК №1, 2 этаж, кабинет 207',
    substitute: 'Зав.учебно-производственными мастерскими Лявор Степан Антонович\nУчебная база "Почапово"'
  },
  {
    id: 6,
    name: 'Пашкевич Владимир Георгиевич',
    position: 'Руководитель физического воспитания, председатель профсоюзного комитета',
    receptionTime: '1-я среда месяца с 08.00 до 14.00',
    location: 'УК №1, 3 этаж, кабинет 302',
    substitute: 'Преподаватель Пашкевич Алла Владимировна\nУК№1, 3 этаж, кабинет 310'
  },
  {
    id: 7,
    name: 'Куницкая Наталия Михайловна',
    position: 'Главный бухгалтер колледжа',
    receptionTime: '1-й четверг месяца с 08.00 до 14.00',
    location: 'УК №1, 2 этаж, кабинет 215',
    substitute: 'Зам.главного бухглатера Хомич Татьяна Павловна\nУК№1, 2 этаж, кабинет 212'
  },
  {
    id: 8,
    name: 'Харитонович Дмитрий Степанович',
    position: 'Заместитель директора по хозяйственной работе',
    receptionTime: '2-я пятница месяца с 08.00 до 14.00',
    location: 'УК №1, 2 этаж, кабинет 206',
    substitute: 'Техник по эксплуатации зданий и сооружений Вильковская Раиса Иосифовна\nУК№3'
  }
];

const ReceptionOfCitizens: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const parentSection = MAIN_MENU.find(item => item.href === '/odno-okno');
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
            <Link to="/odno-okno" className="hover:text-white transition-colors">{parentSection?.label}</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold truncate">Приём граждан</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-4xl">
            Приём граждан
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
                <Link to="/odno-okno" className="text-white text-xs font-bold uppercase tracking-widest hover:text-accent-300 transition-colors block">
                  {parentSection?.label}
                </Link>
              </div>
              <nav className="p-2 flex flex-col space-y-1">
                {sidebarLinks.map((link) => {
                  const isActive = link.href === currentPath;
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
                <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  8 (0165) 30-06-88
                </a>
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

              {/* QUICK CONTACTS CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 mb-3">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Предварительная запись</h4>
                  <p className="text-xs text-slate-500 mb-2">Ивашкова Светлана Владимировна, каб. 208</p>
                  <a href="tel:+375165612791" className="text-blue-600 font-bold hover:text-blue-800 transition-colors block text-sm">+375 165 61-27-91</a>
                </div>

                <div className="bg-rose-50/50 p-5 rounded-xl border border-rose-100 hover:border-rose-300 transition-colors">
                  <div className="bg-rose-100 w-10 h-10 rounded-lg flex items-center justify-center text-rose-600 mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Телефон "доверия"</h4>
                  <p className="text-xs text-slate-500 mb-2">Зам. директора по ВР Пашкевич С.В.</p>
                  <a href="tel:+375165639324" className="text-rose-600 font-bold hover:text-rose-800 transition-colors block text-sm">+375 165 63-93-24</a>
                </div>

                <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100 hover:border-emerald-300 transition-colors">
                  <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center text-emerald-600 mb-3">
                    <PhoneForwarded className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Справочная служба</h4>
                  <p className="text-xs text-slate-500 mb-2">Секретарь Ивашкова С.В.</p>
                  <a href="tel:+375165639293" className="text-emerald-600 font-bold hover:text-emerald-800 transition-colors block text-sm">+375 165 63-92-93</a>
                </div>

                <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-100 hover:border-amber-300 transition-colors">
                  <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center text-amber-600 mb-3">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Горячая линия</h4>
                  <p className="text-xs text-slate-500 mb-2">Звонки принимаются в рабочее время</p>
                  <a href="tel:+375165639499" className="text-amber-600 font-bold hover:text-amber-800 transition-colors block text-sm">+375 165 63-94-99</a>
                </div>
              </div>

              {/* RECEPTION TABLE */}
              <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-accent-500" />
                График приема граждан
              </h3>
              
              <div className="overflow-x-auto mb-8 bg-white rounded-xl shadow-sm border border-slate-200">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                    <tr>
                      <th className="px-5 py-4 w-[28%]">ФИО, Должность</th>
                      <th className="px-5 py-4 w-[24%]">Время приема</th>
                      <th className="px-5 py-4 w-[20%]">Место приема</th>
                      <th className="px-5 py-4 w-[28%]">Замещение</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 align-top">
                    {RECEPTION_DATA.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4">
                          <div className="font-bold text-primary-900 text-[15px] mb-1">{item.name}</div>
                          <div className="text-slate-500 text-xs font-medium uppercase tracking-wide leading-relaxed">{item.position}</div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="inline-flex items-start gap-2 text-slate-700 bg-blue-50 px-3 py-2 rounded-lg border border-blue-100 w-full">
                            <Clock className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <span className="font-medium text-[13px] leading-snug">{item.receptionTime}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-slate-600 font-medium">
                          {item.location.split(',').map((part, index) => (
                            <div key={index} className={index === 0 ? "font-bold text-slate-800" : "text-xs text-slate-500 mt-1"}>{part.trim()}</div>
                          ))}
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-[13px] text-slate-600 leading-relaxed whitespace-pre-line border-l-2 border-slate-200 pl-3">
                            {item.substitute}
                          </div>
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
    </div>
  );
};

export default ReceptionOfCitizens;
