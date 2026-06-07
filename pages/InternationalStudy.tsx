import React from 'react';
import { Globe, FileText, CheckCircle2, Phone, Mail, MapPin, Download, ChevronRight } from 'lucide-react';

const InternationalStudy: React.FC = () => {
  const countries = [
    {
      name: 'Республика Казахстан',
      flag: '/images/ObrProcess/ObuchenieZaRubeshom/Kazahstan.png',
      pdf: '/images/ObrProcess/ObuchenieZaRubeshom/Respublika_Kazachstan.pdf'
    },
    {
      name: 'Кыргызская Республика',
      flag: '/images/ObrProcess/ObuchenieZaRubeshom/Kirgizskay.png',
      pdf: '/images/ObrProcess/ObuchenieZaRubeshom/Kirgizskay_Respublika.pdf'
    },
    {
      name: 'Республика Таджикистан',
      flag: '/images/ObrProcess/ObuchenieZaRubeshom/Tadshikistan.png',
      pdf: '/images/ObrProcess/ObuchenieZaRubeshom/Respublika_Tadshikistan.pdf'
    },
    {
      name: 'Туркменистан',
      flag: '/images/ObrProcess/ObuchenieZaRubeshom/Turkmenistan.png',
      pdf: '/images/ObrProcess/ObuchenieZaRubeshom/Turkmenistan.pdf'
    },
    {
      name: 'Республика Молдова',
      flag: '/images/ObrProcess/ObuchenieZaRubeshom/Moldova.png',
      pdf: '/images/ObrProcess/ObuchenieZaRubeshom/Moldova.pdf'
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-8">
      
      {/* Header section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl backdrop-blur-sm border border-white/30 hidden md:block group-hover:rotate-12 transition-transform">
            <Globe className="w-16 h-16 text-white" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4 backdrop-blur-sm border border-white/30">
              <span className="text-sm font-bold uppercase tracking-wider text-white">Образовательный процесс</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Обучение в рамках международных договоров</h2>
            <p className="text-lg text-indigo-100 max-w-3xl leading-relaxed">
              В целях реализации международных договоров о сотрудничестве в сфере образования с иностранными государствами информируем о возможности обучения граждан Республики Беларусь за рубежом.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content - Requirements */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-primary-900 mb-6 border-b border-slate-100 pb-4">
              Необходимые документы для участия в конкурсе
            </h3>
            <p className="text-slate-600 mb-6 text-lg">
              Для участия в конкурсном отборе кандидатам необходимо предоставить в кабинет 211 (г. Пинск, ул. Иркутско-Пинской дивизии, 25):
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <div className="text-slate-700">
                  <span className="font-bold">Анкета установленного образца</span>, заполненная печатными буквами с фотографией, прикрепленной в правом верхнем углу анкеты.
                  <a href="/images/ObrProcess/ObuchenieZaRubeshom/Anketa.docx" className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 font-bold ml-2 mt-1" download>
                    <Download className="w-4 h-4" /> Скачать анкету (.docx)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <span className="text-slate-700">
                  <span className="font-bold">Характеристика</span> (с указанием личностных качеств кандидата, включая моральные качества, склонность к творческому мышлению, коммуникабельность) и информации о достижениях кандидата в учебе, научно-исследовательской и (или) инновационной деятельности, подписанной руководителем учреждения образования.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <span className="text-slate-700">
                  <span className="font-bold">Копии документов:</span> зачетной книжки и (или) диплома, аттестата, выписки текущей успеваемости.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <span className="text-slate-700">
                  <span className="font-bold">Материалы, характеризующие склонность к научно-исследовательской деятельности</span> (список и копии опубликованных научных работ, отчеты о проведенных исследованиях, дипломы победителя республиканских конкурсов, олимпиад и конкурсов по учебным дисциплинам и другое).
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <span className="text-slate-700">
                  <span className="font-bold">Копии страниц документа, удостоверяющего личность</span>, содержащих фамилию, собственное имя, отчество, число, месяц, год и место рождения, номер документа, срок его действия и дату выдачи.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <span className="text-slate-700">
                  <span className="font-bold">Рекомендации научного руководителя</span> (научного консультанта), а при его отсутствии – руководителя структурного подразделения.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar - Countries & Contacts */}
        <div className="space-y-8">
          
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              Информация по странам
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Основные условия и возможности обучения граждан Республики Беларусь в 2024/2025 учебном году в учреждениях высшего образования:
            </p>
            <div className="space-y-3">
              {countries.map((country, idx) => (
                <a 
                  key={idx}
                  href={country.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group"
                >
                  <img src={country.flag} alt={`Флаг ${country.name}`} className="w-8 object-contain drop-shadow-sm rounded-sm" />
                  <span className="flex-1 font-medium text-slate-700 group-hover:text-indigo-700 transition-colors text-sm">
                    {country.name}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
            <h3 className="text-xl font-bold text-orange-900 mb-4">Дополнительная консультация</h3>
            <p className="text-orange-800 text-sm mb-6 font-medium">
              Учебный центр международного сотрудничества в сфере образования ГУО «Республиканский институт высшей школы»
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-600 shrink-0" />
                <div>
                  <p className="font-bold text-orange-900">+375 17 200 90 37</p>
                  <p className="text-xs text-orange-700">с 9:00 до 13:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-600 shrink-0" />
                <a href="mailto:icecinf@gmail.com" className="font-bold text-orange-900 hover:text-orange-700 transition-colors">
                  icecinf@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 shrink-0" />
                <p className="text-sm text-orange-900">
                  220007, г. Минск, ул. Московская, 15, кабинеты №№ 727, 720
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InternationalStudy;
