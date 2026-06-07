import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Search, FileText, ChevronRight } from 'lucide-react';
import { MAIN_MENU } from '../constants';
import Partners from '../components/Partners';

interface Procedure {
  id: string;
  name: string;
  responsible: string;
  backup: string; // Добавлено поле для замещающего
  location: string;
  phone: string;
  schedule: string;
  documents: string;
  cost: string;
  term: string;
  validity: string;
  category: string;
}

// ПОЛНАЯ БАЗА ДАННЫХ ИЗ PDF
const PROCEDURES: Procedure[] = [
  // === ТРУД И СОЦИАЛЬНАЯ ЗАЩИТА ===
  {
    id: '2.1',
    category: 'Труд и социальная защита',
    name: 'Выдача выписки (копии) из трудовой книжки',
    responsible: 'Сидоренко Татьяна Николаевна, инспектор по кадрам',
    backup: 'Мойсеянчик Елена Анатольевна, секретарь',
    location: 'каб. 201 (2 этаж)',
    phone: '63-93-86',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: '-',
    cost: 'бесплатно',
    term: '5 дней',
    validity: 'бессрочно'
  },
  {
    id: '2.2',
    category: 'Труд и социальная защита',
    name: 'Выдача справки о месте работы, службы и занимаемой должности',
    responsible: 'Сидоренко Татьяна Николаевна, инспектор по кадрам',
    backup: 'Мойсеянчик Елена Анатольевна, секретарь',
    location: 'каб. 201 (2 этаж)',
    phone: '63-93-86',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: '-',
    cost: 'бесплатно',
    term: '5 дней',
    validity: 'бессрочно'
  },
  {
    id: '2.3',
    category: 'Труд и социальная защита',
    name: 'Выдача справки о периоде работы, службы',
    responsible: 'Сидоренко Татьяна Николаевна, инспектор по кадрам',
    backup: 'Мойсеянчик Елена Анатольевна, секретарь',
    location: 'каб. 201 (2 этаж)',
    phone: '63-93-86',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: '-',
    cost: 'бесплатно',
    term: '5 дней',
    validity: 'бессрочно'
  },
  {
    id: '2.4',
    category: 'Труд и социальная защита',
    name: 'Выдача справки о размере заработной платы (денежного довольствия)',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: '-',
    cost: 'бесплатно',
    term: '5 дней',
    validity: 'бессрочно'
  },
  {
    id: '2.5',
    category: 'Труд и социальная защита',
    name: 'Назначение пособия по беременности и родам',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: 'паспорт; листок нетрудоспособности; справка о размере з/п (если работали у др. нанимателя)',
    cost: 'бесплатно',
    term: '10 дней',
    validity: 'на срок листка нетрудоспособности'
  },
  {
    id: '2.6',
    category: 'Труд и социальная защита',
    name: 'Назначение пособия в связи с рождением ребенка',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: 'заявление; паспорт; справка о рождении ребенка; свидетельство о рождении; свидетельство о браке (решение суда о разводе); выписки из трудовых книжек родителей; справка о том, что ребенок не воспитывается в интернате (для опекунов).',
    cost: 'бесплатно',
    term: '10 дней (1 месяц при запросе)',
    validity: 'единовременно'
  },
  {
    id: '2.8',
    category: 'Труд и социальная защита',
    name: 'Назначение пособия женщинам, ставшим на учет до 12-недельного срока беременности',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: 'заявление; паспорт; заключение ВКК; выписки из трудовых книжек; копия свид. о браке (разводе)',
    cost: 'бесплатно',
    term: '10 дней (1 месяц при запросе)',
    validity: 'единовременно'
  },
  {
    id: '2.9',
    category: 'Труд и социальная защита',
    name: 'Назначение пособия по уходу за ребенком в возрасте до 3 лет',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: 'заявление; паспорт; свид. о рождении детей; копия решения суда об усыновлении; копия решения об опеке; свид. о браке; выписки из трудовых книжек; справка о составе семьи; справка о том, что гражданин является обучающимся.',
    cost: 'бесплатно',
    term: '10 дней (1 месяц при запросе)',
    validity: 'по день достижения 3 лет'
  },
  {
    id: '2.12',
    category: 'Труд и социальная защита',
    name: 'Назначение пособия на детей старше 3 лет из отдельных категорий семей',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: 'заявление; паспорт; свид. о рождении; удостоверение инвалида (если применимо); справка о призыве на службу (если применимо); свид. о браке; справка об обучении; трудовые книжки; сведения о доходах за 6 мес.',
    cost: 'бесплатно',
    term: '10 дней (1 месяц при запросе)',
    validity: 'на календарный год (или до 16/18 лет)'
  },
  {
    id: '2.13',
    category: 'Труд и социальная защита',
    name: 'Назначение пособия по временной нетрудоспособности по уходу за ребенком',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: 'листок нетрудоспособности',
    cost: 'бесплатно',
    term: '10 дней (1 месяц при запросе)',
    validity: 'на срок листка'
  },
  {
    id: '2.14',
    category: 'Труд и социальная защита',
    name: 'Назначение пособия по уходу за ребенком (болезнь матери/другого лица)',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: 'листок нетрудоспособности',
    cost: 'бесплатно',
    term: '10 дней (1 месяц при запросе)',
    validity: 'на срок листка'
  },
  {
    id: '2.16',
    category: 'Труд и социальная защита',
    name: 'Назначение пособия по уходу за ребенком-инвалидом (санаторное лечение)',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: 'листок нетрудоспособности',
    cost: 'бесплатно',
    term: '10 дней (1 месяц при запросе)',
    validity: 'на срок листка'
  },
  {
    id: '2.18',
    category: 'Труд и социальная защита',
    name: 'Выдача справки о размере пособия на детей и периоде его выплаты',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: 'паспорт',
    cost: 'бесплатно',
    term: '5 дней',
    validity: 'бессрочно'
  },
  {
    id: '2.19',
    category: 'Труд и социальная защита',
    name: 'Выдача справки о выходе на работу до истечения отпуска по уходу за ребенком',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: '-',
    cost: 'бесплатно',
    term: '5 дней',
    validity: 'бессрочно'
  },
  {
    id: '2.20',
    category: 'Труд и социальная защита',
    name: 'Выдача справки об удержании алиментов и их размере',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: 'паспорт',
    cost: 'бесплатно',
    term: '5 дней',
    validity: 'бессрочно'
  },
  {
    id: '2.24',
    category: 'Труд и социальная защита',
    name: 'Выдача справки о необеспеченности ребенка путевкой в лагерь',
    responsible: 'Михович Ольга Николаевна, преподаватель',
    backup: 'Рыжковец Виктория Леонидовна, преподаватель',
    location: 'каб. 213 (2 этаж, бухгалтерия)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: '-',
    cost: 'бесплатно',
    term: '5 дней',
    validity: 'бессрочно'
  },
  {
    id: '2.25',
    category: 'Труд и социальная защита',
    name: 'Выдача справки о нахождении в отпуске по уходу за ребенком до 3 лет',
    responsible: 'Сидоренко Татьяна Николаевна, инспектор по кадрам',
    backup: 'Мойсеянчик Елена Анатольевна, секретарь',
    location: 'каб. 201 (2 этаж)',
    phone: '63-93-86',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: '-',
    cost: 'бесплатно',
    term: '5 дней',
    validity: 'бессрочно'
  },
  {
    id: '2.29',
    category: 'Труд и социальная защита',
    name: 'Выдача справки о периоде выплаты пособия по беременности и родам',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: 'паспорт',
    cost: 'бесплатно',
    term: '3 дня',
    validity: 'бессрочно'
  },
  {
    id: '2.35',
    category: 'Труд и социальная защита',
    name: 'Выплата пособия на погребение',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: 'заявление; паспорт; справка о смерти; свидетельство о смерти (в случае смерти за границей); справка об обучении (для лиц 18-23 лет).',
    cost: 'бесплатно',
    term: '1 рабочий день (1 месяц при запросе)',
    validity: 'единовременно'
  },
  {
    id: '2.44',
    category: 'Труд и социальная защита',
    name: 'Выдача справки о невыделении путевки на санаторно-курортное лечение',
    responsible: 'Михович Ольга Николаевна, преподаватель',
    backup: 'Рыжковец Виктория Леонидовна, преподаватель',
    location: 'каб. 213 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30, Обед: 13.00-14.00',
    documents: 'паспорт',
    cost: 'бесплатно',
    term: '5 дней',
    validity: 'бессрочно'
  },

  // === ОБРАЗОВАНИЕ ===
  {
    id: '6.1.1',
    category: 'Образование',
    name: 'Выдача дубликата документа об образовании',
    responsible: 'Бегер Олег Александрович, зам. директора',
    backup: 'Кулеш Игорь Леонидович, зам. директора по ПО',
    location: 'каб. 206/208 (2 этаж)',
    phone: '63-93-33',
    schedule: 'Пн-Пт: 08.15-17.15, Обед: 13.00-14.00',
    documents: 'заявление; паспорт; пришедший в негодность документ; подтверждение изменения фамилии; квитанция об оплате.',
    cost: '0.1 Б.В. (гражд. РБ), 1 Б.В. (иностр.)',
    term: '15 дней (1 месяц при запросе)',
    validity: 'бессрочно'
  },
  {
    id: '6.1.2',
    category: 'Образование',
    name: 'Выдача дубликата свидетельства о направлении на работу',
    responsible: 'Бегер Олег Александрович, зам. директора',
    backup: 'Баран Лариса Васильевна, паспортист',
    location: 'каб. 208/222',
    phone: '61-27-91',
    schedule: 'Пн-Пт: 08.15-17.15, Обед: 13.00-14.00',
    documents: 'заявление; паспорт; пришедший в негодность документ; подтверждение смены фамилии.',
    cost: 'бесплатно',
    term: '5 дней (1 месяц при запросе)',
    validity: 'до окончания срока отработки'
  },
  {
    id: '6.1.3',
    category: 'Образование',
    name: 'Выдача справки о самостоятельном трудоустройстве',
    responsible: 'Бегер Олег Александрович, зам. директора',
    backup: 'Баран Лариса Васильевна, паспортист',
    location: 'каб. 208/222',
    phone: '61-27-91',
    schedule: 'Пн-Пт: 08.15-17.15',
    documents: 'заявление; паспорт; подтверждение смены фамилии.',
    cost: 'бесплатно',
    term: '3 дня',
    validity: 'бессрочно'
  },
  {
    id: '6.1.4',
    category: 'Образование',
    name: 'Выдача дубликата билета учащегося / зачетной книжки',
    responsible: 'Бегер Олег Александрович, зам. директора',
    backup: 'Кулеш Игорь Леонидович, зам. директора по ПО',
    location: 'каб. 208/206',
    phone: '61-27-91',
    schedule: 'Пн-Пт: 08.15-17.15',
    documents: 'заявление; паспорт; пришедший в негодность документ.',
    cost: 'бесплатно',
    term: '5 дней',
    validity: 'до окончания обучения'
  },
  {
    id: '6.3',
    category: 'Образование',
    name: 'Выдача справки о том, что гражданин является обучающимся',
    responsible: 'Бегер Олег Александрович, зам. директора',
    backup: 'Кулеш Игорь Леонидович, зам. директора по ПО',
    location: 'каб. 208 (2 этаж)',
    phone: '61-27-91',
    schedule: 'Пн-Пт: 08.15-17.15',
    documents: 'заявление',
    cost: 'бесплатно',
    term: 'в день обращения',
    validity: '6 месяцев'
  },
  {
    id: '6.4',
    category: 'Образование',
    name: 'Выдача справки о результатах сдачи вступительных испытаний',
    responsible: 'Бегер Олег Александрович, зам. директора',
    backup: 'Кулеш Игорь Леонидович, зам. директора по ПО',
    location: 'каб. 208 (2 этаж)',
    phone: '61-27-91',
    schedule: 'Пн-Пт: 08.15-17.15',
    documents: 'заявление; паспорт',
    cost: 'бесплатно',
    term: 'в день подачи',
    validity: '6 месяцев'
  },
  {
    id: '6.5',
    category: 'Образование',
    name: 'Выдача справки о получении образования на платной основе',
    responsible: 'Бегер Олег Александрович, зам. директора',
    backup: 'Кулеш Игорь Леонидович, зам. директора по ПО',
    location: 'каб. 208 (2 этаж)',
    phone: '61-27-91',
    schedule: 'Пн-Пт: 08.15-17.15',
    documents: 'заявление; паспорт',
    cost: 'бесплатно',
    term: 'в день подачи',
    validity: 'бессрочно'
  },

  // === РЕГИСТРАЦИЯ ГРАЖДАН ===
  {
    id: '13.2',
    category: 'Регистрация граждан',
    name: 'Регистрация по месту пребывания граждан РБ, иностранных граждан',
    responsible: 'Баран Лариса Васильевна, паспортист',
    backup: 'Игнатенко Татьяна Михайловна, юрисконсульт',
    location: 'каб. 222 (2 этаж)',
    phone: '36-60-45',
    schedule: 'Пн-Пт: 08.15-17.15, Обед: 13.00-14.00',
    documents: 'заявление; паспорт; свид. о рождении (до 14 лет); документ для регистрации (договор найма и т.п.); квитанция об оплате (для общежития - бесплатно).',
    cost: 'бесплатно (в общежитии), 0.5 Б.В. (иное)',
    term: '3 рабочих дня',
    validity: 'на срок обучения'
  },
  {
    id: '13.3',
    category: 'Регистрация граждан',
    name: 'Снятие с регистрационного учета по месту пребывания',
    responsible: 'Баран Лариса Васильевна, паспортист',
    backup: 'Игнатенко Татьяна Михайловна, юрисконсульт',
    location: 'каб. 222 (2 этаж)',
    phone: '36-60-45',
    schedule: 'Пн-Пт: 08.15-17.15',
    documents: 'заявление',
    cost: 'бесплатно',
    term: '5 рабочих дней',
    validity: 'бессрочно'
  },

  // === ДОХОДЫ И НАЛОГИ ===
  {
    id: '18.7',
    category: 'Доходы и налоги',
    name: 'Выдача справки об отсутствии задолженности по налогам (с физлиц)',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30',
    documents: 'заявление; паспорт',
    cost: 'бесплатно',
    term: '5 рабочих дней',
    validity: '6 месяцев'
  },
  {
    id: '18.13',
    category: 'Доходы и налоги',
    name: 'Выдача справки о доходах, исчисленных и удержанных налогах',
    responsible: 'Хомич Татьяна Павловна, зам. гл. бухгалтера',
    backup: 'Куницкая Наталия Михайловна, гл. бухгалтер',
    location: 'каб. 212 (2 этаж)',
    phone: '62-55-10',
    schedule: 'Пн-Пт: 08.30-17.30',
    documents: 'паспорт',
    cost: 'бесплатно',
    term: 'в день обращения',
    validity: 'бессрочно'
  }
];

