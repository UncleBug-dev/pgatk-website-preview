import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Menu as MenuIcon, ChevronDown, FileText, ExternalLink } from 'lucide-react';
import PersonCard, { PersonProps } from '../components/PersonCard';
import { MAIN_MENU } from '../constants';

// MOCK DATA - Данные об администрации
const ADMINISTRATION_DATA: PersonProps[] = [
  {
    name: "Колб Игорь Михайлович",
    position: "Директор колледжа",
    photoUrl: "/images/administration/Kolb_IM.jpeg",
    phone: "8 (0165) 63-94-99",
    description: "Время приёма по личным вопросам: 2-й вторник месяца с 08.00 до 14.00. 2 этаж, кабинет 205 К1."
  },
  {
    name: "Бегер Олег Александрович",
    position: "Заместитель директора по учебной работе",
    photoUrl: "/images/administration/Beger_OA.jpeg",
    phone: "8 (0165) 61-27-91",
    description: "Время приёма по личным вопросам: 1-й понедельник месяца с 08.00 до 14.00. 2 этаж, кабинет 208 К1."
  },
  {
    name: "",
    position: "Заместитель директора по учебно-методической работе",
    phone: "8 (0165) 65-45-28",
    description: "Время приёма по личным вопросам: 1-й вторник месяца с 08.00 до 14.00. 2 этаж, кабинет 211 К1."
  },
  {
    name: "Кулеш Игорь Леонидович",
    position: "Заместитель директора по производственному обучению",
    photoUrl: "/images/administration/Kulesh_IL.jpeg",
    phone: "8 (0165) 63-93-33",
    description: "Время приёма по личным вопросам: 3-й вторник месяца с 08.00 до 14.00. 2 этаж, кабинет 207 К1."
  },
  {
    name: "Пашкевич Семен Васильевич",
    position: "Заместитель директора по воспитательной работе",
    photoUrl: "/images/administration/Pashkevich.png",
    phone: "8 (0165) 63-93-24",
    description: "Время приёма по личным вопросам: 2-й понедельник месяца с 08.00 до 14.00. 2 этаж, кабинет 203 К1."
  },
  {
    name: "Харитонович Дмитрий Степанович",
    position: "Заместитель директора по хозяйственной работе",
    photoUrl: "/images/administration/Haritonovich.png",
    phone: "8 (0165) 63-93-49",
    description: "Время приёма по личным вопросам: 2-я пятница месяца с 08.00 до 14.00. 2 этаж, кабинет 202 К1."
  },
  {
    name: "Куницкая Наталия Михайловна",
    position: "Главный бухгалтер",
    photoUrl: "/images/administration/Kunickay.png",
    phone: "8 (0165) 63-93-61",
    description: "Время приёма по личным вопросам: 1-й четверг месяца с 08.00 до 14.00. 2 этаж, кабинет 215 К1."
  }
];

const Staff: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const parentSection = MAIN_MENU.find(item => item.href === '/kolledg');
  const sidebarLinks = parentSection?.submenu || [];
  const currentPath = '/kolledg/administraciy';
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header Block */}
      <div className="bg-primary-900 text-white pt-10 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <Link to="/kolledg" className="hover:text-white transition-colors">Колледж</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold">Администрация</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            Администрация колледжа
          </h1>
        </div>
      </div>

      {/* Main Content */}
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

          <main className="flex-1 w-full order-2">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-slate-100 min-h-[60vh]">
          
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <p className="text-lg text-slate-600">
              Руководство колледжа обеспечивает эффективную организацию образовательного процесса, 
              создание комфортных условий для обучения и воспитания будущих специалистов.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ADMINISTRATION_DATA.map((person, index) => (
              <PersonCard 
                key={index}
                {...person}
              />
            ))}
          </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Staff;