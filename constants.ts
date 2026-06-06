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
      { label: "Виртуальная Доска почета", href: "/kolledg/virtualnaya-doska-pocheta" },
      { label: "Организационная структура", href: "/kolledg/struktura-kolledga" },
      { label: "Положение о перс. данных", href: "/images/1Novosti/2025/11Noybr/ObrabotkaPersonalnihDannih.pdf" },
      { label: "Политика конфиденциальности", href: "https://pgatkk.by/images/1Novosti/2024/Dekabr/politika_konfidencialnosti.pdf" },
      { label: "Политика обработки куки", href: "https://pgatkk.by/images/1Novosti/2024/Dekabr/poloshenie_cookie.pdf" }
    ]
  },
  {
    label: "НИКО",
    href: "/niko"
  },
  {
    label: "Абитуриентам",
    href: "/abiturientam"
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
    href: "/ideologicheskaya-i-vospitatelnaya-rabota"
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
      { label: "Положение об аттестации", href: "https://pgatkk.by/images/Metodicheskiy/UchGod2122/PoloshenieItAttest.pdf" },
      { label: "График недель цикловых комиссий", href: "/metodicheskaya-rabota/grafik-provedeniya-nedel-tsiklovykh-komissij-na-2024-2025-uchebnyj-god" }
    ]
  },
  {
    label: "Учащимся",
    href: "/uchashchimsya",
    submenu: [
      { label: "Правила для учащихся", href: "https://pgatkk.by/images/PravilaUchashihsyIRoditeley.pdf" },
      { label: "Положение о стипендиях", href: "https://disk.yandex.com/i/kSfqLJfkT-hWiA" },
      { label: "График образовательного процесса", href: "https://disk.yandex.com/i/DESCKqlOTFo8zg" },
      { label: "Расписание учебных занятий", href: "/uchashchimsya/raspisanie" },
      { label: "График работы по распределению", href: "/uchashchimsya/grafik-raboty-po-raspredeleniyu" },
      { label: "Стоимость обучения", href: "https://disk.yandex.com/i/9G99aEWC1RDL9A" }
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
  },
  {
    label: "Политика ИБ",
    href: "https://pgatkk.by/images/1Novosti/2024/Dekabr/politika_ib.pdf"
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
  },
  // Дополнительные новости для проверки пагинации (используем повторно существующие картинки)
  {
    id: '5',
    title: 'Участие в конкурсе профессионального мастерства',
    date: '10 Декабря 2025',
    category: 'Профориентация',
    imageUrl: 'images/1Novosti/2025/12Dekabr/Olimpiada/Olimpiada.png',
    summary: 'Команда колледжа приняла участие в региональном отборе WorldSkills Belarus.',
    content: LOREM_CONTENT
  },
  {
    id: '6',
    title: 'Единый день информирования',
    date: '08 Декабря 2025',
    category: 'Жизнь колледжа',
    imageUrl: 'images/1Novosti/2025/12Dekabr/ZimniyPatrul.png',
    summary: 'Обсуждение актуальных вопросов социально-экономического развития страны.',
    content: LOREM_CONTENT
  },
  {
    id: '7',
    title: 'Волонтерская помощь ветеранам',
    date: '05 Декабря 2025',
    category: 'Общежитие',
    imageUrl: 'images/1Novosti/2025/12Dekabr/Genocid.png',
    summary: 'Волонтеры отряда "Доброе сердце" посетили ветеранов педагогического труда.',
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