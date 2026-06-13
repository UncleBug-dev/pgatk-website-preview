import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Printer, UserCircle, Award, FileText, CheckCircle2, Users } from 'lucide-react';
import { MAIN_MENU } from '../constants';

const chairman = {
  name: "Макарушко Николай Николаевич",
  role: "преподаватель высшей квалификационной категории"
};

const members = [
  {
    name: "Билинская Лариса Андреевна",
    role: "заместитель директора по учебно-методической работе, преподаватель высшей квалификационной категории"
  },
  {
    name: "Кулеш Игорь Леонидович",
    role: "заместитель директора по производственному обучению, преподаватель высшей квалификационной категории"
  },
  {
    name: "Ковальчук Евгения Васильевна",
    role: "заведующий отделением, преподаватель первой квалификационной категории"
  },
  {
    name: "Лозицкая Татьяна Олеговна",
    role: "председатель цикловой комиссии, преподаватель высшей квалификационной категории"
  },
  {
    name: "Долмат Татьяна Павловна",
    role: "методист высшей квалификационной категории, преподаватель высшей квалификационной категории"
  },
  {
    name: "Пашкевич Владимир Георгиевич",
    role: "председатель профкома колледжа, преподаватель высшей квалификационной категории"
  },
  {
    name: "Малыщик Татьяна Александровна",
    role: "преподаватель высшей квалификационной категории"
  },
  {
    name: "Федечко Николай Владимирович",
    role: "мастер производственного обучения первой квалификационной категории"
  }
];

const AttestationCommission: React.FC = () => {
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
            <span className="text-accent-500 font-bold">Состав аттестационной комиссии</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Состав аттестационной комиссии
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
                  const isActive = link.href.includes('sostav-attestatsionnoj-komissii');
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
              
              <div className="flex justify-end gap-4 mb-8 print:hidden">
                <button className="flex items-center text-xs text-slate-400 hover:text-primary-900 gap-1 transition-colors" onClick={() => window.print()}>
                  <Printer className="w-4 h-4" /> Печать
                </button>
              </div>

              {/* Chairman */}
              <div className="mb-10">
                <h2 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-accent-500" />
                  Председатель аттестационной комиссии
                </h2>
                <div className="bg-gradient-to-r from-primary-50 to-white rounded-xl p-6 border border-primary-100 shadow-sm flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full text-primary-600 shadow-sm shrink-0">
                    <UserCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{chairman.name}</h3>
                    <p className="text-slate-600 font-medium mt-1">{chairman.role}</p>
                  </div>
                </div>
              </div>

              {/* Members */}
              <div>
                <h2 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary-500" />
                  Члены аттестационной комиссии
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {members.map((member, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-[17px] font-bold text-slate-800">{member.name}</h3>
                        <p className="text-[14px] text-slate-500 mt-1 leading-snug">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
      
      {/* PARTNERS BOTTOM */}
    </div>
  );
};

export default AttestationCommission;
