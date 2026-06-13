import React from 'react';
import { Landmark, BookOpen, MonitorPlay, FileText, Download, Award, Clock, Star } from 'lucide-react';

export default function CollegeMuseum() {
  const links = [
    {
      title: 'Экскурсия по музею колледжа',
      description: 'Информационный буклет для посетителей',
      icon: <BookOpen className="w-8 h-8" />,
      url: '/images/Ideologiy/Muzey/Buklt_MIK.pdf',
      color: 'bg-blue-500'
    },
    {
      title: 'Пинск - сказка... Пинск - загадка...',
      description: 'Веб-квест по истории города',
      icon: <MonitorPlay className="w-8 h-8" />,
      url: 'https://sites.google.com/view/pinsk/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0',
      color: 'bg-amber-500'
    },
    {
      title: 'Виртуальный Музей',
      description: 'Посетить 3D экскурсию онлайн',
      icon: <Landmark className="w-8 h-8" />,
      url: '/images/Ideologiy/Muzey/VM/END.html',
      color: 'bg-emerald-500'
    },
    {
      title: 'Web-квест в образовании',
      description: 'Методический материал из опыта работы',
      icon: <FileText className="w-8 h-8" />,
      url: '/images/Ideologiy/Muzey/IspolzovanieWebKvestaVObrPr_.pdf',
      color: 'bg-purple-500',
      target: '_blank'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans pt-12">
      
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden py-24 mb-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Landmark className="w-5 h-5 text-amber-400" />
              <span className="text-amber-100 font-medium">Основан 1 сентября 2020 года</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Музей истории колледжа
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Добро пожаловать в виртуальный музей истории учреждения образования «Пинский государственный аграрно-технический колледж имени А.Е. Клещёва»
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-20 mb-16">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target={link.target || '_self'}
              className="bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group flex flex-col items-center text-center border border-slate-100"
            >
              <div className={`w-16 h-16 rounded-2xl ${link.color} text-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {link.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{link.title}</h3>
              <p className="text-slate-500 text-sm flex-grow">{link.description}</p>
              <div className="mt-4 text-sm font-medium text-amber-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Перейти <ChevronRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-slate">
                <blockquote className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-r-2xl italic text-slate-700 shadow-sm mb-8">
                  "Времена меняются, и мы меняемся вместе с ними"
                  <footer className="text-right mt-2 font-semibold text-slate-900">— Гораций</footer>
                </blockquote>

                <p className="text-justify mb-6">
                  Со времени образования колледжа в 1946 году и до настоящего времени с историей нашего учебного заведения связаны судьбы многих поколений жителей не только Беларуси, но и бывшего СССР. В историческом измерении это всего лишь один миг, а в жизни одного отдельно взятого человека – вся его судьба.
                </p>
                <p className="text-justify mb-6">
                  Многие имена и фамилии сотрудников вписаны в историю нашего учебного заведения поистине золотыми буквами. Это те люди, которые стояли у истоков создания гидротехникума, а ныне – учреждения образования «Пинский государственный аграрно-технический колледж имени А.Е. Клещёва».
                </p>
                <p className="text-justify">
                  Об этих, порой необычайно удивительных судьбах наших сотрудников, начиная от директора, его заместителей, преподавателей, мастеров производственного обучения, включая и весь технический персонал, об этапах непростого пути становления и развития, мы будем рассказывать на виртуальных страницах нашего музея.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Алексей Ефимович Клещёв</h2>
              </div>
              
              <div className="prose prose-lg max-w-none prose-slate">
                <p className="text-justify mb-6">
                  <strong>Клещёв Алексей Ефимович (12.02.1905 ― 13.12.1968)</strong> - один из организаторов коммунистического подполья и партизанского движения в Белоруссии.
                </p>
                <p className="text-justify mb-6">
                  Родился в бедной крестьянской семье 25 февраля 1905 года в деревне Михновичи. Свой самостоятельный трудовой путь начал в 1924 году. В Великую Отечественную войну, с июля 1941 года, А.Е. Клещёв был в составе Пинского областного подпольного партийного центра, создавал подпольные партийные организации, проводил большую организаторскую работу по оказанию сопротивления фашистским захватчикам.
                </p>
                <p className="text-justify mb-6">
                  С 27 апреля по 10 октября 1943 года А.Е. Клещёв командовал Пинским партизанским соединением. Партизаны наносили удары по немецким гарнизонам, бесстрашно действовали на коммуникациях немецко-фашистских войск, уничтожали вражескую технику.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 my-8">
                  <p className="text-justify m-0 text-slate-800 font-medium">
                    За умелое руководство партизанским соединением и проявленные при этом мужество и героизм Указом Президиума Верховного Совета СССР от 1 января 1944 года генерал-майору Клещёву Алексею Ефимовичу присвоено звание Героя Советского Союза с вручением ордена Ленина и медали «Золотая Звезда».
                  </p>
                </div>
                <p className="text-justify mb-0">
                  В честь Алексея Ефимовича Клещева назван Пинский аграрно-технический колледж.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-500" />
                О музее
              </h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0"></div>
                  <div>
                    <strong className="block text-slate-800">Профиль музея:</strong>
                    Комплексный
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0"></div>
                  <div>
                    <strong className="block text-slate-800">Основной фонд:</strong>
                    100 экспонатов
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0"></div>
                  <div>
                    <strong className="block text-slate-800">Научно-вспомогательный:</strong>
                    Более 30 экспонатов
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-3xl shadow-sm border border-slate-700 p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Основные разделы:</h3>
              <ul className="space-y-3">
                {[
                  'Вклад работников в Победу в годы ВОВ',
                  'Алексей Ефимович Клещёв. Путь Героя',
                  'История колледжа в лицах',
                  'Мелиорация на Полесье',
                  'Наши специальности'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <ChevronRight className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-emerald-500" />
                Направления деятельности
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Экспозиционное', 'Поисковое', 'Научное', 'Экскурсионное', 'Лекционное', 'Мероприятия'].map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium border border-emerald-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <div className="max-w-7xl mx-auto mt-16 mb-8">
          <div className="flex items-center gap-4 mb-8">
            <MonitorPlay className="w-8 h-8 text-slate-800" />
            <h2 className="text-3xl font-bold text-slate-800">Видеоматериалы музея</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group relative">
              <iframe 
                src="https://www.youtube.com/embed/LZoq2Dlwzcc?rel=0&fs=1&wmode=transparent" 
                className="w-full h-full relative z-10" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group relative">
              <iframe 
                src="https://www.youtube.com/embed/qGVfrbGEXuU?rel=0&fs=1&wmode=transparent" 
                className="w-full h-full relative z-10" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Need to import ChevronRight
function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
