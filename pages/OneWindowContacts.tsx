import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Phone, MapPin, Mail, Building2, Globe, Clock, User, PhoneCall, Printer, FileText } from 'lucide-react';
import AddressLink from '../components/AddressLink';
import { MAIN_MENU } from '../constants';
import { useData } from '../context/DataContext';

const CONTACTS_DATA = [
  { id: 1, position: 'Директор', name: 'Колб Игорь Михайлович', room: 'УК №1 | 2 этаж, каб. 205', time: '2-й вторник месяца\nс 08.00 до 14.00', phone: '+375 165 63-94-99' },
  { id: 2, position: 'Приемная директора', name: 'Ивашкова Светлана Владимировна', room: 'УК №1 | 2 этаж, каб. 205', time: '-', phone: '+375 165 63-92-93' },
  { id: 3, position: 'Секретарь учебной части', name: 'Мохор Инна Александровна', room: 'УК №1 | 2 этаж, каб. 208', time: '-', phone: '+375 165 61-27-91' },
  { id: 4, position: 'Заместитель директора по учебной работе', name: 'Бегер Олег Александрович', room: 'УК №1 | 2 этаж, каб. 208', time: '1-й понедельник месяца\nс 08.00 до 14.00', phone: '+375 165 61-27-91' },
  { id: 5, position: 'Заместитель директора по учебно-методической работе', name: '—', room: 'УК №1 | 2 этаж, каб. 211', time: '1-й вторник месяца\nс 08.00 до 14.00', phone: '+375 165 65-45-28' },
  { id: 6, position: 'Заместитель директора по воспитательной работе', name: 'Пашкевич Семен Васильевич', room: 'УК №1 | 2 этаж, каб. 211', time: '1-й понедельник месяца\nс 08.00 до 14.00', phone: '+375 165 63-93-24' },
  { id: 7, position: 'Заместитель директора по производственному обучению', name: 'Кулеш Игорь Леонидович', room: 'УК №3 | 2 этаж, каб. 207', time: '3-й вторник месяца\nс 08.00 до 14.00', phone: '+375 165 63-93-33' },
  { id: 8, position: 'Заместитель директора по хозяйственной работе', name: 'Харитонович Дмитрий Степанович', room: 'УК №1 | 2 этаж, каб. 223', time: '2-я пятница месяца\nс 08.00 до 14.00', phone: '+375 165 63-93-49' },
  { id: 9, position: 'Методист дневной формы обучения', name: 'Долмат Татьяна Павловна', room: 'УК №1 | 2 этаж, каб. 213', time: '-', phone: '-' },
  { id: 10, position: 'Методист заочной формы обучения', name: 'Ткачик Елена Сергеевна', room: 'УК №1 | 1 этаж, каб. 108', time: '-', phone: '+375 165 30-06-88' },
  { id: 11, position: 'Руководитель физ. воспитания, председатель профкома', name: 'Пашкевич Владимир Георгиевич', room: 'УК №1 | 3 этаж, каб. 302', time: '-', phone: '-' },
  { id: 12, position: 'Главный бухгалтер', name: 'Куницкая Наталия Михайловна', room: 'УК №1 | 2 этаж, каб. 212', time: '1-й четверг месяца\nс 08.00 до 14.00', phone: '+375 165 63-93-61' },
  { id: 13, position: 'Заместитель главного бухгалтера', name: 'Хомич Татьяна Павловна', room: 'УК №1 | 2 этаж, каб. 212', time: '-', phone: '+375 165 62-55-10' },
  { id: 14, position: 'Экономист, специалист по организации закупок', name: 'Белякович Ирина Владимировна', room: 'УК №1 | 2 этаж, каб. 214', time: '-', phone: '+375 165 63-93-71' },
  { id: 15, position: 'Заведующий общежитием № 1', name: 'Михалевич Тамара Николаевна', room: 'ул. Партизанская, 13\n1 этаж', time: '-', phone: '+375 165 65-08-14' },
  { id: 16, position: 'Заведующий общежитием № 2', name: '—', room: 'ул. Партизанская, 13\n1 этаж', time: '-', phone: '+375 165 32-27-56' },
  { id: 17, position: 'Инспектор по кадрам', name: 'Левоцкая Екатерина Витальевна', room: '—', time: '-', phone: '+375 165 63-93-86' },
  { id: 18, position: 'Вахта учебного корпуса № 1', name: '—', room: 'ул. ИПД, 25', time: '-', phone: '+375 165 63-94-01' },
];

