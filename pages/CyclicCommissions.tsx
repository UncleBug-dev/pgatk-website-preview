import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Printer, Users, Calendar, Award, FileText } from 'lucide-react';
import { MAIN_MENU } from '../constants';

// Данные для комиссий
const commissions = [
  {
    title: "Цикловая комиссия преподавателей общеобразовательных предметов",
    members: [
      { name: "Петрович Янина Ивановна", role: "председатель ЦК, преподаватель первой квалификационной категории", isChair: true },
      { name: "Гинько Александра Ивановна", role: "преподаватель первой квалификационной категории" },
      { name: "Горегляд Елена Васильевна", role: "преподаватель высшей квалификационной категории" },
      { name: "Гришко Лилия Александровна", role: "преподаватель первой квалификационной категории" },
      { name: "Вакарь Елена Владимировна", role: "преподаватель высшей квалификационной категории (внешний совместитель)" },
      { name: "Куликова Анжела Васильевна", role: "преподаватель первой квалификационной категории" },
      { name: "Малыщик Татьяна Александровна", role: "преподаватель высшей квалификационной категории" },
      { name: "Мелюх Артур Валентинович", role: "преподаватель второй квалификационной категории" },
      { name: "Саливон Екатерина Дмитриевна", role: "преподаватель без квалификационной категории (внешний совместитель)" },
      { name: "Пашкевич Алла Владимировна", role: "преподаватель высшей квалификационной категории" }
    ]
  },
  {
    title: "Цикловая комиссия преподавателей общепрофессиональных предметов",
    members: [
      { name: "Козич Виктория Александровна", role: "председатель ЦК, преподаватель высшей квалификационной категории", isChair: true },
      { name: "Долмат Татьяна Павловна", role: "методист, преподаватель высшей квалификационной категории (внутренний совместитель)" },
      { name: "Кулеш Елена Ананьевна", role: "преподаватель первой квалификационной категории" },
      { name: "Сидоревич Виктор Владимирович", role: "преподаватель первой квалификационной категории" },
      { name: "Ткачик Елена Сергеевна", role: "преподаватель без квалификационной категории (методист первой квалификационной категории)" },
      { name: "Якубович Елена Александровна", role: "преподаватель первой квалификационной категории" }
    ]
  },
  {
    title: "Цикловая комиссия преподавателей физической культуры и здоровья",
    members: [
      { name: "Сукач Владимир Михайлович", role: "председатель ЦК, преподаватель высшей квалификационной категории", isChair: true },
      { name: "Наварич Валерий Адамович", role: "преподаватель высшей квалификационной категории" },
      { name: "Татаревич Артем Юрьевич", role: "преподаватель без квалификационной категории" },
      { name: "Пашкевич Владимир Георгиевич", role: "преподаватель высшей квалификационной категории" },
      { name: "Разжаловец Александр Александрович", role: "преподаватель первой квалификационной категории" },
      { name: "Ярошевич Геннадий Адамович", role: "преподаватель высшей квалификационной категории" }
    ]
  },
  {
    title: "Цикловая комиссия преподавателей специальных предметов по специальностям 5-04-0732-01 «Строительство зданий и сооружений» и 5-04-0732-08 «Строительство и эксплуатация автомобильных дорог»",
    members: [
      { name: "Пикула Светлана Михайловна", role: "председатель ЦК, преподаватель высшей квалификационной категории", isChair: true },
      { name: "Величко Ирина Ивановна", role: "преподаватель первой квалификационной категории" },
      { name: "Германович Александр Витольдович", role: "преподаватель без квалификационной категории" },
      { name: "Лемешевский Игорь Александрович", role: "мастер производственного обучения первой квалификационной категории" },
      { name: "Михович Ольга Николаевна", role: "преподаватель высшей квалификационной категории" },
      { name: "Мойсеянчик Дмитрий Александрович", role: "преподаватель второй квалификационной категории" },
      { name: "Фонобрович Денис Валерьевич", role: "преподаватель высшей квалификационной категории" },
      { name: "Якубчик Анастасия Юрьевна", role: "мастер производственного обучения второй квалификационной категории" }
    ]
  },
  {
    title: "Цикловая комиссия преподавателей специальных предметов по специальности 5-04-0811-03 «Мелиорация земель»",
    members: [
      { name: "Киселева Алла Андреевна", role: "председатель ЦК, преподаватель первой квалификационной категории", isChair: true },
      { name: "Бурачевская Мария Ивановна", role: "преподаватель высшей квалификационной категории" },
      { name: "Колб Юлия Вячеславовна", role: "преподаватель без квалификационной категории" },
      { name: "Рыжковец Виктория Леонидовна", role: "преподаватель первой квалификационной категории" },
      { name: "Пешко Екатерина Константиновна", role: "преподаватель без квалификационной категории" }
    ]
  },
  {
    title: "Цикловая комиссия преподавателей специальных предметов по специальности 5-04-0812-01 «Техническое обслуживание и ремонт сельскохозяйственной техники»",
    members: [
      { name: "Лозицкая Татьяна Олеговна", role: "председатель ЦК, преподаватель высшей квалификационной категории", isChair: true },
      { name: "Лозицкий Дмитрий Иванович", role: "преподаватель первой квалификационной категории" },
      { name: "Филимонов Владимир Михайлович", role: "преподаватель высшей квалификационной категории" },
      { name: "Шашкова Елена Сергеевна", role: "преподаватель первой квалификационной категории" },
      { name: "Шпаковская Ольга Алексеевна", role: "преподаватель первой квалификационной категории" }
    ]
  },
  {
    title: "Цикловая комиссия преподавателей специальных предметов по специальности 5-04-0715-20 «Техническая эксплуатация подъемно-транспортных, дорожно-строительных машин и оборудования»",
    members: [
      { name: "Володкевич Николай Григорьевич", role: "председатель ЦК, преподаватель высшей квалификационной категории", isChair: true },
      { name: "Белоус Максим Николаевич", role: "преподаватель высшей квалификационной категории" },
      { name: "Лягуский Александр Григорьевич", role: "преподаватель первой квалификационной категории" },
      { name: "Мельникович Николай Александрович", role: "мастер производственного обучения первой квалификационной категории" },
      { name: "Середич Александр Иванович", role: "преподаватель первой квалификационной категории" },
      { name: "Шоломицкий Сергей Сергеевич", role: "мастер производственного обучения высшей квалификационной категории" }
    ]
  },
  {
    title: "Цикловая комиссия мастеров производственного обучения",
    members: [
      { name: "Богнат Андрей Сергеевич", role: "председатель ЦК, преподаватель первой квалификационной категории", isChair: true },
      { name: "Гаращук Михаил Михайлович", role: "мастер производственного обучения без квалификационной категории" },
      { name: "Ковалев Олег Александрович", role: "мастер производственного обучения второй квалификационной категории" },
      { name: "Кожун Александр Иванович", role: "мастер производственного обучения первой квалификационной категории" },
      { name: "Сатишур Сергей Степанович", role: "мастер производственного обучения первой квалификационной категории" },
      { name: "Сидорчук Георгий Николаевич", role: "мастер производственного обучения второй квалификационной категории" },
      { name: "Скребель Михаил Александрович", role: "мастер производственного обучения без квалификационной категории" },
      { name: "Тубич Михаил Николаевич", role: "мастер производственного обучения первой квалификационной категории" },
      { name: "Хлус Александр Владимирович", role: "мастер производственного обучения второй квалификационной категории" },
      { name: "Федечко Николай Владимирович", role: "мастер производственного обучения первой квалификационной категории" }
    ]
  }
];

