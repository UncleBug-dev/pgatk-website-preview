import React, { useState } from 'react';
import { Users, Info, Flag, Building2, MapPin, Phone, Mail, Instagram, ExternalLink, Users as UsersIcon } from 'lucide-react';
import { Lightbox } from '../components/Lightbox';

const BelayaRus: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const imageNumbers = [1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const images = imageNumbers.map(i => `/images/1Novosti/2025/9Sentybr/BelayRus/${i}.jpg`);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const members = [
    "Бегер Олег Александрович, заместитель директора по УР",
    "Пашкевич Семен Васильевич, заместитель директора по ВР",
    "Богнат Андрей Сергеевич, преподаватель",
    "Володкевич Николай Григорьевич, преподаватель",
    "Горбач Елена Ивановна, преподаватель",
    "Лозицкий Дмитрий Иванович, преподаватель",
    "Макарушко Николай Николаевич, заведующий отделением",
    "Михович Ольга Николаевна, преподаватель",
    "Пашкевич Владимир Георгиевич, преподаватель",
    "Пикула Светлана Михайловна, руководитель по военно-патриотическому воспитанию",
    "Середич Александр Иванович, преподаватель",
    "Сукач Владимир Михайлович, преподаватель",
  ];

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-8">
      
      {/* Header Profile Section */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        
        <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative z-10 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">
          <img 
            src="/images/administration/Beger_OA.webp" 
            alt="Бегер Олег Александрович" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/f8fafc/94a3b8?text=Фото';
            }}
          />
        </div>

        <div className="flex-1 text-center md:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 text-red-700 font-medium text-sm mb-4">
            <Flag className="w-4 h-4" />
            <span>ПО РОО "Белая русь"</span>
          </div>
          
          <h2 className="text-3xl font-display font-bold text-primary-900 mb-2">
            Бегер Олег Александрович
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl">
            Председатель первичной организации РОО "Белая русь"
          </p>
        </div>
      </div>

      {/* Intro Text */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
          <Building2 className="w-48 h-48" />
        </div>
        
        <div className="relative z-10 text-slate-700 leading-relaxed text-justify space-y-4">
          <p>
            Сегодня - Беларусь сильное суверенное и динамично развивающееся государство. Но именно сегодня, сейчас, требуется консолидация всех демократических сил, всех, кто поддерживает политику Президента Республики Беларусь, всех, кто осознает ответственность за настоящее и будущее нашей страны.
            <br />Республиканское общественное объединение «Белая Русь» и является таким консолидирующим объединением.
            <br />Основные направления деятельности, формы и методы деятельности РОО «Белая Русь» изложены в программе.
            <br />Это, прежде всего, достижение общественного согласия; участие в реализации социальных программ; укрепление здоровья нации, поддержка семьи, развитие образования и науки; поддержка молодежи.
          </p>
          <p>
            Первичная организация УО «Пинский государственный аграрно-технический колледж имени А.Е. Клещева» РОО «Белая Русь» была создана в апреле 2008 года. В настоящее время в первичной организации колледжа состоит 15 человек. К сожалению в 2019 году покинула ряды первичной организации в связи с увольнением Пашкевич Алла Ивановна, а так же среди членов РОО «Белая Русь» в 2019 году не появилось представителей учащихся.
          </p>
          <p>
            Принцип вступления в нашу организацию - добровольный. Однако, динамика роста членов первичной организации оставляет желать лучшего. Вероятно, советом первичной организации проводилась недостаточная работа по вовлечению преподавателей, сотрудников и учащихся в члены РОО «Белая Русь». Особое внимание, конечно же, необходимо уделить учащейся молодежи. Хотя в этом направлении первичная организация работала. 
          </p>
          <p>
            Все члены первичной организации своевременно уплачивают членские взносы. Удержание членских взносов и их перечисление организовано через бухгалтерию колледжа. 
          </p>
          <p>
            Члены первичной организации колледжа за отчетный период явились организаторами многих знаковых мероприятий. Принимали активное участие в мероприятиях, проводимых в колледже, в городе, в области.
          </p>
          <p>
            Так, по инициативе совета первичной организации проведена благотворительная акция по чествованию ветеранов Великой Отечественной войны. Эта акция прошла в канун Дня Победы - 6 мая 2019 года. Члены совета первичной организации организовали встречу с ветеранами г. Пинска в музее колледжа. 
          </p>
          <p>
            Члены первичной организации были наблюдателями на выборах в палату представителей Республики Беларусь, принимали участие на отчётно-выборном собрании городской организации ООО «Белая Русь», участвовали в подготовке и проведении заседаний клуба «Позитив», посвященных Году малой родины (2018-2020 г.г.), 922 летию города Пинска, конкурсу на лучшую учебную группу колледжа. Все эти мероприятия имеют не только нравственную, но и воспитательную направленность.
          </p>
          <p>
            Первичная организация УО «Пинский государственный аграрно-технический колледж имени А.Е. Клещева» РОО «Белая Русь» ежегодно участвовала в городских смотрах-конкурсах на лучшую первичную организацию.
          </p>
        </div>
      </div>

      {/* Grid with members and contacts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Members List */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <UsersIcon className="w-6 h-6 text-red-600" />
            Члены первичной организации РОО «Белая Русь»
          </h3>
          <div className="space-y-3">
            {members.map((member, idx) => (
              <div key={idx} className="flex gap-3 text-slate-700 bg-white p-3 rounded-xl border border-slate-100">
                <span className="font-bold text-red-600 min-w-[24px]">{idx + 1}.</span>
                <span className="leading-snug">{member}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts & Links */}
        <div className="space-y-8">
          <div className="bg-slate-800 rounded-2xl p-8 text-white shadow-sm">
            <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-4 flex items-center gap-3">
              <Info className="w-6 h-6 text-red-400" />
              Контактная информация
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">225710, г. Пинск, ул. Горького, 15</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400 shrink-0" />
                <span className="text-slate-300">бухгалтерия: +375-29-653-30-01</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400 shrink-0" />
                <span className="text-slate-300">приёмная: тел./факс: +375 165 61-35-58</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                <a href="mailto:belayaruspinsk@yandex.by" className="text-blue-400 hover:text-blue-300 transition-colors">belayaruspinsk@yandex.by</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-slate-400 shrink-0" />
                <span className="text-slate-300">Instagram: belayarus_pinsk</span>
              </li>
            </ul>
          </div>

          <a 
            href="https://1br.by/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-red-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 group-hover:text-red-700 transition-colors">Официальный сайт</h4>
                <p className="text-sm text-slate-500">Республиканского общественного объединения "Белая Русь"</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-red-50 group-hover:border-red-200 transition-colors">
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-red-600" />
            </div>
          </a>
          
          {/* Logo/Banner */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
             <img src="/images/Ideologiy/i0by3iqkhtk4xo40g4tcyxsm74wqvlsd.webp" alt="Белая Русь" className="w-full h-auto object-cover" />
          </div>
        </div>

      </div>

      {/* Image Gallery */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-primary-900 mb-6">Фотогалерея</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-[200px]">
          {images.map((src, index) => (
            <div 
              key={index}
              onClick={() => openLightbox(index)}
              className={`rounded-xl overflow-hidden cursor-pointer group bg-slate-100 relative ${
                index === 0 ? 'col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1' : ''
              }`}
            >
              <img 
                src={src} 
                alt={`Фото ${index + 1}`}
                className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${
                  index === 0 ? 'object-cover object-top' : 'object-cover'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur text-slate-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox 
          images={images}
          selectedIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onSelectIndex={setLightboxIndex}
        />
      )}

    </div>
  );
};

export default BelayaRus;
