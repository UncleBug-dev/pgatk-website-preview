import React, { useState } from 'react';
import { 
  PhoneCall, Clock, MapPin, AlertTriangle, 
  ShieldAlert, UserCheck, HeartHandshake,
  ChevronDown, ExternalLink, Info, Activity
} from 'lucide-react';
import { Lightbox } from '../components/Lightbox';
import { Link } from 'react-router-dom';

const ImageGallery = ({ images, title }: { images: string[], title: string }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-200 group cursor-pointer"
            onClick={() => setSelectedImageIndex(index)}
          >
            <img 
              src={src} 
              alt={`${title} ${index + 1}`} 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="533" viewBox="0 0 400 533"><rect width="400" height="533" fill="%23f1f5f9"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%2364748b">Нет фото</text></svg>';
              }}
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <Lightbox
          images={images}
          selectedIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onSelectIndex={setSelectedImageIndex}
        />
      )}
    </div>
  );
};

const Accordion = ({ title, children, icon: Icon, defaultOpen = false }: any) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="mb-4 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        </div>
        <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 md:p-8 border-t border-slate-100 text-slate-700 prose prose-slate max-w-none prose-p:mb-4 prose-p:text-justify prose-li:mb-2 prose-ul:my-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Spps() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-16 px-4 md:px-8 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-blue-100 font-bold tracking-wider uppercase text-sm mb-6 border border-white/30 backdrop-blur-sm">
            СППС
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Оказание социально-педагогической поддержки и оказание психологической помощи всем участникам образовательного процесса
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
            Обеспечение защиты прав и законных интересов обучающихся, содействие их обучению, воспитанию и развитию, социальной адаптации.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 -mt-8 relative z-20">
        
        {/* Contact Info Block */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-12 flex flex-col lg:flex-row">
          <div className="bg-amber-500 p-8 lg:w-1/3 flex flex-col justify-center text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-20">
              <PhoneCall className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">Онлайн-консультирование</h2>
              <p className="text-amber-100 text-lg mb-2 italic">«Скажи, о чем молчишь ты?»</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <UserCheck className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="text-sm text-amber-100">Педагог социальный</p>
                    <p className="font-bold">Калюта Людмила Ивановна</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <PhoneCall className="w-6 h-6 shrink-0" />
                  <p className="font-bold text-xl">+375 29 335 22 39</p>
                </div>
                <div className="flex items-center gap-3 bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-6 h-6 shrink-0" />
                  <p className="font-bold">Корпус №3, кабинет 102</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 lg:w-2/3">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-blue-600" />
              График работы
            </h3>
            <p className="text-slate-500 mb-6">Второй семестр 2025/2026 учебного года</p>
            
            <div className="overflow-hidden bg-white border border-slate-200 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 text-sm">
                    <th className="p-2 md:p-3 border-b border-slate-200 font-bold">День недели</th>
                    <th className="p-2 md:p-3 border-b border-slate-200 font-bold">Время работы</th>
                    <th className="p-2 md:p-3 border-b border-slate-200 font-bold leading-tight">Обеденный<br/>перерыв</th>
                    <th className="p-2 md:p-3 border-b border-slate-200 font-bold leading-tight">Работа в<br/>общежитии</th>
                    <th className="p-2 md:p-3 border-b border-slate-200 font-bold leading-tight">Время<br/>консультирования</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 text-xs md:text-sm">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-2 md:p-3 border-b border-slate-100 font-bold text-slate-800">Понедельник</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 whitespace-nowrap">11:00 - 19:30</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 whitespace-nowrap">15:00 - 15:30</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 whitespace-nowrap">16:00 - 19:30</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 font-bold text-blue-600 whitespace-nowrap">17:00 - 19:00</td>
                  </tr>
                  <tr className="bg-slate-50/50 hover:bg-slate-50 transition-colors">
                    <td className="p-2 md:p-3 border-b border-slate-100 font-bold text-slate-800">Вторник</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 whitespace-nowrap">8:15 - 17:15</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 whitespace-nowrap">13:00 - 14:00</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 whitespace-nowrap">16:15 - 17:15</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 font-bold text-blue-600 whitespace-nowrap">16:00 - 17:00</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-2 md:p-3 border-b border-slate-100 font-bold text-slate-800">Четверг</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 whitespace-nowrap">8:15 - 17:15</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 whitespace-nowrap">13:00 - 14:00</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 whitespace-nowrap">16:30 - 17:30</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 font-bold text-blue-600 whitespace-nowrap">14:00 - 16:30</td>
                  </tr>
                  <tr className="bg-slate-50/50 hover:bg-slate-50 transition-colors">
                    <td className="p-2 md:p-3 border-b border-slate-100 font-bold text-slate-800">Пятница</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 whitespace-nowrap">8:15 - 17:15</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 whitespace-nowrap">13:00 - 14:00</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 text-slate-400 text-center">-</td>
                    <td className="p-2 md:p-3 border-b border-slate-100 font-bold text-blue-600 whitespace-nowrap">10:00 - 12:00</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="p-2 md:p-3 font-bold text-slate-800">Суббота<br/><span className="text-xs text-slate-500 font-normal block mt-0.5">(1-я месяца)</span></td>
                    <td className="p-2 md:p-3 whitespace-nowrap">9:00 - 14:00</td>
                    <td className="p-2 md:p-3 text-slate-400 text-center">-</td>
                    <td className="p-2 md:p-3 whitespace-nowrap">13:30 - 14:00</td>
                    <td className="p-2 md:p-3 font-bold text-blue-600 whitespace-nowrap">11:00 - 12:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Telegram Banner */}
        <div className="bg-gradient-to-r from-[#0088cc] to-[#00a2f2] rounded-3xl p-6 md:p-8 text-white shadow-xl mb-12 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="z-10 w-full max-w-2xl mb-6">
            <img 
              src="/images/1Novosti/2024/Iyn/tmkompas.webp" 
              alt="Телеграм Компас" 
              className="w-full h-auto rounded-2xl shadow-lg border-4 border-white/20" 
            />
          </div>
          
          <div className="z-10 max-w-3xl">
            <p className="text-blue-50 text-lg mb-6 leading-relaxed">
              Создан Национальным центром усыновления для детей-сирот и детей, оставшихся без попечения родителей. 
              На этом ресурсе вы сможете получить надежную поддержку в начале своего пути.
            </p>
            <a 
              href="https://t.me/kompas2024" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0088cc] px-8 py-3.5 rounded-full font-bold hover:bg-blue-50 hover:scale-105 transition-all shadow-md hover:shadow-xl"
            >
              Подписаться на канал
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* IDN Banner */}
        <Link 
          to="/okazanie-socialno-pedagogicheskoy-pomochi/8-novosti/1174-po-vsem-voprosam-otnosyashchimsya-k-kompetentsii-inspektsii-po-delam-nesovershennoletnikh-vy-mozhete-obratitsya-k-uchastkovomu-inspektoru-idn-pinskogo-govd"
          className="block bg-red-50 border-2 border-red-200 rounded-2xl p-6 md:p-8 mb-12 hover:bg-red-100 transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="bg-red-500 text-white p-4 rounded-full shrink-0 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Инспекция по делам несовершеннолетних</h3>
              <p className="text-red-900">
                По всем вопросам, относящимся к компетенции инспекции по делам несовершеннолетних, Вы можете обратиться к участковому инспектору ИДН Пинского ГОВД.
              </p>
            </div>
          </div>
        </Link>

        {/* Info Accordions */}
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Информационные материалы</h2>

        <Accordion title="ИНСТРУКЦИЯ о порядке социально-педагогической поддержки обучающихся и оказания им психологической помощи" icon={Info} defaultOpen={true}>
          <p>
            Настоящая Инструкция определяет порядок социально-педагогической поддержки обучающихся учреждения образования и оказания им психологической помощи. 
            Социально-педагогическую поддержку обучающихся осуществляет педагог социальный, психологическую помощь им оказывает педагог-психолог.
          </p>
          <p>
            В своей деятельности педагог социальный и педагог-психолог руководствуются Кодексом Республики Беларусь об образовании, Кодексом Республики Беларусь о браке и семье, Законом Республики Беларусь от 19 ноября 1993 г. № 2570-XII «О правах ребенка», Законом Республики Беларусь от 31 мая 2003 г. № 200-З «Об основах системы профилактики безнадзорности и правонарушений несовершеннолетних», Законом Республики Беларусь от 1 июля 2010 г. № 153-З «Об оказании психологической помощи», Законом Республики Беларусь от 30 июня 2022 г. № 183-З «О правах инвалидов и их социальной интеграции», настоящей Инструкцией, иными актами законодательства.
          </p>

          <h4 className="text-lg font-bold text-slate-800 mt-6 mb-3">Задачами деятельности специалистов являются:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>защита прав и законных интересов обучающихся учреждений образования, содействие их обучению, воспитанию и развитию, социальной адаптации;</li>
            <li>содействие в формировании благоприятной атмосферы в коллективах обучающихся учреждения образования;</li>
            <li>организация личностно-ориентированной социально-педагогической поддержки, психологической помощи обучающимся, имеющим проблемы в общении, обучении, развитии, социализации;</li>
            <li>участие в разработке и выполнении плана реализации мероприятий по устранению причин и условий, повлекших создание неблагоприятной для детей обстановки, плана защиты прав и законных интересов ребенка; участие в подготовке обучающихся к самостоятельной и семейной жизни, выполнению социальных ролей гражданина, семьянина;</li>
            <li>разработка информационно-аналитических материалов по вопросам развития, воспитания, обучения и социализации обучающихся;</li>
            <li>предупреждение семейного неблагополучия, социального сиротства, насилия в отношении детей и профилактика асоциального поведения, безнадзорности, правонарушений обучающихся, пропаганда здорового образа жизни;</li>
            <li>повышение психологической и правовой культуры участников образовательного процесса.</li>
          </ul>

          <h4 className="text-lg font-bold text-slate-800 mt-6 mb-3">Принципы деятельности специалистов:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>законность;</li>
            <li>уважение и соблюдение прав и законных интересов участников образовательного процесса;</li>
            <li>доступность и добровольность получения социально-педагогической поддержки и оказания психологической помощи;</li>
            <li>обеспечение равных возможностей получения социально-педагогической поддержки и оказания психологической помощи для всех обучающихся;</li>
            <li>конфиденциальность;</li>
            <li>научная обоснованность;</li>
            <li>профессионализм.</li>
          </ul>

          <p className="mt-6">
            Социально-педагогическая поддержка несовершеннолетних обучающихся осуществляется во взаимодействии с их законными представителями и с учетом мнения несовершеннолетнего обучающегося.<br/>
            Оказание психологической помощи обучающимся осуществляется в порядке, установленном Законом Республики Беларусь «Об оказании психологической помощи».<br/>
            Деятельность по оказанию психологической помощи осуществляется педагогом психологом в отдельном рабочем кабинете.<br/>
            Объем, формы, продолжительность социально-педагогической поддержки и психологической помощи определяются специалистами с учетом возраста обучающихся, характера проблем, анализа и перспектив их решения.
          </p>

          <h4 className="text-lg font-bold text-slate-800 mt-6 mb-3">Специалисты в пределах своей компетенции имеют право:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>определять актуальные направления, задачи и объем осуществляемой деятельности;</li>
            <li>выбирать педагогически обоснованные и целесообразные формы и методы работы с учетом конкретных условий, потенциала учреждения образования, особенностей контингента участников образовательного процесса и их потребностей;</li>
            <li>инициировать направление в установленном порядке запросов и ходатайств учреждения образования в целях получения необходимой информации для обеспечения социально-педагогической поддержки и оказания психологической помощи обучающимся;</li>
            <li>посещать уроки, занятия, иные образовательные мероприятия;</li>
            <li>вносить на рассмотрение руководителя учреждения образования, педагогических работников предложения и рекомендации, направленные на совершенствование образовательного процесса.</li>
          </ul>

          <h4 className="text-lg font-bold text-slate-800 mt-6 mb-3">Документация специалистов включает:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>планы работы на полугодие (учебную четверть);</li>
            <li>графики работы;</li>
            <li>социально-педагогическую характеристику учреждения образования;</li>
            <li>материалы по организации социально-педагогической поддержки обучающихся и оказанию им психологической помощи;</li>
            <li>отчеты о работе специалистов за год;</li>
            <li>журнал учета консультаций педагога-психолога;</li>
            <li>журнал учета консультаций педагога социального; номенклатуру дел.</li>
          </ul>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg inline-block">
            <a href="https://adu.by/images/2022/10/post-MO-RB-328-2022.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Источник - adu.by
            </a>
          </div>
        </Accordion>

        <Accordion title="Памятка для учащихся по правилам дорожного движения" icon={AlertTriangle}>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <ol className="list-decimal pl-6 space-y-3 font-medium text-slate-800 mb-6">
              <li>Ходите только по тротуару!</li>
              <li>Переходите улицу в местах, где имеются линии или указатели перехода, а где их нет – на перекрестках по линии тротуаров.</li>
              <li>Переходя улицу, посмотрите налево, а дойдя до середины – направо.</li>
              <li>На улицах и дорогах где движение регулируется, переходите проезжую часть только при зеленом сигнале светофора или разрешающем жесте регулировщика.</li>
              <li>Не перебегайте дорогу перед близко идущим транспортом.</li>
              <li>Не выходите на проезжую часть из-за стоящей машины или другой помехи обзору.</li>
              <li>При переходе через улицу не стоит вести оживленную беседу – разговоры отвлекают мысли и взгляд от наблюдения.</li>
              <li>Не устраивайте игры и не катайтесь на коньках, лыжах и санках на проезжей части улицы!</li>
            </ol>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                <p><strong>ЗНАЙ!</strong> Кататься на велосипедах, роликах и скейтбордах можно только во дворе или на специальных площадках. Выбегать на дорогу за мячом или собакой опасно!</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                <p><strong>ЗНАЙ!</strong> Надо быть очень внимательным при переходе дороги! Самые безопасные переходы - подземный и надземный. Если их нет, лучше перейти по «зебре».</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                <p><strong>ЗНАЙ!</strong> Переходить улицу можно только на зеленый сигнал светофора. Но даже при зеленом сигнале никогда не начинай движение сразу. Сначала убедись, что машины успели остановиться.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                <p><strong>ЗНАЙ!</strong> Если на остановке стоит автобус, не обходи его ни спереди, ни сзади. Надо дождаться, пока он отъедет, и только тогда начинать переход.</p>
              </div>
            </div>
          </div>
        </Accordion>

        <Accordion title="Профилактика алкоголизма" icon={Activity}>
          <h4 className="text-xl font-bold text-slate-800 mb-4">Что такое алкоголизм и его стадии</h4>
          <p>
            <strong>Алкоголизм</strong> – это вид психического расстройства, которое проявляется не сразу. Поначалу у человека просто возникает желание выпить, затем ему требуется большее количество спиртного. В конце концов, отсутствие возможности принять алкоголь вызывает раздражение.
          </p>
          <p>
            <strong>Второй этап</strong> развития алкогольной зависимости возникает, когда человек становится более выносливым к большому количеству спиртного. Он может даже терять контроль над количеством выпитого, и употребление алкоголя уже становится ежедневным и систематическим. Происходят запои.
          </p>
          <p>
            <strong>Третий этап</strong> характеризуется увеличением количества спиртного до невероятного количества – более 3-х литров в день. После такой алкогольной атаки на организм у человека происходят изменения в головном мозге, что влечет за собой неотвратимые психические нарушения, например, «белую горячку». От алкогольного отравления страдают все органы. У алкоголика развиваются: алкогольная энцефалопатия, алкогольная кардиомиопатия, алкогольный гепатит, алкогольный панкреатит, алкогольный гастрит, алкогольный цирроз печени. Все это ведет к летальному исходу.
          </p>
          
          <h4 className="text-xl font-bold text-slate-800 mt-8 mb-4">Пивной алкоголизм - скрытая угроза</h4>
          <p>
            Вопреки мнению многих людей о том, что пиво – безвредный слабоалкогольный напиток, ученые утверждают, что это совсем не так. Специалисты, изучающие проблему алкоголизма, говорят о неправильности разделения спиртных напитков по степени их вредности, потому что среди них нет безвредных.
          </p>
          <p>
            О том, что пивной алкоголизм является заболеванием, известно давно, но многие считают его не таким серьезным, как водочный или винный. А ведь последствия пивного алкоголизма гораздо разрушительнее для организма. Немецкий профессор Болингер даже назвал «баварским пивным сердцем» главный орган человека, злоупотребляющего пивом. Такое сердце имеет утолщенные стенки, расширенные полости, некрозы в сердечной мышце.
          </p>
          <p>
            Пиво также влияет на гормональный баланс человека. Токсические вещества и соли тяжелых металлов, присутствующие в пиве, приводят к изменениям в эндокринной системе. У мужчин, постоянно употребляющих пиво, подавляется выработка тестостерона – мужского гормона. В то же время увеличивается выработка женских половых гормонов. Внешность мужчины постепенно меняется – разрастаются грудные железы, становится шире таз.
          </p>

          <h4 className="text-xl font-bold text-slate-800 mt-8 mb-4">Признаки пивного алкоголизма:</h4>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>употребление в сутки более 1 л пива;</li>
            <li>раздражительность и злость без пива;</li>
            <li>появление у мужчины «пивного живота»;</li>
            <li>появляющиеся проблемы с потенцией;</li>
            <li>невозможность расслабиться и заснуть, если не употребил пиво, ночная бессонница и дневная сонливость;</li>
            <li>часто появляющиеся головные боли;</li>
            <li>начало дня с бутылкой пива, чтобы снять похмелье или поднять настроение.</li>
          </ul>
          
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <h4 className="text-lg font-bold text-indigo-900 mb-2">Как избавиться от пивного алкоголизма?</h4>
            <p className="text-indigo-800 m-0">
              Лечение зависимости от пива – процесс долгий и сложный. Кроме пива, больной должен отказаться и от других напитков, содержащих алкоголь. Вылечить алкоголизм можно, если перебороть психологическую зависимость от пива и спиртных напитков в целом. Если вы заметили у себя или близкого человека симптомы, характеризующие пивной алкоголизм, лечение должно начинаться без проволочек.
            </p>
          </div>
        </Accordion>

        {/* Galleries */}
        <div className="mt-16 space-y-16">
          <ImageGallery 
            title="Телефоны доверия" 
            images={[
              "/images/Ideologiy/SPPS/133.webp",
              "/images/Ideologiy/SPPS/doverie.webp",
              "/images/Ideologiy/SPPS/telefondoveriy2_500x750-equal.webp",
              "/images/Ideologiy/SPPS/telefondoveriy_500x653-equal.webp"
            ]} 
          />

          <ImageGallery 
            title="Научите детей правилу трех шагов" 
            images={[
              "/images/Ideologiy/SPPS/PraviloTrechShagov/1.webp",
              "/images/Ideologiy/SPPS/PraviloTrechShagov/2.webp"
            ]} 
          />

          <ImageGallery 
            title="Соблюдай правила безопасности" 
            images={[
              "/images/Ideologiy/SPPS/PravilaBezopasnosti/3.webp",
              "/images/Ideologiy/SPPS/PravilaBezopasnosti/4.webp"
            ]} 
          />

          <ImageGallery 
            title="Неприкосновенность" 
            images={[
              "/images/Ideologiy/SPPS/Neprikosnovennost/5.webp",
              "/images/Ideologiy/SPPS/Neprikosnovennost/6.webp",
              "/images/Ideologiy/SPPS/Neprikosnovennost/7.webp"
            ]} 
          />
          
          <ImageGallery 
            title="Оказание помощи несовершеннолетним потерпевшим от сексуального насилия" 
            images={[
              "/images/1Novosti/2023/Dekabr/ChatBotPomosh/IMG_20231221_124124_213.webp"
            ]} 
          />

          <div className="bg-slate-100 rounded-3xl p-8 my-12 text-center">
            <h3 className="text-xl font-bold mb-4">Региональная карта помощи несовершеннолетним</h3>
            <a 
              href="/images/1Novosti/2025/8August/RegKarta/RegKarta2025_08.pdf" 
              target="_blank" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md"
            >
              Скачать PDF
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <ImageGallery 
            title="Региональная карта помощи (Брестская область)" 
            images={[
              "/images/1Novosti/2025/8August/RegKarta/1.webp",
              "/images/1Novosti/2025/8August/RegKarta/2.webp"
            ]} 
          />
        </div>

      </div>
    </div>
  );
}
