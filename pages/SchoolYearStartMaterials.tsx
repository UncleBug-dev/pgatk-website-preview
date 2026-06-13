import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Printer, FileText, Link as LinkIcon, Download } from 'lucide-react';
import { MAIN_MENU } from '../constants';

const materials = [
  {
    year: "2025/2026",
    items: [
      { title: "Инструктивно-методическое письмо «К началу 2025/2026 учебного года»", href: "https://disk.yandex.com/i/7546c7BlzO9fNQ", external: true },
      { title: "Инструктивно-методическое письмо «Основные аспекты в организации идеологической и воспитательной работы в учреждениях высшего образования в 2025/2026 учебном году»", href: "https://disk.yandex.ru/i/UurPCh5QNlS81g", external: true },
      { title: "Разъяснения по применению Указаний Журнала учебных занятий (ССО) 2025", href: "https://ripo.by/assets/ripo_new/files_2025/7/%D0%A0%D0%B0%D0%B7%D1%8A%D1%8F%D1%81%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E%20%20%D0%A3%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%B8%D0%B9%20%D0%96%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0%20%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D1%85%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B9%20(%D0%A1%D0%A1%D0%9E)%202025.docx", external: true },
      { title: "Разъяснения по применению Указаний Журнала по практике (ССО) 2025", href: "https://ripo.by/assets/ripo_new/files_2025/7/%D0%A0%D0%B0%D0%B7%D1%8A%D1%8F%D1%81%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%A3%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%B8%D0%B9%20%D0%96%D1%83%D1%80%D0%BD%D0%B0%D0%BB%D0%B0%20%D0%BF%D0%BE%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B5%20(%D0%A1%D0%A1%D0%9E)%202025.docx", external: true },
      { title: "Примерные формы бланочной документации", href: "https://ripo.by/index.php?id=6542", external: true },
      { title: "Перечень действующих типовых учебных программ по учебным дисциплинам, практике профессионального компонента и типовых учебных планов по специальностям (направлениям специальностей), специализациям для учреждений образования, реализующих образовательные программы среднего специального образования по направлению образования «Сельское хозяйство» на 2025/2026 учебный год", href: "https://disk.yandex.com/i/FePCur9bFY3ZzA", external: true, pdfLink: "https://disk.yandex.com/i/P7WNYGNwYgb0Vw" },
      { title: "Перечень действующих примерных учебных программ по учебным предметам, практике государственного компонента примерных учебных планов по специальностям направлений образования «Сельское хозяйство», «Ветеринария» для учреждений образования, реализующих образовательные программы среднего специального образования на 2025/2026 учебный год", href: "https://disk.yandex.com/i/x1yVDGgs4a0aGg", external: true, pdfLink: "https://disk.yandex.com/i/p7xIx1PHv6rW_g" }
    ]
  },
  {
    year: "2024/2025",
    items: [
      { title: "Инструктивно-методическое письмо к началу 2024/2025 учебного года", href: "/downloads/methodical/InstruktinoMetodicheskoe20242024.pdf" },
      { title: "Профессиональный стандарт «Педагогическая деятельность в учреждениях образования, реализующих образовательные программы профессионально-технического и среднего специального образования»", href: "/downloads/methodical/ProfStandart.pdf" },
      { title: "Методические указания 2024 (ССО)", href: "https://ripo.by/index.php?id=7840", external: true },
      { title: "Примерные формы бланочной документации", href: "https://ripo.by/assets/ripo_new/files_2024/7/%D0%91%D0%BB%D0%B0%D0%BD%D0%BE%D1%87%D0%BD%D0%B0%D1%8F%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F%202024.rar", external: true },
      { title: "Разъяснения по ведению журналов ПТО и ССО", href: "https://ripo.by/index.php?id=7122", external: true },
      { title: "Научно-методическое обеспечение ОСО", href: "https://ripo.by/index.php?id=5438", external: true },
      { title: "Перечень действующих примерных учебных планов по специальностям утвержденных Министерством образования Республики Беларусь, для учреждений образования, реализующих образовательные программы среднего-специального образования, для учебных групп набора 2024/2025 учебного года ПРОЕКТ", href: "https://ripo.by/assets/ripo_new/files_2024/8/%D0%9F%D0%95%D0%A0%D0%95%D0%A7%D0%95%D0%9D%D0%AC%20%D0%94%D0%95%D0%99%D0%A1%D0%A2%D0%92%D0%A3%D0%AE%D0%A9%D0%98%D0%A5%20%D0%9F%D0%A0%D0%98%D0%9C%D0%95%D0%A0%D0%9D%D0%AB%D0%A5%20%D0%A3%D0%A7%D0%95%D0%91%D0%9D%D0%AB%D0%A5%20%D0%9F%D0%9B%D0%90%D0%9D%D0%9E%D0%92%20%202024-2025%20%D0%B3%D0%BE%D0%B4.pdf", external: true },
      { title: "Перечень действующих примерных учебных программ по специальностям, утвержденных Министерством образования Республики Беларусь, для учреждений образования, реализующих образовательные программы среднего-специального образования, для учебных групп набора 2024/2025 учебного года ПРОЕКТ", href: "https://ripo.by/assets/ripo_new/files_2024/8/%D0%9F%D0%95%D0%A0%D0%95%D0%A7%D0%95%D0%9D%D0%AC%20%D0%94%D0%95%D0%99%D0%A1%D0%A2%D0%92%D0%A3%D0%AE%D0%A9%D0%98%D0%A5%20%D0%9F%D0%A0%D0%98%D0%9C%D0%95%D0%A0%D0%9D%D0%AB%D0%A5%20%D0%A3%D0%A7%D0%95%D0%91%D0%9D%D0%AB%D0%A5%20%D0%9F%D0%A0%D0%9E%D0%93%D0%A0%D0%90%D0%9C%D0%9C%202024-2025%20%D0%B3%D0%BE%D0%B4.pdf", external: true },
      { title: "Перечень действующих примерных учебных программ по учебным предметам, модулям, практике государственного компонента примерных учебных планов по специальностям направлений образования «Сельское хозяйство», «Ветеринария» для учреждений образования, реализующих образовательные программы среднего специального образования для учебных групп набора 2024/2025 учебного года", href: "http://agroedu.by/wp-content/uploads/2024/08/%D0%9F%D0%B5%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%8C-%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D1%83%D1%8E%D1%89%D0%B8%D1%85-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%BD%D1%8B%D1%85-%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D1%85-%D0%BF%D0%BB%D0%B0%D0%BD%D0%BE%D0%B2-%D0%B8-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC-%D0%BD%D0%B0-2024_2025-%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE%D0%B4-1.pdf", external: true },
      { title: "Перечень действующих типовых учебных программ по учебным дисциплинам, практике профессионального компонента и типовых учебных планов по специальностям (направлениям специальностей), специализациям для учреждений образования, реализующих образовательные программы среднего специального образования по направлению образования «Сельское хозяйство»", href: "http://agroedu.by/wp-content/uploads/2024/08/%D0%9F%D0%B5%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%8C-%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D1%83%D1%8E%D1%89%D0%B8%D1%85-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2%D1%8B%D1%85-%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D1%85-%D0%BF%D0%BB%D0%B0%D0%BD%D0%BE%D0%B2-%D0%B8-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC-%D0%BD%D0%B0-2024_2025-%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9-%D0%B3%D0%BE%D0%B4-2.pdf", external: true }
    ]
  },
  {
    year: "2023/2024",
    items: [
      { title: "Письмо к началу 2023/2024 учебного года", href: "/downloads/methodical/Pismo2023_2024.pdf" },
      { title: "Дополнение к письму \"К началу 2023/2024 учебного года\"", href: "https://ripo.by/assets/ripo_new/files_2023/9/2023%202024%20%D1%83%D1%87%20%D0%B3%D0%BE%D0%B4_%D0%B4%D0%BE%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BA%20%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D1%83.pdf", external: true },
      { title: "Инструктивно-методическое письмо \"Особенности организации социальной, воспитательной и идеологической работы в учреждениях образования, реализующих образовательные программы ПТО и ССО, в 2023/2024 учебном году\"", href: "https://ripo.by/assets/ripo_new/files_2023/8/%D0%98%D0%9C%D0%9F%202023-2024%20%D0%B2%D0%BE%D1%81%D0%BF%D0%B8%D1%82..pdf", external: true },
      { title: "Методические рекомендации по проведению в учреждениях образования, реализующих образовательные программы профессионально-технического и среднего специального образования, первого урока в 2023/2024 учебном году", href: "https://ripo.by/index.php?id=7017", external: true },
      { title: "Методические рекомендации по разработке учебно-программной документации образовательных программ среднего специального образования, обеспечивающих получение квалификации специалиста (рабочего)", href: "https://ripo.by/index.php?id=6810", external: true },
      { title: "Методические рекомендации по определению индикаторов и показателей эффективности реализации мероприятий комплексной реабилитации несовершеннолетних, потребление которыми наркотических средств, психотропных веществ, их аналогов, токсических или других одурманивающих веществ, употребление алкогольных, слабоалкогольных напитков или пива установлены в соответствии с законодательством", href: "https://ripo.by/assets/ripo_new/files_2023/8/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D0%B0%D1%86%D0%B8%D0%B8%20%D0%BF%D0%BE%20%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%B8%D0%BD%D0%B4%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D0%BE%D0%B2%20%D0%9A%D0%A0.pdf", external: true },
      { title: "Об организации физического воспитания обучающихся, осваивающих образовательные программы профессионально-технического и среднего специального образования в 2023/2024 учебном году", href: "/downloads/methodical/IMSFk23.pdf" },
      { title: "Примерные тематические планы по учебным предметам общеобразовательного компонента примерного учебного плана по специальности для учреждений образования, реализующих образовательные программы среднего специального образования для групп набора 2023/2024 учебного года", href: "https://ripo.by/index.php?id=1663", external: true },
      { title: "Действующие примерные и типовые учебные планы в 2023/2024 учебном году", href: "https://disk.yandex.ru/d/3q24sMK-yaCo2Q", external: true },
      { 
        title: "Примерные учебные планы и примерные учебные программы/примерные тематические планы – новые специальности (для групп набора 2023/2024 учебного года)",
        subItems: [
          { title: "Специальность 5-04-0715-20 «Техническая эксплуатация подъемно-транспортных, дорожно-строительных машин и оборудования» - Примерный учебный план № 247", href: "https://ripo.by/umosso/bank_SSO_011-2022/table_6/bank_6/5-04-0715-20/5-04-0715-20.html", external: true },
          { title: "Специальность 5-04-0732-01 «Строительство зданий и сооружений» - Примерный учебный план № 182", href: "https://ripo.by/umosso/bank_SSO_011-2022/table_6/bank_6/5-04-0732-01/5-04-0732-01.html", external: true },
          { title: "Специальность 5-04-0732-08 «Строительство и эксплуатация автомобильных дорог» - Примерный учебный план № 87", href: "https://ripo.by/umosso/bank_SSO_011-2022/table_6/bank_6/5-04-0732-08/5-04-0732-08.html", external: true },
          { title: "Специальность 5-04-0811-03 «Мелиорация земель» - Примерный учебный план № 123", href: "http://aggroeduo.site/5-04-0811-03-%D0%BC%D0%B5%D0%BB%D0%B8%D0%BE%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B7%D0%B5%D0%BC%D0%B5%D0%BB%D1%8C/", external: true },
          { title: "Специальность 5-04-0812-01 «Техническое обслуживание и ремонт сельскохозяйственной техники» - Примерный учебный план № 124", href: "http://aggroeduo.site/5-04-0812-01-%D1%82%D0%B5%D1%85-%D0%BE%D0%B1%D1%81%D0%BB%D1%83%D0%B6-%D0%B8-%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82/", external: true }
        ]
      },
      {
        title: "Типовые учебные планы – старые специальности (для групп набора 2020/2021, 2021/2022, 2022/2023 учебного года – 2-4 курсы)",
        subItems: [
          { title: "Специальность 2-70 03 31 \"Строительство дорог и транспортных объектов\" - Типовой учебный план РБ ст. № 819 Д/тип.", href: "https://ripo.by/umosso/plan.html?k=2-70%2003%2031", external: true },
          { title: "Специальность 2-74 05 01 «Мелиорация и водное хозяйство» - Типовой учебный план по специальности РБ ст. № 1069 Д/тип.", href: "http://aggroeduo.site/2-74-05-01-%D0%BC%D0%B5%D0%BB%D0%B8%D0%BE%D1%80%D0%B0%D1%86%D0%B8%D1%8F/", external: true },
          { title: "Специальность 2-74 06 03 «Ремонтно-обслуживающее производство в сельском хозяйстве» - Типовой учебный план РБ ст. № 959 Д/тип.", href: "http://aggroeduo.site/2-74-06-03-%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%D0%BD%D0%BE-%D0%BE%D0%B1%D1%81%D0%BB%D1%83%D0%B6%D0%B8%D0%B2%D0%B0%D1%8E%D1%89%D0%B5%D0%B5/", external: true },
          { title: "Специальность 2-74 06 04 «Техническое обеспечение мелиоративных и водохозяйственных работ» - Типовой учебный план РБ ст. № 1070 Д/тип.-01", href: "http://aggroeduo.site/2-74-06-04-%D1%82%D0%BE-%D0%BC-%D0%B8-%D0%B2%D1%85%D1%80/", external: true }
        ]
      },
      { title: "Перечень действующих учебных программ по учебным предметам общеобразовательного компонента примерного учебного плана по специальности для учреждений образования, реализующих образовательные программы среднего специального образования для групп набора 2023/2024 учебного года", href: "/downloads/methodical/UPD_OSO_SSO_2023_2024.pdf" },
      { title: "Перечень действующих примерных учебных программ государственного компонента примерных учебных планов по специальностям, закрепленных за Министерством образования Республики Беларусь, для учреждений образования, реализующих образовательные программы среднего специального образования, для учебных групп набора 2023/2024 учебного года", href: "/downloads/methodical/DeystvuyshiePUChPlaniGosKompSso23_24.pdf" },
      { title: "Перечень действующих примерных учебных планов по специальностям, утвержденных Министерством образования Республики Беларусь, для учреждений образования, реализующих образовательные программы среднего специального образования, для учебных групп набора 2023/2024 учебного года", href: "/downloads/methodical/DeystvuyshiePUChPlaniSso23_24.pdf" },
      { title: "Положение об учебно-методическом комплексе (Постановление Министерства образования Республики Беларусь от 8 ноября 2022 г. № 427)", href: "/downloads/methodical/PoloshenieUMK.pdf" },
      { title: "О перечне учебных предметов, по которым проводятся итоговые испытания, видах, формах и сроках проведения итоговых испытаний в 2023/2024 учебном году", href: "/downloads/methodical/OperechneItogovieIsp.pdf" },
      { title: "Перечень действующих примерных учебных программ по учебным предметам, модулям, практике государственного компонента примерных учебных планов по специальностям направления образования «Сельское хозяйство»", href: "/downloads/methodical/MSCHPPrimerniePlaniiProgr.pdf" },
      { title: "Перечень действующих типовых учебных программ по учебным дисциплинам, практике профессионального компонента и типовых учебных планов по специальностям (направлениям специальностей), специализациям для учреждений образования, реализующих образовательные программы среднего специального образования по направлению образования «Сельское хозяйство»", href: "/downloads/methodical/MSCHPTipovie.pdf" },
      { title: "Разъяснения по применению указаний по ведению журнала учета учебных занятий в учреждениях образования, реализующих образовательные программы среднего специального образования", href: "/downloads/methodical/SSOUchSheurnali.pdf", important: true },
      { title: "Разъяснения по применению указаний по ведению журнала учета учебной и производственной практики в учреждениях образования, реализующих образовательные программы среднего специального образования", href: "/downloads/methodical/SSOShurnaliPrakrika.pdf", important: true }
    ]
  },
  {
    year: "2022/2023",
    items: [
      { title: "Письмо к началу 2022/2023 учебного года", href: "/downloads/methodical/KNachaku22-23.pdf" },
      { title: "Перечень действующих учебных программ по учебным дисциплинам общеобразовательного компонента учебных планов учреждений образования, реализующих образовательные программы среднего специального образования, на 2022/2023 учебный год", href: "/downloads/methodical/PerechenUPD_Obsheobr.pdf" },
      { title: "Перечень действующих учебных программ по учебным дисциплинам общеобразовательного компонента учебных планов, приемлемых для учреждения образования «Пинский государственный аграрно-технический колледж имени А.Е. Клещёва» на 2022/2023 учебный год", href: "/downloads/methodical/TipovieObr.pdf" },
      { title: "Перечень действующих типовых учебных программ по учебным дисциплинам профессионального компонента и практике типовых учебных планов по специальностям (направлениям специальностей), реализующих образовательные программы среднего специального образования, приемлемых для учреждения образования «Пинский государственный аграрно-технический колледж имени А.Е. Клещева» на 2022/2023 учебный год", href: "/downloads/methodical/TipovieProf.pdf" },
      { title: "Методические рекомендации по разработке учебно-программной документации образовательных программ среднего специального образования, обеспечивающих получение квалификации специалиста (рабочего) (ред.2021 года)", href: "/downloads/methodical/MetodichkaUPDSSO31082021.rar" },
      { title: "Методические указания по организации контроля и оценки результатов учебной деятельности учащихся по учебным предметам при освоении содержания образовательных программ общего среднего образования, применению норм оценки результатов учебной деятельности учащихся по учебным предметам", href: "/downloads/methodical/metodkontrotsenki2022.pdf" },
      { title: "Разъяснения по применению указаний по ведению журнала учебных занятий в учреждениях образования, реализующих образовательные программы среднего специального образования в очной форме получения образования", href: "/downloads/methodical/UcebnieZanutiy.pdf" },
      { title: "Разъяснения по применению указаний по ведению журнала учета учебной и производственной практики в учреждениях образования, реализующих образовательные программы среднего специального образования в очной форме получения образования", href: "/downloads/methodical/Praktika.pdf" }
    ]
  },
  {
    year: "2021/2022",
    items: [
      { title: "Инструктивно-методическое письмо Министерства образования Республики Беларусь «Об организации в 2021/2022 учебном году образовательного процесса при изучении учебных предметов и проведении факультативных занятий при реализации образовательных программ общего среднего образования»", href: "/downloads/methodical/IMP-2021-2022.pdf" },
      { title: "Письмо к началу 2021/2022 учебного года", href: "/downloads/methodical/PismoPTOiSSO2021-2022.pdf" },
      { title: "Перечень действующих типовых учебных программ по учебным дисциплинам для учреждений среднего специального образования и типовых учебных планов по специальностям (направлениям специальностей), специализациям, закрепленным за Министерством сельского хозяйства и продовольствия Республики Беларусь на 2021/2022 учебный год", href: "/downloads/methodical/PerechenDTUP21-22.pdf" },
      { title: "Перечень действующих учебных программ по учебным дисциплинам общеобразовательного компонента учебных планов учреждений образования, реализующих образовательные программы среднего специального образования, на 2021/2022 учебный год", href: "/downloads/methodical/PerechenUPD_obsheobr.pdf" },
      { title: "Перечень действующих типовых учебных планов по специальностям (направлениям специальностей), специализациям, утвержденных Министерством образования Республики Беларусь, для учреждений образования, реализующих образовательные программы среднего специального образования, для учебных групп набора 2021/2022 учебного года", href: "/downloads/methodical/PerechenUPDMSXProd2021-2022.pdf" },
      { title: "ПЕРЕЧЕНЬ ДЕЙСТВУЮЩИХ ТИПОВЫХ УЧЕБНЫХ ПРОГРАММ ПО УЧЕБНЫМ ДИСЦИПЛИНАМ ПРОФЕССИОНАЛЬНОГО КОМПОНЕНТА И ПРАКТИКЕ ТИПОВЫХ УЧЕБНЫХ ПЛАНОВ ПО СПЕЦИАЛЬНОСТЯМ (НАПРАВЛЕНИЯМ СПЕЦИАЛЬНОСТЕЙ), ЗАКРЕПЛЕННЫХ ЗА МИНИСТЕРСТВОМ ОБРАЗОВАНИЯ РЕСПУБЛИКИ БЕЛАРУСЬ", href: "/downloads/methodical/PerDUP21-22.pdf" },
      { title: "РАЗЪЯСНЕНИЯ ПО ПРИМЕНЕНИЮ УКАЗАНИЙ ПО ВЕДЕНИЮ ЖУРНАЛА УЧЕТА УЧЕБНОЙ И ПРОИЗВОДСТВЕННОЙ ПРАКТИКИ В УЧРЕЖДЕНИЯХ ОБРАЗОВАНИЯ, РЕАЛИЗУЮЩИХ ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ СРЕДНЕГО СПЕЦИАЛЬНОГО ОБРАЗОВАНИЯ", href: "/downloads/methodical/zapolnenie_shurnalov.zip" },
      { title: "Презентация. Разработка учебно-планирующей документации.", href: "/downloads/methodical/RazrabotkaUPD2021.pptx" }
    ]
  },
  {
    year: "2020/2021",
    items: [
      { title: "Методические рекомендации по организации образовательного процесса в учреждениях образования в условиях распространения инфекции COVID-19", href: "/downloads/methodical/MZ_RB_20202021.pdf" },
      { title: "Письмо к началу учебного года 2020/2021", href: "/downloads/methodical/PismoKnachaku20202021.pdf" },
      { title: "Инструктивно-методическое письмо «Особенности организации социальной, воспитательной и идеологической работы в учреждениях общего среднего образования в 2020/2021 учебном году»", href: "/downloads/methodical/IMS2020_2021.pdf" }
    ]
  }
];

