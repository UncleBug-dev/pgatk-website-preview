import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, ChevronLeft, ChevronRight, FileText, CalendarDays, BookCheck, Clock, MonitorPlay, ChevronRightCircle, ArrowDown } from 'lucide-react';
import { Lightbox } from '../components/Lightbox';

const ExtramuralStudies: React.FC = () => {
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-10">
      
      {/* Intro section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30">
              <BookOpen className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-bold uppercase tracking-wider text-white">Образовательный процесс</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Информация о заочном отделении</h2>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed text-justify mb-8">
              <strong>Заочная форма обучения</strong> в полной мере соответствует задачам непрерывного профессионального образования. Демократичность, гибкость и экономическая эффективность заочного образования способствует успешной реализации задач повышения образовательного уровня и профессиональной компетентности населения.
            </p>
            <a 
              href="#subdivisions" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('subdivisions')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-blue-50 hover:scale-105 transition-all group"
            >
              Перейти к подразделам 
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform animate-bounce" />
            </a>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
             <img 
               src="/images/ObrProcess/zaochnoe.png" 
               alt="Заочное отделение" 
               className="rounded-2xl shadow-lg border-4 border-white/20 w-full max-w-[280px] object-cover cursor-pointer hover:scale-105 transition-transform"
               onClick={() => {
                 setLightboxImages(['/images/ObrProcess/zaochnoe.png']);
                 setSelectedImageIndex(0);
               }}
             />
          </div>
        </div>
      </div>

      {/* History section */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-accent-500" />
            История отделения
          </h3>
          <div className="prose prose-slate prose-lg max-w-none prose-p:text-slate-600 prose-strong:text-primary-900">
            <p className="text-justify">
              <strong>Начало деятельности</strong> заочного отделения УО «Пинский государственный аграрно-технический колледж имени А.Е. Клещева» уходит корнями в далекий <strong>1960 год</strong>. На основании приказа № 511 Министерства Сельского Хозяйства БССР от 14 июля 1960 года о переводе землеустроительного отделения Речицкого сельскохозяйственного техникума в г. Пинск, а также согласно приказу № 115 Пинского гидромелиоративного техникума от 24 августа 1960 года начинается история открытия отделения по специальности «Землеустройство». В этом же году приказом Министерства Сельского Хозяйства произведен набор на заочное отделение по специальности «Гидромелиорация».
            </p>
            <p className="text-justify">
              С <strong>1960</strong> года отделение <strong>возглавил Якунин Василий Иванович</strong>, закончивший с отличием Воронежский сельскохозяйственный институт, участник Великой Отечественной Войны, награжденный орденом «Красная Звезда», медалями «За освобождение Варшавы», «За взятие Берлина», «За победу над Германией», и руководил им до 1968 года. 
            </p>
            <p className="text-justify">
              Продолжили работу на отделении в должности заведующих Гурманчук Елизавета Андреевна, Пузырева Тамара Семеновна, Диковицкая Тамара Владимировна, Корнейчук Лариса Ивановна, Филимонова Наталья Николаевна, Воложин Александр Леонидович.
            </p>
          </div>
        </div>
        <div className="p-8 md:p-10 bg-white">
          <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-accent-500" />
            Наши выпускники
          </h3>
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 text-blue-900/80 font-medium text-lg text-justify leading-relaxed">
            Выпускники колледжа, окончившие заочное отделение, успешно трудятся в различных отраслях народного хозяйства. Среди них немало руководителей предприятий и структурных подразделений, крупных специалистов, награжденных правительственными наградами. Колледж гордится этими своими выпускниками.
          </div>
        </div>
      </div>

      {/* Subdivisions Section */}
      <div id="subdivisions" className="space-y-6 pt-4 scroll-mt-24">
        <h3 className="text-3xl font-display font-bold text-center text-primary-900 mb-8">Подразделы</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { label: 'Требования по выполнению и оформлению домашних контрольных работ', icon: <FileText className="w-6 h-6" />, color: 'text-rose-500', bg: 'bg-rose-100', href: '/obrazovatelniy-process/zaochnaya-forma-obucheniya/trebovaniya-po-vypolneniyu' },
            { label: 'График образовательного процесса', icon: <CalendarDays className="w-6 h-6" />, color: 'text-blue-500', bg: 'bg-blue-100', href: '/obrazovatelniy-process/zaochnaya-forma-obucheniya/grafik-obrazovatelnogo-protsessa' },
            { label: 'Рекомендации учащимся ЗФО по организации учебной деятельности', icon: <BookCheck className="w-6 h-6" />, color: 'text-emerald-500', bg: 'bg-emerald-100', href: '/obrazovatelniy-process/zaochnaya-forma-obucheniya/rekomendatsii-po-organizatsii' },
            { label: 'Расписание консультаций', icon: <Clock className="w-6 h-6" />, color: 'text-amber-500', bg: 'bg-amber-100', href: '/obrazovatelniy-process/zaochnaya-forma-obucheniya/raspisanie-konsultatsij' },
            { label: 'Расписание учебных занятий', icon: <CalendarDays className="w-6 h-6" />, color: 'text-purple-500', bg: 'bg-purple-100', href: '/obrazovatelniy-process/zaochnaya-forma-obucheniya/raspisanie-uchebnykh-zanyatij' },
            { label: 'Расписание установочных занятий', icon: <CalendarDays className="w-6 h-6" />, color: 'text-indigo-500', bg: 'bg-indigo-100', href: '/obrazovatelniy-process/zaochnaya-forma-obucheniya/raspisanie-ustanovochnykh-zanyatij' },
            { label: 'Электронный ресурс', icon: <MonitorPlay className="w-6 h-6" />, color: 'text-sky-500', bg: 'bg-sky-100', href: 'https://itservicepgatk.github.io/pinsk-college-frontend/' },
          ].map((item, index) => {
            const isPlaceholder = item.href === '#';
            const CardContent = (
              <>
                <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-primary-900 group-hover:text-accent-600 transition-colors mb-4 flex-1">
                  {item.label}
                </h4>
                <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-accent-500 uppercase tracking-wider mt-auto">
                  Перейти <ChevronRightCircle className="w-4 h-4 ml-1.5" />
                </div>
              </>
            );

            const cardClass = "group flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-accent-400 transition-all duration-300";

            const isExternal = item.href.startsWith('http');

            if (isPlaceholder) {
              return (
                <a 
                  key={index}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className={cardClass}
                >
                  {CardContent}
                </a>
              );
            }
            
            if (isExternal) {
              return (
                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {CardContent}
                </a>
              );
            }

            return (
              <Link key={index} to={item.href} className={cardClass}>
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Pagination (mimicking original joomla setup) */}
      <div className="flex justify-between items-center pt-6 border-t border-slate-200">
        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-600 font-bold hover:bg-slate-50 hover:text-primary-900 transition-colors shadow-sm group opacity-50 cursor-not-allowed">
          <ChevronLeft className="w-5 h-5" /> 
          Назад
        </button>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary-900 border border-primary-900 rounded-lg text-white font-bold hover:bg-primary-800 transition-colors shadow-md group">
          Вперёд 
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <Lightbox 
          images={lightboxImages}
          selectedIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onSelectIndex={setSelectedImageIndex}
        />
      )}
    </div>
  );
};

export default ExtramuralStudies;
