import React from 'react';
import { BookOpen, FileText, Download, ExternalLink } from 'lucide-react';

const CURATOR_DOCS = [
  { id: 1, title: 'Инструктивно-методическое письмо «Особенности организации социальной, воспитательной и идеологической работы в учреждениях образования, реализующих образовательные программы профессионально-технического и среднего специального образования, в 2025/2026 учебном году»', href: 'https://disk.yandex.ru/i/UurPCh5QNlS81g' },
  { id: 2, title: 'Методические рекомендации по организации в учреждениях образования индивидуальной профилактической работы с обучающимися', href: 'https://ripo.by/assets/ripo_new/files_2023/3/Методические рекомендации по организации в учреждениях образования индивидуальной профилактической работы с обучающимися.pdf' },
  { id: 3, title: 'Методические рекомендации по совершенствованию профориентационной работы', href: 'https://ripo.by/assets/ripo_new/files_2023/1/Методические рекомендации по профориентации.docx' },
  { id: 4, title: 'Инструктивно-методическое письмо по организации работы с молодежью', href: 'https://ripo.by/assets/ripo_new/files_2022/11/УТВЕРЖДЕНО Инструктивно-методическое письмо по ГМП.docx' },
  { id: 5, title: 'Методические рекомендации по проведению информационных часов в учреждениях образования', href: 'https://ripo.by/assets/ripo_new/files_2022/10/1 Методические рекомендации по проведению информационных часов в учреждениях образования.docx' },
  { id: 6, title: 'Методические рекомендации по психосоциальному анкетированию', href: 'https://ripo.by/assets/ripo_new/files_2022/10/2 Методические рекомендации по психосоциальному анкетированию.pdf' },
  { id: 7, title: 'О признании детей находящимися в социально опасном положении', href: 'https://ripo.by/assets/ripo_new/files_2022/10/5 О признании детей находящимися в социально опасном положении.PDF' },
  { id: 8, title: 'Инструкция о проведении воспитательной работы педагогическими работниками во внеучебное время (пост. Министерства образования Республики Беларусь от 22.09.2022 № 332)', href: 'https://ripo.by/assets/ripo_new/files_2022/10/Документ PDF.pdf' },
  { id: 9, title: 'Методические рекомендации по организации работы руководителя по военно-патриотическому воспитанию в учреждениях образования', href: 'https://ripo.by/assets/ripo_new/files_2022/10/Методические рекомендации по организации работы руководителя по военно-патриотическому воспитанию.docx' },
  { id: 10, title: 'Планирование реализации программы объединения по интересам. Методические рекомендации.', href: 'https://ndtp.by/wp-content/uploads/2023/08/Planavannie-pracy-abjadnannia-pa-intaresach-2023.pdf' },
  { id: 11, title: 'Сертификат достижений', href: 'https://ripo.by/assets/ripo_new/filess/13/Сертификат достижений.rar' },
  { id: 12, title: 'Положение о выдаче характеристики учащегося', href: 'https://saec.by/wp-content/uploads/2023/03/o-vydache-xarakteristiki.pdf' },
  { id: 13, title: 'Государственная программа «Образование и молодежная политика» на 2021-2025 гг', href: 'https://adu.by/images/2021/02/gos-pr-obrazovanie-molod-politika-2021-2025.pdf' },
  { id: 14, title: 'Концепция непрерывного воспитания детей и учащейся молодёжи', href: 'https://docs.google.com/document/d/1_tP5qVmlo4U1eMxovzYb_Ysg3oAqJd2B/edit' },
  { id: 15, title: 'Программа непрерывного воспитания детей и учащейся молодёжи на 2021-2025 гг.', href: 'https://edu.gov.by/molodezhnaya-politika/glavnoe-upravlenie-vospitatelnoy-raboty-i-molodezhnoy-politiki/upravlenie-raboty/informatsiya/programmy-vospitaniya/programma-vospitaniya-2021-2025.pdf' },
  { id: 16, title: 'Кодекс Республики Беларусь об образовании', href: 'https://pravo.by/document/?guid=12551&p0=H12200154&p1=1&p5=0' },
  { id: 17, title: 'Внесены изменения в нормативные правовые акты по вопросам профилактики безнадзорности и правонарушений несовершеннолетних...', href: 'https://ripo.by/index.php?id=7886' },
  { id: 18, title: 'Профилактика преступлений и правонарушений среди обучающихся', href: 'https://vospitanie.adu.by/profilaktika-prestuplenij-i-pravonarushenij-sredi-obuchauschihsya.html' },
  { id: 19, title: 'Примерное планирование воспитательной работы с учащимися по гражданско-патриотическому воспитанию', href: 'https://ripo.by/files/PPVWsYpGPV.rar' },
  { id: 20, title: 'Примерное планирование идеологической работы с учащимися', href: 'https://ripo.by/files/PPiWsY.rar' },
  { id: 21, title: 'Примерное планирование воспитательной работы с учащимися по профилактике противоправного поведения', href: 'https://ripo.by/files/PPVWsYpPPP.rar' },
  { id: 22, title: 'Методика экспресс оценки уровня воспитанности учащихся', href: 'https://ripo.by/assets/ripo_new/filess/13/Методика экспресс оценки уровня воспитанности уч-ся.rar' },
  { id: 23, title: 'Взаимодействие куратора учебной группы по оказанию педагогической поддержки ученическому самоуправлению', href: 'https://ripo.by/files/vzkyr.rar' },
];

const CuratorHelp: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-8">
      
      {/* Header section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl backdrop-blur-sm border border-white/30 hidden md:block group-hover:rotate-12 transition-transform">
            <BookOpen className="w-16 h-16 text-white" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">В помощь куратору</h2>
            <p className="text-lg text-indigo-100 max-w-3xl leading-relaxed">
              Методические рекомендации, инструктивные письма, примерное планирование и другие полезные материалы для эффективной работы куратора учебной группы.
            </p>
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-primary-900 mb-6 border-b border-slate-100 pb-4">
          Методические материалы
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CURATOR_DOCS.map((doc) => {
            const isArchive = doc.href.endsWith('.rar') || doc.href.endsWith('.zip');
            const isDoc = doc.href.endsWith('.doc') || doc.href.endsWith('.docx');
            
            return (
              <a
                key={doc.id}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-100 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  {isArchive ? (
                    <Download className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  ) : isDoc ? (
                    <FileText className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  ) : (
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-slate-800 leading-snug group-hover:text-indigo-700 transition-colors line-clamp-3">
                    {doc.title}
                  </h4>
                  <div className="mt-2 text-[10px] uppercase font-bold text-slate-400 group-hover:text-indigo-400 tracking-wider">
                    {isArchive ? 'Архив' : isDoc ? 'Документ Word' : 'Внешний ресурс / PDF'}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default CuratorHelp;
