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
          </div>
          
          <div className="p-8 md:p-12">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl font-medium text-slate-800 mb-6 leading-relaxed">
                Президент Беларуси Александр Лукашенко подписал Указ № 1, которым 2026 год объявлен Годом белорусской женщины.
              </p>

              <a 
                href="https://president.gov.by/ru/documents/ukaz-no-1-ot-1-anvara-2026-g"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-rose-50 hover:bg-rose-100 transition-colors border-l-4 border-rose-500 p-6 rounded-r-xl mb-8 no-underline group cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-rose-800 font-bold text-lg mb-1 group-hover:text-rose-900 transition-colors">
                      Об объявлении 2026 года Годом белорусской женщины
                    </h3>
                    <p className="text-rose-600 font-medium m-0">Указ № 1 от 1 января 2026 г.</p>
                  </div>
                </div>
              </a>

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

              <div className="mt-10 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <a 
                  href="https://belta.by/society/view/logotip-goda-belorusskoj-zhenschiny-opredelen-vybrali-edinoglasno-iz-bolee-chem-100-variantov-762819-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="overflow-hidden bg-slate-100">
                    <img 
                      src="https://img.belta.by/images/storage/news/with_archive/2026/000022_1770271104_762819_big.png" 
                      alt="Логотип Года белорусской женщины" 
                      className="w-full h-auto object-contain max-h-[500px] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-rose-600 transition-colors">
                        Логотип Года белорусской женщины определен! Выбрали единогласно из более чем 100 вариантов
                      </h3>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-rose-600 transition-colors flex-shrink-0 mt-1" />
                  </div>
                </a>
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