const SchoolYearStartMaterials: React.FC = () => {
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
            <span className="text-accent-500 font-bold">Материалы к началу учебного года</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Материалы к началу учебного года
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
                  const isActive = link.href.includes('materialy-k-nachalu-uchebnogo-goda');
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
              
              <div className="flex justify-end gap-4 mb-6 print:hidden">
                <button className="flex items-center text-xs text-slate-400 hover:text-primary-900 gap-1 transition-colors" onClick={() => window.print()}>
                  <Printer className="w-4 h-4" /> Печать
                </button>
              </div>

              {/* Materials Sections */}
              <div className="space-y-12">
                {materials.map((section, index) => (
                  <div key={index} className="relative">
                    <h2 className="text-2xl font-bold text-primary-900 mb-6 pb-4 border-b border-slate-200 flex items-center gap-3">
                      <span className="bg-primary-100 text-primary-800 px-4 py-1.5 rounded-full text-lg font-bold">
                        {section.year}
                      </span>
                      учебный год
                    </h2>
                    
                    <div className="space-y-4 pl-2 md:pl-6 border-l-2 border-primary-100">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all group">
                          {item.subItems ? (
                            <div>
                              <h4 className="font-bold text-slate-800 mb-4">{item.title}</h4>
                              <ul className="space-y-3 pl-4">
                                {item.subItems.map((sub, sIdx) => (
                                  <li key={sIdx}>
                                    <a href={sub.href} target={sub.external ? "_blank" : "_self"} rel={sub.external ? "noopener noreferrer" : ""} className="flex items-start gap-3 text-slate-700 hover:text-primary-600 transition-colors group/link">
                                      {sub.external ? <LinkIcon className="w-4 h-4 mt-0.5 text-slate-400 shrink-0 group-hover/link:text-primary-500" /> : <FileText className="w-4 h-4 mt-0.5 text-slate-400 shrink-0 group-hover/link:text-primary-500" />}
                                      <span className="text-[15px] leading-snug font-medium">{sub.title}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <div className="flex flex-col md:flex-row md:items-start gap-4">
                              <a href={item.href} target={item.external ? "_blank" : "_self"} rel={item.external ? "noopener noreferrer" : ""} className={`flex-1 flex items-start gap-3 transition-colors ${item.important ? 'text-accent-600 hover:text-accent-700 font-bold' : 'text-primary-700 hover:text-primary-900 font-medium'}`}>
                                {item.external ? <LinkIcon className={`w-5 h-5 mt-0.5 shrink-0 ${item.important ? 'text-accent-500' : 'text-primary-400'}`} /> : <FileText className={`w-5 h-5 mt-0.5 shrink-0 ${item.important ? 'text-accent-500' : 'text-primary-400'}`} />}
                                <span className="text-[15px] leading-relaxed">{item.title}</span>
                              </a>
                              {item.pdfLink && (
                                <a href={item.pdfLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase rounded transition-colors whitespace-nowrap mt-2 md:mt-0">
                                  <Download className="w-3.5 h-3.5" /> Открыть PDF
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </main>
        </div>
      </div>
      
      {/* PARTNERS BOTTOM */}
    </div>
  );
};

export default SchoolYearStartMaterials;
