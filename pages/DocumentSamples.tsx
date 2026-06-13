import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Printer, FileText, Link as LinkIcon, Download } from 'lucide-react';
import { MAIN_MENU } from '../constants';

const documents = [
  { title: "Анализ обязательной контрольной работы", href: "https://disk.yandex.com/i/taCrdR1_XvBs7Q", external: true },
  { title: "Паспорт кабинета", href: "/downloads/methodical/blanki/PasportKabineta.docx" },
  { title: "Паспорт лаборатории (мастерской)", href: "/downloads/methodical/blanki/PasportLabMasterskoy.docx" },
  { title: "План работы кабинета", href: "/downloads/methodical/blanki/PlanRabotiKabineta.doc" },
  { title: "Карта профессиональной деятельности педагога", href: "/downloads/methodical/blanki/ProfKarta.doc" },
  { title: "Технологическая карта учебного занятия", href: "/downloads/methodical/blanki/TechKartaZanytiy.docx" },
  { title: "План урока учебного занятия", href: "https://disk.yandex.com/i/G3KRtdl1mxqpOg", external: true },
  { title: "Образец оформления учебной программы учреждения образования по учебному предмету", href: "https://ripo.by/assets/ripo_new/files_2025/6/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4/%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%2017%20%D0%A3%D0%9F%D1%80%20%D0%A1%D0%A1%D0%9E%20%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B9%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BC%D0%B5%D1%82,%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D1%8C.doc", external: true },
  { title: "Образец оформления учебной программы учреждения образования по практике", href: "https://ripo.by/assets/ripo_new/files_2025/6/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4/%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%2019%20%D0%A3%D0%9F%D1%80%20%D0%A1%D0%A1%D0%9E%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0.doc", external: true },
  { title: "Анализ посещения учебного занятия", href: "https://disk.yandex.com/i/sQYCKiGi2EKiRw", external: true },
  { title: "Анализ посещения учебного занятия (практического)", href: "/downloads/methodical/AnalizUroka/AnalizPosesheniyUZprakticheskoe.pdf" },
  { title: "Анализ посещения учебного занятия \"Физическая культура и здоровье\"", href: "https://disk.yandex.com/i/jmtP4uSpdtOgsg", external: true },
  { title: "Анализ посещения внеаудиторного занятия (воспитательного мероприятия)", href: "https://disk.yandex.com/i/TUHIygqKNQ2pfg", external: true },
  { title: "Акт о посещении экзамена", href: "/downloads/methodical/AktOPosesheniiEkzamena.pdf" },
  { title: "Титульный лист для оформления методической разработки (Скачать DOCX)", href: "/downloads/methodical/blanki/TitulniyList.docx" },
  { title: "Титульный лист для оформления методической разработки (Открыть PDF на Яндекс.Диске)", href: "https://disk.yandex.com/i/F7YN4-o0ZkvH0g", external: true },
  { title: "Примерные формы бланочной документации", href: "https://ripo.by/index.php?id=6542", external: true }
];

const DocumentSamples: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sidebarLinks = MAIN_MENU.find(item => item.label === "Методическая работа")?.submenu || [];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* --- HEADER --- */}
      <div className="bg-primary-900 text-white pt-10 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="hover:text-white transition-colors">Методическая работа</span>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold">Образцы документов</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Образцы документов
          </h1>
        </div>
      </div>

      {/* --- MAIN LAYOUT --- */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 relative z-20">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* --- SIDEBAR --- */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 order-1 lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden sticky top-28">
              <div className="bg-primary-900 px-5 py-4 border-b border-primary-800">
                <span className="text-white text-sm font-bold uppercase tracking-widest block">
                  Методическая работа
                </span>
              </div>
              <nav className="flex flex-col p-2">
                {sidebarLinks.map((link) => {
                  const isActive = link.href.includes('obraztsy-dokumentov');
                  const isExternal = link.href.startsWith('http');
                  const LinkComponent = isExternal ? 'a' : Link;
                  const linkProps = isExternal ? { href: link.href, target: "_blank", rel: "noopener noreferrer" } : { to: link.href };
                  
                  const isFile = link.href.endsWith('.pdf') || link.href.endsWith('.doc') || link.href.endsWith('.docx') || link.href.includes('disk.yandex.com');

                  return (
                    <LinkComponent
                      key={link.href}
                      {...linkProps}
                      className={`group flex items-center justify-between px-4 py-2.5 mb-1 text-[15px] font-medium transition-all rounded-lg ${isActive ? 'text-primary-900 bg-slate-50 border-l-4 border-accent-500' : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600 border-l-4 border-transparent'}`}
                    >
                      <div className="flex items-center gap-2">
                        {isFile && <FileText className="w-4 h-4 text-accent-500" />}
                        <span>{link.label}</span>
                      </div>
                      {isActive && <ChevronRight className="w-4 h-4 text-accent-500" />}
                    </LinkComponent>
                  );
                })}
              </nav>

              {/* Admission Committee */}
              <div className="m-4 p-4 bg-primary-900 rounded-lg text-white text-center">
                <p className="text-xs text-accent-500 font-bold uppercase mb-2">Приемная комиссия</p>
                <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block">8 (0165) 30-06-88</a>
              </div>
            </div>
          </aside>

          {/* --- CONTENT --- */}
          <main className="flex-1 w-full order-2">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-slate-100 min-h-[600px]">
              
              <div className="flex justify-end gap-4 mb-6 print:hidden">
                <button className="flex items-center text-xs text-slate-400 hover:text-primary-900 gap-1 transition-colors" onClick={() => window.print()}>
                  <Printer className="w-4 h-4" /> Печать
                </button>
              </div>

              <div className="prose max-w-none mb-8 text-slate-700 text-[15px] leading-relaxed">
                <p className="mb-6">В данном разделе представлены образцы документов, методические рекомендации и формы, необходимые для организации и планирования образовательного процесса.</p>
              </div>

              {/* Document List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc, idx) => (
                  <a 
                    key={idx} 
                    href={doc.href} 
                    target={doc.external ? "_blank" : "_self"} 
                    rel={doc.external ? "noopener noreferrer" : ""}
                    className="flex flex-col bg-white p-5 rounded-xl border border-slate-200 hover:border-primary-400 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${doc.external ? 'bg-accent-50 text-accent-600 group-hover:bg-accent-500 group-hover:text-white' : 'bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white'} transition-colors shrink-0`}>
                        {doc.external ? <LinkIcon className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-slate-800 font-bold leading-tight group-hover:text-primary-700 transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-slate-400 text-xs mt-2 uppercase tracking-wide font-medium flex items-center gap-1">
                          {doc.external ? (
                            <>
                              Внешняя ссылка <ChevronRight className="w-3 h-3" />
                            </>
                          ) : (
                            <>
                              Скачать документ <Download className="w-3 h-3" />
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </main>
        </div>
      </div>
      
      {/* PARTNERS BOTTOM */}
    </div>
  );
};

export default DocumentSamples;
