import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  ChevronRight, Home as HomeIcon, Printer, Share2, Menu as MenuIcon, ChevronDown, FileText, FolderOpen, ExternalLink
} from 'lucide-react';
import { MAIN_MENU } from '../constants';
import AbiturientLanding from './AbiturientLanding';
import Specialties from './Specialties';
import AdmissionPlan from './AdmissionPlan';
import RequiredDocuments from './RequiredDocuments';
import AdmissionDates from './AdmissionDates';
import TargetedTraining from './TargetedTraining';
import TargetedTrainingOffers from './TargetedTrainingOffers';
import Dormitory from './Dormitory';
import DormitoryGallery from './DormitoryGallery';
import BaseEnterprises from './BaseEnterprises';
import PsychologistAdvice from './PsychologistAdvice';
import YoungSpecialists from './YoungSpecialists';
import VocationalGuidanceNews from './VocationalGuidanceNews';
import OpenDays from './OpenDays';
import RemoteOpenDay from './RemoteOpenDay';
import VocationalGuidanceSchedule from './VocationalGuidanceSchedule';
import ExtramuralStudies from './ExtramuralStudies';
import ExtramuralRequirements from './ExtramuralRequirements';
import ExtramuralSchedule from './ExtramuralSchedule';
import ExtramuralRecommendations from './ExtramuralRecommendations';
import ExtramuralConsultations from './ExtramuralConsultations';
import ExtramuralClassSchedule from './ExtramuralClassSchedule';
import ExtramuralOrientationSchedule from './ExtramuralOrientationSchedule';
import Graduates from './Graduates';
import GraduatesDocuments from './GraduatesDocuments';
import GraduatesInformation from './GraduatesInformation';
import Library from './Library';
import InternationalStudy from './InternationalStudy';
import Retraining from './Retraining';
import Ideology from './Ideology';
import CuratorHelp from './CuratorHelp';
import InterestGroups from './InterestGroups';
import MilitaryPatriotic from './MilitaryPatriotic';

