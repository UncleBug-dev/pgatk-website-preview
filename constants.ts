import { MenuItem, NewsItem } from './types';

export const MAIN_MENU: MenuItem[] = [
  {
    label: "Главная",
    href: "/"
  },
  {
    label: "Колледж",
    href: "/kolledg",
    submenu: [
      { label: "Администрация", href: "/kolledg/administraciy" },
      { label: "История колледжа", href: "/kolledg/istoriy-kolledga" },
      { label: "Материально-техническая база", href: "/kolledg/materialno-tekhnicheskaya-baza" },
      { label: "Наши достижения", href: "/kolledg/nashi-dostizheniya" },
      { label: "Наши контакты", href: "/kolledg/nashi-kontakty" },
      { label: "Режим работы", href: "/kolledg/rezhimraboty" },
      { label: "Мы в СМИ", href: "/kolledg/mi-v-smi" },
      { label: "Выдающиеся выпускники", href: "/kolledg/vydayushchiesya-vypusniki" },
      { label: "Доска почета", href: "/kolledg/virtualnaya-doska-pocheta" },
      { label: "Организационная структура", href: "/kolledg/struktura-kolledga" },
      { label: "Положение о перс. данных", href: "/downloads/policy/ObrabotkaPersonalnihDannih.pdf" },
      { label: "Политика конфиденциальности", href: "/downloads/policy/politika_konfidencialnosti.pdf" },
      { label: "Политика обработки куки", href: "/downloads/policy/poloshenie_cookie.pdf" },
      { label: "Политика ИБ", href: "/downloads/policy/politika_ib.pdf" }
    ]
  },
  /*
  {
    label: "НИКО",
    href: "/niko"
  },
  */
  {
    label: "Абитуриентам",
    href: "/abiturientam",
    submenu: [
      { label: "Информация о ходе приема документов", href: "/downloads/abiturient/hod_priema.pdf" },
      { label: "Проходные баллы 2025 года", href: "/downloads/abiturient/prohodnie_balli.pdf" },
      { label: "Специальности, квалификации", href: "/abiturientam/spetsialnosti-kvalifikatsii" },
      { label: "План приема в 2026 году", href: "/abiturientam/plan-priema" },
      { label: "Перечень документов", href: "/abiturientam/perechen-dokumentov" },
      { label: "Сроки приема документов и зачисление", href: "/abiturientam/sroki-priema-dokumentov-i-zachislenie" },
      { label: "Условия приема в 2026 году", href: "/downloads/abiturient/usloviya_priema.pdf" },
      { label: "Целевая подготовка", href: "/abiturientam/predlozhenie-o-tselevoj-podgotovke" },
      { label: "Предложения о целевой подготовке", href: "/abiturientam/predlozheniya-o-tselevoj-podgotovke" },
      { label: "Правила приема", href: "/downloads/abiturient/pravila_priema.pdf" },
      { label: "Общежитие", href: "/abiturientam/obshechitie-abitur" },
      { label: "Работа с базовыми предприятиями", href: "/abiturientam/rabota-s-bazovymi-predpriyatiyami" },
      { label: "Нормативно-правовое обеспечение. Вступительная кампания", href: "https://portal.oumc.by/normativno-pravovoe-obespechenie-vstupitelnaya-kompaniya-2024/" },
      { label: "Советы психолога по выбору профессии", href: "/abiturientam/sovety-psikhologa-po-vyboru-professii" },
      { label: "Из уст молодых специалистов", href: "/abiturientam/iz-ust-molodykh-spetsialistov" },
      { label: "Профориентационные новости", href: "/abiturientam/proforientatsionnye-novosti-o-nas-v-smi" },
      { label: "Дни открытых дверей", href: "/abiturientam/dni-otkrytykh-dverej" },
      { label: "Дистанционный день открытых дверей", href: "/abiturientam/dod-2024" },
      { label: "Виртуальный кабинет профориентации", href: "https://profpgatkk.online/" },
      { label: "ПрофиТест", href: "https://profitest.ripo.by/public/main" },
      { label: "График профориентационных консультаций в 2025/2026", href: "/abiturientam/grafik-provedeniya-proforientatsionnykh-konsultatsij" }
    ]
  },
  {
    label: "Образовательный процесс",
    href: "/obrazovatelniy-process",
    submenu: [
      { label: "Заочная форма обучения", href: "/obrazovatelniy-process/zaochnaya-forma-obucheniya" },
      { label: "Выпускникам", href: "/obrazovatelniy-process/vypusknikam" },
      { label: "Библиотека", href: "/obrazovatelniy-process/biblioteka" },
      { label: "Обучение (междунар. договоры)", href: "/obrazovatelniy-process/obuchenie-v-ramkakh-mezhdunarodnykh-dogovorov" },
      { label: "Переподготовка", href: "/obrazovatelniy-process/perepodgotovka" }
    ]
  },
  {
    label: "Идеология и воспитание",
    href: "/ideologicheskaya-i-vospitatelnaya-rabota",
    submenu: [
      { label: "Государственная символика РБ", href: "https://president.gov.by/ru/gosudarstvo/simvolika" },
      { label: "Цели и задачи", href: "/ideologicheskaya-i-vospitatelnaya-rabota" },
      { label: "В помощь куратору", href: "/dokumentatsiya" },
      { label: "Объединения по интересам", href: "/ob-edineniya-po-interesam" },
      { label: "Военно-патриотическое воспитание", href: "/voenno-patrioticheskoe-vospitanie" },
      { label: "Общественные объединение и организации", href: "/obshchestvennye-ob-edinenie-i-organizatsii" },
      { label: "Информационно образовательный проект ШАГ", href: "/informatsionno-obrazovatelnyj-proekt-shkola-aktivnogo-grazhdanina" },
      { label: "Штаб трудовых дел", href: "/shtab-trudovykh-del" },
      { label: "Концепция развития системы образования до 2030", href: "/kontseptsiya-razvitiya-sistemy-obrazovaniya-respubliki-belarus-do-2030-goda" },
      { label: "Правовая культура", href: "/pravovaya-kultura" },
      { label: "Общежитие", href: "/obshchezhitie" },
      { label: "Оказание социально-педагогической помощи", href: "/okazanie-socialno-pedagogicheskoy-pomochi" },
      { label: "Единый день информирования", href: "/edinyj-den-informirovaniya" },
      { label: "Спортивная жизнь", href: "/sportivnaya-zhizn" },
      { label: "Здоровый образ жизни", href: "/zdorovyj-obraz-zhizni" },
      { label: "Музей истории колледжа", href: "/muzej-istorii-kolledzha" },
      { label: "Ученическое самоуправление", href: "/uchenicheskoe-samoupravlenie" },
      { label: "Виртуальная экспозиция о геноциде", href: "/virtualnaya-ekspozitsiya-pamyat-i-bol-belorusskoj-zemli-posvyashchennykh-genotsidu-belorusskogo-naroda" },
      { label: "Родителям", href: "/roditelyam" },
      { label: "STOP-НАРКОТИК", href: "/stop-narkotik" },
      { label: "Закон и подросток", href: "/zakon-i-podrostok" },
      { label: "Лето 2025", href: "/leto-2024" },
      { label: "Профилактика киберпреступлений", href: "/profilaktika-kiberprestuplenij" },
      { label: "Профилактика табакокурения", href: "/profilaktika-tabakokureniya" },
      { label: "Профилактика экстремизма", href: "/profilaktika-ekstremizma" },
      { label: "Профилактика травматизма", href: "/profilaktika-tramatizma" },
      { label: "Интерактивная платформа ПАТРИОТ.BY", href: "https://patriot.rcek.by/" },
      { label: "Календарь Единых дней здоровья 2026", href: "https://disk.yandex.com/i/DOcCv1P9AcP59A" },
      { label: "Детство без насилия", href: "/detstvo-bez-nasiliya" }
    ]
  },
  {
    label: "Методическая работа",
    href: "#",
    submenu: [
      { label: "Направления метод. работы", href: "/metodicheskaya-rabota/napravleniya-metodicheskoj-raboty" },
      { label: "Цикловые комиссии", href: "/metodicheskaya-rabota/tsiklovye-komissii" },
      { label: "Материалы к началу уч. года", href: "/metodicheskaya-rabota/materialy-k-nachalu-uchebnogo-goda" },
      { label: "Образцы документов", href: "/metodicheskaya-rabota/obraztsy-dokumentov" },
      { label: "Обобщение пед. опыта", href: "/metodicheskaya-rabota/obobshchenie-pedagogicheskogo-opyta" },
      { label: "План повышения квалификации", href: "/metodicheskaya-rabota/plan-povysheniya-kvalifikatsii-i-perepodgotovki-pedagogicheskikh-rabotnikov" },
      { label: "Состав аттестационной комиссии", href: "/metodicheskaya-rabota/sostav-attestatsionnoj-komissii" },
      { label: "Стажировка", href: "/metodicheskaya-rabota/stazhirovka" },
      { label: "Положение об аттестации", href: "/downloads/policy/PoloshenieItAttest.pdf" },
      { label: "График недель цикловых комиссий", href: "/metodicheskaya-rabota/grafik-provedeniya-nedel-tsiklovykh-komissij-na-2024-2025-uchebnyj-god" }
    ]
  },
  {
    label: "Учащимся",
    href: "/uchashchimsya",
    submenu: [
      { label: "Правила для учащихся", href: "/downloads/policy/PravilaUchashihsyIRoditeley.pdf" },
      { label: "Положение о стипендиях", href: "/downloads/abiturient/stipendii.pdf" },
      { label: "График образовательного процесса", href: "/downloads/abiturient/grafik_processa.pdf" },
      { label: "Расписание учебных занятий", href: "/uchashchimsya/raspisanie" },
      { label: "График работы по распределению", href: "/uchashchimsya/grafik-raboty-po-raspredeleniyu" },
      { label: "Стоимость обучения", href: "/downloads/abiturient/stoimost.pdf" }
    ]
  },
  {
    label: "Одно окно",
    href: "/odno-okno",
    submenu: [
      { label: "Услуги населению", href: "/odno-okno/uslugi" },
      { label: "Наши контакты и реквизиты", href: "/odno-okno/kontakty" },
      { label: "Административные процедуры", href: "/odno-okno/admin-procedury" },
      { label: "Организационная структура", href: "/odno-okno/struktura" },
      { label: "Вышестоящие организации", href: "/odno-okno/vyshestoyashchie" },
      { label: "Посещение объекта инвалидом", href: "/odno-okno/invalidy" }
    ]
  }
];

