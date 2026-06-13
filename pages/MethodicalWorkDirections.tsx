import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Printer, BookOpen, Target, Users, List, Lightbulb, FileText } from 'lucide-react';
import { MAIN_MENU } from '../constants';

const MethodicalWorkDirections: React.FC = () => {
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
            <span className="text-accent-500 font-bold">Направления методической работы</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Методическая работа
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
                  const isActive = link.href.includes('napravleniya-metodicheskoj-raboty');
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

              <div className="prose max-w-none prose-slate prose-headings:font-display prose-headings:text-primary-900 prose-a:text-accent-600 hover:prose-a:text-accent-500">
                
                <div className="text-lg text-slate-700 leading-relaxed mb-8">
                  <p className="mb-4">
                    <strong className="text-primary-900 font-bold">Методическая работа</strong> является одним из основных видов деятельности педагогического коллектива и играет большую роль в обеспечении качественной подготовки конкурентоспособных специалистов, способных к профессиональному росту и мобильности.
                  </p>
                  <p className="mb-4">
                    Содержание учебно-методической работы основывается на нормативных, правовых документах и законодательных актах Республики Беларусь, Уставе колледжа, локальных нормативных актах, регламентирующих организацию и управление учебно-методической работой, деятельностью педагогических кадров.
                  </p>
                  <p>
                    Учебно-методическая работа осуществляется в соответствии с годовым планом работы и единой методической темой:
                  </p>
                </div>

                {/* Focus Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                    <div className="flex items-center gap-3 mb-4 text-primary-900">
                      <BookOpen className="w-6 h-6" />
                      <h3 className="font-bold text-lg m-0">Единая методическая тема колледжа</h3>
                    </div>
                    <p className="text-sm font-medium text-slate-700 italic">
                      «Повышение качества образовательного процесса, эффективности практико-ориентированной подготовки обучающихся, обеспечение информационно-развивающего пространства, направленного на подготовку компетентного, конкурентоспособного специалиста с учетом требований работодателей в условиях современного, социокультурного, экономического развития Полесского региона».
                    </p>
                  </div>

                  <div className="bg-accent-50 p-6 rounded-xl border border-accent-100">
                    <div className="flex items-center gap-3 mb-4 text-accent-900">
                      <Target className="w-6 h-6" />
                      <h3 className="font-bold text-lg m-0">Тема на 2025-2027 учебные годы</h3>
                    </div>
                    <p className="text-sm font-medium text-slate-700 italic">
                      "Повышение уровня качества образования и совершенствование комплексного научно-методического обеспечения образовательного процесса на основе компетентного применения современных технологий в соответствии с образовательными стандартам Республики Беларусь по специальностям и требованиями организаций-заказчиков кадров."
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 mb-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Target className="w-32 h-32 text-primary-900" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-accent-600" />
                      Единая методическая цель на 2025/2026 учебный год
                    </h3>
                    <p className="text-lg font-medium text-slate-800 border-l-4 border-accent-500 pl-4 py-2 bg-white rounded shadow-sm">
                      «Комплексное научно-методическое сопровождение образовательного процесса, создание условий для совершенствования профессиональных компетенций педагогических работников как главного ресурса, обеспечивающего инновационное развитие колледжа на основе внедрения в образовательный процесс современных педагогических и информационно-коммуникационных технологий»
                    </p>
                  </div>
                </div>

                {/* Tasks List */}
                <h3 className="text-2xl font-bold text-primary-900 mt-10 mb-6 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <List className="w-6 h-6 text-accent-600" />
                  Задачи:
                </h3>
                <ul className="space-y-3 text-slate-700 text-[15px] mb-10">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0"></div>
                    <span>продолжить формировать практические компетенции педагога по использованию современных педагогических и информационно-коммуникационных технологий для обеспечения качества подготовки выпускников колледжа;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0"></div>
                    <span>совершенствовать образовательный процесс на основе обновленного содержания обучения и применения эффективных педагогических и цифровых технологий;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0"></div>
                    <span>продолжить формировать банк методических материалов для педагогов колледжа посредством информационной базы методического кабинета и раздела «Методическая работа» сайта колледжа;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0"></div>
                    <span>продолжить разработку УМК учебных предметов, всех видов практик в соответствии с предъявляемыми к ним требованиями;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0"></div>
                    <span>провести работу по созданию виртуального методического кабинета для формирования банка методического обеспечения образовательного процесса;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0"></div>
                    <span>продолжить работу со способными и мотивированными учащимися с целью обеспечения их интеллектуального, личностного и профессионального развития для подготовки к профессиональным конкурсам, олимпиадам по учебным предметам, конкурсам работ исследовательского характера (конференция) учащихся по учебным предметам, республиканским дистанционным мероприятиям на интернет-ресурсе по сопровождению олимпиад, турниров и конкурсов и иным мероприятиям;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0"></div>
                    <span>совершенствовать формы сотрудничества с базовыми хозяйствами и строительными организациями с целью подготовки высококвалифицированных специалистов для агропромышленного комплекса Республики Беларусь.</span>
                  </li>
                </ul>

                {/* Directions and Commissions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  {/* Directions */}
                  <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
                    <h4 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                      Основные направления:
                    </h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-accent-500" />
                        <span>организационно-методическая деятельность;</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-accent-500" />
                        <span>диагностико-аналитическая деятельность;</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-accent-500" />
                        <span>информационное обеспечение образовательного процесса;</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-accent-500" />
                        <span>обобщение и трансляция положительного педагогического опыта;</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-accent-500" />
                        <span>проектирование и координация педагогического процесса.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Forms */}
                  <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
                    <h4 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                      Формы методической работы:
                    </h4>
                    <div className="space-y-4 text-slate-700">
                      <div>
                        <span className="font-bold text-primary-800 block mb-1">Коллективные:</span>
                        <p className="text-sm">совет колледжа, педагогический совет, методический совет, цикловые комиссии, методическое объединение кураторов и воспитателей, наставничество, конференции, мастер-классы, педагогические мастерские, открытые учебные занятия и внеурочные мероприятия, методические выставки, предметные недели, методический кабинет, творческие группы.</p>
                      </div>
                      <div>
                        <span className="font-bold text-accent-700 block mb-1">Индивидуальные:</span>
                        <p className="text-sm">самообразование, собеседование, консультация, подготовка, переподготовка и повышение квалификации, стажировка, авторская работа, ведение профессионального портфолио, создание УМК и ЭУМК, анализ, корректировка, разработка УПД, взаимопосещение учебных занятий и мероприятий.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Commissions List */}
                <div className="bg-primary-900 text-white rounded-xl shadow-lg p-8 relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 opacity-10">
                    <Users className="w-48 h-48" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      В колледже работают цикловые комиссии:
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-200 font-medium">
                      <li className="flex items-start gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0"></div>
                        <span>Общеобразовательных предметов</span>
                      </li>
                      <li className="flex items-start gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0"></div>
                        <span>Общепрофессиональных предметов</span>
                      </li>
                      <li className="flex items-start gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0"></div>
                        <span>Физической культуры и здоровья</span>
                      </li>
                      <li className="flex items-start gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0"></div>
                        <span>Специальных предметов по специальности 5-04-0811-03 «Мелиорация земель»</span>
                      </li>
                      <li className="flex items-start gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm md:col-span-2">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0"></div>
                        <span>Специальных предметов по специальностям 5-04-0732-01 «Строительство зданий и сооружений» и 5-04-0732-08 «Строительство и эксплуатация автомобильных дорог»</span>
                      </li>
                      <li className="flex items-start gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0"></div>
                        <span>Специальных предметов по специальности 5-04-0812-01 «Техническое обслуживание и ремонт сельскохозяйственной техники»</span>
                      </li>
                      <li className="flex items-start gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0"></div>
                        <span>Специальных предметов по специальности 5-04-0715-20 «Техническая эксплуатация подъемно-транспортных, дорожно-строительных машин и оборудования»</span>
                      </li>
                      <li className="flex items-start gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm md:col-span-2">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0"></div>
                        <span>Мастеров производственного обучения</span>
                      </li>
                    </ul>
                  </div>
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

export default MethodicalWorkDirections;
