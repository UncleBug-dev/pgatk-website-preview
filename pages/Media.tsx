import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu as MenuIcon, ChevronDown, FileText, ExternalLink, ChevronRight, 
  Youtube, Send, Globe, Radio, ImageIcon, FileText as PdfIcon
} from 'lucide-react';
import { MAIN_MENU } from '../constants';
import { Lightbox } from '../components/Lightbox';

const MEDIA_DATA = [
  {
    title: 'Герой проекта «Кожная пятнiца – роднае, сваё» кузнец Николай Мельникович',
    source: 'сайт газеты \'Пінскі Веснік\'',
    date: '27.03.2026',
    link: 'https://p-v.by/news/aktualno/geroj-proekta-kozhnaja-pjatnica-rodnae-svajo-kuznec-nikolaj-melnikovich/',
    type: 'article'
  },
  {
    title: 'В аграрно-техническом колледже имени А.Е. Клещева  состоялся разговор о буллинге в молодёжной среде',
    source: 'сайт газеты \'Пінскі Веснік\'',
    date: '25.03.2026',
    link: 'https://p-v.by/news/molodezhka/v-agrarno-tehnicheskom-kolledzhe-imeni-a-e-kleshheva-sostojalsja-razgovor-o-bullinge-v-molodjozhnoj-srede/',
    type: 'article'
  },
  {
    title: 'Эстафету в рамках акции «В защиту жизни!» принял Пинский аграрно-технический колледж им. А.Е. Клещева',
    source: '20.02.2026',
    date: 'телеграмм-канал газеты \'Пінскі Веснік\'',
    link: 'https://t.me/pgatkk/10496?single',
    type: 'telegram'
  },
  {
    title: 'Единый день информирования сегодня проходит во всех городах и районах Брестской области',
    source: '109.02.2026',
    date: 'ТРК \'Пинск\'',
    link: 'https://www.youtube.com/watch?v=rRJPnMPERb4&amp;t=1s',
    type: 'video'
  },
  {
    title: 'Игорь Луцкий в Пинске: от личных вопросов граждан до предметного разговора о национальной безопасности и патриотизме',
    source: 'сайт газеты \'Пінскі Веснік\'',
    date: '19.02.2026',
    link: 'https://p-v.by/news/aktualno/igor-lutskiy-v-pinske-ot-lichnyh-voprosov-grazhdan-do-predmetnogo-razgovora-o-natsionalnoy-bezopasnosti-i-patriotizme/',
    type: 'article'
  },
  {
    title: 'Как пинчане справляются с циклоном Улли?',
    source: '10.01.2026',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/hiSzenppRc0',
    type: 'video'
  },
  {
    title: 'Зимняя рыбалка. Профилактический рейд по водоемам',
    source: '09.01.2026',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/npYQRmgGDDc',
    type: 'video'
  },
  {
    title: 'Профилактическая беседа с учащимися колледжа',
    source: '26.12.2025',
    date: 'сайт газеты \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/bezopasnost-pod-odnoy-kryshey/profilakticheskaya-beseda-s-uchaschimisya-kolldedzha/',
    type: 'article'
  },
  {
    title: 'В Пинске открыли памятный знак в честь мелиораторов Полесья',
    source: '01.10.2025',
    date: 'Сельская газета',
    link: 'https://www.sb.by/articles/gde-rastet-kamysh-tam-ne-zreet-khlebnyy-kolos-.html',
    type: 'article'
  },
  {
    title: 'Тепло и забота пожилым от молодёжи',
    source: '09.10.2025',
    date: 'сайт газеты \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/society/teplo-i-zabota-pozhilym-ot-molodyozhi/',
    type: 'article'
  },
  {
    title: 'Праздник урожая: областные \'Дожинки-2025\' в Белоозерске',
    source: '07.10.2025',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/Poxnvz1APtA',
    type: 'video'
  },
  {
    title: 'Два молодых специалиста приступили к работе в ОАО «Полесские журавины»',
    source: '10.09.2025',
    date: 'сайт газеты \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/molodezhka/dva-molodyh-spetsialista-pristupili-k-rabote-v-oao-polesskie-zhuraviny/',
    type: 'article'
  },
  {
    title: 'XXXXII отчетно-выборная конференция городской организации ОО «БРСМ»',
    source: '09.09.2025',
    date: 'сайт газеты \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/molodezhka/olga-ilkovets-brsm-dlya-molodyozhi-molodyozh-dlya-strany/',
    type: 'article'
  },
  {
    title: 'Труд-крут! Студенческий сервисный отряд приступил к работе.',
    source: 'телеграмм-канал ОАО \'Кузлитмаш\'',
    date: '',
    link: 'https://t.me/pgatkk/8293?single',
    type: 'telegram'
  },
  {
    title: 'Алексей Ефимович Клещев | Лица Победы',
    source: '01.07.2025',
    date: 'ТРК \'Брест\'',
    link: 'https://youtu.be/moV3QgqEEvE',
    type: 'video'
  },
  {
    title: '«Зарница»: «Вместе – мы сила!»',
    source: '24.04.2025',
    date: 'сайт газеты \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/molodezhka/zarnitsa-vmeste-my-sila/',
    type: 'article'
  },
  {
    title: '👷‍♀️ОАО «Стройтрест №2» выступил на Дне открытых дверей в Пинском аграрно-технологическом колледже',
    source: 'телеграмм-канал ОАО \'Строейтрест №2\'',
    date: '',
    link: 'https://t.me/pgatkk/7298?single',
    type: 'telegram'
  },
  {
    title: 'Военно-патриотическая игра \'Зарница\'',
    source: '23.04.2025',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/qgL6yBTgN9Q',
    type: 'video'
  },
  {
    title: 'Навстречу Победе!',
    source: '16.04.2025',
    date: 'телеграмм-канал газеты \'Пінскі Веснік\'',
    link: 'https://t.me/pgatkk/7138',
    type: 'telegram'
  },
  {
    title: '\'АРТ-ВАКАЦЫІ – 2025\'',
    source: '04.04.2025',
    date: 'ТРК \'Брест\'',
    link: 'https://www.youtube.com/watch?v=aqO2RHeTv0g',
    type: 'video'
  },
  {
    title: 'Чтобы помнить цену мира и свободы',
    source: '04.04.2025',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/1Novosti/2025/4Aprel/UrokMushestva.jpg',
    type: 'image'
  },
  {
    title: 'Их именами названы улицы. Тематические уроки памяти',
    source: '27.03.2025',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/LQg5PYvRhxg',
    type: 'video'
  },
  {
    title: 'В Пинском райисполкоме назначена главный специалист отдела архитектуры строительства и жилищно-коммунального хозяйства',
    source: '27.03.2025',
    date: 'Информационный портал Пинского района',
    link: 'https://pinsknews.by/archives/68966',
    type: 'article'
  },
  {
    title: 'Почетный мелиоратор',
    source: '21.03.2025',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/1Novosti/2025/3.Mart/2603PochetniyMeliorator.png',
    type: 'image'
  },
  {
    title: 'Методическая помощь. Обучающий семинар под эгидой комиссии по делам несовершеннолетних',
    source: '19.03.2025',
    date: 'ТРК \'Пин��к\'',
    link: 'https://youtu.be/nDoBIA6k3b8',
    type: 'video'
  },
  {
    title: 'Белорусский союз женщин: впереди боеспособный актив',
    source: '18.03.2025',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/FN7DdZ_dfIw',
    type: 'video'
  },
  {
    title: 'Главное - чувствовать настроение людей, знать их проблемы...',
    source: '15.03.2025',
    date: 'Газета \'Живая вода\'',
    link: '/images/1Novosti/2025/5May/__11__15032025__2.jpg',
    type: 'image'
  },
  {
    title: 'Здесь принято трудиться эффективно и прибыльно',
    source: '15.03.2025',
    date: 'Газета \'Живая вода\'',
    link: '/images/1Novosti/2025/5May/__11__15032025__1.jpg',
    type: 'image'
  },
  {
    title: 'Путевка в профессию',
    source: '08.03.2025',
    date: 'Газета \'Живая вода\'',
    link: '/images/1Novosti/2025/5May/_10__08032025.jpg',
    type: 'image'
  },
  {
    title: 'За труд, за честь, за преданность профессии',
    source: '08.02.2025',
    date: 'Газета \'Живая вода\'',
    link: '/images/1Novosti/2025/5May/_8__2025.jpg',
    type: 'image'
  },
  {
    title: 'Лучшие в системе профобразования',
    source: '27.12.2024',
    date: 'ТРК \'Брест\'',
    link: 'https://www.youtube.com/watch?v=wi2KX93RiYg',
    type: 'video'
  },
  {
    title: '\'Лучший учащийся\'. Областной конкурс среди выпускников ССУЗов',
    source: '27.12.2024',
    date: 'ТРК \'Пинск\'',
    link: 'https://www.youtube.com/watch?v=PvLY4l-hMVg',
    type: 'video'
  },
  {
    title: 'В рамках благотворительной республиканской акции',
    source: '26.12.2024',
    date: '<a href=\'https://t.me/pgatkk/5876\'>telegram-канал  газеты \'Пінскі Веснік\'</a>',
    link: 'https://p-v.by/news/molodezhka/novogodniy-prazdnik-dlya-vospitannikov-molotkovichskoy-shkoly-internata/',
    type: 'article'
  },
  {
    title: 'сайт газеты \'Пінскі Веснік\'',
    source: '17.12.2024',
    date: '<a href=\'https://p-v.by/news/zdorove/zdorovyy-gorod-aktsiya-proshla-v-agrarno-tehnicheskom-kolledzhe/\'>сайт газеты \'Пінскі Веснік\'</a>',
    link: 'https://p-v.by/news/zdorove/zdorovyy-gorod-aktsiya-proshla-v-agrarno-tehnicheskom-kolledzhe/',
    type: 'article'
  },
  {
    title: 'Сварка в режиме VR и квест «собрать корову по частям» — чем удивляют на «Марафоне единства» пинские колледжи',
    source: 'cайт газеты \'СБ.Беларусь сегодня\'',
    date: '',
    link: 'https://www.sb.by/articles/svarka-v-rezhime-vr-i-kvest-sobrat-korovu-po-chastyam-chem-udivlyayut-na-marafone-edinstva-pinskie-k.html',
    type: 'article'
  },
  {
    title: 'telegram-канал  газеты \'Пінскі Веснік\'',
    source: 'СМИ',
    date: '<a href=\'https://t.me/pgatkk/4896\'>telegram-канал  газеты \'Пінскі Веснік\'</a> 25.10.2024',
    link: 'https://t.me/pgatkk/4896',
    type: 'telegram'
  },
  {
    title: 'Помощь пожилым людям',
    source: '21.10.2024',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/AlLrpqugcPw',
    type: 'video'
  },
  {
    title: 'Леонид Евсеев: талантливый стипендиат ФПБ из ПГАТК',
    source: 'сайт газеты \'Пінскі Веснік\'',
    date: '03.10.2024',
    link: 'https://p-v.by/news/molodezhka/leonid-evseev-talantlivyj-stipendiat-fpb-iz-pgatk/',
    type: 'article'
  },
  {
    title: 'Молодежь ПГАТК имени А.Е. Клещева участвует в открытом диалоге',
    source: 'сайт газеты \'Пінскі Веснік\'',
    date: '24.09.2024',
    link: 'https://p-v.by/news/molodezhka/molodezh-pgatk-imeni-a-e-klescheva-uchastvuet-v-otkrytom-dialoge/',
    type: 'article'
  },
  {
    title: 'Пинские умельцы готовятся удивлять на Дожинках: работники и учащиеся аграрно-технического колледжа имени Клещева изготовили экспонаты для украшения локации, представляющей их учреждение образования',
    source: '16.09.2024',
    date: 'ТРК \'Пинск\'',
    link: 'https://www.youtube.com/watch?v=BEKVkfIaPKQ&amp;pp=ygUR0YLRgNC6INC_0LjQvdGB0Lo%3D',
    type: 'video'
  },
  {
    title: 'Пинская достопримечательность в макете. Педагоги и учащиеся колледжа воссоздали в макете костел Карла Баромея для конкурса и победили.',
    source: '16.08.2024',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/s0PlxfLWNyE',
    type: 'video'
  },
  {
    title: 'Учащиеся Пинского государственного аграрно-технического колледжа имени А.Е. Клещёва стали победителями конкурса «Брестчина в миниатюре»',
    source: 'от 09.08.2024',
    date: 'сайт газеты \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/molodezhka/uchaschiesya-pinskogo-gosudarstvennogo-agrarno-tehnicheskogo-kolledzha-imeni-a-e-kleschyova-stali-pobeditelyami-konkursa-brestchina-v-miniatyure/',
    type: 'article'
  },
  {
    title: 'Пинский государственный аграрно-технический колледж имени А.Е. Клещева»',
    source: 'от 22.07.2024',
    date: 'сайт газеты \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/molodezhka/pinskiy-gosudarstvennyy-agrarno-tehnicheskiy-kolledzh-imeni-a-e-klescheva-vstrechal-pervyh-abiturientov/',
    type: 'article'
  },
  {
    title: 'Зарница-2024',
    source: '№ 4-5,2024',
    date: 'газета \'Методист\'',
    link: '/images/1Novosti/2024/Iyl/metodist_4-5_2024.pdf',
    type: 'pdf'
  },
  {
    title: 'В объективе ТРК «Пинск» молодежь #ПГАТККЛЕЩЕВА. День Независимости масштабно отметили в г.Пинске.',
    source: '04.07.2024',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/kLWU8jMFWL4',
    type: 'video'
  },
  {
    title: 'Аграрно-технический колледж имени А.Е.Клещеав. Программа \'Молодёжь в объективе\'',
    source: '01.07.2024',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/TlHwLloIzq4?list=PLUbF1TVmiPxjepcgBHm_Dgopsq26iK1b2',
    type: 'video'
  },
  {
    title: '\'Вместе–за сильную и процветающую Беларусь\'. Пинчане - участники гражданско-патриотического марафона',
    source: '12.06.2024',
    date: 'ТРК \'ПИНСК\'',
    link: 'https://youtu.be/LeCt-9NerJ0',
    type: 'video'
  },
  {
    title: 'Пинский районный профсоюз работников АПК выразил признательность мелиораторам',
    source: 'от 04.06.2024',
    date: 'сайт газеты \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/society/pinskiy-rayonnyy-profsoyuz-rabotnikov-apk-vyrazil-priznatelnost-melioratoram/',
    type: 'article'
  },
  {
    title: 'На территории учебной базы Пинского государственного аграрно-технического колледжа имени А.Е. Клещёва «Почапово» состоялась военно-патриотическая игра «Зарница»',
    source: 'от 04.06.2024',
    date: 'сайт газеты \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/molodezhka/na-territorii-uchebnoy-bazy-pinskogo-gosudarstvennogo-agrarno-tehnicheskogo-kolledzha-imeni-a-e-kleschyova-pochapovo-sostoyalas-voenno-patrioticheskaya-igra-zarnitsa/',
    type: 'article'
  },
  {
    title: 'Награждение победителей областного фотоконкурса \'Сцяг пераможны-радасці сцяг\'',
    source: '02.06.2024',
    date: 'telegram-канал газеты \'Пінскі Веснік\'',
    link: 'https://t.me/pinsk_newsPV/32193',
    type: 'telegram'
  },
  {
    title: 'Чем больше мы в жизни  чего-то делаем -тем для нас она становится интересней',
    source: '26.04.2024, №21',
    date: 'Газета \'Живая вода\'',
    link: '/images/1Novosti/2024/May/21__27052024.jpg',
    type: 'image'
  },
  {
    title: 'Учащийся аграрно-технического колледжа имени А.Е. Клещева Павел Ефимов стал серебряным призером фестиваля Invoke x PumpJam',
    source: 'от 24.05.2024',
    date: 'сайт газеты \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/sports/uchaschiysya-agrarno-tehnicheskogo-kolledzha-imeni-a-e-klescheva-pavel-efimov-stal-serebryanym-prizerom-festivalya-invoke-x-pumpjam/',
    type: 'article'
  },
  {
    title: 'Пинчане -на масштабном марафоне',
    source: 'от 17.05.2024',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/1Novosti/2024/May/img098.jpg',
    type: 'image'
  },
  {
    title: 'Птушка Палескага краю',
    source: '2024',
    date: '',
    link: '/images/1Novosti/2024/May/3_2024___.pdf',
    type: 'pdf'
  },
  {
    title: 'С историей сверяя шаг',
    source: '№19, от 11.05.2024',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/1Novosti/2024/May/2.png',
    type: 'image'
  },
  {
    title: 'Трудом красив человек',
    source: '№14',
    date: '11 мая 2024',
    link: '/images/1Novosti/2024/May/img096.jpg',
    type: 'image'
  },
  {
    title: 'Марафон «Вместе – за сильную и процветающую Беларусь»',
    source: '13.05.2024',
    date: 'сайт газеты \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/molodezhka/68061/',
    type: 'article'
  },
  {
    title: 'Династия',
    source: 'выпуск 14',
    date: 'Золотой колос',
    link: '/images/1Novosti/2024/Oktybr/Dinastiy.pdf',
    type: 'pdf'
  },
  {
    title: 'Храбрые сердца',
    source: 'выпуск 14',
    date: 'Золотой колос',
    link: '/images/1Novosti/2024/Oktybr/HrabrieSerca.jpg',
    type: 'image'
  },
  {
    title: 'Пограничникам',
    source: 'выпуск 14',
    date: 'Золотой колос',
    link: '/images/1Novosti/2024/Oktybr/Pogranichnikam.jpg',
    type: 'image'
  },
  {
    title: 'Быть пограничником',
    source: 'выпуск 14',
    date: 'Золотой колос',
    link: '/images/1Novosti/2024/Oktybr/BitPogranichnikom.jpg',
    type: 'image'
  },
  {
    title: '',
    source: '26.04.2024',
    date: 'Газета \'Живая вода\'',
    link: 'https://t.me/pinsk_newsPV/31263',
    type: 'telegram'
  },
  {
    title: 'Чтобы заняться делом и заработать',
    source: '26.04.2024, №7',
    date: 'Газета \'Пінскі Веснік\'',
    link: '/images/1Novosti/2024/May/img084.jpg',
    type: 'image'
  },
  {
    title: 'В Пинске прошла II Общереспубликанская молодежная ярмарка вакансий',
    source: '26.04.2024',
    date: 'сайт газеты \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/society/v-pinske-proshla-ii-obscherespublikanskaya-molodezhnaya-yarmarka-vakansiy/',
    type: 'article'
  },
  {
    title: 'Cмотрим фильмы о войне',
    source: 'февраль-март 2024, стр. 5-6',
    date: 'Газета \'Методист\'',
    link: '/images/1Novosti/2024/Aprel/metodist_2-3-2024____.pdf',
    type: 'pdf'
  },
  {
    title: 'Удачный для руководителя год. Директор ОАО \'Полесьегипроводхоз\' Петр Колесникович - \'Человек года\'.',
    source: 'СМИ',
    date: '',
    link: '/images/1Novosti/2024/Aprel/235435654675_1_1.png',
    type: 'image'
  },
  {
    title: 'Назначение. Директор УП \'Лунинецкое ПМС\'',
    source: 'СМИ',
    date: '',
    link: '/images/1Novosti/2024/Aprel/1234324213_1.png',
    type: 'image'
  },
  {
    title: 'Нам вместе быть доверено веками (газета \'Пінскі Веснік\', 05.04.2024)',
    source: '05.04.2024',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/1Novosti/2024/Aprel/img024.jpg',
    type: 'image'
  },
  {
    title: 'Кавер-группа \'Другой ритм\'. Программа \'Молодёжь в объективе\' (ТРК \'Пинск\', 03.04.2024 )',
    source: '03.04.2024',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/nn6jl4OCv0k',
    type: 'video'
  },
  {
    title: 'День единения народов Беларуси и России',
    source: '02.04.2024',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/KZs1RmVwRSs',
    type: 'video'
  },
  {
    title: 'Диалоговая площадка \'День единения народов Беларуси и России\', в городской центральной библиотеке',
    source: '02.04.2024',
    date: 'telegram-канал газеты \'Пінскі Веснік',
    link: 'https://t.me/pinsk_newsPV/28997',
    type: 'telegram'
  },
  {
    title: '\'Мехдвор с атрибутами сказки\'',
    source: '2024',
    date: 'газета \'Знамя юности №13',
    link: '/images/Kolledg/ONasPishut/ZnamyYnosti132024.jpg',
    type: 'image'
  },
  {
    title: 'Корреспондент газеты «Пiнскi веснiк» побывала на репетиции кавер-группы «Другой ритм»',
    source: '28.03.2024',
    date: 'сайт \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/culture/korrespondent-gazety-pinski-vesnik-pobyvala-na-repetitsii-kaver-gruppy-drugoy-ritm/',
    type: 'article'
  },
  {
    title: 'Это \'Другой ритм\'. Это только начало',
    source: '29.03.2024 №13',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/Kolledg/ONasPishut/img018.jpg',
    type: 'image'
  },
  {
    title: 'Преданность профессии он пронес через всю жизнь',
    source: '16.03.2024 №11',
    date: 'газета \'Живая вода\'',
    link: '/images/Kolledg/ONasPishut/ProfessiyPrones.png',
    type: 'image'
  },
  {
    title: '\'Я продолжаю открывать себя\'',
    source: '15.03.2024',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/Kolledg/ONasPishut/VibirySeby.jpg',
    type: 'image'
  },
  {
    title: 'Как прошёл День открытых дверей в аграрно-техническом колледже',
    source: '18.03.2024',
    date: 'сайт \'Пінскі Веснік',
    link: 'https://p-v.by/news/society/kak-proshyol-den-otkrytyh-dverej-v-agrarno-tehnicheskom-kolledzhe/',
    type: 'article'
  },
  {
    title: 'В Пинском городском концертном зале открылась выставка акварели Лены Воронович',
    source: '12.03.2024',
    date: 'сайт \'Пінскі Веснік',
    link: 'https://p-v.by/news/culture/v-pinskom-gorodskom-konczertnom-zale-otkrylas-vystavka-akvareli-leny-voronovich/',
    type: 'article'
  },
  {
    title: 'Счастливы вместе',
    source: '23.02.2024 №8',
    date: 'газета \'Пінскі Веснік',
    link: '/images/Kolledg/ONasPishut/Kozubovskie.png',
    type: 'image'
  },
  {
    title: 'Председатель Молодежного парламента при Пинском городском Совете депутатов Анна Лазовская провела дискуссионную платформу «Беларусь будущего»',
    source: '11.02.2024',
    date: 'telegram-канал газеты \'Пінскі Веснік',
    link: 'https://t.me/pgatkk/1862',
    type: 'telegram'
  },
  {
    title: 'Побывали на встрече представителей городской власти с коллективом Пинского государственного аграрно-технического колледжа имени А.Е.Клещева (Сайт \'Пінскі Веснік\' 08.02.2024)',
    source: 'СМИ',
    date: 'Сайт \'Пінскі Веснік\' 08.02.2024',
    link: 'https://p-v.by/news/society/pobyvali-na-vstreche-predstavitelej-gorodskoj-vlasti-s-kollektivom-pinskogo-gosudarstvennogo-agrarno-tehnicheskogo-kolledzha-imeni-a-e-kleshhyova/',
    type: 'article'
  },
  {
    title: 'Формирование положительного отношения учащейся молодежи к военной службе',
    source: '№1, 2024',
    date: 'газета \'Методист\'',
    link: '/images/Kolledg/ONasPishut/metodist_1_2024.pdf',
    type: 'pdf'
  },
  {
    title: 'С коллективом Пинского аграрно-технического колледжа имени А.Е.Клещева встретилась информационно-пропагандистская группа горисполкома.',
    source: '05.02.2024',
    date: 'telegram-канал газеты \'Пінскі Веснік',
    link: 'https://t.me/pinsk_newsPV/26523',
    type: 'telegram'
  },
  {
    title: 'Пройти профессиональную онлайн-диагностику, которая помогает сориентироваться при выборе будущей профессии, предложили учащимся гимназии № 3 имени В.З. Коржа преподаватели Пинского государственного аграрно-технического колледжа имени А. Е. Клещева',
    source: '05.02.2024',
    date: 'telegram-канал газеты \'Пінскі Веснік',
    link: 'https://t.me/pinsk_newsPV/26498',
    type: 'telegram'
  },
  {
    title: '(Сайт \'Пінскі Веснік\' 05.02.2024)',
    source: 'СМИ',
    date: 'Сайт \'Пінскі Веснік\' 05.02.2024',
    link: 'https://p-v.by/news/molodezhka/projti-professionalnuyu-onlajn-diagnostiku-kotoraya-pomogaet-sorientirovatsya-pri-vybore-budushhej-professii-predlozhili-uchashhimsya-gimnazii-%e2%84%96-3-v-agrarno-tehnicheskom-kolledzhe/',
    type: 'article'
  },
  {
    title: 'Выпуск молодых специалистов.',
    source: '03.02.2024',
    date: 'telegram-канал газеты \'Пінскі Веснік',
    link: 'https://t.me/pgatkk/1770',
    type: 'telegram'
  },
  {
    title: 'Более 300 школьников-выпускников района пригласили на масштабную ярмарку целевой подготовки «ПИНЩИНА АГРАРНАЯ!»',
    source: '27.01.2024',
    date: 'telegram-канал газеты \'Пінскі Веснік',
    link: 'https://t.me/pgatkk/1736?single',
    type: 'telegram'
  },
  {
    title: 'Супер Дед Мороз и Снегурочка: главные герои фестиваля в Пинске',
    source: '21.01.2024',
    date: 'ТРК Пинск',
    link: 'https://youtu.be/n0i3A3C7sic?t=49',
    type: 'video'
  },
  {
    title: 'Государственное бюджетное профессиональное образовательное учреждение Самарской области «Губернский колледж г. Сызрани»',
    source: 'СМИ',
    date: '',
    link: '/images/Kolledg/ONasPishut/SbornikStatey.pdf',
    type: 'pdf'
  },
  {
    title: 'Кто ведет?',
    source: '19.01.2024, №3',
    date: 'газета \'Пінскі Веснік',
    link: '/images/1Novosti/2024/Janvar/3__19012024.jpg',
    type: 'image'
  },
  {
    title: 'В БГСХА на конкурс',
    source: '13.01.2024, №2',
    date: 'газета \'Живая вода\'',
    link: '/images/Kolledg/ONasPishut/VBGXHA.jpg',
    type: 'image'
  },
  {
    title: 'Крыжаванка \'Максім Багдановіч\'',
    source: 'Беларуская мова і літаратура, 12/2023',
    date: 'займальны матэрыал',
    link: '/images/Kolledg/ONasPishut/006__.pdf',
    type: 'pdf'
  },
  {
    title: 'Штраф за хулиганство',
    source: '11.01.2024',
    date: 'сайт \'Пінскі Веснік',
    link: 'https://p-v.by/news/society/shtraf-za-huliganstvo/',
    type: 'article'
  },
  {
    title: 'МЕТОДИЧЕСКАЯ РАЗРАБОТКА ЛИТЕРАТУРНО-МУЗЫКАЛЬНОГО МЕРОПРИЯТИЯ «ЧАС МУЖЕСТВА “ЧИТАЕМ. ЗНАЕМ. ПОМНИМ”»',
    source: 'Международный научно-популярный журнал \'Мастерство online\' 04-2023',
    date: '',
    link: '/images/Kolledg/ONasPishut/MR_Kozich.zip',
    type: 'article'
  },
  {
    title: 'Профориентация: прошли «Профи Тест», поучаствовали в «Форсунке-батле»',
    source: '26.12.2023',
    date: 'сайт \'Пінскі Веснік',
    link: 'https://p-v.by/news/molodezhka/proforientacziya-proshli-profi-test-pouchastvovali-v-forsunke-batle/',
    type: 'article'
  },
  {
    title: 'Семья и колледж вместе - за здоровый образ жизни!',
    source: '№12, 2023',
    date: 'газета \'Методист\'',
    link: '/images/Kolledg/ONasPishut/SemiyIKolledg.pdf',
    type: 'pdf'
  },
  {
    title: 'На правовой прием в Пинском районе обратились восемь человек',
    source: '21.12.2023',
    date: 'сайт \'Пінскі Веснік',
    link: 'https://p-v.by/news/society/na-pravovoj-priem-v-pinskom-rajone-obratilis-vosem-chelovek/',
    type: 'article'
  },
  {
    title: 'В Горках подвели итоги конкурса профессионального мастерства «АкадемСтрой-2023»',
    source: '18 декабря 2023',
    date: 'news.sb.by',
    link: 'https://news.sb.by/articles/v-gorkakh-podveli-itogi-konkursa-professionalnogo-masterstva-akademstroy-2023.html',
    type: 'article'
  },
  {
    title: 'Экскурсия - путь к познанию',
    source: '№10-11, 2023',
    date: 'газета \'Методист\'',
    link: '/images/Kolledg/ONasPishut/PutKPoznaniy.pdf',
    type: 'pdf'
  },
  {
    title: 'Владислав ГРАБАР: «Желание работать в сельском хозяйстве было моей детской мечтой»',
    source: '08.11.2023',
    date: 'сайт \'Пінскі Веснік',
    link: 'https://p-v.by/news/pinsk-i-pinchane/vladislav-grabar-zhelanie-rabotat-v-selskom-hozyajstve-bylo-moej-detskoj-mechtoj/',
    type: 'article'
  },
  {
    title: 'Оправдать доверие',
    source: '10.11.2023 №45',
    date: 'газета \'Пінскі Веснік',
    link: '/images/Kolledg/ONasPishut/OpravdatDoverie.jpg',
    type: 'image'
  },
  {
    title: 'Видеофакт. Молодежь #ПГАТККЛЕЩЕВА на уборке яблок!',
    source: 'СМИ',
    date: '',
    link: 'https://youtu.be/6knYoqrVym8',
    type: 'video'
  },
  {
    title: 'На главной сцене областных \'Дожинок\' наградили победителей уборочной кампании-2023.В их числе - представители Пинщины.',
    source: '15.09.2023\' №37',
    date: 'газета \'Пінскі Веснік',
    link: '/images/Kolledg/ONasPishut/Sentybr2023.jpg',
    type: 'image'
  },
  {
    title: 'Журнал \'Беларуская мова и літаратура\' (выпуск №9, 2023)',
    source: '2023',
    date: 'выпуск №9',
    link: '/images/Kolledg/ONasPishut/Polovko.pdf',
    type: 'pdf'
  },
  {
    title: 'Креативный старт приемной кампании',
    source: '21.07.2023\'',
    date: 'газета \'Пінскі Веснік',
    link: '/images/Kolledg/ONasPishut/StartPK.jpg',
    type: 'image'
  },
  {
    title: 'Людзі зямлі палескай. Прага жыцця',
    source: '21.07.2023\'',
    date: 'газета \'Пінскі Веснік',
    link: '/images/Kolledg/ONasPishut/img606.jpg',
    type: 'image'
  },
  {
    title: 'Крэда дырэктара - рухацца наперад',
    source: 'СМИ',
    date: '',
    link: '/images/Kolledg/ONasPishut/Asveta/Director.pdf',
    type: 'pdf'
  },
  {
    title: 'Формула успеха - профессионализм и единство команды',
    source: 'СМИ',
    date: '',
    link: '/images/Kolledg/ONasPishut/Asveta/FormulaUspecha.pdf',
    type: 'pdf'
  },
  {
    title: 'Интеллектуальная игра \'Что нам стоит дом построить\'',
    source: 'СМИ',
    date: '',
    link: '/images/Kolledg/ONasPishut/Asveta/Evtuch.pdf',
    type: 'pdf'
  },
  {
    title: 'Профессиональное содержание урока математики: решение практико-ориентированных задач',
    source: 'СМИ',
    date: '',
    link: '/images/Kolledg/ONasPishut/Asveta/Kulikova.pdf',
    type: 'pdf'
  },
  {
    title: 'Интегрированная игра \'Профессиональный подход\'',
    source: 'СМИ',
    date: '',
    link: '/images/Kolledg/ONasPishut/Asveta/Kiseleva.pdf',
    type: 'pdf'
  },
  {
    title: 'Конкурсная программа \'Физика в профессии техника-механика\'',
    source: 'СМИ',
    date: '',
    link: '/images/Kolledg/ONasPishut/Asveta/Sidorevich.pdf',
    type: 'pdf'
  },
  {
    title: 'Профориентационный поединок \'Первые шаги в профессию строителя\'',
    source: 'СМИ',
    date: '',
    link: '/images/Kolledg/ONasPishut/Asveta/Michovich.pdf',
    type: 'pdf'
  },
  {
    title: 'Урок игра \'Знатоки геодезии\'',
    source: 'СМИ',
    date: '',
    link: '/images/Kolledg/ONasPishut/Asveta/Moyseynchik.pdf',
    type: 'pdf'
  },
  {
    title: 'Конкурс эрудитов \'Безопасный труд - право каждого человека\'',
    source: 'СМИ',
    date: '',
    link: '/images/Kolledg/ONasPishut/Asveta/Kulesh.pdf',
    type: 'pdf'
  },
  {
    title: 'День открытых дверей \'Шагаем в колледж смело\'',
    source: 'СМИ',
    date: '',
    link: '/images/Kolledg/ONasPishut/Asveta/DOD.pdf',
    type: 'pdf'
  },
  {
    title: 'скачать приложение в формате PDF &gt;&gt;',
    source: 'СМИ',
    date: '',
    link: 'https://www.n-asveta.by/dadatki/eshb/2023/n07/sidorevich.pdf',
    type: 'pdf'
  },
  {
    title: 'скачать приложение в формате PDF &gt;&gt;',
    source: 'СМИ',
    date: '',
    link: 'https://www.n-asveta.by/dadatki/eshb/2023/n07/kulesh.pdf',
    type: 'pdf'
  },
  {
    title: 'скачать приложение в формате PDF &gt;&gt;',
    source: 'СМИ',
    date: '',
    link: 'https://www.n-asveta.by/dadatki/eshb/2023/n07/den.pdf',
    type: 'pdf'
  },
  {
    title: 'скачать приложение в формате PDF &gt;&gt;',
    source: 'СМИ',
    date: '',
    link: 'https://www.n-asveta.by/dadatki/eshb/2023/n07/kiseleva.pdf',
    type: 'pdf'
  },
  {
    title: 'скачать публикацию в формате PDF &gt;&gt;',
    source: 'СМИ',
    date: '',
    link: 'https://www.n-asveta.by/dadatki/2023/n07/palauko.pdf',
    type: 'pdf'
  },
  {
    title: 'Трактористами стали ... студенты (Газета \'Живая вода\', №29, 22.07.2023)',
    source: '№29, 22.07.2023',
    date: 'Газета \'Живая вода\'',
    link: '/images/Kolledg/ONasPishut/img443.jpg',
    type: 'image'
  },
  {
    title: 'К сведению абитуриентов (газета \'Живая вода\', №28, 2023)',
    source: '№28, 2023',
    date: 'газета \'Живая вода\'',
    link: '/images/Kolledg/ONasPishut/img442.jpg',
    type: 'image'
  },
  {
    title: 'Сборник материалов',
    source: 'СМИ',
    date: '',
    link: '/images/Kolledg/ONasPishut/UspeshenTotKtoTvorit.pdf',
    type: 'pdf'
  },
  {
    title: 'Методическая разработка учебного занятия «Заработная плата» по дисциплине «Экономика строительства» (Международный научно-популярный журнал \'Мастерство онлайн\', №2, 2023)',
    source: '№2, 2023',
    date: 'Международный научно-популярный журнал \'Мастерство онлайн\'',
    link: '/images/Kolledg/ONasPishut/KozichVA2023.pdf',
    type: 'pdf'
  },
  {
    title: 'Фестиваль \'Экология: природа-человек-техника. Сборник материалов',
    source: 'преподаватель общеобразовательных дисциплин Гришко Л.А. - сертификат',
    date: '',
    link: '/images/Kolledg/ONasPishut/FestivakEkologiy2023.pdf',
    type: 'pdf'
  },
  {
    title: 'Как работает обновлённый Кодекс об образовании Республики Беларусь, проверили на месте',
    source: 'культуре и науке Палаты представителей Национального собрания Республики Беларусь',
    date: 'Выездное заседание Постоянной комиссии по образованию',
    link: '/images/Kolledg/ONasPishut/img393.jpg',
    type: 'image'
  },
  {
    title: 'На падыходзе да моста - дарожнікі (газета \'Навіны Стаўбцоўшчыны\', № 39, 03.06.2023)',
    source: '№ 39, 03.06.2023',
    date: 'газета \'Навіны Стаўбцоўшчыны\'',
    link: '/images/Kolledg/ONasPishut/Doroshniki.jpeg',
    type: 'image'
  },
  {
    title: '\'АкадемияПрофи\'(газета \'Методист\', Брестский ОУМЦ ПО, №5, 2023)',
    source: 'Брестский ОУМЦ ПО, №5, 2023',
    date: 'газета \'Методист\'',
    link: '/images/Kolledg/ONasPishut/AcademiyProfi.pdf',
    type: 'pdf'
  },
  {
    title: 'Подтверждение высокого уровня (газета \'Методист\', Брестский ОУМЦ ПО, №5, 2023)',
    source: 'Брестский ОУМЦ ПО, №5, 2023',
    date: 'газета \'Методист\'',
    link: '/images/Kolledg/ONasPishut/PodtverchdenieVisokogoUrovny.pdf',
    type: 'pdf'
  },
  {
    title: 'О войне - стихами (газета \'Методист\', Брестский ОУМЦ ПО, №5, 2023)',
    source: 'Брестский ОУМЦ ПО, №5, 2023',
    date: 'газета \'Методист\'',
    link: '/images/Kolledg/ONasPishut/OVoineStichami.pdf',
    type: 'pdf'
  },
  {
    title: '\'Зарница\' - уроки мужества (газета \'Методист\', Брестский ОУМЦ ПО, №5, 2023)',
    source: 'Брестский ОУМЦ ПО, №5, 2023',
    date: 'газета \'Методист\'',
    link: '/images/Kolledg/ONasPishut/Zarnica.pdf',
    type: 'pdf'
  },
  {
    title: 'По зову Зарницы (газета \'Живая вода\', 20.05.2023, №20)',
    source: '20.05.2023, №20',
    date: 'газета \'Живая вода\'',
    link: '/images/Kolledg/ONasPishut/img328.jpg',
    type: 'image'
  },
  {
    title: 'Дружбу скрепили договором (газета \'Живая вода\', 20.05.2023, №20)',
    source: '20.05.2023, №20',
    date: 'газета \'Живая вода\'',
    link: '/images/Kolledg/ONasPishut/img327.jpg',
    type: 'image'
  },
  {
    title: '«АРТ-вакацыі-2023»: кто из Пинска стал дипломантом фестиваля и принял участие в финальном концерте',
    source: 'СМИ',
    date: '',
    link: 'https://p-v.by/news/molodezhka/art-vakaczyi-2023-kto-iz-pinska-stal-diplomantom-festivalya-i-prinyal-uchastie-v-finalnom-konczerte/',
    type: 'article'
  },
  {
    title: 'Работа на земле - призвание',
    source: 'СМИ',
    date: 'газета \'Живая вода\' от 13.05.2023',
    link: '/images/Kolledg/ONasPishut/RabotaNaZemlePrizvanie.jpg',
    type: 'image'
  },
  {
    title: 'Слышали? В Почапово - на \'Зарницу\'',
    source: '04.05.2023\'',
    date: 'газета \'Пінскі Веснік',
    link: '/images/Kolledg/ONasPishut/Zarnica.jpg',
    type: 'image'
  },
  {
    title: 'III Всероссийская научно-практическая конференция \'Демонстрационный экзамен как инструмент независимой оценки качества профессионального образования\'',
    source: 'СМИ',
    date: '',
    link: '/images/Kolledg/ONasPishut/63-66sait.pdf',
    type: 'pdf'
  },
  {
    title: 'Молодое пополнение',
    source: 'от 06.05.2023',
    date: 'газета \'Живая вода\' №18',
    link: '/images/Kolledg/ONasPishut/MolodoePopolnenie.jpg',
    type: 'image'
  },
  {
    title: 'В Почапово прошла военно-патриотическая игра «Зарница»',
    source: '04.05.2023\'',
    date: 'газета \'Пінскі Веснік',
    link: 'https://p-v.by/news/molodezhka/v-pochapovo-proshla-voenno-patrioticheskaya-igra-zarnicza/',
    type: 'article'
  },
  {
    title: 'Назначение. Генеральный директором ОУП \'Гродномеливодхоз\' назначен В.В. Полуянов',
    source: '29.04.2023\'',
    date: 'газета \'Пінскі Веснік',
    link: '/images/Kolledg/ONasPishut/Naznachenie.jpg',
    type: 'image'
  },
  {
    title: 'Литературный альманах творчества обучающихся, выпускников, работников УВО и колледжей АПК',
    source: 'Минск, БГАТУ',
    date: 'Выпуск №13',
    link: '/images/Kolledg/ONasPishut/Aprel.pdf',
    type: 'pdf'
  },
  {
    title: 'Надежное плечо милиции',
    source: '21.04.2023\'',
    date: 'газета \'Пінскі Веснік',
    link: '/images/Kolledg/ONasPishut/NadeshnoePlechoMilicii.jpg',
    type: 'image'
  },
  {
    title: 'Что в имене тебе моем....',
    source: 'СБОРНИК ПУБЛИКАЦИЙ – ЭССЕ ПО МАТЕРИАЛАМ МЕЖДУНАРОДНОГО ДИСТАНЦИОННОГО КОНКУРСА СТУДЕНЧЕСКИХ РАБОТ СРЕДИ ОБРАЗОВАТЕЛЬНЫЙ ОРГАНИЗАЦИЙ СРЕДНЕГО ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ',
    date: '',
    link: '/images/Kolledg/ONasPishut/ChtoVImeniTebeMoem.pdf',
    type: 'pdf'
  },
  {
    title: 'Беларуская мова і літаратура (3/2023) - Займальны матэріал',
    source: '3/2023',
    date: '',
    link: '/images/Kolledg/ONasPishut/img299.jpg',
    type: 'image'
  },
  {
    title: 'Чтобы принять правильное решение',
    source: '03.03.2023, №9',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/Kolledg/ONasPishut/PravilnoeReshenie.jpg',
    type: 'image'
  },
  {
    title: 'Малады талент Палесся',
    source: '10.03.2023, №10',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/Kolledg/ONasPishut/MaladiTAlentPalessy.jpg',
    type: 'image'
  },
  {
    title: 'Выбирать правильный путь',
    source: '24.02.2023, №8',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/Kolledg/ONasPishut/VibratPravilniyPut.pdf',
    type: 'pdf'
  },
  {
    title: 'Футбол мини - польза макси',
    source: '10.02.2023, №6',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/Kolledg/ONasPishut/FutbolMini.jpg',
    type: 'image'
  },
  {
    title: 'Семинар \'И права, и обязанности\'',
    source: '10.02.2023, №6',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/Kolledg/ONasPishut/PravaObyzannosti.jpg',
    type: 'image'
  },
  {
    title: 'Преподаватель - Козич Виктория Александровна',
    source: '15 февраля 2023',
    date: '',
    link: '/images/Kolledg/ONasPishut/Kozich_Smi.pdf',
    type: 'pdf'
  },
  {
    title: 'газета \'Пінскі Веснік\', 17.02.2023',
    source: '17.02.2023',
    date: '<a href=\'https://p-v.by/news/god_molodezhi/v-gdk-organizovali-yarmarku-czelevoj-podgotovki-budushhee-strany-v-nashih-rukah-vybiraj-pravilnyj-put/\'>газета \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/god_molodezhi/v-gdk-organizovali-yarmarku-czelevoj-podgotovki-budushhee-strany-v-nashih-rukah-vybiraj-pravilnyj-put/',
    type: 'article'
  },
  {
    title: 'Юбилей второго отделения дневного пребывания для инвалидов',
    source: '08.02.2023',
    date: 'газета \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/novosti/society/posmotreli-kak-otmetilo-yubilej-vtoroe-otdelenie-dnevnogo-prebyvaniya-dlya-invalidov/',
    type: 'article'
  },
  {
    title: 'Новогодние украшения учебных заведений Пинска',
    source: '26.12.2022',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/CJvPu7DUO9o',
    type: 'video'
  },
  {
    title: 'Конкурс назвал лучших',
    source: '24.12.2022 №52',
    date: 'газета \'Живая вода\'',
    link: '/images/Kolledg/ONasPishut/img143.jpg',
    type: 'image'
  },
  {
    title: 'Жыццё і творчасць Якуба Коласа',
    source: '11/2022',
    date: 'Часопiс \'Беларуская мова і літаратура\'',
    link: '/images/Kolledg/ONasPishut/img118.jpg',
    type: 'image'
  },
  {
    title: 'Пинчанин стал лучшим учащимся в системе профессионального образования Брестской области (ТРК \'Пинск\', 13.12.2022)',
    source: '13.12.2022',
    date: 'ТРК \'Пинск\'',
    link: 'https://youtu.be/KKfhcgLFFhM',
    type: 'video'
  },
  {
    title: 'Лучший учащийся профобразования (ТРК \'Брест\', 13.12.2022)',
    source: '13.12.2022',
    date: 'ТРК \'Брест\'',
    link: 'https://youtu.be/uFk8xY9aZp8',
    type: 'video'
  },
  {
    title: 'Диалоговая площадка: «Помним наших Героев!»',
    source: 'газета \'Пінскі Веснік\'',
    date: '',
    link: 'https://p-v.by/news/god_molodezhi/dialogovaya-ploshhadka-pomnim-nashih-geroev/',
    type: 'article'
  },
  {
    title: 'Труд крут',
    source: '25.11.2022 №47',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/Kolledg/ONasPishut/trudkrut.jpg',
    type: 'image'
  },
  {
    title: 'Слава і гордасць беларускай літаратуры',
    source: '2022, раздел \'Дадаткі\' на сайце часопіса',
    date: 'Навукова-педагагічны часопіс \'Народная асвета\' № 10',
    link: '/images/Kolledg/ONasPishut/SlavaGordostBelLit.pdf',
    type: 'pdf'
  },
  {
    title: 'Материалы конференции (с международным участием). Роль общественных объединений в социализации учащихся ПТО и ССО.',
    source: 'с международным участием',
    date: '',
    link: '/images/Kolledg/ONasPishut/Konferenciy.pdf',
    type: 'pdf'
  },
  {
    title: 'Напярэдадні свята!',
    source: '01.11.2022, №106',
    date: 'Газета \'Настаўніцкая газета\'',
    link: '/images/Kolledg/ONasPishut/NapyredanniSvyta.jpg',
    type: 'image'
  },
  {
    title: 'Андрей Колесникович: \'Работать мне здесь по душе\'',
    source: '01.10.2022, №78',
    date: 'Газета \'Полесская правда\'',
    link: '/images/Kolledg/ONasPishut/RabotatZdesMnePoDushe.jpg',
    type: 'image'
  },
  {
    title: 'Героев жатвы Брестчины чествовали в Телеханах',
    source: '09.09.2022 №36',
    date: 'газета \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/society/geroev-zhatvy-brestchiny-chestvovali-v-telehanah/',
    type: 'article'
  },
  {
    title: 'От болот - к богатым нивам',
    source: 'от 10.09.2022 №37',
    date: 'газета \'Живая вода\'',
    link: '/images/Kolledg/ONasPishut/OtBolotKBogatimNivam.jpg',
    type: 'image'
  },
  {
    title: 'Студенческие отряды',
    source: '05.08.2022 № 31',
    date: 'газета \'Пінскі Веснік\'',
    link: '/images/Kolledg/ONasPishut/StudencheskieOtrydi.jpg',
    type: 'image'
  },
  {
    title: 'Гидростроитель – служба ответственная',
    source: '01.07.2022 №26',
    date: 'газета \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/society/kadry-reshayut-vsyo/',
    type: 'article'
  },
  {
    title: 'Мастер-класс для учащихся УО «Пинский государственный аграрно-технический колледж имени А.Е.Клещева»',
    source: '08.07.2022 №27',
    date: 'газета \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/society/master-klass-dlya-uchashhihsya-uo-pinskij-gosudarstvennyj-agrarno-tehnicheskij-kolledzh-imeni-a-e-kleshheva/',
    type: 'article'
  },
  {
    title: 'Проявили неравнодушие и бдительность',
    source: '17.06.2022 №24',
    date: 'газета \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/society/proyavili-neravnodushie-i-bditelnost/',
    type: 'article'
  },
  {
    title: 'Мнение. Интервью директора.',
    source: '10.06.2022 №23',
    date: 'Газета \'Белорусский час\'',
    link: '/images/Kolledg/ONasPishut/Mnenie.jpg',
    type: 'image'
  },
  {
    title: 'Фестиваль «Вытокi» в Столине – масштабно и креативно',
    source: '10.06.2022 №23',
    date: 'Газета \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/society/fotoreportazh-pv-festival-vytoki-v-stoline-masshtabno-i-kreativno/',
    type: 'article'
  },
  {
    title: 'Майская эстафета: пинская традиция и новые лидеры',
    source: '20.05.2022 №20',
    date: 'Газета \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/sports/majskaya-estafeta-pinskaya-tradicziya-i-novye-lidery/',
    type: 'article'
  },
  {
    title: 'Интврью В.Г. Пашкевича. Автопробег.',
    source: '20.05.2022 №20',
    date: 'Газета \'Пінскі Веснік\'',
    link: '/images/Kolledg/ONasPishut/IntPashkevich.jpg',
    type: 'image'
  },
  {
    title: 'Конкурс профессионального мастерства «Лучший по профессии» состоялся в ПГАТК имени А.Е. Клещева.',
    source: '22.04.2022 №16',
    date: 'Газета \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/society/konkurs-professionalnogo-masterstva-luchshij-po-professii-sostoyalsya-v-pgatk-imeni-a-e-kleshheva-fotoreportazh/',
    type: 'article'
  },
  {
    title: 'Волонтёры БРСМ продолжают сбор гуманитарной помощи для беженцев из Украины',
    source: '08.04.2022 №14',
    date: 'Газета \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/god_molodezhi/volontyory-brsm-prodolzhayut-sbor-gumanitarnoj-pomoshhi-dlya-bezhencev-iz-ukrainy/',
    type: 'article'
  },
  {
    title: 'В аграрно-техническом колледже имени А.Е. Клещева прошел конкурс на лучший исторический костюм',
    source: '15.04.2022 №15',
    date: 'Газета \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/society/v-agrarno-texnicheskom-kolledzhe-imeni-a-e-kleshheva-proshel-konkurs-na-luchshij-istoricheskij-kostyum/',
    type: 'article'
  },
  {
    title: '1',
    source: '1',
    date: '',
    link: '/images/Kolledg/ONasPishut/MiVmesteZaBel.jpg',
    type: 'image'
  },
  {
    title: '«Беларусь. Молодёжь. Наследие».',
    source: '25.03.2022 №12',
    date: 'Газета \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/society/belarus-molodyozh-nasledie/',
    type: 'article'
  },
  {
    title: '1',
    source: '1',
    date: '',
    link: '/images/Kolledg/ONasPishut/KDeluSGorSerdcem.jpg',
    type: 'image'
  },
  {
    title: 'Стипендия от Федерации профсоюзов Беларуси – Михаилу ПИКУЛЕ',
    source: '29.10.2021 №44',
    date: 'Газета \'Пінскі Веснік\'',
    link: 'https://p-v.by/news/god_molodezhi/stipendiya-ot-federacii-profsoyuzov-belarusi-mixailu-pikule/',
    type: 'article'
  },
  {
    title: 'Поклон Вам - хлеборобы!',
    source: '08.09.2021',
    date: 'Газета \'Пінскі Веснік\'',
    link: '/images/Kolledg/ONasPishut/PoklonVamHleborobi.jpg',
    type: 'image'
  },
  {
    title: '',
    source: 'СМИ',
    date: '',
    link: 'https://brest-edu.gov.by/files/00350/obj/110/15483/doc/%D0%A0%D0%B5%D0%B3%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0.pdf',
    type: 'pdf'
  },
  {
    title: 'Регистрационное свидетельство',
    source: 'СМИ',
    date: '',
    link: '/images/img601.jpg',
    type: 'image'
  },
  {
    title: 'Политику конфиденциальности',
    source: '\'Пользователь\'',
    date: 'далее \'Вы\'',
    link: '/images/1Novosti/2024/Dekabr/politika konfidencialnosti.pdf',
    type: 'pdf'
  },
  {
    title: '⇒Политика конфиденциальности',
    source: 'СМИ',
    date: '',
    link: '/images/1Novosti/2024/Dekabr/politika_konfidencialnosti.pdf',
    type: 'pdf'
  }
];