const schedule = [
  { id: 1, name: "Общеобразовательных предметов", month: "Февраль", chair: "Я.И. Петрович" },
  { id: 2, name: "Общепрофессиональных предметов", month: "Апрель", chair: "В.А. Козич" },
  { id: 3, name: "Физической культуры и здоровья", month: "Май", chair: "В.М. Сукач" },
  { id: 4, name: "Специальных предметов по специальностям 5-04-0732-01 «Строительство зданий и сооружений» и 5-04-0732-08 «Строительство и эксплуатация автомобильных дорог»", month: "Март", chair: "С.М. Пикула" },
  { id: 5, name: "Специальных предметов по специальности 5-04-0811-03 «Мелиорация земель»", month: "Июнь", chair: "А.А. Киселева" },
  { id: 6, name: "Специальных предметов по специальности 5-04-0812-01 «Техническое обслуживание и ремонт сельскохозяйственной техники»", month: "Декабрь", chair: "Т.О. Лозицкая" },
  { id: 7, name: "Специальных предметов по специальности 5-04-0715-20 «Техническая эксплуатация подъемно-транспортных, дорожно-строительных машин и оборудования»", month: "Ноябрь", chair: "Н.Г. Володкевич" },
  { id: 8, name: "Мастеров производственного обучения", month: "Апрель", chair: "А.С. Богнат" }
];

const CyclicCommissions: React.FC = () => {
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
            <span className="text-accent-500 font-bold">Цикловые комиссии</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Цикловые комиссии
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
                  const isActive = link.href.includes('tsiklovye-komissii');
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

              {/* Commissions List */}
              <div className="space-y-8 mb-12">
                {commissions.map((comm, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-primary-50 px-6 py-4 border-b border-primary-100 flex items-center gap-3">
                      <Users className="w-6 h-6 text-primary-700 shrink-0" />
                      <h3 className="font-bold text-lg text-primary-900 m-0">
                        {comm.title}
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {comm.members.map((member, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[15px]">
                            <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${member.isChair ? 'bg-accent-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]' : 'bg-slate-300'}`}></div>
                            <div>
                              <span className={`font-medium ${member.isChair ? 'text-slate-900 font-bold' : 'text-slate-800'}`}>
                                {member.name}
                              </span>
                              {member.isChair && (
                                <span className="inline-flex items-center ml-2 text-xs font-bold bg-accent-100 text-accent-700 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                  <Award className="w-3 h-3 mr-1" /> Председатель
                                </span>
                              )}
                              <span className="text-slate-500 block text-sm mt-0.5">{member.role.replace('председатель ЦК, ', '')}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Schedule Table */}
              <div className="mb-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary-900 flex items-center justify-center gap-3">
                    <Calendar className="w-7 h-7 text-accent-600" />
                    ГРАФИК
                  </h3>
                  <p className="text-slate-600 font-medium mt-2">проведения недель цикловых комиссий на 2025/2026 учебный год</p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-primary-900 text-white">
                        <th className="p-4 text-center font-bold w-16">№ п/п</th>
                        <th className="p-4 font-bold border-l border-primary-800">Название цикловых комиссий</th>
                        <th className="p-4 text-center font-bold border-l border-primary-800 w-32">Время проведения</th>
                        <th className="p-4 font-bold border-l border-primary-800 w-48">Председатель цикловой комиссии</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {schedule.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 text-center text-slate-500 font-medium">{item.id}</td>
                          <td className="p-4 text-slate-800 font-medium border-l border-slate-200">{item.name}</td>
                          <td className="p-4 text-center text-accent-700 font-bold border-l border-slate-200">{item.month}</td>
                          <td className="p-4 text-slate-600 border-l border-slate-200">{item.chair}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default CyclicCommissions;
