import React, { useEffect } from 'react';
import { FileText, Users, Wrench, HardHat, Building2, Droplet, Tractor } from 'lucide-react';

const BUDGET_PLAN = [
  {
    profile: '07 Инженерные, обрабатывающие и строительные отрасли',
    spec: '5-04-0715-20 Техническая эксплуатация подъёмно-транспортных, дорожно-строительных машин и оборудования',
    icon: Wrench,
    contracts: '27/27',
    total: '28',
    fullTimeTotal: '28',
    fullTime9: '28',
    fullTime11: '',
    fullTimePTO: '',
    partTimeTotal: '',
    partTime11: '',
    partTimePTO: '',
    eveningTotal: '',
  },
  {
    profile: '07 Инженерные, обрабатывающие и строительные отрасли',
    spec: '5-04-0732-01 Строительство зданий и сооружений',
    icon: HardHat,
    contracts: '45/40',
    total: '68',
    fullTimeTotal: '53',
    fullTime9: '28',
    fullTime11: '25',
    fullTimePTO: '',
    partTimeTotal: '15',
    partTime11: '15',
    partTimePTO: '',
    eveningTotal: '',
  },
  {
    profile: '07 Инженерные, обрабатывающие и строительные отрасли',
    spec: '5-04-0732-08 Строительство и эксплуатация автомобильных дорог',
    icon: Building2,
    contracts: '21/18',
    total: '28',
    fullTimeTotal: '28',
    fullTime9: '28',
    fullTime11: '',
    fullTimePTO: '',
    partTimeTotal: '',
    partTime11: '',
    partTimePTO: '',
    eveningTotal: '',
  },
  {
    profile: '08 Сельское, лесное, рыбное хозяйство и ветеринария',
    spec: '5-04-0811-03 Мелиорация земель',
    icon: Droplet,
    contracts: '43/35',
    total: '56',
    fullTimeTotal: '56',
    fullTime9: '56',
    fullTime11: '',
    fullTimePTO: '',
    partTimeTotal: '',
    partTime11: '',
    partTimePTO: '',
    eveningTotal: '',
  },
  {
    profile: '08 Сельское, лесное, рыбное хозяйство и ветеринария',
    spec: '5-04-0812-01 Техническое обслуживание и ремонт сельскохозяйственной техники',
    icon: Tractor,
    contracts: '70/70',
    total: '96',
    fullTimeTotal: '81',
    fullTime9: '56',
    fullTime11: '25',
    fullTimePTO: '',
    partTimeTotal: '15',
    partTime11: '15',
    partTimePTO: '',
    eveningTotal: '',
  }
];

const PAID_PLAN = [
  {
    profile: '07 Инженерные, обрабатывающие и строительные отрасли',
    spec: '5-04-0715-20 Техническая эксплуатация подъёмно-транспортных, дорожно-строительных машин и оборудования',
    icon: Wrench,
    total: '2',
    fullTimeTotal: '2',
    fullTime9: '2',
    fullTime11: '',
    fullTimePTO: '',
    partTimeTotal: '',
    partTime11: '',
    partTimePTO: '',
    eveningTotal: '',
  },
  {
    profile: '07 Инженерные, обрабатывающие и строительные отрасли',
    spec: '5-04-0732-01 Строительство зданий и сооружений',
    icon: HardHat,
    total: '7',
    fullTimeTotal: '2',
    fullTime9: '2',
    fullTime11: '',
    fullTimePTO: '',
    partTimeTotal: '5',
    partTime11: '5',
    partTimePTO: '',
    eveningTotal: '',
  },
  {
    profile: '07 Инженерные, обрабатывающие и строительные отрасли',
    spec: '5-04-0732-08 Строительство и эксплуатация автомобильных дорог',
    icon: Building2,
    total: '2',
    fullTimeTotal: '2',
    fullTime9: '2',
    fullTime11: '',
    fullTimePTO: '',
    partTimeTotal: '',
    partTime11: '',
    partTimePTO: '',
    eveningTotal: '',
  },
  {
    profile: '08 Сельское, лесное, рыбное хозяйство и ветеринария',
    spec: '5-04-0812-01 Техническое обслуживание и ремонт сельскохозяйственной техники',
    icon: Tractor,
    total: '4',
    fullTimeTotal: '4',
    fullTime9: '4',
    fullTime11: '',
    fullTimePTO: '',
    partTimeTotal: '',
    partTime11: '',
    partTimePTO: '',
    eveningTotal: '',
  }
];