const getTypeConfig = (type: string) => {
  switch(type) {
    case 'video': return { icon: Youtube, color: 'text-rose-500', bg: 'bg-rose-100', border: 'hover:border-rose-300', label: 'Видеосюжет' };
    case 'telegram': return { icon: Send, color: 'text-sky-500', bg: 'bg-sky-100', border: 'hover:border-sky-300', label: 'Telegram' };
    case 'image': return { icon: ImageIcon, color: 'text-emerald-500', bg: 'bg-emerald-100', border: 'hover:border-emerald-300', label: 'Вырезка (скан)' };
    case 'pdf': return { icon: PdfIcon, color: 'text-orange-500', bg: 'bg-orange-100', border: 'hover:border-orange-300', label: 'Документ PDF' };
    default: return { icon: Globe, color: 'text-indigo-500', bg: 'bg-indigo-100', border: 'hover:border-indigo-300', label: 'Статья' };
  }
};

const Media: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Lightbox state
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const parentSection = MAIN_MENU.find(item => item.href === '/kolledg');
  const sidebarLinks = parentSection?.submenu || [];
  const currentPath = '/kolledg/mi-v-smi';

  // Only consider images for the lightbox navigation
  const imageItems = MEDIA_DATA.filter(item => item.type === 'image');

  const handleImageClick = (e: React.MouseEvent, itemLink: string) => {
    e.preventDefault();
    const index = imageItems.findIndex(img => img.link === itemLink);
    if (index !== -1) {
      setSelectedImageIndex(index);
    }
  };

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
            <span className="text-accent-500 font-bold truncate">Мы в СМИ</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-5xl">
            Мы в СМИ
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
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-6 md:p-10">
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <Radio className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-900">Колледж в объективе</h2>
                  <p className="text-sm text-slate-500">Статьи, репортажи и публикации о нас в средствах массовой информации</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {MEDIA_DATA.map((item, idx) => {
                  const config = getTypeConfig(item.type);
                  const isImage = item.type === 'image';
                  
                  return (
                    <a
                      key={idx}
                      href={item.link}
                      onClick={isImage ? (e) => handleImageClick(e, item.link) : undefined}
                      target={isImage ? undefined : "_blank"}
                      rel={isImage ? undefined : "noopener noreferrer"}
                      className={`group flex flex-col md:flex-row md:items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300 ${config.border}`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${config.bg} ${config.color}`}>
                        <config.icon className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-primary-900 group-hover:text-accent-600 transition-colors line-clamp-2 leading-tight mb-1">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-500">
                          <span className="flex items-center gap-1">
                            {item.source}
                          </span>
                          {item.date && (
                            <span className="flex items-center gap-1 text-slate-400">
                              • {item.date}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full bg-slate-100 group-hover:bg-accent-50 items-center justify-center transition-colors">
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-accent-500" />
                      </div>
                    </a>
                  );
                })}
              </div>

            </div>
          </main>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedImageIndex !== null && (
        <Lightbox 
          images={imageItems.map(item => item.link)}
          titles={imageItems.map(item => item.title)}
          selectedIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onSelectIndex={setSelectedImageIndex}
        />
      )}
    </div>
  );
};

export default Media;
