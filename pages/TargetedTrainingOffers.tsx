import React, { useEffect } from 'react';
import { Briefcase, Building2, Wrench, MapPin, Phone, Banknote, ArrowLeft, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const TargetedTrainingOffers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full animate-in fade-in duration-500 max-w-5xl mx-auto">
      
      {/* Back Link & Header */}
      <div className="mb-10">
        <Link 
          to="/abiturientam/predlozhenie-o-tselevoj-podgotovke" 
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-red-600 hover:text-red-700 font-bold">Целевая подготовка (информация для абитуриентов)</span>
        </Link>
        
        <h2 className="text-2xl md:text-4xl font-bold text-primary-900 font-display flex items-center gap-4">
          <div className="p-3 bg-accent-50 rounded-2xl shrink-0">
            <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-accent-500" />
          </div>
          Предложения о целевой подготовке
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        
        {/* Offer 1: Плещицы */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent-500"></div>
          
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-slate-50 rounded-xl shrink-0 group-hover:bg-accent-50 transition-colors">
              <Building2 className="w-8 h-8 text-slate-500 group-hover:text-accent-500 transition-colors" />
            </div>
            <p className="text-slate-800 md:text-lg pt-1 leading-relaxed text-justify">
              <strong>Открытое акционерное общество "Плещицы"</strong> информирует о возможности заключения договор на целевую подготовку специалистов в 2026 году:
            </p>
          </div>

          <div className="space-y-4 mb-6 pl-2 md:pl-16 text-slate-700 md:text-lg">
            <div className="flex items-start gap-3">
              <Wrench className="w-6 h-6 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-justify leading-relaxed">
                <strong>Техническое обслуживание и ремонт сельскохозяйственной техники</strong> (после получения <strong>базового и среднего</strong> образования).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Banknote className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
              <p className="text-justify leading-relaxed italic bg-green-50/50 p-4 rounded-xl border border-green-100">
                При заключение договоро на целевую подготовку, предусмотрена ежемесячная доплата к стипендии в размере 3 базовых величин.
              </p>
            </div>
          </div>

          <div className="pl-2 md:pl-16 flex flex-col md:flex-row gap-4 md:gap-8 pt-6 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <span className="text-slate-600 italic">Телефон для справок: 80165654733, +375291057062.</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <span className="text-slate-600 italic">Обращаться по адресу: Брестская область, Пинский район, аг.Плещицы, ул.Пинская, 23б-4, 2 этаж.</span>
            </div>
          </div>
        </div>

        {/* Offer 2: Управление по сельскому хозяйству */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary-600"></div>
          
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-slate-50 rounded-xl shrink-0 group-hover:bg-primary-50 transition-colors">
              <Building className="w-8 h-8 text-slate-500 group-hover:text-primary-600 transition-colors" />
            </div>
            <p className="text-slate-800 md:text-lg pt-1 leading-relaxed text-justify">
              <strong>Управление по сельскому хозяйству и продовольствию Пинского районного исполнительного комитета</strong> информирует о возможности заключения договор на целевую подготовку специалистов в 2026 году:
            </p>
          </div>

          <div className="space-y-4 mb-6 pl-2 md:pl-16 text-slate-700 md:text-lg">
            <div className="flex items-start gap-3">
              <Wrench className="w-6 h-6 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-justify leading-relaxed">
                <strong>Техническое обслуживание и ремонт сельскохозяйственной техники</strong> (после получения <strong>базового и среднего</strong> образования), <strong>Мелиорация земель</strong>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Banknote className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
              <p className="text-justify leading-relaxed italic bg-green-50/50 p-4 rounded-xl border border-green-100">
                При заключение договоро на целевую подготовку, предусмотрена ежемесячная доплата к стипендии. Имеется возможность заключения договоров с управлением по сельскому хозяйству и продовольствию Пинского райсполкома либо с сельскохозяйственными организациями.
              </p>
            </div>
          </div>

          <div className="pl-2 md:pl-16 flex flex-col md:flex-row gap-4 md:gap-8 pt-6 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <span className="text-slate-600 italic">Телефон для справок: 80165363508, +375291542952.</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <span className="text-slate-600 italic">Обращаться по адресу: Брестская область, г.Пинск, ул.Днепровской флотилии, 21, 5 этаж, кабинет 71.</span>
            </div>
          </div>
        </div>

        {/* Offer 3: Ласицк */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent-500"></div>
          
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-slate-50 rounded-xl shrink-0 group-hover:bg-accent-50 transition-colors">
              <Building2 className="w-8 h-8 text-slate-500 group-hover:text-accent-500 transition-colors" />
            </div>
            <p className="text-slate-800 md:text-lg pt-1 leading-relaxed text-justify">
              <strong>Открытое акционерное общество "Ласицк"</strong> информирует о возможности заключения договор на целевую подготовку специалистов в 2026 году:
            </p>
          </div>

          <div className="space-y-4 mb-6 pl-2 md:pl-16 text-slate-700 md:text-lg">
            <div className="flex items-start gap-3">
              <Wrench className="w-6 h-6 text-slate-400 shrink-0 mt-0.5" />
              <p className="text-justify leading-relaxed">
                <strong>Техническое обслуживание и ремонт сельскохозяйственной техники</strong> (после получения <strong>базового и среднего</strong> образования).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Banknote className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
              <p className="text-justify leading-relaxed italic bg-green-50/50 p-4 rounded-xl border border-green-100">
                При заключение договоро на целевую подготовку, предусмотрена ежемесячная доплата к стипендии в размере 5 базовых величин.
              </p>
            </div>
          </div>

          <div className="pl-2 md:pl-16 flex flex-col md:flex-row gap-4 md:gap-8 pt-6 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <span className="text-slate-600 italic">Телефон для справок: 80165684106, +375292107165.</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <span className="text-slate-600 italic">Обращаться по адресу: Брестская область, Пинский район, д.Ласицк, ул.Советская, 8.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TargetedTrainingOffers;