const AdministrativeProcedures: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const sidebarLinks = MAIN_MENU.find(item => item.label === "Одно окно")?.submenu || [];

  // Группировка
  const groupedProcedures = PROCEDURES.reduce((acc, proc) => {
    if (!acc[proc.category]) {
      acc[proc.category] = [];
    }
    acc[proc.category].push(proc);
    return acc;
  }, {} as Record<string, Procedure[]>);

  // Фильтрация
  const filteredProcedures = Object.entries(groupedProcedures).reduce((acc, [category, procs]) => {
    const filtered = procs.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.id.includes(searchTerm) ||
      p.responsible.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {} as Record<string, Procedure[]>);

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
            <Link to="/odno-okno" className="hover:text-white transition-colors">Одно окно</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold">Административные процедуры</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            Перечень административных процедур
          </h1>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 order-1 lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden sticky top-28">
              <div className="bg-[#0088cc] px-5 py-4 border-b border-sky-600">
                <Link to="/odno-okno" className="text-white text-sm font-bold uppercase tracking-widest hover:text-sky-100 transition-colors block">
                  Одно окно
                </Link>
              </div>
              <nav className="flex flex-col">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`group flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 border-b border-slate-100 last:border-0 transition-all ${link.href.includes('admin-procedury') ? 'text-[#0088cc] bg-sky-50' : 'hover:bg-sky-50 hover:text-[#0088cc]'}`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0088cc]" />
                  </Link>
                ))}
              </nav>
              <div className="m-4 p-4 bg-primary-900 rounded-lg text-white text-center">
                <p className="text-xs text-accent-500 font-bold uppercase mb-2">Приемная комиссия</p>
                <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block">8 (0165) 30-06-88</a>
                </div>
            </div>
          </aside>

          {/* CONTENT */}
          <main className="flex-1 w-full order-2">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 border border-slate-100 min-h-[600px]">
              
              {/* SEARCH BAR */}
              <div className="mb-8 relative">
                <input 
                  type="text" 
                  placeholder="Поиск процедуры (например: 'справка', '2.1' или фамилия)..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:border-accent-500 focus:outline-none transition-colors text-slate-700 shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
              </div>

              {/* LIST OF PROCEDURES */}
              {Object.keys(filteredProcedures).length > 0 ? (
                <div className="space-y-12">
                  {Object.entries(filteredProcedures).map(([category, procs]) => (
                    <div key={category}>
                      <div className="flex items-center gap-3 mb-6 bg-slate-50 p-4 rounded-lg border-l-4 border-accent-500">
                        <FileText className="w-6 h-6 text-accent-500" />
                        <h2 className="text-xl md:text-2xl font-bold text-primary-900">
                          {category}
                        </h2>
                      </div>
                      
                      <div className="space-y-6">
                        {procs.map((proc) => (
                          <div key={proc.id} className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                            <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex justify-between items-center flex-wrap gap-2">
                              <div className="flex items-center gap-3">
                                <span className="bg-primary-900 text-white text-xs font-bold px-2 py-1 rounded">
                                  Пункт {proc.id}
                                </span>
                                <h3 className="font-bold text-slate-800 text-base md:text-lg">
                                  {proc.name}
                                </h3>
                              </div>
                            </div>
                            
                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                              {/* Left Column */}
                              <div className="space-y-4">
                                <div>
                                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Ответственный</span>
                                  <div className="font-medium text-slate-900">{proc.responsible}</div>
                                  <div className="text-slate-500 text-xs mt-1">{proc.location}, тел. <span className="text-accent-600 font-bold">{proc.phone}</span></div>
                                  {proc.backup && (
                                    <div className="mt-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
                                      <span className="font-bold">Замещение:</span> {proc.backup}
                                    </div>
                                  )}
                                </div>
                                
                                <div>
                                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Режим работы</span>
                                  <div className="text-slate-700">{proc.schedule}</div>
                                </div>
                              </div>

                              {/* Right Column */}
                              <div className="space-y-4">
                                <div>
                                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Документы</span>
                                  <div className="text-slate-700 whitespace-pre-wrap leading-relaxed">{proc.documents}</div>
                                </div>
                                
                                <div className="grid grid-cols-3 gap-4 pt-2">
                                  <div>
                                    <span className="text-xs text-slate-400 block">Плата</span>
                                    <span className="font-bold text-emerald-600">{proc.cost}</span>
                                  </div>
                                  <div>
                                    <span className="text-xs text-slate-400 block">Срок</span>
                                    <span className="font-bold text-slate-800">{proc.term}</span>
                                  </div>
                                  <div>
                                    <span className="text-xs text-slate-400 block">Действие</span>
                                    <span className="font-bold text-slate-800">{proc.validity}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                  <Search className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                  <p className="text-lg font-medium">По вашему запросу ничего не найдено.</p>
                  <p className="text-sm">Попробуйте изменить поисковый запрос.</p>
                </div>
              )}

            </div>
          </main>
        </div>
      </div>
      
      <Partners />
    </div>
  );
};

export default AdministrativeProcedures;