// Текст-рыба для полного отображения новости
const LOREM_CONTENT = `
  <p>В соответствии с планом работы колледжа и с целью повышения качества образовательного процесса, было проведено масштабное мероприятие, объединившее учащихся всех курсов.</p>
  <p>В ходе встречи обсуждались ключевые вопросы развития профессиональных компетенций, внедрения инновационных технологий и перспективы трудоустройства выпускников.</p>
  <h3>Ключевые моменты:</h3>
  <ul>
    <li>Презентация новых проектов и достижений.</li>
    <li>Выступление приглашенных экспертов и гостей.</li>
    <li>Награждение активных участников грамотами и дипломами.</li>
  </ul>
  <p>Руководство колледжа отметило высокий уровень подготовки и вовлеченности учащихся в общественную жизнь.</p>
  <p>Мероприятие завершилось памятным фото и обсуждением планов на будущее.</p>
`;

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Победа в областной олимпиаде',
    date: '20 Декабря 2025',
    category: 'Достижения',
    imageUrl: 'images/1Novosti/2025/12Dekabr/Olimpiada/Olimpiada.png',
    summary: 'Поздравляем победителей областного этапа республиканской олимпиады по учебным предметам! Наши учащиеся показали высокий уровень знаний.',
    isMain: true,
    content: LOREM_CONTENT
  },
  {
    id: '2',
    title: 'Акция "Зимний патруль"',
    date: '18 Декабря 2025',
    category: 'БРСМ',
    imageUrl: 'images/1Novosti/2025/12Dekabr/ZimniyPatrul.png',
    summary: 'Активисты МООП и БРСМ колледжа совместно с представителями ОСВОД провели профилактический рейд по водоемам.',
    content: LOREM_CONTENT
  },
  {
    id: '3',
    title: 'Профилактика: Антинаркотическая площадка',
    date: '15 Декабря 2025',
    category: 'Профилактика',
    imageUrl: 'images/1Novosti/2025/12Dekabr/Antinarko/Antinarkoticheskay.png',
    summary: 'В рамках декады правовых знаний состоялась встреча учащихся с сотрудниками правоохранительных органов по вопросам профилактики наркомании.',
    content: LOREM_CONTENT
  },
  {
    id: '4',
    title: 'Геноцид белорусского народа: память и боль',
    date: '12 Декабря 2025',
    category: 'Год белорусской женщины',
    imageUrl: 'images/1Novosti/2025/12Dekabr/Genocid.png',
    summary: 'Урок памяти, посвященный расследованию уголовного дела о геноциде белорусского народа в годы Великой Отечественной войны.',
    content: LOREM_CONTENT
  }
];

