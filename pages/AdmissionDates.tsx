import React, { useEffect } from 'react';
import { Calendar, Globe2, Leaf, Clock, FileText } from 'lucide-react';

const AdmissionDates: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full animate-in fade-in duration-500 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-primary-900 font-display flex items-center gap-4 text-justify">
          <div className="p-3 bg-accent-50 rounded-2xl shrink-0">
            <Calendar className="w-8 h-8 md:w-10 md:h-10 text-accent-500" />
          </div>
          Сроки приема документов и зачисление
        </h2>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mb-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-600"></div>
        <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed">
          <strong>Сроки проведения вступительной кампании для получения среднего специального образования в <span className="text-red-600 font-black">2025</span> году</strong>
        </p>
      </div>

      <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border border-slate-200 mb-12">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-primary-900 text-white">
              <th className="p-5 border-b border-primary-800 font-bold text-center w-1/3"></th>
              <th className="p-5 border-b border-l border-primary-800 font-bold text-center w-1/3 leading-relaxed">На основе общего базового образования</th>
              <th className="p-5 border-b border-l border-primary-800 font-bold text-center w-1/3 leading-relaxed">На основе общего среднего образования<br/>(профессионально-технического с общим средним образованием)</th>
            </tr>
          </thead>
          <tbody className="text-slate-800 md:text-lg">
            
            {/* ПРИЕМ ДОКУМЕНТОВ */}
            <tr className="bg-slate-100/80">
              <td className="p-4 border-b border-slate-200"></td>
              <td className="p-4 border-b border-l border-slate-200 text-center font-black uppercase text-slate-700 tracking-wider" colSpan={2}>
                ПРИЕМ ДОКУМЕНТОВ
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-5 border-b border-slate-200 font-bold">за счет средств бюджета</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">с 18 июля по 1 августа</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">с 18 июля по 06 августа</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-5 border-b border-slate-200 font-bold">на платной основе</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">с 18 июля по 12 августа</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">с 18 июля по 14 августа</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-5 border-b border-slate-200 italic text-slate-600 text-base">(от абитуриентов, которые будут сдавать вступительные испытания по специальности)</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">по 1 августа</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">по 06 августа</td>
            </tr>

            {/* ВСТУПИТЕЛЬНЫЕ ИСПЫТАНИЯ */}
            <tr className="bg-slate-100/80">
              <td className="p-4 border-b border-slate-200"></td>
              <td className="p-4 border-b border-l border-slate-200 text-center font-black uppercase text-slate-700 tracking-wider" colSpan={2}>
                ВСТУПИТЕЛЬНЫЕ ИСПЫТАНИЯ
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-5 border-b border-slate-200"></td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium text-accent-700">с 02 по 07 августа</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium text-accent-700">с 07 по 10 августа</td>
            </tr>

            {/* ЗАЧИСЛЕНИЕ */}
            <tr className="bg-slate-100/80">
              <td className="p-4 border-b border-slate-200"></td>
              <td className="p-4 border-b border-l border-slate-200 text-center font-black uppercase text-slate-700 tracking-wider" colSpan={2}>
                ЗАЧИСЛЕНИЕ
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-5 border-b border-slate-200 font-bold">за счет средств бюджета</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">по 05 августа</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">по 09 августа</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-5 border-b border-slate-200 font-bold">на платной основе</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">по 15 августа</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">по 17 августа</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-5 border-b border-slate-200 italic text-slate-600 text-base">(от абитуриентов, которые будут сдавать вступительные испытания по специальности)</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">по 10 августа</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">по 12 августа</td>
            </tr>

            {/* ДОПОЛНИТЕЛЬНЫЙ НАБОР (ПРИ НЕОБХОДИМОСТИ) */}
            <tr className="bg-slate-100/80">
              <td className="p-4 border-b border-slate-200"></td>
              <td className="p-4 border-b border-l border-slate-200 text-center font-black uppercase text-slate-700 tracking-wider" colSpan={2}>
                ДОПОЛНИТЕЛЬНЫЙ НАБОР (ПРИ НЕОБХОДИМОСТИ)
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-5 border-b border-slate-200">информирование о наборе и прием документов (бюджет)</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">по 11 августа</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium">по 13 августа</td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-5 border-b border-slate-200">зачисление (бюджет)</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium text-primary-700">12 августа</td>
              <td className="p-5 border-b border-l border-slate-200 text-center font-medium text-primary-700">14 августа</td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        {/* Foreigners */}
        <div className="bg-slate-900 p-6 md:p-8 rounded-3xl shadow-lg border border-slate-800 text-white relative overflow-hidden">
          <div className="absolute -right-12 -top-12 opacity-10">
            <Globe2 className="w-48 h-48" />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-6 text-justify flex items-center gap-3 text-accent-400 relative z-10">
            <Globe2 className="w-8 h-8 shrink-0" />
            Прием документов от иностранных граждан и лиц без гражданства:
          </h3>
          <div className="space-y-6 text-slate-300 md:text-lg relative z-10">
            <p className="text-justify leading-relaxed">
              за счет средств бюджета или на платной основе в соответствии с международными договорами Республики Беларусь, на платной основе по результатам итоговой аттестации при освоении содержания образовательной программы подготовки лиц к поступлению в учреждения образования Республики Беларусь, за счет грантов на обучение – <strong className="text-white">по 1 августа;</strong>
            </p>
            <p className="text-justify leading-relaxed">
              на платной основе по результатам собеседования, устанавливающего уровень владения ими языком, на котором осуществляется образовательный процесс, дополнительного собеседования по специальности или проверки на уровень физической подготовленности, – <strong className="text-white">по 15 октября.</strong>
            </p>
          </div>
        </div>

        {/* Agriculture */}
        <div className="bg-[#f0fdf4] p-6 md:p-8 rounded-3xl shadow-sm border border-[#bbf7d0] relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 opacity-20">
            <Leaf className="w-40 h-40 text-green-600" />
          </div>
          <div className="flex items-start gap-4 relative z-10">
            <div className="p-3 bg-green-100 rounded-xl shrink-0 mt-1">
              <Leaf className="w-8 h-8 text-green-700" />
            </div>
            <p className="text-slate-800 md:text-lg text-justify leading-relaxed">
              На сельскохозяйственные специальности в заочной форме за счет средств бюджета или на платной основе прием документов – <strong>с 15 октября по 30 ноября</strong>; зачисление – <strong>по 10 декабря</strong>. Дополнительный набор: информирование и прием документов – <strong>по 11 декабря</strong>, зачисление – <strong>12 декабря.</strong>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdmissionDates;
