import React from 'react';
import { Building2, Briefcase } from 'lucide-react';

const specialties = [
  {
    code: "5-04-0715-20",
    name: "Техническая эксплуатация подъемно-транспортных, дорожно-строительных машин и оборудования",
    enterprises: [
      "Коммунальное мелиоративное унитарное предприятие «Жлобинское ПМС»",
      "Открытое акционерное общество «Агростройфирма ПМК-74 – Налибоки»",
      "Коммунальное мелиоративное унитарное предприятие «Калинковичское ПМС»",
      "Государственное объединение «Гомельмелиоводхоз»",
      "Областное унитарное предприятие «Гродномелиоводхоз»",
      "Государственное объединение «Боестмелиоводхоз»",
      "Государственное объединение «Белводхоз»"
    ]
  },
  {
    code: "5-04-0812-01",
    name: "Техническое обслуживание и ремонт сельскохозяйственной техники",
    enterprises: [
      "Открытое акционерное общество «Лядецкий», Столинский район",
      "Коммунальное сельскохозяйственное унитарное предприятие «Бережное», Столинский район",
      "Коммунальное сельскохозяйственное унитарное предприятие «Припять – 2009», Столинский район",
      "Открытое акционерное общество «Машеровский», Ивановский район",
      "Открытое акционерное общество «Бакуново», Ивановский район",
      "Открытое акционерное общество «Тышковичи-Агро», Ивановский район",
      "Открытое акционерное общество «Ласицк», Пинский район",
      "Открытое акционерное общество «Плещицы», Пинский район",
      "Открытое акционерное общество «Ставокский», Пинский район",
      "филиал «Невель» ОАО «Пинский мясокомбинат»",
      "Открытое акционерное общество «Валище», Пинский район",
      "Открытое акционерное общество «Логишин», Пинский район",
      "Сельскохозяйственное унитарное предприятие «Кончицы-Агро»",
      "Открытое акционерное общество «Молотковичи», Пинский район"
    ]
  },
  {
    code: "5-04-0811-03",
    name: "Мелиорация земель",
    enterprises: [
      "Коммунальное мелиоративное унитарное предприятие «Жлобинское ПМС»",
      "Коммунальное мелиоративное унитарное предприятие «Калинковичское ПМС»",
      "Государственное объединение «Гомельмелиоводхоз»",
      "Областное унитарное предприятие «Гродномелиоводхоз»",
      "Государственное объединение «Боестмелиоводхоз»",
      "Государственное объединение «Белводхоз»",
      "Унитарное предприятие «Столбцовское ПМС»",
      "Унитарное предприятие «Барановичское ПМС»",
      "Унитарное предприятие «Ганцевичское ПМС»",
      "филиал ПМК-54 ГУПП «Брестводстрой» (д. Сигневичи, Берёзовский район)"
    ]
  },
  {
    code: "5-04-0732-01",
    name: "Строительство зданий и сооружений",
    enterprises: [
      "Открытое акционерное общество «Пинское РСУ»",
      "Закрытое акционерное общество «Холдинговая компания «Пинскдрев»",
      "Открытое акционерное общество «Строительный трест № 2» г. Пинск",
      "Республиканское унитарное предприятие «Белэнергострой» - управляющая компания холдинга",
      "ПМК – 79 Открытое акционерное общество «Солигорскводстрой»",
      "Открытое акционерное общество «Пинсксовхозстрой»",
      "ГО «Брестоблсельстрой»",
      "КУП «Брестжилстрой»"
    ]
  },
  {
    code: "5-04-0732-08",
    name: "Строительство и эксплуатация автомобильных дорог",
    enterprises: [
      "Коммунальное дочернее унитарное предприятие «Специализированное строительное управление № 4 государственного предприятия «Управление дорожно-мостового строительства и благоустройства Мингорисполкома»",
      "Открытое акционерное общество «Дорожно-строительный трест № 4 г. Брест»",
      "филиал «Дорожно-эксплуатационное управление № 26» г. Пинск",
      "филиал «Дорожно-строительное управление № 8» г. Пинск",
      "филиал «Дорожно-эксплуатационное управление № 22» г. Дрогичин",
      "Коммунальное унитарное производственное предприятие «ЖРЭУ г. Пинска»",
      "ОАО «ДСТ №1 г. Витебск» РУП Белавтодор»",
      "ОАО «ДСТ №5 г. Минск» РУП Белавтодор»"
    ]
  }
];

const BaseEnterprises: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-12">
      
      {/* Intro section */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20 backdrop-blur-sm">
            <Briefcase className="w-5 h-5 text-accent-400" />
            <span className="text-sm font-bold uppercase tracking-wider text-white">Трудоустройство</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Работа с базовыми предприятиями</h2>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            Колледж активно сотрудничает с ведущими предприятиями и организациями, обеспечивая качественную практическую подготовку и надежное первое рабочее место для наших выпускников.
          </p>
        </div>
      </div>

      {/* Specialties list */}
      <div className="space-y-8">
        {specialties.map((specialty, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="bg-slate-50 border-b border-slate-100 p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-500"></div>
              <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center relative z-10">
                <div>
                  <div className="inline-block bg-accent-100 text-accent-700 text-sm font-bold px-3 py-1 rounded-full mb-3">
                    Специальность
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-primary-900 leading-tight">
                    <span className="text-accent-600 block mb-1 md:inline md:mb-0 md:mr-3">{specialty.code}</span>
                    {specialty.name}
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h4 className="text-lg font-bold text-slate-800 mb-6 font-display">Базовые предприятия:</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {specialty.enterprises.map((enterprise, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shadow-sm">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <p className="text-slate-700 font-medium leading-snug">{enterprise}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseEnterprises;
