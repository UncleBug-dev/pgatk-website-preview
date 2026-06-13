import React from 'react';
import { BookOpen, FileText, MonitorPlay, AlertTriangle, ExternalLink, Map, Scale, Video } from 'lucide-react';

export default function GenocideExhibition() {
  const caseMaterials = [
    { title: 'Показания свидетелей и очевидцев', url: 'https://www.youtube.com/playlist?list=PLYKC9JUzv4CLbhCUP5nxNESNUQDXBGjjn' },
    { title: 'Акты Чрезвычайной Государственной Комиссии', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/iz-materialov-ugolovnogo-dela/akty-chrezvychaynoy-gosudarstvennoy-komissii/' },
    { title: 'Списки участников карательных операций', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/iz-materialov-ugolovnogo-dela/spiski-uchastnikov-karatelnykh-operatsiy-i-inykh-prestupnykh-deystviy-v-otnoshenii-mirnogo-naseleniya/' },
    { title: 'Документы из архивных учреждений РФ', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/iz-materialov-ugolovnogo-dela/dokumenty-iz-arkhivnykh-uchrezhdeniy-rossiyskoy-federatsii/' },
    { title: 'Список предполагаемых нацистских преступников', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/iz-materialov-ugolovnogo-dela/spisok-predpolagaemykh-natsistskikh-prestupnikov-i-sovershennykh-imi-deyaniy/' },
    { title: 'Судебные решения в отношении карателей', url: 'https://www.prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/iz-materialov-ugolovnogo-dela/sudebnye-resheniya-i-inye-protsessualnye-dokumenty-v-otnoshenii-natsistskikh-karateley/' },
    { title: 'Сведения о ходе расследования (Архив)', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/aktualnye-svedeniya-o-khode-rassledovaniya-ugolovnogo-dela/' },
  ];

  const mediaProjects = [
    { title: '«Параллель "Украина"»: совместный фильм', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/proekty-so-sredstvami-massovoy-informatsii/parallel-ukraina-sovmestnyy-film-generalnoy-prokuratury-i-telekanala-ont-po-materialam-ugolovnogo-de/' },
    { title: 'Книга «Последние свидетели»', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/proekty-so-sredstvami-massovoy-informatsii/kniga-poslednie-svideteli/' },
    { title: 'Региональные проекты', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/proekty-so-sredstvami-massovoy-informatsii/regionalnye/' },
    { title: '«Параллель БЧБ»: совместный фильм', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/proekty-so-sredstvami-massovoy-informatsii/parallel-bchb-sovmestnyy-film-generalnoy-prokuratury-i-telekanala-ont-po-materialam-ugolovnogo-dela-/' },
    { title: '«Геноцид. Без права на жизнь»', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/proekty-so-sredstvami-massovoy-informatsii/genotsid-bez-prava-na-zhizn-sovmestnyy-proekt-generalnoy-prokuratury-i-agentstva-televizionnykh-novo/' },
    { title: 'Проект с ИД «Беларусь Сегодня»', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/sovmestnyy-proekt-generalnoy-prokuratury-i-id-belarus-segodnya/' },
    { title: '«Геноцид. Дело №» (совместно с АТН)', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/sovmestnyy-proekt-generalnoy-prokuratury-i-agentstva-televizionnykh-novostey/' },
    { title: '«За печатью памяти» (совместно с БЕЛТА)', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/sovmestnyy-proekt-generalnoy-prokuratury-i-belta/' },
  ];

  const publications = [
    { title: 'Издания «Геноцид белорусского народа»', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/izdaniya-genotsid-belorusskogo-naroda/' },
    { title: 'Сборник материалов к 80-летию Хатынской трагедии', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/sbornik-materialov-mezhdunarodnogo-nauchno-prakticheskogo-kruglogo-stola-priurochennogo-k-80-letiyu-/' },
    { title: 'Карта сожженных деревень, лагерей смерти', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/karta-sozhzhennykh-dereven-/' },
    { title: 'Сборник «Преступления немецко-фашистских оккупантов». Минск, 1965', url: 'https://prokuratura.gov.by/ru/activity/rassledovanie-ugolovnogo-dela-o-genotside/sbornik-prestupleniya-nemetsko-fashistskikh-okkupantov-v-belorussii-minsk-1965-god/' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans pt-12">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden py-24 mb-12 rounded-3xl mx-4 lg:mx-8 shadow-2xl">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498623116890-37e912163d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center grayscale"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-red-900/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 mb-6">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-red-100 font-medium uppercase tracking-wider text-sm">Историческая память</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight max-w-5xl mx-auto text-white drop-shadow-lg">
            Виртуальная экспозиция «Память и боль белорусской земли», посвященная геноциду белорусского народа
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Quote Block */}
        <div className="bg-white rounded-3xl shadow-xl border border-red-100 overflow-hidden mb-16 relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
          <div className="p-8 md:p-12">
            <svg className="w-16 h-16 text-red-100 absolute top-8 left-8 -z-10" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed italic relative z-10 text-justify mb-8 font-serif">
              Трагедия Хатыни и тысяч деревень и городов с такой же судьбой – это неутихающая боль в сердце белорусов, всех советских людей. Сегодня мы, представители разных поколений, религиозных конфессий, философских и политических взглядов, собрались вместе, чтобы почтить память невинных и защитить правду о той войне.
              <br /><br />
              Эта правда жестока, эта память тяжела. Вдумайтесь: оккупанты и их пособники-полицаи сожгли 9 200 белорусских деревень. Из них более пяти тысяч – вместе с жителями. И мы знаем с чего это все начинается: с идей расового и генетического, любого другого превосходства одних народов над другими... Страшно то, что эти теории и сегодня находят своих приверженцев во всем мире. Но, слава богу, фашистская идеология чужда нашим белорусам, чья генетическая память стала настоящим национальным иммунитетом.
              <br /><br />
              В этой памяти много боли и страданий, в ней трагический исторический опыт. Это факт: Вторая мировая была не просто войной, она стала планомерным истреблением наших славянских народов.
            </p>
            <div className="text-right border-t border-slate-100 pt-6">
              <p className="font-bold text-slate-900 text-lg">Из выступления Президента Республики Беларусь А.Г. Лукашенко</p>
              <p className="text-slate-500">на республиканском митинге-реквиеме, посвященном 78-й годовщине Хатынской трагедии</p>
              <p className="text-red-600 font-medium">21 марта 2021 г.</p>
            </div>
          </div>
        </div>

        {/* Intro Text */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-red-600 mb-6 uppercase tracking-wider">
            Сегодня мы с трепетом относимся к нашей исторической памяти…
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed text-justify bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            Сохраняя историческую правду, предлагаем вам ознакомиться с виртуальной экспозицией, посвящённой трагической теме геноцида белорусского народа в годы Великой Отечественной войны. На экспозиции представлены копии уникальных архивных документов, протоколов, свидетельствующие о зверствах фашистских оккупантов и их пособников на территории Беларуси, сведения о карательных операциях, расстрелах, сожженных деревнях, лагерях смерти, гетто и показания очевидцев.
          </p>
        </div>

        {/* Informational Analytical Materials Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-12 shadow-lg text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <Scale className="w-64 h-64 -mt-10 -mr-10" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold leading-relaxed relative z-10 max-w-4xl mx-auto">
            ИНФОРМАЦИОННО-АНАЛИТИЧЕСКИЕ МАТЕРИАЛЫ ГЕНЕРАЛЬНОЙ ПРОКУРАТУРЫ РЕСПУБЛИКИ БЕЛАРУСЬ О РАССЛЕДОВАНИИ УГОЛОВНОГО ДЕЛА О ГЕНОЦИДЕ
          </h2>
        </div>

        {/* Local Documents Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <a href="/images/Ideologiy/genocid_ekspoziciy/Genocidbelorusskogonaroda_.pdf" target="_blank" rel="noopener noreferrer" className="bg-red-50 rounded-2xl p-6 border border-red-100 hover:shadow-md transition-all group flex items-center gap-4">
            <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-red-700 transition-colors">Материалы Генеральной прокуратуры</h3>
              <p className="text-sm text-slate-600 mt-1">Информационно-аналитические документы «Геноцид белорусского народа»</p>
            </div>
          </a>
          <a href="/images/Ideologiy/genocid_ekspoziciy/NAN_Genocid.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-md transition-all group flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Институт истории НАН Беларуси</h3>
              <p className="text-sm text-slate-600 mt-1">Информационный материал «Геноцид белорусского народа в годы ВОВ»</p>
            </div>
          </a>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Case Materials */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <Scale className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold text-slate-800">Из материалов уголовного дела</h3>
            </div>
            <ul className="space-y-3 flex-grow">
              {caseMaterials.map((item, i) => (
                <li key={i}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 p-2 hover:bg-slate-50 rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4 text-slate-400 mt-1 group-hover:text-red-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Media Projects */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <MonitorPlay className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-800">СМИ и Спецпроекты</h3>
            </div>
            <ul className="space-y-3 flex-grow">
              {mediaProjects.map((item, i) => (
                <li key={i}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 p-2 hover:bg-slate-50 rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4 text-slate-400 mt-1 group-hover:text-blue-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Publications & Maps */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <Map className="w-6 h-6 text-emerald-600" />
              <h3 className="text-xl font-bold text-slate-800">Издания и Карты</h3>
            </div>
            <ul className="space-y-3 flex-grow">
              {publications.map((item, i) => (
                <li key={i}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 p-2 hover:bg-slate-50 rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4 text-slate-400 mt-1 group-hover:text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Video Gallery */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <Video className="w-8 h-8 text-slate-800" />
            <h2 className="text-3xl font-bold text-slate-800">Видеоматериалы</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-4">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                <iframe src="https://www.youtube.com/embed/bxJsRQ9Hc1c" className="w-full h-full" allowFullScreen></iframe>
              </div>
              <p className="text-center font-bold text-slate-700 px-4">Геноцид на Пинщине. Посеничи (ТРК «Пинск»)</p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                <iframe src="https://www.youtube.com/embed/hlzp1n8D6Zo" className="w-full h-full" allowFullScreen></iframe>
              </div>
              <p className="text-center font-bold text-slate-700 px-4">Программа «Панорама» (Беларусь 1)</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                <iframe src="https://www.youtube.com/embed/72RAu73aP3Q" className="w-full h-full" allowFullScreen></iframe>
              </div>
              <p className="text-center font-bold text-slate-700 px-4">Презентация издания «Геноцид белорусского народа»</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                <iframe src="https://www.youtube.com/embed/EXWWSMyWQrA" className="w-full h-full" allowFullScreen></iframe>
              </div>
              <p className="text-center font-bold text-slate-700 px-4">Параллель "Германия"</p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                <iframe src="https://www.youtube.com/embed/rVNrBCoO-Jk?start=1605" className="w-full h-full" allowFullScreen></iframe>
              </div>
              <p className="text-center font-bold text-slate-700 px-4">Параллель "Польша"</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                <iframe src="https://www.youtube.com/embed/2BG9XNun5SM" className="w-full h-full" allowFullScreen></iframe>
              </div>
              <p className="text-center font-bold text-slate-700 px-4">Как фашисты уничтожали мирных жителей?</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
