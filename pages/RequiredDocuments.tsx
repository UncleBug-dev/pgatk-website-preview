import React, { useState, useEffect } from 'react';
import { FileText, AlertCircle, Info, CheckCircle2, ChevronDown, ChevronUp, AlertTriangle, Globe2, PlusCircle, ShieldAlert, FileCheck, MapPin, UserCheck, GraduationCap } from 'lucide-react';

const AccordionItem = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-slate-200 rounded-xl mb-4 overflow-hidden bg-white shadow-sm transition-all hover:border-slate-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
      >
        <span className="font-bold text-slate-800 pr-4 md:text-lg">{title}</span>
        {isOpen ? <ChevronUp className="text-slate-500 shrink-0 w-6 h-6" /> : <ChevronDown className="text-slate-500 shrink-0 w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="p-6 border-t border-slate-200 text-slate-700 space-y-8">
          {children}
        </div>
      )}
    </div>
  );
};

const RequiredDocuments: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full animate-in fade-in duration-500 max-w-4xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-primary-900 font-display flex items-center gap-4">
          <div className="p-3 bg-accent-50 rounded-2xl">
            <FileText className="w-8 h-8 md:w-10 md:h-10 text-accent-500" />
          </div>
          Перечень документов
        </h2>
      </div>

      {/* Main Info */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-500"></div>
        <p className="text-slate-800 font-medium mb-8 leading-relaxed text-lg text-justify">
          <strong>Абитуриенты (законные представители несовершеннолетних абитуриентов или представители, действующие на основании доверенности, удостоверенной нотариально или уполномоченным должностным лицом, за исключением абитуриентов из числа иностранных граждан и лиц без гражданства, подают в приемную комиссию следующие документы:</strong>
        </p>

        <h3 className="text-xl md:text-2xl font-black text-red-600 flex items-center gap-3 mb-6 tracking-wide">
          <AlertCircle className="w-7 h-7" />
          ОБЯЗАТЕЛЬНО:
        </h3>
        
        <ul className="space-y-5 mb-8">
          <li className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors">
            <CheckCircle2 className="w-6 h-6 text-accent-500 shrink-0 mt-0.5" />
            <span className="text-slate-800 md:text-lg text-justify">- заявление на имя руководителя колледжа по установленной Министерством образования форме;</span>
          </li>
          <li className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors">
            <CheckCircle2 className="w-6 h-6 text-accent-500 shrink-0 mt-0.5" />
            <span className="text-slate-800 md:text-lg text-justify">- оригиналы документа об образовании и приложения к нему (выписки отметок);</span>
          </li>
          <li className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors">
            <CheckCircle2 className="w-6 h-6 text-accent-500 shrink-0 mt-0.5" />
            <div className="text-slate-800 md:text-lg text-justify w-full">
              - медицинскую справку о состоянии здоровья по форме, установленной Министерством здравоохранения. Форма медицинской справки <strong>с указанием годности по выбранной Вами специальности</strong>:
              <div className="mt-5 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 shadow-sm">
                <ul className="space-y-3 font-medium text-slate-700">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>Строительство зданий и сооружений</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>Строительство и эксплуатация автомобильных дорог</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Мелиорация земель</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Техническое обслуживание и ремонт сельскохозяйственной техники</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>Техническая эксплуатация подъёмно-транспортных, дорожно-строительных машин и оборудования</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors">
            <CheckCircle2 className="w-6 h-6 text-accent-500 shrink-0 mt-0.5" />
            <span className="text-slate-800 md:text-lg text-justify">- документ, удостоверяющий личность;</span>
          </li>
          <li className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors">
            <CheckCircle2 className="w-6 h-6 text-accent-500 shrink-0 mt-0.5" />
            <span className="text-slate-800 md:text-lg text-justify">- документы, подтверждающие право абитуриента на льготы при зачислении для получения среднего специального образования;</span>
          </li>
          <li className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors">
            <CheckCircle2 className="w-6 h-6 text-accent-500 shrink-0 mt-0.5" />
            <span className="text-slate-800 md:text-lg text-justify">- 6 фотографий размером 3x4 см;</span>
          </li>
        </ul>

        <div className="bg-[#eef2ff] p-6 md:p-8 rounded-2xl border border-[#c7d2fe]">
          <p className="text-base md:text-lg text-[#3730a3] leading-relaxed font-bold italic text-justify">
            В случае подачи документов от имени абитуриента его законным представителем предъявляются документы, удостоверяющие личность и статус законного представителя, и копия документа, удостоверяющего личность абитуриента. В случае подачи документов от имени абитуриента его представителем, действующим на основании доверенности, предъявляются документ, удостоверяющий личность представителя, копия документа, удостоверяющего личность абитуриента, и доверенность, удостоверенная нотариально или уполномоченным должностным лицом.
          </p>
        </div>
      </div>

      {/* Additional docs */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-400"></div>
        <h3 className="text-lg md:text-xl font-black text-slate-800 mb-6 uppercase tracking-wide text-justify flex items-center gap-3">
          <PlusCircle className="w-7 h-7 text-orange-500 shrink-0" />
          В ПРИЕМНУЮ КОМИССИЮ КОЛЛЕДЖА ПРИ НЕОБХОДИМОСТИ ДОПОЛНИТЕЛЬНО ПРЕДСТАВЛЯЮТСЯ:
        </h3>
        
        <ul className="space-y-4 mb-8 text-slate-800 md:text-lg">
          <li className="flex items-start gap-4 p-4 bg-orange-50/50 rounded-xl border border-orange-100">
            <FileCheck className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
            <span className="text-justify leading-relaxed">- договор о целевой подготовке специалиста (рабочего) со средним специальным образованием - для лиц, участвующих в конкурсе для получения среднего специального образования на условиях целевой подготовки;</span>
          </li>
        </ul>
        <p className="text-slate-600 md:text-lg mb-8 text-justify italic bg-slate-50 p-4 rounded-xl border border-slate-100">
          Приемная комиссия колледжа имеет право дополнительно запросить у абитуриента документы, необходимые для принятия соответствующего решения.
        </p>

        <div className="bg-red-50 p-6 md:p-8 rounded-2xl border border-red-200 flex flex-col md:flex-row items-start gap-6">
          <AlertTriangle className="w-10 h-10 text-red-600 shrink-0" />
          <p className="text-red-900 md:text-lg text-justify leading-relaxed">
            <strong className="text-xl block mb-2">ДОКУМЕНТ, УДОСТОВЕРЯЮЩИЙ ЛИЧНОСТЬ, ПРЕДЪЯВЛЯЕТСЯ АБИТУРИЕНТОМ ЛИЧНО.</strong> В случае подачи документов от имени абитуриента его представителем предъявляются документ, удостоверяющий личность представителя, и копия документа, удостоверяющего личность абитуриента.
          </p>
        </div>
      </div>

      {/* Foreigners */}
      <div className="bg-slate-900 p-6 md:p-8 rounded-3xl shadow-lg border border-slate-800 mb-12 text-white">
        <h3 className="text-lg md:text-xl font-black mb-6 uppercase text-justify flex items-start md:items-center gap-4 text-accent-400">
          <div className="p-2 bg-slate-800 rounded-xl shrink-0">
            <Globe2 className="w-8 h-8" />
          </div>
          АБИТУРИЕНТЫ ИЗ ЧИСЛА ИНОСТРАННЫХ ГРАЖДАН И ЛИЦ БЕЗ ГРАЖДАНСТВА (ИХ ПРЕДСТАВИТЕЛИ) подают в приемную комиссию колледжа следующие документы:
        </h3>
        
        <ul className="space-y-5 mb-8 md:text-lg text-slate-200">
          <li className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0 mt-2.5 shadow-[0_0_8px_rgba(255,102,0,0.8)]"></div>
            <span className="text-justify">- заявление на имя директора филиала по форме, установленной Министерством образования;</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0 mt-2.5 shadow-[0_0_8px_rgba(255,102,0,0.8)]"></div>
            <span className="text-justify">- оригинал свидетельства (документа) об образовании с указанием изученных предметов и полученных по ним отметок (баллов) - при условии признания в установленном порядке данных документов в Республике Беларусь;</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0 mt-2.5 shadow-[0_0_8px_rgba(255,102,0,0.8)]"></div>
            <span className="text-justify">- медицинское заключение о состоянии здоровья, выданное официальным органом здравоохранения страны, из которой прибыл абитуриент, или документ о прохождении в территориальных организациях здравоохранения, определяемых УССО по согласованию с комитетом (управлениями) по здравоохранению Минского горисполкома (облисполкомов), обязательного медицинского обследования, подтверждающего отсутствие медицинских противопоказаний к обучению в Республике Беларусь;</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0 mt-2.5 shadow-[0_0_8px_rgba(255,102,0,0.8)]"></div>
            <span className="text-justify">- сертификат об отсутствии ВИЧ-инфекции, выданный официальным органом здравоохранения страны, из которой прибыл абитуриент;</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0 mt-2.5 shadow-[0_0_8px_rgba(255,102,0,0.8)]"></div>
            <span className="text-justify">- оригинал (копию) свидетельства о рождении и (или) иной документ, подтверждающий дату рождения и гражданство (для несовершеннолетних);</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0 mt-2.5 shadow-[0_0_8px_rgba(255,102,0,0.8)]"></div>
            <span className="text-justify">- 6 (шесть) фотографий размером 3 x 4 см;</span>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0 mt-2.5 shadow-[0_0_8px_rgba(255,102,0,0.8)]"></div>
            <span className="text-justify">- свидетельство об окончании факультета довузовской подготовки, подготовительного отделения, подготовительных курсов УССО (при их окончании).</span>
          </li>
        </ul>
        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
          <p className="text-slate-300 md:text-lg text-justify italic">
            К перечисленным документам, исполненным на иностранном языке, одновременно прилагается их перевод на белорусский или русский язык, засвидетельствованный нотариально.
          </p>
        </div>
      </div>

      {/* Orphans Accordion */}
      <div className="flex items-center gap-4 mb-8 mt-16 border-b-2 border-slate-200 pb-4">
        <ShieldAlert className="w-10 h-10 text-primary-900" />
        <h3 className="text-2xl md:text-3xl font-black text-primary-900 font-display">
          Документы для приема детей-сирот и детей, оставшихся без попечения родителей
        </h3>
      </div>

      <AccordionItem title="Документы, подтверждающие статус детей-сирот (на момент подачи документов в УО абитуриент является несовершеннолетним):" defaultOpen={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-800">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><UserCheck className="w-5 h-5"/> Документы, подтверждающие факт сиротства:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg">
              <li>свидетельства о смерти родителей;</li>
              <li>справка по форме №2 из ЗАГСа о внебрачном рождении ребенка;</li>
              <li>решение суда о признании родителей безвестно отсутствующими либо умершими.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><MapPin className="w-5 h-5"/> Документы о жилье:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg">
              <li>решение о закреплении жилья за несовершеннолетними или о его отсутствии (выдается райисполкомом, сельским или поселковым советом);</li>
              <li>если это было приватизированное жилье – выписка из ЖЭС о наличии у ребенка жилья и решение исполкома о его закреплении;</li>
              <li>копия лицевого счета закрепленного жилья (для детей, проживающих в городах, городских поселках);</li>
              <li>справка о занимаемом жилом помещении и составе его семьи.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 md:col-span-2">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><GraduationCap className="w-5 h-5"/> Документы, необходимые для полного укомплектования личного дела:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg grid md:grid-cols-2 gap-x-8 gap-y-2">
              <li>Свидетельство о рождении (оригинал) или паспорт;</li>
              <li>Решение исполнительного комитета о направлении ребенка в интернатное учреждение или об установлении опеки и передаче на воспитание в опекунскую или приемную семью;</li>
              <li>Решение исполнительного комитета о снятии опеки;</li>
              <li>Справка (и) из других учебных заведений, в которых до поступления в колледж находился на государственном обеспечении;</li>
              <li>Справка о выплате подъемных (для выпускников ПТУ);</li>
              <li>Информация о ближайших родственниках (братьях, сестрах) и их местонахождении.</li>
            </ul>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem title="Документы, подтверждающие статус детей, оставшихся без попечения родителей (на момент подачи документов в УО абитуриент является несовершеннолетним):">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-800">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 md:col-span-2">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><UserCheck className="w-5 h-5"/> Документы, подтверждающие факт сиротства:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg grid md:grid-cols-2 gap-x-8 gap-y-2">
              <li>свидетельства о смерти родителей;</li>
              <li>справка по форме №2 из ЗАГСа о внебрачном рождении ребенка;</li>
              <li>решение суда о лишении родительских прав;</li>
              <li>решение суда об отобрании ребенка без лишения родительских прав;</li>
              <li>справка из отдела внутренних дел о признании родителей безвестно отсутствующими, о розыске родителей;</li>
              <li>решение суда о признании родителей недееспособными или медицинская справка, подтверждающая недееспособность родителей либо наличие заболеваний, препятствующих выполнению ими своих обязанностей, либо необходимости установления над родителями попечительства в связи с состоянием здоровья;</li>
              <li>документы об осуждении родителей (приговор суда с указанием отбывания срока наказания).</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><MapPin className="w-5 h-5"/> Документы о жилье:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg">
              <li>решение о закреплении жилья за несовершеннолетними или о его отсутствии (выдается райисполкомом, сельским или поселковым советом);</li>
              <li>если это было приватизированное жилье – выписка из ЖЭС о наличии у ребенка жилья и решение исполкома о его закреплении;</li>
              <li>копия лицевого счета закрепленного жилья (для детей проживающих в городах, городских поселках);</li>
              <li>справка о занимаемом жилом помещении и составе его семьи.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><FileText className="w-5 h-5"/> Сведения о возмещении родителями средств на содержание:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg">
              <li>решение суда о взыскании средств на содержание;</li>
              <li>сведения о местонахождении родителя (ей) и его (их) месте работы.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 md:col-span-2">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><GraduationCap className="w-5 h-5"/> Документы, необходимые для полного укомплектования личного дела:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg grid md:grid-cols-2 gap-x-8 gap-y-2">
              <li>Свидетельство о рождении (оригинал) или паспорт;</li>
              <li>Решение исполнительного комитета о направлении ребенка в интернатное учреждение или об установлении опеки и передаче на воспитание в опекунскую или приемную семью;</li>
              <li>Решение исполнительного комитета о снятии опеки;</li>
              <li>материалы о розыске родителей;</li>
              <li>Справка (и) из других учебных заведений, в которых до поступления в колледж находился на государственном обеспечении;</li>
              <li>Справка о выплате подъемных (для выпускников ПТУ);</li>
              <li>Информация о ближайших родственниках (братьях, сестрах) и их местонахождении.</li>
            </ul>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem title="Документы, подтверждающие статус лиц из числа детей-сирот(от 18 лет до 23 лет на момент подачи документов в УО):">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-800">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><UserCheck className="w-5 h-5"/> Документы, подтверждающие факт сиротства:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg">
              <li>свидетельства о смерти родителей;</li>
              <li>справка по форме №2 из ЗАГСа о внебрачном рождении ребенка;</li>
              <li>справка из отдела внутренних дел о признании родителей безвестно отсутствующими.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><MapPin className="w-5 h-5"/> Документы о жилье:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg">
              <li>решение о закреплении жилья за несовершеннолетними или о его отсутствии (выдается райисполкомом, сельским или поселковым советом);</li>
              <li>если это было приватизированное жилье – выписка из ЖЭС о наличии у ребенка жилья и решение исполкома о его закреплении;</li>
              <li>копия лицевого счета закрепленного жилья (для детей проживающих в городах, городских поселках);</li>
              <li>справка о занимаемом жилом помещении и составе его семьи.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 md:col-span-2">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><GraduationCap className="w-5 h-5"/> Документы, необходимые для полного укомплектования личного дела:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg grid md:grid-cols-2 gap-x-8 gap-y-2">
              <li>Свидетельство о рождении (оригинал) или паспорт;</li>
              <li>Решение исполнительного комитета о направлении ребенка в интернатное учреждение или об установлении опеки и передаче на воспитание в опекунскую или приемную семью;</li>
              <li>Решение исполнительного комитета о снятии опеки;</li>
              <li>Справка (и) из других учебных заведений, в которых до поступления в колледж находился на государственном обеспечении;</li>
              <li>Справка о выплате подъемных (для выпускников ПТУ);</li>
              <li>Информация о ближайших родственниках (братьях, сестрах) и их местонахождении.</li>
            </ul>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem title="Документы, подтверждающие статус лиц из числа детей, оставшихся без попечения родителей (от 18 лет до 23 лет на момент подачи документов в УО):">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-800">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 md:col-span-2">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><UserCheck className="w-5 h-5"/> Документы, подтверждающие факт сиротства:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg grid md:grid-cols-2 gap-x-8 gap-y-2">
              <li>свидетельства о смерти родителей (если родители или родитель были лишены родительских прав и умерли; или один родитель умер, а второй лишен родительских прав);</li>
              <li>справка по форме №2 из ЗАГСа о внебрачном рождении ребенка;</li>
              <li>решение суда о лишении родительских прав;</li>
              <li>решение суда об отобрании ребенка без лишения родительских прав;</li>
              <li>справка из отдела внутренних дел о признании родителей безвестно отсутствующими, о розыске родителей;</li>
              <li>решение суда о признании родителей недееспособными или медицинская справка, подтверждающая недееспособность родителей либо наличие заболеваний, препятствующих выполнению ими своих обязанностей, либо необходимости установления над родителями попечительства в связи с состоянием здоровья;</li>
              <li>документы об осуждении родителей (приговор суда с указанием отбывания срока наказания).</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><MapPin className="w-5 h-5"/> Документы о жилье:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg">
              <li>решение о закреплении жилья за несовершеннолетними или о его отсутствии (выдается райисполкомом, сельским или поселковым советом);</li>
              <li>если это было приватизированное жилье – выписка из ЖЭС о наличии у ребенка жилья и решение исполкома о его закреплении;</li>
              <li>копия лицевого счета закрепленного жилья (для детей проживающих в городах, городских поселках);</li>
              <li>справка о занимаемом жилом помещении и составе его семьи.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><FileText className="w-5 h-5"/> Сведения о возмещении родителями средств на содержание:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg">
              <li>решение суда о взыскании средств на содержание;</li>
              <li>сведения о местонахождении родителя (ей) и его (их) месте работы.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 md:col-span-2">
            <strong className="flex items-center gap-2 mb-4 text-primary-900 text-lg uppercase tracking-wide"><GraduationCap className="w-5 h-5"/> Документы, необходимые для полного укомплектования личного дела:</strong>
            <ul className="list-disc pl-5 space-y-2 text-justify md:text-lg grid md:grid-cols-2 gap-x-8 gap-y-2">
              <li>Свидетельство о рождении (оригинал) или паспорт;</li>
              <li>Решение исполнительного комитета о направлении ребенка в интернатное учреждение или об установлении опеки и передаче на воспитание в опекунскую или приемную семью;</li>
              <li>Решение исполнительного комитета о снятии опеки;</li>
              <li>материалы о розыске родителей;</li>
              <li>Справка (и) из других учебных заведений, в которых до поступления в колледж находился на государственном обеспечении;</li>
              <li>Справка о выплате подъемных (для выпускников ПТУ);</li>
              <li>Информация о ближайших родственниках (братьях, сестрах) и их местонахождении.</li>
            </ul>
          </div>
        </div>
      </AccordionItem>

    </div>
  );
};

export default RequiredDocuments;
