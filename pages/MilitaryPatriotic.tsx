import React from 'react';
import { Shield, Flag, Target, Book, FileText, ChevronRight, Compass, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const TASKS = [
  'Привитие глубокого уважения к национальному наследию, традициям, обычаям, культуре, религиям народа Беларуси',
  'Разъяснение Конституции Республики Беларусь, создающей условия для демократии и гражданского согласия',
  'Привитие уважения к Государственному гербу и Государственному флагу Республики Беларусь',
  'Воспитание понимания, что под этим гербом и флагом новые поколения будут строить высокоразвитую Республику Беларусь',
  'Воспитание чувства гордости за свою страну и готовности к выполнению социальной роли гражданина',
  'Воспитание в духе национального взаимодействия и дружелюбия, монолитного единства народа. Интернациональное воспитание',
  'Привитие любви и уважения к белорусскому языку как языку коренного населения, русскому и другим языкам народа Беларуси',
  'Раскрытие красот белорусской природы, убеждение в необходимости охраны экологической среды',
  'Организация выполнения оборонно-спортивных комплексов и нормативов',
  'Воспитание уважения к Вооруженным Силам Республики Беларусь и к защитнику Отечества, воину',
  'Формирование у юношей морально-психологической и физической готовности к выполнению конституционной обязанности по защите Республики Беларусь',
  'Убеждение в необходимости для Беларуси мира и международного сотрудничества'
];

const DOCUMENTS = [
  { title: 'Кодекс Республики Беларусь об образовании', href: 'https://pravo.by/document/?guid=3871&p0=hk1100243' },
  { title: 'Концепция непрерывного воспитания детей и учащейся молодежи', href: 'http://www.college.by/pages/vir/curator/koncepciia_vospitaniia.pdf' },
  { title: 'Программа непрерывного воспитания детей и учащейся молодежи на 2021-2025 гг.', href: 'https://adu.by/images/2023/vosp/programma-vospitaniya-2021-2025.pdf' },
  { title: 'Комплексная программа воспитания детей и учащейся молодежи в Минской области на 2021-2025 гг.', href: 'https://ltk.grsu.by/attachments/article/325/Kompleksnaya_programma_vospitanya_na_2021-2025.pdf' },
  { title: 'Конституция Республики Беларусь', href: 'https://pravo.by/pravovaya-informatsiya/normativnye-dokumenty/konstitutsiya-respubliki-belarus/' },
  { title: 'ПОСТАНОВЛЕНИЕ МИНИСТЕРСТВА ТРУДА И СОЦИАЛЬНОЙ ЗАЩИТЫ РЕСПУБЛИКИ БЕЛАРУСЬ от 24 февраля 2022 г. № 13', href: 'https://tnpa.by/#!/OrdersText/660233/526100' },
  { title: 'КОНЦЕПЦИЯ информационной безопасности Республики Беларусь', href: 'https://pravo.by/upload/docs/op/P219s0001_1553029200.pdf' },
  { title: 'Указ президента Республики Беларусь «О развитии военно-патриотических клубов»', href: 'https://groiro.by/files/01030/obj/145/31613/doc/Указ о военно-патриотических клубах.pdf' },
  { title: 'Концепция национальной безопасности Республики Беларусь', href: 'https://pravo.by/document/?guid=3871&p0=P31000575' },
  { title: 'Военная доктрина Республики Беларусь', href: 'https://pravo.by/document/?guid=3871&p0=H11600412' },
  { title: 'Закон Республики Беларусь Об Обороне', href: 'https://pravo.by/document/?guid=3961&p0=V19201902' },
  { title: 'Закон Республики Беларусь О Вооруженных Силах Республики Беларусь', href: 'https://pravo.by/document/?guid=3871&p0=v19201904' },
  { title: 'Закон Республики Беларусь О статусе военнослужащих', href: 'https://kodeksy-bel.com/zakon_rb_o_statuse_voennosluzhawih.htm' },
  { title: 'Закон Республики Беларусь О воинской обязанности и воинской службе', href: 'https://kodeksy-bel.com/zakon_rb_o_voinskoj_obyazannosti.htm' },
  { title: 'О Программе патриотического воспитания населения Республики Беларусь на 2022–2025 годы', href: 'https://pravo.by/document/?guid=12551&p0=C22100773&p1=1' },
  { title: 'О Государственной программе «Образование и молодежная политика» на 2021–2025 годы', href: 'https://pravo.by/document/?guid=12551&p0=C22100057&p1=1' },
  { title: 'Методические рекомендации по организации работы руководителя по военно-патриотическому воспитанию в учреждениях образования', href: 'https://ripo.by/index.php?id=6126' },
];

const NEWS = [
  { title: 'Просмотр и обсуждение фильма "Блокадный дневник". Учебная группа 222С', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/2125-prosmotr-i-obsuzhdenie-filma-blokadnyj-dnevnik-uchebnaya-gruppa-222s' },
  { title: '«Мы – граждане Беларуси». План мероприятий месячника военно-патриотического воспитания', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/2123-my-grazhdane-belarusi-plan-meropriyatij-mesyachnika-voenno-patrioticheskogo-vospitaniya' },
  { title: 'Просмотр и обсуждение художественного фильма «Собибор»', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/2112-prosmotr-i-obsuzhdenie-khudozhestvennogo-filma-sobibor-3' },
  { title: 'Час не забвения «Память длиною в вечность»', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/2111-chas-ne-zabveniya-pamyat-dlinoyu-v-vechnost' },
  { title: 'Экскурсию по памятным местам совершили учащиеся #ПГАТККЛЕЩЕВА', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/2071-ekskursiyu-po-pamyatnym-mestam-sovershili-uchashchiesya-pgatkkleshcheva' },
  { title: 'Диалоговая площадка "Союзное государство. 25 лет вместе"', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/2069-dialogovaya-ploshchadka-soyuznoe-gosudarstvo-25-let-vmeste' },
  { title: 'В августе 44-го. Просмотр и обсуждение художественного фильма', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/2068-v-avguste-44-go-prosmotr-i-obsuzhdenie-khudozhestvennogo-filma' },
  { title: 'Константин Заслонов. Просмотр и обсуждение художественного фильма', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/2060-konstantin-zaslonov-prosmotr-i-obsuzhdenie-khudozhestvennogo-filma' },
  { title: 'Встреча учащихся выпускных групп с начальником отдела призыва на военную службу военного комиссариата', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/2054-vstrecha-uchashchikhsya-vypusknykh-grupp-s-nachalnikom-otdela-prizyva-na-voennuyu-sluzhbu-voennogo-komissariata' },
  { title: 'Посетили Пинский пограничный отряд. На экскурсии 431Б учебная группа.', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/2044-posetili-pinskij-pogranichnyj-otryad-na-ekskursii-431b-uchebnaya-gruppa' },
  { title: 'Мероприятие «Абитуриент- 2025», организованное УО "Военная академия Республики Беларуси" и высшими военными учебными заведениями', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/2029-meropriyatie-abiturient-2025-organizovannoe-uo-voennaya-akademiya-respubliki-belarusi-i-vysshimi-voennymi-uchebnymi-zavedeniyami' },
  { title: 'Встреча учащихся 4 курса с командиром роты ППСМ Пинского ГОВД', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/2000-vstrecha-uchashchikhsya-4-kursa-s-komandirom-roty-ppsm-pinskogo-govd' },
  { title: 'В Пинске открыт памятный знак жертвам нацизма', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1970-v-pinske-otkryt-pamyatnyj-znak-zhertvam-natsizma' },
  { title: 'Посетили войсковую часть 10198, базирующуюся в г. Лунинец', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1966-posetili-vojskovuyu-chast-10198-baziruyushchuyusya-v-g-luninets' },
  { title: 'Учащиеся Пинского аграрно-технического колледжа имени А.Е.Клещева посетили Пинский пограничный отряд', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1953-uchashchiesya-pinskogo-agrarno-tekhnicheskogo-kolledzha-imeni-a-e-kleshcheva-posetili-pinskij-pogranichnyj-otryad' },
  { title: 'ПРОСМОТР И ОБСУЖДЕНИЕ ХУДОЖЕСТВЕННОГО ФИЛЬМА «МАМА, Я ЖИВ!»', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1932-prosmotr-i-obsuzhdenie-khudozhestvennogo-filma-mama-ya-zhiv' },
  { title: 'Участие в праздничных мероприятиях, посвященных празднованию Дня Независимости Республики Беларусь', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1795-uchastie-v-prazdnichnykh-meropriyatiyakh-posvyashchennykh-prazdnovaniyu-dnya-nezavisimosti-respubliki-belarus' },
  { title: 'Велопробег "Молодежь под мирным небом!"', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1792-veloprobeg-molodezh-pod-mirnym-nebom' },
  { title: 'В Пинске отметили годовщину первого партизанского боя', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1788-v-pinske-otmetili-godovshchinu-pervogo-partizanskogo-boya' },
  { title: 'Национальный фильм «Мемориальные комплексы Беларуси»', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1787-natsionalnyj-film-memorialnye-kompleksy-belarusi' },
  { title: 'Фотовыставка "Завтра была война..."', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1773-fotovystavka-zavtra-byla-vojna' },
  { title: 'Открытие памятного знака на месте массового расстрела жертв фашизма', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1772-otkrytie-pamyatnogo-znaka-na-meste-massovogo-rasstrela-zhertv-fashizma' },
  { title: 'Экскурсия «Дорогами памяти»', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1771-ekskursiya-dorogami-pamyati' },
  { title: 'Документальный фильм "Говорит немая память"', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1770-dokumentalnyj-film-govorit-nemaya-pamyat' },
  { title: 'Документальный фильм "Перезвон"', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1769-dokumentalnyj-film-perezvon' },
  { title: 'С болью в сердце. Экскурсия по экспозиции', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1761-s-bolyu-v-serdtse-ekskursiya-po-ekspozitsii' },
  { title: 'Посетили филиал Ивацевичского историко-краеведческого музея – мемориальный комплекс партизанской славы «Хованщина»', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1750-posetili-filial-ivatsevichskogo-istoriko-kraevedcheskogo-muzeya-memorialnyj-kompleks-partizanskoj-slavy-khovanshchina' },
  { title: 'Просмотр художественного фильма "Константин Заслонов"', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1747-prosmotr-khudozhestvennogo-filma-konstantin-zaslonov' },
  { title: 'Военно-патриотическая игра "Зарница-2024" в #ПГАТККЛЕЩЕВА', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1732-voenno-patrioticheskaya-igra-zarnitsa-2024-v-pgatkkleshcheva' },
  { title: 'Экспозиция "С болью в сердце..." В гостях Пинский аграрный технологический колледж', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1710-ekspozitsiya-s-bolyu-v-serdtse-v-gostyakh-pinskij-agrarnyj-tekhnologicheskij-kolledzh' },
  { title: 'Просмотр и обсуждение художественного фильма "Гарнизон"', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1628-prosmotr-i-obsuzhdenie-khudozhestvennogo-filma-garnizon' },
  { title: 'Экскурсия по памятным местам', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1583-ekskursiya-po-pamyatnym-mestam' },
  { title: '#ПГАТККЛЕЩЕВА: МОЛОДЕЖЬ ПОМНИТ!', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1568-pgatkkleshcheva-molodezh-pomnit' },
  { title: 'Группа 322С на экскурсии в музее истории колледжа', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1560-gruppa-322s-na-ekskursii-v-muzee-istorii-kolledzha' },
  { title: 'Группа 352С на экскурсии в Пинской межрайонной прокуратуре', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1559-gruppa-352s-na-ekskursii-v-pinskoj-mezhrajonnoj-prokurature' },
  { title: 'Художественный фильм "В бой идут одни "старики""', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1517-khudozhestvennyj-film-v-boj-idut-odni-stariki-2' },
  { title: 'Музейные комнаты ПолесГУ посетила учебная группа 131Б', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1508-muzejnye-komnaty-polesgu-posetila-uchebnaya-gruppa-131b' },
  { title: 'Торжественное построение личного состава, приуроченное Дню милиции', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1507-torzhestvennoe-postroenie-lichnogo-sostava-priurochennoe-dnyu-militsii' },
  { title: 'Информационный час на тему "Государственный деятель Беларуси - Пётр Миронович Машеров"', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1506-informatsionnyj-chas-na-temu-gosudarstvennyj-deyatel-belarusi-pjotr-mironovich-masherov' },
  { title: 'Экскурсия в музейные комнаты. Учебная группа 341Б.', href: '/voenno-patrioticheskoe-vospitanie/8-novosti/1501-ekskursiya-v-muzejnye-komnaty-uchebnaya-gruppa-341b' },
];

const MilitaryPatriotic: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-12">
      
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-red-800 to-rose-950 rounded-3xl p-8 md:p-12 text-white shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg className="absolute w-96 h-96 -top-10 -right-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Военно-патриотическое воспитание</h2>
            <div className="bg-red-900/40 p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm">
              <p className="text-lg leading-relaxed font-medium">
                <span className="text-red-300 font-bold">Патриотизм</span> – это чувство любви к своей Родине, выраженное в активной деятельности по ее процветанию и защите от врагов. В этом определении заложена сущность идеологии патриотизма в общем виде. Конкретно направленность патриотизма определяется его идеологической основой.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 shrink-0">
             <img 
               src={`${import.meta.env.BASE_URL}images/Ideologiy/VPV/VPV.jpg`} 
               alt="Военно-патриотическое воспитание" 
               className="w-full h-64 object-cover rounded-2xl shadow-lg border border-white/10"
             />
          </div>
        </div>
      </div>

      {/* Main Goal */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex items-start gap-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100">
           <Target className="w-8 h-8 text-rose-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary-900 mb-3">Главная цель</h3>
          <p className="text-slate-700 text-lg leading-relaxed text-justify">
            Развитие и воспитание ответственного отношения к себе, своей семье, обществу, людям, гражданско-патриотической компетентности, приобретение опыта участия в общественной жизни, гражданских инициативах, социально значимых проектах, воспитание личности, имеющей активную жизненную позицию, привитие молодежи любви к Беларуси, формирование у нее устойчивого желания способствовать ее процветанию и стремления защищать от врагов.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Tasks (Left Column) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-2xl font-bold text-primary-900 flex items-center gap-3">
             <Flag className="w-6 h-6 text-red-600" />
             Задачи для реализации целей
          </h3>
          <div className="space-y-4">
            {TASKS.map((task, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-colors group">
                <span className="w-8 h-8 rounded-full bg-white text-red-600 font-bold flex items-center justify-center shadow-sm shrink-0 border border-slate-200 group-hover:border-red-300">
                  {idx + 1}
                </span>
                <p className="text-slate-700 font-medium leading-snug pt-1">
                  {task}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & News (Right Column) */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-lg border border-slate-700">
             <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
                <Book className="w-6 h-6 text-red-400" />
                Нормативно-правовое обеспечение
             </h3>
             <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
               {DOCUMENTS.map((doc, idx) => (
                 <a 
                   key={idx} 
                   href={doc.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all"
                 >
                   <div className="flex gap-3">
                     <FileText className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                     <span className="text-sm text-slate-200 group-hover:text-white leading-snug line-clamp-3">
                       {doc.title}
                     </span>
                   </div>
                 </a>
               ))}
             </div>
          </div>

          <Link 
            to="/voenno-patrioticheskoe-vospitanie/8-novosti/2123-my-grazhdane-belarusi-plan-meropriyatij-mesyachnika-voenno-patrioticheskogo-vospitaniya"
            className="block p-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg hover:shadow-red-500/30 transition-all hover:-translate-y-1 group"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-lg mb-2">«Мы – граждане Беларуси»</h4>
                <p className="text-red-100 text-sm">План мероприятий месячника военно-патриотического воспитания с 10 февраля по 28 февраля 2025 года</p>
              </div>
              <ChevronRight className="w-8 h-8 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
          </Link>

        </div>
      </div>

      {/* News Feed */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mt-12">
        <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
           <ShieldCheck className="w-6 h-6 text-red-600" />
           Новости и мероприятия
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {NEWS.map((newsItem, idx) => (
            <Link 
              key={idx}
              to={newsItem.href}
              className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-red-50 hover:border-red-100 transition-colors group"
            >
               <Compass className="w-5 h-5 text-slate-400 group-hover:text-red-500 shrink-0 mt-0.5 transition-colors" />
               <span className="text-sm font-medium text-slate-700 group-hover:text-red-900 leading-snug line-clamp-3">
                 {newsItem.title}
               </span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MilitaryPatriotic;
