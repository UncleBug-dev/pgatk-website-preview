import React from 'react';
import { Book, ShieldAlert, Link as LinkIcon, FileText, AlertTriangle, PlayCircle, ExternalLink, Gavel, Shield, Info, Link2 } from 'lucide-react';

const LegalCulture: React.FC = () => {
  const documents = [
    { title: "АДМИНИСТРАТИВНАЯ ОТВЕТСТВЕННОСТЬ", href: "/images/Ideologiy/ZakonIPodrostok/AdministrativnayOtvetstvennost.pdf" },
    { title: "ОБ ОСНОВАХ СИСТЕМЫ ПРОФИЛАКТИКИ БЕЗНАДЗОРНОСТИ И ПРАВОНАРУШЕНИЙ НЕСОВЕРШЕННОЛЕТНИХ", href: "/images/Ideologiy/ZakonIPodrostok/BeznadzornostIPravonarusheniy.pdf" },
    { title: "УГОЛОВНЫЙ КОДЕКС РЕСПУБЛИКИ БЕЛАРУСЬ. УСЛОВИЯ УГОЛОВНОЙ ОТВЕТСТВЕННОСТИ", href: "/images/Ideologiy/ZakonIPodrostok/UgolovniyKodeks.pdf" },
  ];

  const links = [
    { title: "ОФИЦИАЛЬНЫЙ ИНТЕРНЕТ ПОРТАЛ ПРЕЗИДЕНТА РЕСПУБЛИКИ БЕЛАРУСЬ", href: "http://president.gov.by/ru/" },
    { title: "МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ РЕСПУБЛИКИ БЕЛАРУСЬ", href: "http://mvd.gov.by/ru/main.aspx?guid=12941" },
    { title: "МИНИСТЕРСТВО ОБРАЗОВАНИЯ РЕСПУБЛИКИ БЕЛАРУСЬ", href: "http://edu.gov.by/" },
    { title: "НАЦИОНАЛЬНЫЙ ИНТЕРНЕТ ПОРТАЛ РЕСПУБЛИКИ БЕЛАРУСЬ", href: "http://pravo.by/" },
    { title: "ДЕТСКИЙ ПРАВОВОЙ САЙТ РЕСПУБЛИКИ БЕЛАРУСЬ", href: "http://mir.pravo.by/" },
    { title: "НАЦИОНАЛЬНЫЙ ЦЕНТР ПРАВОВОЙ ИНФОРМАЦИИ", href: "http://etalonline.by/?page=action" },
  ];

  const articles = [
    {
      num: "Статья 11.1",
      title: "Мелкое хищение",
      text: "Мелкое хищение имущества путем кражи, мошенничества, злоупотребления служебными полномочиями, присвоения или растраты, хищения путем использования компьютерной техники, а равно попытка такого хищения - влекут наложение штрафа в размере от 2 до 30 базовых величин, или общественные работы, или административный арест."
    },
    {
      num: "Статья 11.2",
      title: "Причинение имущественного ущерба",
      text: "Причинение ущерба в незначительном размере посредством извлечения имущественных выгод в результате обмана, злоупотребления доверием или путем модификации компьютерной информации при отсутствии признаков мелкого хищения - влечет наложение штрафа в размере до 30 базовых величин."
    },
    {
      num: "Статья 11.4",
      title: "Присвоение найденного имущества",
      text: "Присвоение найденного заведомо чужого имущества или клада - влечет наложение штрафа в размере до 5 базовых величин."
    },
    {
      num: "Статья 17.6",
      title: "Незаконные действия с некурительными табачными изделиями (снюс, насвай и др.)",
      text: "Приобретение, хранение некурительных табачных изделий в количестве до 50 г - влекут штраф до 2 базовых величин. Перевозка, пересылка, приобретение, хранение свыше 50 г, а равно реализация - влекут штраф от 10 до 20 базовых величин, либо общественные работы, либо административный арест с конфискацией. Изготовление свыше 50 г - штраф от 20 до 30 базовых величин, либо общественные работы, либо административный арест."
    },
    {
      num: "Статья 18.14",
      title: "Управление транспортным средством без права управления",
      text: "Управление транспортным средством лицом, не имеющим права управления, а равно передача управления - влекут штраф от 5 до 20 базовых величин. Повторно в течение года - от 20 до 50 базовых величин, или общественные работы, или административный арест."
    },
    {
      num: "Статья 18.15",
      title: "Управление транспортным средством в состоянии опьянения",
      text: "До 0,8 промилле включительно - штраф 100 базовых величин с лишением прав на 3 года. Свыше 0,8 промилле или наркотическое опьянение, либо отказ от освидетельствования - штраф 200 базовых величин с лишением прав на 5 лет."
    },
    {
      num: "Статья 19.1",
      title: "Мелкое хулиганство",
      text: "Оскорбительное приставание к гражданам и другие умышленные действия, нарушающие общественный порядок - влекут штраф от 2 до 30 базовых величин, или общественные работы, или административный арест."
    },
    {
      num: "Статья 19.3",
      title: "Распитие алкогольных напитков и потребление наркотиков",
      text: "Распитие алкогольных напитков в общественных местах либо появление в состоянии алкогольного опьянения - влекут штраф до 8 базовых величин. Повторно - штраф от 2 до 15 базовых величин или арест. Потребление наркотиков, либо появление в состоянии наркотического опьянения, отказ от освидетельствования - влекут штраф от 5 до 15 базовых величин."
    },
    {
      num: "Статья 19.7",
      title: "Порнографические материалы",
      text: "Хранение с целью распространения или рекламирования либо распространение, рекламирование порнографических материалов - влекут наложение штрафа в размере от 2 до 30 базовых величин."
    },
    {
      num: "Статья 19.9",
      title: "Курение в запрещенных местах",
      text: "Курение (потребление) табачных изделий, использование электронных систем курения, систем для потребления табака в местах, где они запрещены - влекут наложение штрафа в размере до 4 базовых величин."
    },
    {
      num: "Статья 19.10",
      title: "Нацистская символика или атрибутика",
      text: "Пропаганда, публичное демонстрирование, изготовление, распространение нацистской символики или атрибутики, а равно хранение в целях распространения - влекут штраф до 10 базовых величин (повторно от 10 до 20) с конфискацией, или общественные работы, или административный арест."
    },
    {
      num: "Статья 24.23",
      title: "Нарушение порядка массовых мероприятий",
      text: "Нарушение порядка проведения массового мероприятия участником - штраф до 100 базовых величин, или общественные работы, или арест. За организацию - от 20 до 150 базовых величин, или общественные работы, или арест. Повторно - штраф от 20 до 200 базовых величин или арест."
    }
  ];

  const videos = [
    "Yd1aI8XQOnU", "TZeASXpcNJY", "3oHJLEEvYWs", "CzWij6-y8ck", "upzt60vwcgE", "akswjN9RyQM"
  ];

  const galleryImages = [
    "/images/Ideologiy/PravovauKultura/pamytka_narkomaniy_500x353-equal.webp",
    "/images/Ideologiy/PravovauKultura/upotreblenie_500x379-equal.webp",
    "/images/1Novosti/2022/iyl/StopNarkotik/SrtopNarkotik.webp",
    "/images/1Novosti/2022/iyl/StopNarkotik/photo_2022-02-07_18-33-49.webp",
    "/images/Ideologiy/STOPNARKOTIK/Moladz/1.webp",
    "/images/Ideologiy/STOPNARKOTIK/Moladz/2.webp",
    "/images/Ideologiy/STOPNARKOTIK/Moladz/4.webp",
    "/images/Ideologiy/STOPNARKOTIK/Moladz/5.webp",
    "/images/Ideologiy/STOPNARKOTIK/Moladz/6.webp",
    "/images/Ideologiy/STOPNARKOTIK/Moladz/7.webp",
    "/images/Ideologiy/STOPNARKOTIK/Moladz/8.webp",
    "/images/Ideologiy/STOPNARKOTIK/Moladz/9.webp",
    "/images/Ideologiy/STOPNARKOTIK/Moladz/10.webp",
    "/images/Ideologiy/STOPNARKOTIK/Moladz/11.webp"
  ];

  const extraLinks = [
    { title: "Чат-бот Стоп Экстремизм позволит проверить любой ресурс", href: "/pravovaya-kultura/29-ob-yavleniya/1516-chat-bot-stop-ekstremizm-pozvolit-proverit-lyuboj-resurs-2" },
    { title: "Профилактика экстремизма", href: "https://klcrb.by/docs/pravo/profilaktika_extremism.pdf" },
    { title: "Противодействие торговле людьми", href: "https://mvd.gov.by/ru/page/guniptl/ptl" },
    { title: "ИИ будет вычислять, сколько человек едут на самокате", href: "/pravovaya-kultura/8-novosti/1627-ii-budet-vychislyat-skolko-chelovek-edut-na-samokate" },
  ];

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-12">
      
      {/* Hero Banner - Constitution */}
      <a 
        href="https://pravo.by/pravovaya-informatsiya/normativnye-dokumenty/konstitutsiya-respubliki-belarus/"
        target="_blank"
        rel="noopener noreferrer"
        className="block group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-200 bg-gradient-to-br from-green-800 to-green-900"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/40 to-transparent"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-green-100 font-bold tracking-wider uppercase text-sm mb-6 border border-white/30 backdrop-blur-sm">
              Официальный документ
            </span>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex items-center gap-4 leading-tight mb-4">
              Конституция Республики Беларусь
              <ExternalLink className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
            </h2>
            <p className="text-green-100 text-lg md:text-xl opacity-90 max-w-xl">
              Основной закон нашего государства, имеющий высшую юридическую силу.
            </p>
          </div>
          
          <div className="w-48 md:w-64 shrink-0 perspective-1000">
            <div className="transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-y-[-10deg] group-hover:rotate-x-[5deg] shadow-2xl rounded-lg overflow-hidden border-2 border-white/10">
              <img 
                src="/images/Ideologiy/77pluxkh8a8pic3j19tam54xkoxiern6.webp" 
                alt="Конституция Республики Беларусь" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="533" viewBox="0 0 400 533"><rect width="400" height="533" fill="%23f1f5f9"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%2364748b">Нет фото</text></svg>';
                }}
              />
            </div>
          </div>
        </div>
      </a>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* PDFs List */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <ShieldAlert className="w-6 h-6 text-rose-500" />
            Основы профилактики и ответственности
          </h3>
          <div className="space-y-4">
            {documents.map((doc, idx) => (
              <a 
                key={idx}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-white rounded-xl hover:bg-rose-50 hover:border-rose-200 transition-all border border-transparent shadow-sm group"
              >
                <FileText className="w-6 h-6 text-slate-400 group-hover:text-rose-500 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-700 group-hover:text-rose-700">{doc.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Links List */}
        <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-3">
            <LinkIcon className="w-6 h-6 text-blue-600" />
            Интернет-ресурсы правовой информации
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {links.map((link, idx) => (
              <a 
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 bg-white rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm border border-transparent group"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-white shrink-0 mt-1.5"></div>
                <span className="text-xs font-bold text-slate-600 group-hover:text-white leading-snug">{link.title}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Article 328 Block */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <AlertTriangle className="w-64 h-64" />
        </div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-400 font-bold text-sm mb-6">
            <AlertTriangle className="w-4 h-4" />
            ВНИМАНИЕ! СТРОГАЯ ОТВЕТСТВЕННОСТЬ!
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Статья 328. Незаконный оборот наркотических средств
          </h3>
          
          <div className="space-y-6 text-slate-300">
            <p className="flex gap-4">
              <span className="text-rose-500 font-bold text-xl shrink-0">1.</span>
              <span>Незаконные без цели сбыта изготовление, переработка, приобретение, хранение, перевозка или пересылка - <strong className="text-white">наказываются ограничением свободы на срок до 5 лет или лишением свободы на срок от 2 до 5 лет.</strong></span>
            </p>
            <p className="flex gap-4">
              <span className="text-rose-500 font-bold text-xl shrink-0">2.</span>
              <span>Незаконные с целью сбыта - <strong className="text-white">наказываются лишением свободы на срок от 5 до 8 лет.</strong></span>
            </p>
            <p className="flex gap-4">
              <span className="text-rose-500 font-bold text-xl shrink-0">3.</span>
              <span>Совершенные группой лиц, либо на территории учреждения образования - <strong className="text-white">наказываются лишением свободы на срок от 8 до 15 лет.</strong></span>
            </p>
            <p className="flex gap-4">
              <span className="text-rose-500 font-bold text-xl shrink-0">4.</span>
              <span>Организованной группой либо в лаборатории - <strong className="text-white">наказываются лишением свободы на срок от 10 до 20 лет.</strong></span>
            </p>
            <p className="flex gap-4">
              <span className="text-rose-500 font-bold text-xl shrink-0">5.</span>
              <span>Действия, повлекшие по неосторожности смерть человека - <strong className="text-white">наказываются лишением свободы на срок от 12 до 25 лет.</strong></span>
            </p>
            <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-slate-700 text-sm">
              <strong className="text-amber-400 block mb-2">Примечание:</strong>
              Лицо, добровольно сдавшее наркотические средства и активно способствовавшее раскрытию преступления, освобождается от уголовной ответственности за данное преступление.
            </div>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-primary-900 flex items-center gap-3">
          <PlayCircle className="w-8 h-8 text-rose-600" />
          Скажи НЕТ наркотикам
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((id) => (
            <div key={id} className="rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-video bg-black">
              <iframe 
                src={`https://www.youtube.com/embed/${id}?rel=0&wmode=transparent`} 
                title="YouTube video"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* Posters Gallery */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-primary-900 flex items-center gap-3">
          <Book className="w-8 h-8 text-blue-600" />
          Памятки и плакаты
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {galleryImages.map((src, idx) => (
            <a 
              key={idx} 
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow aspect-[3/4] bg-slate-50"
            >
              <img 
                src={src} 
                alt="Памятка" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="533" viewBox="0 0 400 533"><rect width="400" height="533" fill="%23f1f5f9"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%2364748b">Нет фото</text></svg>';
                }}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Code of Administrative Offences */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
            <Gavel className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary-900">Выдержки из кодекса</h3>
            <p className="text-slate-500">Об административных правонарушениях</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((art, idx) => (
            <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
              <div className="text-indigo-600 font-bold text-sm mb-1">{art.num}</div>
              <h4 className="font-bold text-slate-800 mb-3 leading-tight">{art.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">{art.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Weapons Section */}
      <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row gap-8">
        <div className="flex-1 z-10 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white font-bold text-sm mb-6">
            <Shield className="w-4 h-4" />
            ВНИМАНИЕ!
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            НЕТ - НЕЗАКОННОМУ ОРУЖИЮ
          </h3>
          <p className="text-red-100 mb-4 leading-relaxed text-justify">
            За совершение незаконных действий в отношении оружия предусмотрена как административная, так и уголовная ответственность. За незаконное газовое, пневматическое или холодное оружие - штраф до 10 базовых величин с конфискацией (ст. 24.29). За гладкоствольное - штраф от 10 до 30 базовых (ст. 24.46).
          </p>
          <p className="text-red-100 mb-4 leading-relaxed text-justify">
            Незаконное изготовление, приобретение, передача во владение, сбыт, хранение или перевозка огнестрельного оружия и взрывчатки (ст. 295 УК РБ) - <strong className="text-white">наказывается лишением свободы на срок до 12 лет!</strong>
          </p>
          <div className="mt-6 p-4 bg-red-950/50 rounded-xl border border-red-700 text-sm">
            Лица, добровольно сдавшие незаконное оружие, боеприпасы и взрывчатые вещества, освобождаются от административной и уголовной ответственности.
          </div>
        </div>
        <div className="w-full md:w-1/3 shrink-0 z-10 relative">
          <img 
            src="/images/1Novosti/2024/Janvar/SdachaOrushiy/ODobrovSdOr.webp" 
            alt="Сдача оружия" 
            className="w-full h-full object-cover rounded-2xl shadow-lg border border-red-700/50"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1595590424283-b8f1784cb2c8?auto=format&fit=crop&q=80&w=400';
            }}
          />
        </div>
      </div>

      {/* Additional important info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Important Links */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <Link2 className="w-6 h-6 text-indigo-500" />
            Важные материалы
          </h3>
          <div className="space-y-3">
            {extraLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-3 p-4 bg-white rounded-xl hover:bg-indigo-50 hover:border-indigo-200 transition-all shadow-sm border border-transparent group"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:bg-indigo-600 shrink-0 mt-1.5"></div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-700">{link.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Lotteries */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
          <div className="h-48 overflow-hidden bg-slate-100 relative">
            <img 
              src="/images/1Novosti/2026/Fevral/Ukaz.webp" 
              alt="Указ" 
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="p-8 flex-1">
            <div className="flex items-center gap-2 mb-4 text-rose-600 font-bold">
              <Info className="w-5 h-5" />
              <span>Важное изменение в законе</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed text-justify mb-4">
              Указом устанавливается запрет на участие в электронных мгновенных лотереях лиц, не достигших 18 лет, и тех, кто ограничен в посещении игорных заведений, виртуальных игорных заведений и участии в азартных играх.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
              Определен механизм отказа банками названным лицам в проведении операций, связанных с оплатой лотерейных ставок, а также вводится требование о пополнении игрового счета участника лотереи только в безналичной форме.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default LegalCulture;
