import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { BookOpen, Clock, Users, Target, BookMarked, Image as ImageIcon, Link as LinkIcon, Newspaper, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// Simple Lightbox component for the gallery
const Gallery: React.FC = () => {
  const images = [
    '/images/ObrProcess/Biblioteka/photo/komnati/30052023_12_45_09.jpg',
    '/images/ObrProcess/Biblioteka/photo/komnati/30052023_12_45_17.jpg',
    '/images/ObrProcess/Biblioteka/photo/komnati/30052023_12_45_52.jpg'
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
        <ImageIcon className="w-6 h-6 text-sky-600" />
        Фотогалерея
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-slate-200 group relative aspect-video"
            onClick={() => setSelectedImage(src)}
          >
            <img 
              src={src} 
              alt={`Фото библиотеки ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="bg-white/90 text-primary-900 px-4 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                Увеличить
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Увеличенное фото" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const LiteratureItem = ({ number, title, author, description }: { number: string, title: string, author: string, description: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-sky-50 transition-colors text-left"
      >
        <div className="flex gap-4 items-center">
          <span className="w-8 h-8 flex items-center justify-center bg-sky-100 text-sky-700 font-bold rounded-full shrink-0">
            {number}
          </span>
          <div>
            <h4 className="font-bold text-slate-800 line-clamp-2 md:line-clamp-none">{title}</h4>
            <p className="text-sm text-slate-500">{author}</p>
          </div>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
      </button>
      <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-600 text-justify">{description}</p>
      </div>
    </div>
  );
};

const Library: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-8">
      
      {/* Intro section with quote */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider text-white">Образовательный процесс</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Библиотека</h2>
            <p className="text-lg text-emerald-50 max-w-2xl leading-relaxed">
              Культурный, информационный и образовательно-воспитательный центр колледжа, призванный содействовать процессу обучения и воспитания учащихся.
            </p>
          </div>
          <div className="w-full md:w-1/3 bg-black/20 p-6 rounded-2xl backdrop-blur-md border border-white/10 italic">
            <p className="text-lg leading-relaxed">
              «Книги, как люди: одни, едва прикоснувшись к тебе, исчезают навсегда, другие, встретившись случайно, входят в твою жизнь и остаются в ней.»
            </p>
            <p className="mt-4 font-bold text-right text-emerald-200">— И. Мележ</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Schedule & Staff */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <Clock className="w-32 h-32" />
          </div>
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <Clock className="w-6 h-6 text-sky-600" />
            График работы
          </h3>
          
          <div className="space-y-4 text-lg">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-slate-600">Понедельник - пятница</span>
              <span className="font-bold text-slate-800">8:15 - 17:15</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-slate-600">Обед</span>
              <span className="font-bold text-slate-800">13:00 - 14:00</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-slate-600">3-я пятница месяца</span>
              <span className="font-bold text-amber-600">Санитарный день</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Суббота, воскресенье</span>
              <span className="font-bold text-rose-600">Выходной</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-primary-900 mt-10 mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-sky-600" />
            Сотрудники
          </h3>
          <div className="space-y-3">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-sm text-slate-500 mb-1">Заведующий библиотекой</p>
              <p className="font-bold text-lg text-slate-800">Крайниченко Светлана Викторовна</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="text-sm text-slate-500 mb-1">Библиотекарь</p>
              <p className="font-bold text-lg text-slate-800">Кохнюк Наталья Викторовна</p>
            </div>
          </div>
        </div>

        {/* Structure & Info */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <BookMarked className="w-32 h-32" />
          </div>
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-sky-600" />
            Структура и фонд
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-sky-50 p-4 rounded-xl border border-sky-100 text-center">
              <p className="text-3xl font-black text-sky-600 mb-1">38 733</p>
              <p className="text-sm font-medium text-sky-900">Экземпляров книг</p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-center">
              <p className="text-3xl font-black text-emerald-600 mb-1">16</p>
              <p className="text-sm font-medium text-emerald-900">Периодических изданий</p>
            </div>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 text-slate-700 font-medium">
              <div className="w-2 h-2 rounded-full bg-sky-500"></div> Абонемент
            </li>
            <li className="flex items-center gap-3 text-slate-700 font-medium">
              <div className="w-2 h-2 rounded-full bg-sky-500"></div> 1 читальный зал
            </li>
            <li className="flex items-center gap-3 text-slate-700 font-medium">
              <div className="w-2 h-2 rounded-full bg-sky-500"></div> Книгохранилище
            </li>
          </ul>
          <p className="text-justify text-slate-600 text-sm leading-relaxed">
            Книжный фонд библиотеки универсален, постоянно пополняется и включает не только учебную литературу, но и книги по мировой истории, истории нашего государства, экономике, здоровому образу жизни, культуре. Имеется широкий выбор педагогической и художественной литературы, большое разнообразие профессиональной литературы по строительству, поварскому делу, сварочным и слесарным работам, литературе по тракторам и машинам.
          </p>
        </div>
      </div>

      {/* Goals & Tasks */}
      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
        <h3 className="text-2xl font-bold text-primary-900 mb-8 flex items-center gap-3 justify-center text-center">
          <Target className="w-8 h-8 text-sky-600" />
          Направления и задачи работы
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-lg text-emerald-700 mb-4 border-b border-emerald-200 pb-2">Основные цели:</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">•</span>
                <span className="text-slate-700">создание благоприятных условий для проведения учебно-воспитательного процесса колледжа;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">•</span>
                <span className="text-slate-700">содействие трудовому, общеобразовательному, морально-эстетическому, экологическому и идеологическому воспитанию учащихся;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">•</span>
                <span className="text-slate-700">формирование культуры и национального самосознания, способностей к творческим делам, подготовка к жизни и адаптации в обществе;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">•</span>
                <span className="text-slate-700">воспитание глубокого уважения к книге как источнику знаний.</span>
              </li>
            </ul>

            <h4 className="font-bold text-lg text-sky-700 mt-8 mb-4 border-b border-sky-200 pb-2">Задачи:</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-sky-500 mt-1">•</span>
                <span className="text-slate-700">обеспечение учебно-воспитательного процесса и самообразования путём библиотечно-библиографического и информационного обслуживания;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-500 mt-1">•</span>
                <span className="text-slate-700">совершенствование традиционных и освоение новых технологий в работе библиотеки;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-500 mt-1">•</span>
                <span className="text-slate-700">сбор, накопление и обработка информации и доведение её до читателей.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-amber-700 mb-4 border-b border-amber-200 pb-2">Основные направления:</h4>
            <ul className="space-y-3 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                Работу библиотеки строить в тесной связи с общественно-политической, экономической и культурной жизнью Республики Беларусь.
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                Совершенствовать формы и методы пропаганды книги и индивидуальной работы, повысить их эффективность. Внедрять новые формы и методы пропаганды книги.
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                Совершенствовать формы и методы пропаганды справочно-библиографического аппарата и информационное обслуживание абонентов.
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                Постоянно воздействовать на читателей, считать главным в их воспитании – индивидуальный подход.
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                Возрождение страны через возрождение семьи (духовно-нравственные основы семьи, культура труда, гендерная культура, культура здорового образа жизни).
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                Оперативное и полное удовлетворение читательских запросов. Тесная связь всей работы библиотеки с жизнью колледжа, учебных групп.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recommended Literature */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-primary-900 mb-2 flex items-center gap-3">
          <BookMarked className="w-6 h-6 text-sky-600" />
          Рекомендательный список литературы
        </h3>
        <p className="text-slate-500 mb-8">для преподавателей и кураторов учебных групп</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LiteratureItem 
            number="1"
            title="Формы воспитательной работы с учащейся молодежью: методика подготовки и проведения"
            author="Завадская Ж.Е."
            description="В пособии, опираясь на личный опыт, а также опыт педагогов, авторы раскрывают методику подготовки и проведения свыше 150 известных, а также мало используемых практиками форм воспитательной работы с молодежью. (Минск: Современная школа, 2010. – 352 с.)"
          />
          <LiteratureItem 
            number="2"
            title="Педагогическое взаимодействие с семьей"
            author="Осипова М.П."
            description="В пособии раскрыта сущность педагогического взаимодействия с семьей, его структура, типы, функции. Обоснованы основные направления взаимодействия классного куратора с семьей, научно-методическое обеспечение данного процесса. (Минск: ИВЦ Минфина, 2015. – 192 с.)"
          />
          <LiteratureItem 
            number="3"
            title="Психопрофилактическая и психокоррекционная работа с учащимися девиантного поведения"
            author="Буйневич Т.В."
            description="Издание призвано помочь специалистам в составлении индивидуальной психопрофилактической программы коррекционного воздействия на учащегося девиантного поведения, а также на его семью, друзей, круг общения. (Минск: РИПО, 2005. – 88 с.)"
          />
          <LiteratureItem 
            number="4"
            title="Повышение педагогического мастерства куратора учебной группы"
            author="Сб. метод. материалов"
            description="В материалах сборника раскрыты основные направления воспитательной работы куратора, дается перечень нормативного правового и методического обеспечения воспитательной работы с учащимися учебной группы. (Минск: РИПО, 2014. – 123 с.)"
          />
          <LiteratureItem 
            number="5"
            title="Организация работы по профилактике противоправного поведения среди учащихся..."
            author="Сезень Т.А."
            description="В методических рекомендациях пособия рассматриваются роль и функции субъектов воспитательного процесса в профилактике противоправного поведения учащихся, предлагается проект примерного положения совете профилактики правонарушений. (Минск: РИПО, 2008. – 56 с.)"
          />
          <LiteratureItem 
            number="6"
            title="Ученическое самоуправление: от теории к практике"
            author="Н.К. Катович и др."
            description="В пособии рассмотрена история становления и развития ученического самоуправления. Представлена модель ученического самоуправления, структура его организации на уровне учреждения и класса (группы), содержание и методика деятельности ученического самоуправления. (Минск: Национальный институт образования, 2021. – 224 с.)"
          />
          <LiteratureItem 
            number="7"
            title="Как помочь подростку избежать проблем. Психологические аспекты профилактики химической зависимости"
            author="Хриптович В.А."
            description="В пособии рассмотрены психологические проблемы учащихся подросткового возраста и научно-практические подходы к их решению. Просвещение родителей, повышение уровня их психолого-педагогической компетентности позволят предупредить формирование у подростков девиантных форм поведения. (Минск: Национальный институт образования, 2022. – 296 с.)"
          />
          <LiteratureItem 
            number="8"
            title="Формирование бесконфликтной образовательной среды"
            author="Погодина Е.К."
            description="В пособии представлены материалы по прогнозированию, диагностике, профилактике и регулированию конфликтного взаимодействия участников образовательного процесса в условиях учреждения образования. (Минск: Национальный институт образования, 2021. – 184 с.)"
          />
        </div>
      </div>

      {/* External Links & News */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-slate-800 text-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <LinkIcon className="w-6 h-6 text-sky-400" />
            Полезные ссылки
          </h3>
          <div className="space-y-4">
            <a 
              href="https://drive.google.com/file/d/1pre4aOQxMKB0iBiNCdQo2Q1HOzQY5Q6m/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-4 transition-colors group"
            >
              <h4 className="font-bold text-sky-300 group-hover:text-sky-200">ЛИТЕРАТУРНЫЙ КАЛЕНДАРЬ</h4>
              <p className="text-slate-300 text-sm mt-1">Юбилеи - 2023. Писатели</p>
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1m3bzSaFSeXxlmkZfjOKPiRneVJhJUjZV/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-4 transition-colors group"
            >
              <h4 className="font-bold text-sky-300 group-hover:text-sky-200">Календарь знаменательных и памятных дат</h4>
            </a>

            <a 
              href="/bis.nlb.by/ru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-4 transition-colors group"
            >
              <h4 className="font-bold text-sky-300 group-hover:text-sky-200">Онлайн - энциклопедия</h4>
              <p className="text-slate-300 text-sm mt-1">"Беларусь в лицах и событиях"</p>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <Newspaper className="w-6 h-6 text-orange-500" />
            Новости библиотеки
          </h3>
          <div className="space-y-4">
            <Link to="/obrazovatelniy-process/biblioteka/8-novosti/1642-informatsionno-poznavatelnyj-chas-nezabyvaemoe-otchuzhdenie" className="flex items-start gap-3 group">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 group-hover:text-orange-600 font-medium transition-colors">Информационно-познавательный час «Незабываемое отчуждение»</span>
            </Link>
            <Link to="/obrazovatelniy-process/biblioteka/8-novosti/945-konkurs-chtetsov-byt-zhenshchinoj-velikoe-iskusstvo" className="flex items-start gap-3 group">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 group-hover:text-orange-600 font-medium transition-colors">Конкурс чтецов «Быть женщиной великое искусство»</span>
            </Link>
            <Link to="/obrazovatelniy-process/biblioteka/8-novosti/823-literaturnyj-chas-protiv-spid-khudozhestvennym-slovom" className="flex items-start gap-3 group">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 group-hover:text-orange-600 font-medium transition-colors">Литературный час "Против СПИД- художественным словом"</span>
            </Link>
            <Link to="/obrazovatelniy-process/biblioteka/8-novosti/772-vstrecha-tvorcheskikh-kollektivov-unitarnogo-predpriyatiya-elkis" className="flex items-start gap-3 group">
              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0"></div>
              <span className="text-slate-700 group-hover:text-orange-600 font-medium transition-colors">Встреча творческих коллективов унитарного предприятия «ЭлКис»</span>
            </Link>
          </div>
          <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-100 text-center">
            <p className="font-bold text-orange-800 italic">
              Уважаемые читатели, ждем вас с предложениями и пожеланиями в нашей библиотеке!
            </p>
          </div>
        </div>

      </div>

      <Gallery />

    </div>
  );
};

export default Library;