export const IMPORTANT_NEWS = [
  {
    'id': '101',
    'title': 'План мероприятий в рамках месячника «Ценность человеческой жизни»',
    'date': '10 марта 2026',
    'image': '/downloads/important/thumbs/1_789933201414.jpg'
  },
  {
    'id': '1',
    'title': 'Оказание помощи несовершеннолетним потерпевшим от сексуального насилия, торговли людьми и связанных с ней преступлений',
    'date': '14 августа 2025',
    'image': '/downloads/important/thumbs/2_RKBrestskayOblast.jpg'
  },
  {
    'id': '3',
    'title': 'Детство без насилия',
    'date': '23 мая 2025',
    'image': '/downloads/important/thumbs/3_DETSTVOBEZMASILIY.png'
  },
  {
    'id': '2',
    'title': 'Важно! Безопасность на воде!',
    'date': '29 июня 2024',
    'image': '/downloads/important/thumbs/4_shutterstock_222618070.jpg'
  },
  {
    'id': '105',
    'title': 'Телеграм-канал «Компас»',
    'date': '12 июня 2024',
    'image': '/downloads/important/thumbs/5_tmkompas.jpg'
  },
  {
    'id': '106',
    'title': 'Государственный профилактический проект \'Здоровые города и поселки\'',
    'date': '11 июня 2024',
    'image': '/downloads/important/thumbs/6_ZdGorodaIPoselki.jpg'
  },
  {
    'id': '107',
    'title': 'Пакет \'Безопасность\'',
    'date': '22 апреля 2024',
    'image': '/downloads/important/thumbs/7_PaketBezopasnost.jpg'
  },
  {
    'id': '108',
    'title': 'Курение и ответственность. Важно знать!',
    'date': '10 апреля 2024',
    'image': '/downloads/important/thumbs/8_Kurenie.png'
  },
  {
    'id': '109',
    'title': 'Чат-бот Стоп Экстремизм позволит проверить любой ресурс',
    'date': '05 марта 2024',
    'image': '/downloads/important/thumbs/9_Screenshot_1.png'
  },
  {
    'id': '110',
    'title': 'Анонимный чат-бот «Помощь»',
    'date': '20 декабря 2023',
    'image': '/downloads/important/thumbs/10_IMG_20231221_124124_213.jpg'
  },
  {
    'id': '111',
    'title': 'Об изменении стоимости обучения с 01.12.2023 при реализации образовательных программ среднего специального образования на платной основе',
    'date': '09 декабря 2023',
    'image': '/downloads/important/thumbs/11_d3f4e1d6-fe1d-4db7-8bcf-cb28d6768e25.jpg'
  },
  {
    'id': '112',
    'title': 'Антинаркотическая площадка',
    'date': '03 декабря 2023',
    'image': '/downloads/important/thumbs/12_antinafrkoticheskay.jpg'
  },
  {
    'id': '113',
    'title': 'Профилактика травматизма',
    'date': '25 ноября 2023',
    'image': '/downloads/important/thumbs/13_8782200.jpg'
  },
  {
    'id': '114',
    'title': 'Соблюдай правила безопасности',
    'date': '15 ноября 2023',
    'image': '/downloads/important/thumbs/14_3.jpg'
  },
  {
    'id': '115',
    'title': 'Виртуальная дружба, контакты и общение: правила безопасности',
    'date': '01 ноября 2023',
    'image': '/downloads/important/thumbs/15_photo_2023-10-31_15-34-04.jpg'
  },
  {
    'id': '116',
    'title': 'Мы в социальных сетях!',
    'date': '17 октября 2023',
    'image': '/downloads/important/thumbs/16_MiSocSeti.jpg'
  },
  {
    'id': '117',
    'title': 'Cкажи, о чем ты молчишь?',
    'date': '14 сентября 2023',
    'image': '/downloads/important/thumbs/17_SkashiOChemTiMolchish_1.jpg'
  },
  {
    'id': '118',
    'title': 'По всем вопросам, относящимся к компетенции инспекции по делам несовершеннолетних, Вы можете обратиться к участковому инспектору ИДН Пинского ГОВД',
    'date': '07 сентября 2023',
    'image': '/downloads/important/thumbs/18_maxresdefault.jpg'
  },
  {
    'id': '119',
    'title': 'Cлужба экстренной психологической помощи - \'Телефон доверия\' - 160',
    'date': '07 сентября 2023',
    'image': '/downloads/important/thumbs/19_PsihPomosh.jpg'
  },
  {
    'id': '120',
    'title': 'Республиканский центр патриотического воспитания молодежи',
    'date': '06 июня 2023',
    'image': '/downloads/important/thumbs/20_CPV.jpg'
  },
  {
    'id': '121',
    'title': 'Памятка для родителей: как уберечь детей от педофилии',
    'date': '19 мая 2023',
    'image': '/downloads/important/thumbs/21_fon.jpg'
  },
  {
    'id': '122',
    'title': 'Тебе уже 14? Время поработать!',
    'date': '05 мая 2023',
    'image': '/downloads/important/thumbs/22_zanytost.jpg'
  },
  {
    'id': '123',
    'title': 'Внимание! Мошенничество!',
    'date': '01 марта 2023',
    'image': '/downloads/important/thumbs/23_Perevodchik.jpg'
  },
  {
    'id': '124',
    'title': 'Понять и помочь',
    'date': '13 сентября 2022',
    'image': '/downloads/important/thumbs/24_PonytiPomoch.jpg'
  },
  {
    'id': '125',
    'title': 'Об утверждении Правил педагогических работников',
    'date': '11 августа 2022',
    'image': '/downloads/important/thumbs/25_pravila_ped_rab.gif'
  },
  {
    'id': '126',
    'title': 'STOP наркотик',
    'date': '05 августа 2022',
    'image': '/downloads/important/thumbs/26_StoNarkotik.jpg'
  },
  {
    'id': '127',
    'title': 'Кибербезопасность! Важно знать!',
    'date': '31 мая 2022',
    'image': '/downloads/important/thumbs/27_Kiber.jpg'
  },
  {
    'id': '128',
    'title': 'Внимание! Мошенничество на торговых площадках!',
    'date': '28 мая 2022',
    'image': '/downloads/important/thumbs/28_Perevodchik.jpg'
  },
  {
    'id': '129',
    'title': 'Это важно! Статья 18.2. Нарушение правил, обеспечивающих безопасность движения на железнодорожном или городском электрическом транспорте. Статья 18.35. Нарушение правил использования воздушного пространства.',
    'date': '19 мая 2022',
    'image': '/downloads/important/thumbs/29_EtoVashno.jpg'
  }
];