const AdmissionPlan: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full animate-in fade-in duration-500">
      
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-primary-900 font-display flex items-center gap-3">
          <Users className="w-8 h-8 text-accent-500" />
          Контрольные цифры приема
        </h2>
        <a 
          href="https://disk.yandex.com/i/ziflzqH5nykAzA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white border-2 border-slate-200 text-slate-700 font-bold py-2.5 px-6 rounded-xl hover:bg-slate-50 hover:border-accent-500 hover:text-accent-600 transition-all shadow-sm whitespace-nowrap"
        >
          <FileText className="w-5 h-5 mr-2" />
          Смотреть в PDF
        </a>
      </div>

      <div className="mb-8 text-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500"></div>
        <p className="font-bold text-lg md:text-xl text-primary-900 leading-relaxed">
          Контрольные цифры приема для получения среднего специального образования в 2025 году<br/>
          в учреждения образования, подчиненные главному управлению по образованию Брестского облисполкома<br/>
          <span className="text-accent-600 uppercase tracking-wider text-sm mt-2 block">(за счет средств бюджета)</span>
        </p>
      </div>

      {/* Budget Section */}
      <div className="mb-16 overflow-x-auto border border-slate-300 shadow-xl custom-scrollbar rounded-xl bg-white">
        <table className="w-full text-center border-collapse min-w-[1000px] text-sm">
          <thead className="bg-primary-900 text-white">
            <tr>
              <th rowSpan={5} className="p-3 border border-white/20 align-middle text-left font-medium w-[340px]">
                Код и наименование профиля образования, специальности, квалификации<br/>(с указанием разряда)*
              </th>
              <th rowSpan={5} className="p-3 border border-white/20 align-middle font-medium w-28 whitespace-pre-wrap">
                Договоры о взаимодействии, заявки на подготовку / Автоматизированная система, человек
              </th>
              <th colSpan={9} className="p-3 border border-white/20 font-bold text-base tracking-wide bg-slate-900/40">Контрольные цифры приема, человек</th>
            </tr>
            <tr>
              <th rowSpan={4} className="p-2 border border-white/20 align-middle font-medium w-16">всего</th>
              <th colSpan={8} className="p-2 border border-white/20 font-medium">в том числе по формам получения образования</th>
            </tr>
            <tr>
              <th colSpan={4} className="p-2 border border-white/20 font-medium bg-slate-900/20">очная (дневная)</th>
              <th colSpan={3} className="p-2 border border-white/20 font-medium">заочная</th>
              <th rowSpan={3} className="p-2 border border-white/20 align-middle font-medium w-16 whitespace-pre-wrap leading-tight">очная (вечерняя)</th>
            </tr>
            <tr>
              <th rowSpan={2} className="p-2 border border-white/20 align-middle font-medium w-16">всего</th>
              <th colSpan={3} className="p-2 border border-white/20 font-medium">в том числе на основе</th>
              <th rowSpan={2} className="p-2 border border-white/20 align-middle font-medium w-16">всего</th>
              <th colSpan={2} className="p-2 border border-white/20 font-medium">в том числе на основе</th>
            </tr>
            <tr className="text-xs font-normal">
              <th className="p-2 border border-white/20 align-middle w-20 leading-tight">общего базового образования</th>
              <th className="p-2 border border-white/20 align-middle w-20 leading-tight">общего среднего образования</th>
              <th className="p-2 border border-white/20 align-middle w-24 leading-tight">профессионально-технического образования</th>
              <th className="p-2 border border-white/20 align-middle w-20 leading-tight">общего среднего образования</th>
              <th className="p-2 border border-white/20 align-middle w-24 leading-tight">профессионально-технического образования</th>
            </tr>
            <tr>
              <th colSpan={11} className="p-3 border border-white/20 bg-primary-800 font-bold text-sm tracking-wide uppercase">
                За счет средств республиканского и (или) местных бюджетов
              </th>
            </tr>
            <tr>
              <th colSpan={11} className="p-3 border border-white/20 bg-slate-800 font-bold text-sm tracking-wide text-accent-400 uppercase">
                Учреждение образования «Пинский государственный аграрно-технический колледж имени А.Е.Клещева»
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {BUDGET_PLAN.map((item, idx) => (
              <tr key={idx} className="hover:bg-blue-50/50 transition-colors group">
                <td className="p-4 border border-slate-200 text-left">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2.5 bg-primary-50 rounded-xl text-primary-600 shrink-0 shadow-sm border border-primary-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-1">{item.profile}</div>
                      <div className="font-bold text-slate-800 leading-snug">{item.spec}</div>
                    </div>
                  </div>
                </td>
                <td className="p-2 border border-slate-200 text-slate-500 font-medium">{item.contracts}</td>
                <td className="p-2 border border-slate-200 font-black text-xl text-accent-600 bg-accent-50/30">{item.total}</td>
                <td className="p-2 border border-slate-200 font-bold text-lg text-primary-900 bg-slate-50">{item.fullTimeTotal}</td>
                <td className="p-2 border border-slate-200 text-slate-600">{item.fullTime9}</td>
                <td className="p-2 border border-slate-200 text-slate-600">{item.fullTime11}</td>
                <td className="p-2 border border-slate-200 text-slate-600">{item.fullTimePTO}</td>
                <td className="p-2 border border-slate-200 font-bold text-lg text-primary-900 bg-slate-50">{item.partTimeTotal}</td>
                <td className="p-2 border border-slate-200 text-slate-600">{item.partTime11}</td>
                <td className="p-2 border border-slate-200 text-slate-600">{item.partTimePTO}</td>
                <td className="p-2 border border-slate-200 text-slate-600">{item.eveningTotal}</td>
              </tr>
            ))}
            <tr className="bg-slate-100 border-t-2 border-slate-300">
              <td className="p-5 border border-slate-200 text-right font-black uppercase text-primary-900 tracking-widest text-sm">
                Итого по учреждению образования
              </td>
              <td className="p-2 border border-slate-200 font-bold text-slate-500">206/190</td>
              <td className="p-2 border border-slate-200 font-black text-2xl text-accent-600 bg-accent-100/50">276</td>
              <td className="p-2 border border-slate-200 font-black text-xl text-primary-900 bg-slate-200/50">246</td>
              <td className="p-2 border border-slate-200 font-bold text-primary-900">196</td>
              <td className="p-2 border border-slate-200 font-bold text-primary-900">50</td>
              <td className="p-2 border border-slate-200"></td>
              <td className="p-2 border border-slate-200 font-black text-xl text-primary-900 bg-slate-200/50">30</td>
              <td className="p-2 border border-slate-200 font-bold text-primary-900">30</td>
              <td className="p-2 border border-slate-200"></td>
              <td className="p-2 border border-slate-200"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-8 text-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-700 to-slate-900"></div>
        <p className="font-bold text-lg md:text-xl text-slate-800 leading-relaxed">
          Цифры приема для получения среднего специального образования в 2025 году<br/>
          в учреждения образования, подчиненные главному управлению по образованию Брестского облисполкома<br/>
          <span className="text-slate-500 uppercase tracking-wider text-sm mt-2 block">(на платной основе)</span>
        </p>
      </div>

      {/* Paid Section */}
      <div className="mb-12 overflow-x-auto border border-slate-300 shadow-xl custom-scrollbar rounded-xl bg-white">
        <table className="w-full text-center border-collapse min-w-[1000px] text-sm">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th rowSpan={5} className="p-3 border border-white/10 align-middle text-left font-medium w-[340px]">
                Код и наименование профиля образования, специальности, квалификации (с указанием разряда)
              </th>
              <th colSpan={9} className="p-3 border border-white/10 font-bold text-base tracking-wide bg-slate-900">Цифры приема, чел.</th>
            </tr>
            <tr>
              <th rowSpan={4} className="p-2 border border-white/10 align-middle font-medium w-16">всего</th>
              <th colSpan={8} className="p-2 border border-white/10 font-medium">в том числе по формам получения обучения</th>
            </tr>
            <tr>
              <th colSpan={4} className="p-2 border border-white/10 font-medium bg-slate-900/50">очная (дневная)</th>
              <th colSpan={3} className="p-2 border border-white/10 font-medium">заочная</th>
              <th rowSpan={3} className="p-2 border border-white/10 align-middle font-medium w-16 whitespace-pre-wrap leading-tight">очная (вечерняя)</th>
            </tr>
            <tr>
              <th rowSpan={2} className="p-2 border border-white/10 align-middle font-medium w-16">всего</th>
              <th colSpan={3} className="p-2 border border-white/10 font-medium">в том числе на основе</th>
              <th rowSpan={2} className="p-2 border border-white/10 align-middle font-medium w-16">всего</th>
              <th colSpan={2} className="p-2 border border-white/10 font-medium">в том числе на основе</th>
            </tr>
            <tr className="text-xs font-normal">
              <th className="p-2 border border-white/10 align-middle w-20 leading-tight">общего базового образования</th>
              <th className="p-2 border border-white/10 align-middle w-20 leading-tight">общего среднего образования</th>
              <th className="p-2 border border-white/10 align-middle w-24 leading-tight">профессионально-технического образования</th>
              <th className="p-2 border border-white/10 align-middle w-20 leading-tight">общего среднего образования</th>
              <th className="p-2 border border-white/10 align-middle w-24 leading-tight">профессионально-технического образования</th>
            </tr>
            <tr>
              <th colSpan={10} className="p-3 border border-white/10 bg-slate-700 font-bold text-sm tracking-wide uppercase">
                На платной основе
              </th>
            </tr>
            <tr>
              <th colSpan={10} className="p-3 border border-white/10 bg-primary-900 font-bold text-sm tracking-wide text-accent-400 uppercase">
                Учреждение образования «Пинский государственный аграрно-технический колледж имени А.Е.Клещева»
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {PAID_PLAN.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                <td className="p-4 border border-slate-200 text-left">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2.5 bg-slate-100 rounded-xl text-slate-600 shrink-0 shadow-sm border border-slate-200 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-1">{item.profile}</div>
                      <div className="font-bold text-slate-800 leading-snug">{item.spec}</div>
                    </div>
                  </div>
                </td>
                <td className="p-2 border border-slate-200 font-black text-xl text-accent-600 bg-accent-50/30">{item.total}</td>
                <td className="p-2 border border-slate-200 font-bold text-lg text-slate-800 bg-slate-50">{item.fullTimeTotal}</td>
                <td className="p-2 border border-slate-200 text-slate-600">{item.fullTime9}</td>
                <td className="p-2 border border-slate-200 text-slate-600">{item.fullTime11}</td>
                <td className="p-2 border border-slate-200 text-slate-600">{item.fullTimePTO}</td>
                <td className="p-2 border border-slate-200 font-bold text-lg text-slate-800 bg-slate-50">{item.partTimeTotal}</td>
                <td className="p-2 border border-slate-200 text-slate-600">{item.partTime11}</td>
                <td className="p-2 border border-slate-200 text-slate-600">{item.partTimePTO}</td>
                <td className="p-2 border border-slate-200 text-slate-600">{item.eveningTotal}</td>
              </tr>
            ))}
            <tr className="bg-slate-100 border-t-2 border-slate-300">
              <td className="p-5 border border-slate-200 text-right font-black uppercase text-slate-800 tracking-widest text-sm">
                Итого по учреждению образования
              </td>
              <td className="p-2 border border-slate-200 font-black text-2xl text-accent-600 bg-accent-100/50">15</td>
              <td className="p-2 border border-slate-200 font-black text-xl text-slate-900 bg-slate-200/50">10</td>
              <td className="p-2 border border-slate-200 font-bold text-slate-800">10</td>
              <td className="p-2 border border-slate-200"></td>
              <td className="p-2 border border-slate-200"></td>
              <td className="p-2 border border-slate-200 font-black text-xl text-slate-900 bg-slate-200/50">5</td>
              <td className="p-2 border border-slate-200 font-bold text-slate-800">5</td>
              <td className="p-2 border border-slate-200"></td>
              <td className="p-2 border border-slate-200"></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdmissionPlan;
