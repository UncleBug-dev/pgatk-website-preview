import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu as MenuIcon, ChevronDown, FileText, ExternalLink, ChevronRight, 
  BookOpen, Users, Trophy, Flag, Book, Heart, Building2, MapPin
} from 'lucide-react';
import { MAIN_MENU } from '../constants';
import { Lightbox } from '../components/Lightbox';

const HISTORY_IMAGES = [
  '/images/history/kolledg_st.jpg',
  '/images/history/gidro_star.jpg'
];

const ALUMNI = [
  { name: "Лихацевич Анатолий Павлович", year: "1964", spec: "Гидромелиорация", desc: "Доктор технических наук, профессор, член-корреспондент НАН Беларуси, главный научный сотрудник РУП «Институт мелиорации»" },
  { name: "Шахнович Алексей Алексеевич", year: "1961", spec: "Гидромелиорация", desc: "Заместитель председателя Совета Министров РБ. Министр мелиорации сельского хозяйства и водного хозяйства БССР (1986-1990)" },
  { name: "Арцименя Дмитрий Константинович", year: "—", spec: "—", desc: "Председатель Гродненского облисполкома" },
  { name: "Бердицевич Леонид Иванович", year: "—", spec: "—", desc: "Первый заместитель Министра Минводхоза Республики Беларусь" },
  { name: "Поливко Николай Антонович", year: "1960", spec: "Гидромелиорация", desc: "Первый вице-президент концерна «Белмелиоводхоз»" },
  { name: "Климович Николай Алексеевич", year: "1974", spec: "Гидромелиорация", desc: "Генеральный директор ГУП «Брестмелиоводхоз»" },
  { name: "Юш Александр Александрович", year: "1970", spec: "Гидромелиорация", desc: "Генеральный директор «ЖКХ г. Пинска»" },
  { name: "Невдах Василий Иванович", year: "1967", spec: "Механизация гидромелиоративных работ", desc: "Проректор по УВР БГСХА (1994-2005). Директор Пинского филиала УО «Витебская госакадемия ветеринарной медицины»" },
  { name: "Богданец Борис Иванович", year: "1980", spec: "Гидромелиорация", desc: "Генеральный директор ОУП «Гродномелиоводхоз»" },
  { name: "Король Леонид Павлович", year: "1978", spec: "Гидромелиорация", desc: "Генеральный директор ОАО «Пинскводстрой»" },
  { name: "Савич Алексей Максимович", year: "1975", spec: "ПГС", desc: "Заместитель генерального директора ОАО «Стройтрест №2» г. Пинск" },
  { name: "Рубец Сергей Григорьевич", year: "2002", spec: "Техобеспечение гидромелиоративных работ", desc: "Кандидат технических наук, доцент УО «БГСХА»" }
];