const GenericPage: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const currentPath = location.pathname;
  

  const parentSection = MAIN_MENU.find(item => 
    item.href === currentPath || 
    (item.submenu && item.submenu.some(sub => currentPath === sub.href || currentPath.startsWith(sub.href + '/')))
  );

  let pageTitle = 'Страница';
  
  // Custom title overrides for nested pages not in the main menu
  const customTitles: Record<string, string> = {
    '/obrazovatelniy-process/zaochnaya-forma-obucheniya/trebovaniya-po-vypolneniyu': 'Требования по выполнению и оформлению домашних контрольных работ',
    '/obrazovatelniy-process/zaochnaya-forma-obucheniya/grafik-obrazovatelnogo-protsessa': 'График образовательного процесса',
    '/obrazovatelniy-process/zaochnaya-forma-obucheniya/rekomendatsii-po-organizatsii': 'Рекомендации учащимся ЗФО по организации учебной деятельности',
    '/obrazovatelniy-process/zaochnaya-forma-obucheniya/raspisanie-konsultatsij': 'Расписание консультаций',
    '/obrazovatelniy-process/zaochnaya-forma-obucheniya/raspisanie-uchebnykh-zanyatij': 'Расписание учебных занятий',
    '/obrazovatelniy-process/zaochnaya-forma-obucheniya/raspisanie-ustanovochnykh-zanyatij': 'Расписание установочных занятий',
    '/obrazovatelniy-process/vypusknikam/dokumenty': 'Документы',
    '/obrazovatelniy-process/vypusknikam/informatsiya': 'Информация для выпускников',
    '/obrazovatelniy-process/biblioteka': 'Библиотека',
    '/obrazovatelniy-process/obuchenie-v-ramkakh-mezhdunarodnykh-dogovorov': 'Обучение в рамках международных договоров',
    '/obrazovatelniy-process/perepodgotovka': 'Переподготовка',
    '/ideologicheskaya-i-vospitatelnaya-rabota': 'Идеология и воспитание',
    '/dokumentatsiya': 'В помощь куратору',
    '/ob-edineniya-po-interesam': 'Объединения по интересам',
    '/voenno-patrioticheskoe-vospitanie': 'Военно-патриотическое воспитание',
  };

  if (customTitles[currentPath]) {
    pageTitle = customTitles[currentPath];
  } else if (parentSection) {
    if (parentSection.href === currentPath) {
      pageTitle = parentSection.label;
    } else if (parentSection.submenu) {
      const subItem = parentSection.submenu.find(sub => sub.href === currentPath);
      if (subItem) pageTitle = subItem.label;
      else {
        // Fallback for sub-sub pages
        const slug = currentPath.split('/').pop();
        if (slug) pageTitle = decodeURIComponent(slug).charAt(0).toUpperCase() + decodeURIComponent(slug).slice(1);
      }
    }
  } else {
    const slug = currentPath.split('/').pop();
    if (slug) {
      pageTitle = decodeURIComponent(slug).charAt(0).toUpperCase() + decodeURIComponent(slug).slice(1);
    }
  }

  const sidebarLinks = parentSection?.submenu || [];
  const hasSidebar = sidebarLinks.length > 0;
  

  const isSectionRoot = parentSection && (parentSection.href === currentPath || parentSection.href === currentPath + '/');

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header Block */}
      <div className="bg-primary-900 text-white pt-10 pb-20 md:pt-14 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            {parentSection && !isSectionRoot ? (
              <>
                <Link to={parentSection.href || '#'} className="hover:text-white transition-colors">{parentSection.label}</Link>
                <ChevronRight className="w-3 h-3 opacity-40" />
                <span className="text-accent-500 font-bold truncate">{pageTitle}</span>
              </>
            ) : (
              <span className="text-accent-500 font-bold truncate">{pageTitle}</span>
            )}
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-5xl">
            {pageTitle}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 md:-mt-16 relative z-20">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* SIDEBAR: Скрываем на главной странице раздела, чтобы не дублировать (кроме Абитуриентам и Идеологии) */}
          {hasSidebar && (!isSectionRoot || currentPath === '/abiturientam' || currentPath === '/abiturientam/' || currentPath === '/ideologicheskaya-i-vospitatelnaya-rabota') && (
            <aside className="w-full lg:w-[320px] flex-shrink-0 order-1 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto custom-scrollbar pr-1">
              
              <div className="lg:hidden mb-4">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="w-full bg-white p-4 rounded-xl shadow-md border border-slate-100 flex items-center justify-between text-primary-900 font-bold"
                >
                  <span className="flex items-center gap-2"><MenuIcon className="w-5 h-5" /> Навигация раздела</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className={`bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
                <div className="bg-slate-50 px-5 py-4 border-b border-slate-100">
                  <Link to={parentSection?.href || '#'} className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-accent-600 transition-colors block">
                    {parentSection?.label}
                  </Link>
                </div>
                
                <nav className="p-2 flex flex-col space-y-1">
                  {sidebarLinks.map((link) => {
                    const isActive = link.href === currentPath;
                    const isExternal = link.href.startsWith('http');
                    const isPdf = link.href.toLowerCase().endsWith('.pdf') || link.href.toLowerCase().includes('disk.yandex.');
                    
                    const LinkContent = (
                      <>
                        <span className="flex items-center gap-2 leading-snug">
                          {isPdf ? (
                            <FileText className="w-4 h-4 text-rose-500 flex-shrink-0" />
                          ) : isExternal ? (
                            <ExternalLink className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          ) : null}
                          <span>{link.label}</span>
                        </span>
                        {isActive && <ChevronRight className="w-4 h-4 text-accent-500 flex-shrink-0 ml-2" />}
                      </>
                    );

                    const linkClass = `group flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-primary-50 text-primary-700 border-l-4 border-accent-500 translate-x-1' : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900 border-l-4 border-transparent hover:translate-x-1'}`;

                    if (isExternal) {
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          {LinkContent}
                        </a>
                      );
                    }

                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={linkClass}
                      >
                        {LinkContent}
                      </Link>
                    );
                  })}
                </nav>

                <div className="m-2 p-4 bg-primary-900 rounded-lg text-white text-center">
                  <p className="text-xs text-accent-500 font-bold uppercase mb-2">Приемная комиссия</p>
                  <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block">8 (0165) 30-06-88</a>
                </div>
              </div>
            </aside>
          )}

          {/* CONTENT */}
          <main className="flex-1 w-full order-2">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-slate-100 min-h-[60vh]">
              
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <div className="text-sm text-slate-400">
                   {isSectionRoot ? 'Выберите подраздел' : 'Обновлено: 06.06.2026'}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center text-sm text-slate-500 hover:text-primary-900 transition-colors gap-1.5 group">
                    <Printer className="w-4 h-4 group-hover:scale-110 transition-transform" /> <span className="hidden sm:inline">Распечатать</span>
                  </button>
                  <button className="flex items-center text-sm text-slate-500 hover:text-primary-900 transition-colors gap-1.5 group">
                    <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" /> <span className="hidden sm:inline">Поделиться</span>
                  </button>
                </div>
              </div>

              {/* ЛОГИКА ОТОБРАЖЕНИЯ */}
              {currentPath === '/abiturientam' ? (
                 <AbiturientLanding />
              ) : currentPath === '/abiturientam/spetsialnosti-kvalifikatsii' ? (
                 <Specialties />
              ) : currentPath === '/abiturientam/plan-priema' ? (
                 <AdmissionPlan />
              ) : currentPath === '/abiturientam/perechen-dokumentov' ? (
                 <RequiredDocuments />
              ) : currentPath === '/abiturientam/sroki-priema-dokumentov-i-zachislenie' ? (
                 <AdmissionDates />
              ) : currentPath === '/abiturientam/predlozhenie-o-tselevoj-podgotovke' ? (
                 <TargetedTraining />
              ) : currentPath === '/abiturientam/predlozheniya-o-tselevoj-podgotovke' ? (
                 <TargetedTrainingOffers />
              ) : currentPath === '/abiturientam/obshechitie-abitur' ? (
                 <Dormitory />
              ) : currentPath === '/abiturientam/obshechitie-galereya' ? (
                 <DormitoryGallery />
              ) : currentPath === '/abiturientam/rabota-s-bazovymi-predpriyatiyami' ? (
                 <BaseEnterprises />
              ) : currentPath === '/abiturientam/sovety-psikhologa-po-vyboru-professii' ? (
                 <PsychologistAdvice />
              ) : currentPath === '/abiturientam/iz-ust-molodykh-spetsialistov' ? (
                 <YoungSpecialists />
              ) : currentPath === '/abiturientam/proforientatsionnye-novosti-o-nas-v-smi' ? (
                 <VocationalGuidanceNews />
              ) : currentPath === '/abiturientam/dni-otkrytykh-dverej' ? (
                 <OpenDays />
              ) : currentPath === '/abiturientam/dod-2024' ? (
                 <RemoteOpenDay />
              ) : currentPath === '/abiturientam/grafik-provedeniya-proforientatsionnykh-konsultatsij' ? (
                 <VocationalGuidanceSchedule />
              ) : currentPath === '/obrazovatelniy-process/zaochnaya-forma-obucheniya' ? (
                 <ExtramuralStudies />
              ) : currentPath === '/obrazovatelniy-process/zaochnaya-forma-obucheniya/trebovaniya-po-vypolneniyu' ? (
                 <ExtramuralRequirements />
              ) : currentPath === '/obrazovatelniy-process/zaochnaya-forma-obucheniya/grafik-obrazovatelnogo-protsessa' ? (
                 <ExtramuralSchedule />
              ) : currentPath === '/obrazovatelniy-process/zaochnaya-forma-obucheniya/rekomendatsii-po-organizatsii' ? (
                 <ExtramuralRecommendations />
              ) : currentPath === '/obrazovatelniy-process/zaochnaya-forma-obucheniya/raspisanie-konsultatsij' ? (
                 <ExtramuralConsultations />
              ) : currentPath === '/obrazovatelniy-process/zaochnaya-forma-obucheniya/raspisanie-uchebnykh-zanyatij' ? (
                 <ExtramuralClassSchedule />
              ) : currentPath === '/obrazovatelniy-process/zaochnaya-forma-obucheniya/raspisanie-ustanovochnykh-zanyatij' ? (
                 <ExtramuralOrientationSchedule />
              ) : currentPath === '/obrazovatelniy-process/vypusknikam' ? (
                 <Graduates />
              ) : currentPath === '/obrazovatelniy-process/vypusknikam/informatsiya' ? (
                 <GraduatesInformation />
              ) : currentPath === '/obrazovatelniy-process/vypusknikam/dokumenty' ? (
                 <GraduatesDocuments />
              ) : currentPath === '/obrazovatelniy-process/biblioteka' ? (
                 <Library />
              ) : currentPath === '/obrazovatelniy-process/obuchenie-v-ramkakh-mezhdunarodnykh-dogovorov' ? (
                 <InternationalStudy />
              ) : currentPath === '/obrazovatelniy-process/perepodgotovka' ? (
                 <Retraining />
              ) : currentPath === '/ideologicheskaya-i-vospitatelnaya-rabota' ? (
                 <Ideology />
              ) : currentPath === '/dokumentatsiya' ? (
                 <CuratorHelp />
              ) : currentPath === '/ob-edineniya-po-interesam' ? (
                 <InterestGroups />
              ) : currentPath === '/voenno-patrioticheskoe-vospitanie' || currentPath.startsWith('/voenno-patrioticheskoe-vospitanie/') ? (
                 <MilitaryPatriotic />
              ) : isSectionRoot && hasSidebar ? (
                <div className="animate-in fade-in duration-500">
                   <p className="text-lg text-slate-600 mb-8">
                     Добро пожаловать в раздел <span className="font-bold text-primary-900">{pageTitle}</span>. 
                     Ниже представлены доступные подразделы:
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {sidebarLinks.map((link) => {
                         const isExternal = link.href.startsWith('http');
                         const isPdf = link.href.toLowerCase().endsWith('.pdf') || link.href.toLowerCase().includes('disk.yandex.');
                         
                         const CardContent = (
                           <>
                             <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform border border-slate-100 ${isPdf ? 'text-rose-500' : isExternal ? 'text-blue-500' : 'text-accent-500'}`}>
                                {isPdf ? <FileText className="w-6 h-6" /> : isExternal ? <ExternalLink className="w-6 h-6" /> : <FolderOpen className="w-6 h-6" />}
                             </div>
                             <h3 className="font-bold text-lg text-primary-900 group-hover:text-accent-600 transition-colors mb-2">
                                {link.label}
                             </h3>
                             <span className="text-xs text-slate-400 uppercase font-bold tracking-wider group-hover:text-accent-500 flex items-center mt-auto">
                                Перейти <ChevronRight className="w-3 h-3 ml-1" />
                             </span>
                           </>
                         );
                         
                         const cardClass = "group p-6 border border-slate-200 rounded-xl hover:shadow-lg hover:border-accent-500 transition-all duration-300 bg-slate-50 hover:bg-white flex flex-col items-start h-full";

                         if (isExternal) {
                           return (
                             <a
                               key={link.href}
                               href={link.href}
                               target="_blank"
                               rel="noopener noreferrer"
                               className={cardClass}
                             >
                               {CardContent}
                             </a>
                           );
                         }

                         return (
                           <Link 
                              key={link.href} 
                              to={link.href}
                              className={cardClass}
                           >
                              {CardContent}
                           </Link>
                         );
                      })}
                   </div>
                </div>
              ) : currentPath.toLowerCase().endsWith('.pdf') ? (
                <div className="animate-in fade-in zoom-in-95 duration-500 w-full h-[75vh] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
                  <iframe 
                    src={`${import.meta.env.BASE_URL}${currentPath.startsWith('/') ? currentPath.slice(1) : currentPath}`} 
                    className="w-full h-full border-0" 
                    title={pageTitle}
                  />
                </div>
              ) : (
                <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-primary-900 prose-a:text-accent-600 prose-a:no-underline hover:prose-a:underline">
                  <p className="lead">Добро пожаловать в раздел <span className="text-primary-900">«{pageTitle}»</span>.</p>
                  
                  <div className="not-prose my-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500 flex flex-col sm:flex-row items-start gap-4">
                    <div className="bg-white p-2 rounded-full shadow-sm flex-shrink-0"><FileText className="w-6 h-6 text-blue-600" /></div>
                    <div>
                      <h3 className="text-blue-900 font-bold text-lg mb-1">Информация обновляется</h3>
                      <p className="text-sm text-blue-800/80 leading-relaxed">В данный момент страница наполняется материалами к новому учебному году.</p>
                    </div>
                  </div>

                  <h2>Общая информация</h2>
                  <p>Пинский государственный аграрно-технический колледж имени А.Е. Клещева обеспечивает подготовку специалистов высокого уровня.</p>
                  <p>Мы гордимся нашими выпускниками и преподавательским составом. Образовательный процесс строится на использовании современных методик и технологий.</p>
                </div>
              )}

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;