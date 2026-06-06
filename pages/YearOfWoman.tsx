import React from 'react';
import { Flower2, ArrowLeft, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const YearOfWoman: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 md:pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Вернуться на главную
        </Link>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-rose-600 to-rose-400 p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full backdrop-blur-sm">
                <Flower2 className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">2026 - Год белорусской женщины</h1>
            <p className="text-rose-100 text-lg md:text-xl max-w-2xl">
              Информация, посвященная тематике 2026 года в Республике Беларусь.
            </p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl font-medium text-slate-800 mb-6 leading-relaxed">
                Президент Беларуси Александр Лукашенко подписал Указ № 1, которым 2026 год объявлен Годом белорусской женщины.
              </p>

              <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl mb-8">
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-rose-800 font-bold text-lg mb-1">
                      Об объявлении 2026 года Годом белорусской женщины
                    </h3>
                    <p className="text-rose-600 font-medium">Указ № 1 от 1 января 2026 г.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Документ принят в целях формирования национального образа женщины-труженицы, 
                  популяризации роли женщин в сохранении и развитии общества.
                </p>
                <p>
                  Правительству с участием облисполкомов, Минского горисполкома поручено разработать 
                  и утвердить республиканский план мероприятий по проведению в 2026 году Года 
                  белорусской женщины. Также Правительство будет координировать деятельность 
                  государственных органов, других организаций по выполнению этого плана.
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100">
                <a 
                  href="https://president.gov.by/ru/documents/ukaz-no-1-ot-1-yanvarya-2026-g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-rose-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Источник: president.gov.by
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearOfWoman;