const History: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);

  const parentSection = MAIN_MENU.find(item => item.href === '/kolledg');
  const sidebarLinks = parentSection?.submenu || [];
  const currentPath = '/kolledg/istoriy-kolledga';

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
            <span className="text-accent-500 font-bold truncate">История колледжа</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-5xl">
            История колледжа
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
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
              
              {/* Вступление Hero */}
              <div className="relative h-80 w-full">
                <img src="/images/history/L_height.webp" alt="Современный вид колледжа" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary-900/60 flex items-center justify-center p-8">
                  <blockquote className="text-center max-w-2xl">
                    <p className="text-xl md:text-2xl lg:text-3xl font-display italic text-white font-semibold leading-relaxed">
                      «Колледж наш - ты любовь моя первая,<br/>
                      Ты улыбка и мудрый совет.<br/>
                      Тёплым светом, надеждой и верою<br/>
                      Я всегда в твоих стенах согрет.»
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="prose prose-lg prose-slate max-w-none text-slate-600 mb-16">
                  <p className="text-lg leading-relaxed">
                    Шли годы. Раны, нанесённые стране войной, постепенно затягивались. Заново отстраивались города, деревни, жизнь входила в мирное русло. Стране нужны были образованные и высококвалифицированные специалисты. Именно в это непростое, но созидательное время на западных границах нашей Родины в столице Полесья и началась славная история нашего учебного заведения.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-primary-900 mb-10 flex items-center gap-3">
                  <Flag className="w-8 h-8 text-accent-500" /> Вехи развития
                </h2>

                {/* Timeline */}
                <div className="space-y-12 mb-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                  
                  {/* 1946 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <span className="text-sm font-bold">1946</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
                      <h3 className="font-bold text-primary-900 text-xl mb-2">Создание техникума</h3>
                      <p className="text-sm text-slate-600 mb-4">
                        29 августа 1946 г. Постановлением Совета Министров БССР № 1659 создан Пинский сельскохозяйственный техникум. 
                        А 14 октября он преобразован в гидромелиоративный техникум. Приём составил 120 человек.
                      </p>
                      <div className="bg-white p-3 rounded-lg border border-slate-200 text-sm italic text-slate-500">
                        Первый директор – Домарков Артём Минаевич. Техникуму переданы здания по ул. Кирова, Советской и Кривой.
                      </div>
                    </div>
                  </div>

                  {/* Ретро фото в таймлайне */}
                  <div className="relative flex justify-center z-10">
                    <img 
                      src={HISTORY_IMAGES[0]} 
                      alt="Ретро фото" 
                      onClick={() => setSelectedImageIndex(0)}
                      className="w-full max-w-lg rounded-xl shadow-md border-4 border-white grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" 
                    />
                  </div>

                  {/* 1951-1966 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
                      <h3 className="font-bold text-primary-900 text-xl mb-2">Строительство базы (1951-1966)</h3>
                      <p className="text-sm text-slate-600">
                        Руководит техникумом инженер-геодезист Лапицкий И.Н. Построен учебный корпус № 1, два общежития на 256 мест. В 1961 году открываются новые специальности: «Механизация мелиоративных работ» и «Землеустройство».
                      </p>
                    </div>
                  </div>

                  {/* 1966-1985 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <span className="text-xs font-bold">1970</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
                      <h3 className="font-bold text-primary-900 text-xl mb-2">Имени А.Е. Клещёва</h3>
                      <p className="text-sm text-slate-600 mb-4">
                        Руководит Пастухов В.Ф. В 1970 г. техникуму присвоено имя Героя Советского Союза А.Е. Клещёва. В 1971 г. техникум награжден Почетной грамотой Верховного Совета БССР и открыта специальность «ПГС».
                      </p>
                    </div>
                  </div>

                  {/* Ретро фото в таймлайне 2 */}
                  <div className="relative flex justify-center z-10">
                    <img 
                      src={HISTORY_IMAGES[1]} 
                      alt="Техникум" 
                      onClick={() => setSelectedImageIndex(1)}
                      className="w-full max-w-lg rounded-xl shadow-md border-4 border-white hover:scale-105 transition-transform duration-500 cursor-pointer" 
                    />
                  </div>

                  {/* 1991-2018 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
                      <h3 className="font-bold text-primary-900 text-xl mb-2">Новое время</h3>
                      <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4">
                        <li><b>1991:</b> Открыта специальность «Строительство автомобильных дорог».</li>
                        <li><b>1997-2005:</b> Горошко В.М. демократизация учебного процесса.</li>
                        <li><b>2002:</b> Присоединение учебного центра Минсельхозпрода.</li>
                        <li><b>2003:</b> Переименован в ПГАТК им. А.Е. Клещёва.</li>
                        <li><b>2005-2011:</b> Князюк Н.И., создание Ассоциации с ВУЗами.</li>
                        <li><b>2012-2018:</b> Притульчик В.В., сертификат Системы менеджмента качества.</li>
                      </ul>
                    </div>
                  </div>

                  {/* 2020 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <span className="text-xs font-bold">2020</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100">
                      <h3 className="font-bold text-primary-900 text-xl mb-2">Новейшая история</h3>
                      <p className="text-sm text-slate-600">
                        На должность директора назначен Колб Игорь Михайлович. Депутат Палаты представителей, опытный руководитель, "Человек года".
                      </p>
                    </div>
                  </div>

                </div>

                {/* Stats */}
                <h2 className="text-3xl font-bold text-primary-900 mb-8 mt-16 text-center">Колледж сегодня</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                  <div className="bg-primary-50 p-6 rounded-xl text-center border border-primary-100">
                    <Users className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary-900 mb-1">800+</div>
                    <div className="text-xs text-primary-700 font-medium uppercase tracking-wider">Учащихся</div>
                  </div>
                  <div className="bg-accent-50 p-6 rounded-xl text-center border border-accent-100">
                    <Trophy className="w-8 h-8 text-accent-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-accent-700 mb-1">18 390</div>
                    <div className="text-xs text-accent-700 font-medium uppercase tracking-wider">Выпускников</div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100">
                    <Building2 className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-900 mb-1">3</div>
                    <div className="text-xs text-blue-700 font-medium uppercase tracking-wider">Учебных корпуса</div>
                  </div>
                  <div className="bg-rose-50 p-6 rounded-xl text-center border border-rose-100">
                    <BookOpen className="w-8 h-8 text-rose-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-rose-900 mb-1">60+</div>
                    <div className="text-xs text-rose-700 font-medium uppercase tracking-wider">Кабинетов и лаб.</div>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mb-16">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Для подготовки специалистов колледж располагает современной учебно-материальной базой площадью более 7633 кв.м. Учебно-производственные мастерские, полигоны, автотрактодром, СТО. Два благоустроенных общежития на 290 мест.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Учащиеся получают не только фундаментальные знания, но и имеют возможность получить рабочие профессии: водителя, тракториста-машиниста, слесаря, бетонщика, каменщика, штукатура, маляра и плотника. Образовательную работу проводят 50 преподавателей и 12 мастеров производственного обучения.
                  </p>
                </div>

                {/* Alumni */}
                <h2 className="text-3xl font-bold text-primary-900 mb-8 mt-16 text-center">Гордость колледжа</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {ALUMNI.map((alumnus, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg text-primary-900">{alumnus.name}</h4>
                      <div className="flex gap-4 mt-2 mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        <span>Выпуск: <span className="text-accent-600">{alumnus.year}</span></span>
                        <span>Спец: <span className="text-primary-600">{alumnus.spec}</span></span>
                      </div>
                      <p className="text-sm text-slate-600">{alumnus.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Museum and life */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                  <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                    <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-primary-900 text-lg mb-2">Музей Славы</h3>
                    <p className="text-sm text-slate-600">
                      Создан Музей боевой и трудовой Славы. В 2016 году добавились экспозиции по истории развития мелиорации на Полесье.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Book className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-primary-900 text-lg mb-2">Библиотека</h3>
                    <p className="text-sm text-slate-600">
                      Книжный фонд библиотеки составляет более 60 тысяч экземпляров литературы. Два читальных зала для самостоятельной работы.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-primary-900 text-lg mb-2">Спорт и БРСМ</h3>
                    <p className="text-sm text-slate-600">
                      Регулярные занятия в секциях. Сборные успешно выступают на соревнованиях. Важное значение уделяется сотрудничеству с БРСМ.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white p-8 rounded-xl text-center shadow-xl">
                  <p className="text-xl md:text-3xl font-display font-bold italic mb-4">«Достойное образование – успешное будущее»</p>
                  <p className="text-primary-100 max-w-2xl mx-auto">Коллектив делает всё, чтобы выпускники были высококвалифицированными специалистами и гражданами нашей страны.</p>
                </div>

              </div>
            </div>
          </main>
        </div>
      </div>

      {selectedImageIndex !== null && (
        <Lightbox 
          images={HISTORY_IMAGES}
          selectedIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onSelectIndex={setSelectedImageIndex}
        />
      )}
    </div>
  );
};

export default History;
