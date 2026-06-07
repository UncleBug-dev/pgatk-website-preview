import React from 'react';
import { FileText, ChevronLeft, ChevronRight, FileDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const GraduatesDocuments: React.FC = () => {
  const documents = [
    {
      title: 'Перечень утративших силу постановлений Совета Министров Республики Беларусь, утвержденный Постановлением Совета Министров Республики Беларусь от 22.06.2011 № 821.',
      href: '/images/ObrProcess/Vipusknikam/perechen.pdf'
    },
    {
      title: 'Положение о порядке распределения, перераспределения, направления на работу, последующего направления на работу выпускников, получивших послевузовское, высшее, среднее специальное или профессионально-техническое образование, утвержденное Постановлением Совета Министров Республики Беларусь от 22.06.2011 № 821.',
      href: '/images/ObrProcess/Vipusknikam/porydok_raspr_per.pdf'
    },
    {
      title: 'Положение о целевой подготовке специалистов, рабочих, служащих, утвержденное Постановлением Совета Министров Республики Беларусь от 22.06.2011 № 821.',
      href: '/images/ObrProcess/Vipusknikam/o_celevoy.pdf'
    },
    {
      title: 'Положение о порядке возмещения в республиканский и (или) местные бюджеты средств, затраченных государством на подготовку научного работника высшей квалификации, специалиста, рабочего, служащего, утвержденное Постановлением Совета Министров Республики Беларусь от 22.06.2011 № 821.',
      href: '/images/ObrProcess/Vipusknikam/polojenie-o-poryadke-vozmescheniya-9.pdf'
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-10">
      
      {/* Intro section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm border border-white/30 hidden sm:block group-hover:-rotate-6 transition-transform">
            <FileText className="w-12 h-12 text-white" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4 backdrop-blur-sm border border-white/30">
              <span className="text-sm font-bold uppercase tracking-wider text-white">Выпускникам</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Документы</h2>
            <p className="text-lg text-emerald-100 max-w-2xl leading-relaxed">
              Нормативные правовые акты и положения, регламентирующие распределение, целевую подготовку и возмещение средств.
            </p>
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="divide-y divide-slate-100">
          {documents.map((doc, index) => (
            <a 
              key={index}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-6 p-6 md:p-8 hover:bg-slate-50 transition-colors group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-all duration-300">
                <FileDown className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-slate-700 group-hover:text-primary-900 transition-colors leading-snug mb-2">
                  {doc.title}
                </h4>
                <div className="inline-flex items-center text-sm font-bold text-accent-500 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Скачать PDF <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-200">
        <Link 
          to="/obrazovatelniy-process/vypusknikam"
          className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-600 font-bold hover:bg-slate-50 hover:text-primary-900 transition-colors shadow-sm group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
          Назад к разделам
        </Link>
      </div>
    </div>
  );
};

export default GraduatesDocuments;