const OneWindowContacts: React.FC = () => {
  const { settings } = useData();
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
            <span className="text-accent-500 font-bold truncate">Наши контакты и реквизиты</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-4xl">
            Наши контакты и реквизиты
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
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 border border-slate-100">
              
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900 flex items-center gap-3">
                  <User className="w-7 h-7 text-accent-500" /> Контакты и время приёма
                </h2>
                <button className="flex items-center text-sm text-slate-500 hover:text-primary-900 transition-colors gap-1.5 group" onClick={() => window.print()}>
                  <Printer className="w-4 h-4 group-hover:scale-110 transition-transform" /> <span className="hidden sm:inline">Распечатать</span>
                </button>
              </div>

              {/* TABLE */}
              <div className="overflow-x-auto mb-12 bg-white rounded-xl shadow-sm border border-slate-200">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                    <tr>
                      <th className="px-5 py-4 w-[25%]">Должность</th>
                      <th className="px-5 py-4 w-[25%]">ФИО</th>
                      <th className="px-5 py-4 w-[20%]">№ кабинета</th>
                      <th className="px-5 py-4 w-[20%]">Время приёма</th>
                      <th className="px-5 py-4 w-[10%]">Телефон</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 align-top">
                    {CONTACTS_DATA.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-4">
                          <div className="font-medium text-slate-800 leading-relaxed">{item.position}</div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="font-bold text-primary-900">{item.name}</div>
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {item.room !== '—' && item.room !== '-' ? (
                            <div className="flex items-start gap-1.5">
                              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                              <span className="whitespace-pre-line leading-relaxed">{item.room}</span>
                            </div>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {item.time !== '-' ? (
                            <div className="flex items-start gap-1.5">
                              <Clock className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                              <span className="whitespace-pre-line leading-relaxed text-[13px]">{item.time}</span>
                            </div>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                        <td className="px-5 py-4 font-bold text-primary-600 whitespace-nowrap">
                          {item.phone !== '-' ? (
                            <a href={`tel:${item.phone.replace(/\D/g, '')}`} className="hover:text-accent-600 transition-colors flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5 opacity-50" /> {item.phone}
                            </a>
                          ) : (
                            <span className="text-slate-400 font-normal">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* REQUISITES SECTION */}
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900 mb-6 flex items-center gap-3">
                <FileText className="w-7 h-7 text-accent-500" /> Реквизиты колледжа
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Names and Address */}
                <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200 h-full flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Полное наименование</h3>
                    <p className="text-lg font-bold text-primary-900 leading-snug">
                      Учреждение образования «Пинский государственный аграрно-технический колледж имени А.Е.Клещева»
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Краткое наименование</h3>
                    <p className="text-lg font-bold text-primary-900">
                      УО «ПГАТК имени А.Е. Клещева»
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Юридический адрес</h3>
                    <div className="flex items-start gap-3">
                      <div className="bg-white p-2 rounded-lg shadow-sm text-accent-500 border border-slate-100">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed pt-1">
                        <AddressLink>{settings.address}</AddressLink>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bank and Contacts */}
                <div className="bg-primary-900 text-white p-6 md:p-8 rounded-xl shadow-lg h-full">
                  
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-accent-500" />
                      <h3 className="font-bold text-lg text-white">Банковские реквизиты</h3>
                    </div>
                    <p className="text-slate-300 font-mono mb-2 bg-black/20 p-3 rounded-lg text-sm">
                      р/с BY67AKBB36049000001951200000
                    </p>
                    <p className="text-sm text-slate-300 mb-1">Филиал № 121 ОАО «АСБ "Беларусбанк"</p>
                    <div className="flex gap-4 mt-3">
                      <div className="bg-white/10 px-3 py-1.5 rounded text-sm"><span className="text-slate-400 mr-1">УНП</span> 200376067</div>
                      <div className="bg-white/10 px-3 py-1.5 rounded text-sm"><span className="text-slate-400 mr-1">ОКПО</span> 01041716</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-accent-400 mb-1"><Phone className="w-4 h-4" /> Контактные телефоны</div>
                      <a href="tel:+375165324402" className="block text-lg font-bold hover:text-accent-300 transition-colors">+375 165 32-44-02</a>
                      <a href="tel:+375165316239" className="block text-lg font-bold hover:text-accent-300 transition-colors">+375 165 31-62-39</a>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-accent-400 mb-1"><Printer className="w-4 h-4" /> Факс</div>
                      <span className="block text-lg font-bold">+375 165 32-44-02</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center gap-2 text-sm text-accent-400 mb-1"><Mail className="w-4 h-4" /> Email</div>
                      <a href={`mailto:${settings.email}`} className="text-lg font-bold hover:text-accent-300 transition-colors break-all">{settings.email}</a>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center gap-2 text-sm text-accent-400 mb-1"><Globe className="w-4 h-4" /> Сайт</div>
                      <a href="https://pgatkk.by" className="text-lg font-bold hover:text-accent-300 transition-colors">pgatkk.by</a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default OneWindowContacts;
