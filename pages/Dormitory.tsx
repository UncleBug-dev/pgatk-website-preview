import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, Users, Building, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import PdfViewerModal from '../components/PdfViewerModal';

const Dormitory: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeDocument, setActiveDocument] = useState<string | null>(null);

  const documents = [
    { title: "Положение об общежитии", link: "/images/Ideologiy/Obchechitie/Doc/PoloshenieObObsehetii.pdf" },
    { title: "Положение о совете общежития", link: "/images/Ideologiy/Obchechitie/Doc/PoloshenieOSoveteObshechitiy.pdf" },
    { title: "Положение о внутреннем распорядке", link: "/images/Ideologiy/Obchechitie/Doc/PolosheneieOVnRasporadke.pdf" },
    { title: "Внутренний распорядок в общежитии колледжа", link: "/images/Ideologiy/Obchechitie/Doc/VnRasporObsh.jpg" },
  ];

  const galleryImages = [
    "/images/Ideologiy/Obchechitie/Foto/10.jpg",
    "/images/Ideologiy/Obchechitie/Foto/11.jpg",
    "/images/Ideologiy/Obchechitie/Foto/12.jpg",
    "/images/Ideologiy/Obchechitie/Foto/13.jpg",
    "/images/Ideologiy/Obchechitie/Foto/14.jpg",
    "/images/Ideologiy/Obchechitie/Foto/18.jpg",
    "/images/Ideologiy/Obchechitie/Foto/19.jpg",
    "/images/Ideologiy/Obchechitie/Foto/6.jpg",
    "/images/Ideologiy/Obchechitie/Foto/7.jpg"
  ];

  const councilDorm1 = [
    { name: "Дейлид Максим Игоревич", role: "председатель совета общежития", group: "222С" },
    { name: "Кулик Александр Владиславович", role: "секретарь совета общежития", group: "351Б" },
    { name: "Киндрук Анатолий Сергеевич", role: "староста 1 этажа", group: "351Б" },
    { name: "Блоцкий Александр Александрович", role: "староста 2 этажа", group: "321Б" },
    { name: "Карпцов Владимир Анатольевич", role: "староста 4 этажа", group: "321Б" },
    { name: "Грабар Владислав Витальевич", role: "спортивно-оздоровительный сектор", group: "322С" },
    { name: "Лукша Владимир Иванович", role: "спортивно-оздоровительный сектор", group: "322С" },
    { name: "Самуйлич Дмитрий Андреевич", role: "спортивно-оздоровительный сектор", group: "222С" },
    { name: "Веренич Максим Иванович", role: "спортивно-оздоровительный сектор", group: "341Б" },
    { name: "Шукало Илья Михайлович", role: "информационный сектор", group: "241Б" },
    { name: "Бабич Максим Сергеевич", role: "информационный сектор", group: "322С" },
    { name: "Кулик Александр Владиславович", role: "информационный сектор", group: "351Б" },
    { name: "Лабай Андрей Васильевич", role: "информационный сектор", group: "311Б" },
    { name: "Ротор Дмитрий Дмитриевич", role: "культурно-массовый сектор", group: "341Б" },
    { name: "Крынко Евгений Владимирович", role: "культурно-массовый сектор", group: "222С" },
    { name: "Самуйлич Александр Сергеевич", role: "культурно-массовый сектор", group: "222С" },
    { name: "Климович Евгений Владимирович", role: "санитарно-бытовой сектор", group: "322С" },
    { name: "Корнейчук Максим Святославович", role: "санитарно-бытовой сектор", group: "322С" },
    { name: "Поливко Денис Витальевич", role: "санитарно-бытовой сектор", group: "322С" },
  ];

  const councilDorm2 = [
    { name: "Липская Маргарита Валерьевна", role: "председатель совета общежития", group: "331Б" },
    { name: "Терещук Андрей Иванович", role: "секретарь совета общежития", group: "331Б" },
    { name: "Терещук Андрей Иванович", role: "староста 1 этажа", group: "331Б" },
    { name: "Момотюк Мария Андреевна", role: "староста 2 этажа", group: "331Б" },
    { name: "Терещук Андрей Иванович", role: "староста 3 этажа", group: "331Б" },
    { name: "Койко Дмитрий Сергеевич", role: "староста 4 этажа", group: "242С" },
    { name: "Момотюк Мария Андреевна", role: "жилищно-бытовой сектор", group: "331Б" },
    { name: "Липская Маргарита Валерьевна", role: "жилищно-бытовой сектор", group: "331Б" },
    { name: "Линик Михаил Валерьевич", role: "жилищно-бытовой сектор", group: "331Б" },
    { name: "Лахтюк Анна Николаевна", role: "сектор массовой информации", group: "341Б" },
    { name: "Солошик Ирина Игоревна", role: "сектор массовой информации", group: "341Б" },
    { name: "Тарасевич Виктория Игоревна", role: "сектор массовой информации", group: "341Б" },
    { name: "Павлюковец Александр Николаевич", role: "спортивно-оздоровительный сектор", group: "242С" },
    { name: "Волчик Владимир Павлович", role: "спортивно-оздоровительный сектор", group: "242С" },
    { name: "Денисюк Павел Андреевич", role: "спортивно-оздоровительный сектор", group: "242С" },
    { name: "Тишко Кирилл Викторович", role: "спортивно-оздоровительный сектор", group: "121Б" },
    { name: "Корольчук Валентина Анатольевна", role: "культурно-массовый сектор", group: "231Б" },
    { name: "Дацюк Ангелина Валентиновна", role: "культурно-массовый сектор", group: "331Б" },
    { name: "Зновец Евгения Сергеевна", role: "культурно-массовый сектор", group: "331Б" },
    { name: "Кожановская Анастасия Витальевна", role: "культурно-массовый сектор", group: "231Б" },
  ];

  return (
    <div className="w-full animate-in fade-in duration-500 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-primary-900 font-display flex items-center gap-4">
          <div className="p-3 bg-accent-50 rounded-2xl shrink-0">
            <Home className="w-8 h-8 md:w-10 md:h-10 text-accent-500" />
          </div>
          Общежитие 2026
        </h2>
      </div>

      {/* Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200">
          <img src="/images/Ideologiy/Obchechitie/Vospitateli/1.png" alt="Воспитатели" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200">
          <img src="/images/Ideologiy/Obchechitie/VRObsh/VRvObsheshitii.png" alt="ВР в общежитии" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <Link to="/abiturientam/obshechitie-galereya" className="rounded-3xl overflow-hidden shadow-sm border border-slate-200 md:col-span-2 block group relative cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/50">
          <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors z-10 flex items-center justify-center">
             <div className="bg-white/90 backdrop-blur-sm text-blue-900 font-bold px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-xl">
               Смотреть галерею
             </div>
          </div>
          <img src="/images/Ideologiy/Obchechitie/2_1.png" alt="Общежитие" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 relative z-0" />
        </Link>
        <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200 md:col-span-2">
          <img src="/images/Ideologiy/Obchechitie/Doc/doc.png" alt="Документы" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Normative Documents */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-black text-primary-900 mb-8 flex items-center gap-3">
          <FileCheck className="w-8 h-8 text-accent-500" />
          Локально нормативные документы общежитий колледжа
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documents.map((doc, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveDocument(doc.link)}
              className="w-full text-left flex items-center p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-primary-500 hover:shadow-md transition-all group gap-4 focus:outline-none"
            >
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-primary-50 transition-colors">
                <FileText className="w-6 h-6 text-slate-500 group-hover:text-primary-600" />
              </div>
              <span className="font-bold text-slate-800 group-hover:text-primary-900 leading-tight">
                {doc.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Council Information */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-black text-primary-900 mb-8 flex items-center gap-3">
          <Users className="w-8 h-8 text-accent-500" />
          Совет общежития
        </h3>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-8">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed text-justify">
            <p>
              Учащиеся, проживающие в общежитии, участвуют в самоуправлении.
              Органы самоуправления создаются с целью развития организаторских способностей, творческой инициативы, воспитания активной жизненной позиции, формирования у будущих специалистов готовности к самостоятельной творческой деятельности, самоорганизации своей жизни. Так как воспитательная работа в общежитии является составной частью образовательного процесса, то и самоуправление в общежитии является частью воспитательной системы учебного заведения.
              Содержание работы студенческого самоуправления зависит от тех задач, решение которых оно должно обеспечить.
            </p>
            
            <p className="font-bold text-slate-900 mt-6">Главные задачи работы студенческого самоуправления в общежитии:</p>
            <ul className="list-none pl-0 space-y-2 mt-4">
              {[
                "создание благоприятных условий для развития способностей и интересов каждого учащегося;",
                "оказание помощи в реализации учащимися своих прав и обязанностей;",
                "воспитание активной жизненной позиции;",
                "формирование здорового образа жизни;",
                "воспитание положительного отношения к труду как к источнику материальных благ;",
                "формирование таких качеств личности как организованность, ответственность, принципиальность;",
                "подготовка учащихся к выполнению важнейших социальных ролей в обществе: семьянина, труженика, гражданина."
              ].map((task, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-1" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-xl font-bold text-slate-900 mt-8 mb-4">Деятельность Совета общежития</h4>
            <p>
              Совет общежития избирается на общем собрании учащихся, проживающих в нем, и в определенном составе работает год – до следующих выборов. Совет имеет право представлять интересы учащихся во взаимоотношениях с администрацией учреждения образования, ученической профсоюзной организацией, обсуждать и вносить предложения в план работы воспитателей, профкома, БРСМ, заместителя директора по воспитательной работе.
              Вновь избранный совет общежития определяет содержание своей деятельности, которое отражается в перспективном планировании, затем распределяет обязанности, что обеспечивает ответственное отношение к организации и проведению намеченных дел.
            </p>

            <p className="font-bold text-slate-900 mt-6">Совет работает по следующим документам:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>перспективным планам работы на учебный год;</li>
              <li>планам работы на месяц;</li>
              <li>протоколам заседаний Совета.</li>
            </ul>

            <p className="font-bold text-slate-900 mt-6">Основные направления деятельности Совета общежития:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>работа по профилактике правонарушений;</li>
              <li>культурно-массовая и информационная работа;</li>
              <li>работа по укреплению физического и нравственного здоровья учащихся;</li>
              <li>работа по созданию надлежащих жилищно-бытовых условий проживания;</li>
              <li>индивидуальная работа с учащимися.</li>
            </ul>
          </div>
        </div>

        {/* Council Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
            <h4 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
              <Building className="w-6 h-6 text-primary-600" />
              Состав совета общежития №1
            </h4>
            <div className="space-y-4">
              {councilDorm1.map((member, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="font-bold text-slate-800 text-lg leading-tight">{member.name}</p>
                  <p className="text-slate-600 text-sm mt-1">{member.role}</p>
                  <div className="inline-block px-2 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded mt-2">
                    Группа {member.group}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
            <h4 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
              <Building className="w-6 h-6 text-accent-600" />
              Состав совета общежития №2
            </h4>
            <div className="space-y-4">
              {councilDorm2.map((member, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <p className="font-bold text-slate-800 text-lg leading-tight">{member.name}</p>
                  <p className="text-slate-600 text-sm mt-1">{member.role}</p>
                  <div className="inline-block px-2 py-1 bg-accent-50 text-accent-700 text-xs font-bold rounded mt-2">
                    Группа {member.group}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Material-Technical Base */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-black text-primary-900 mb-8 flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-accent-500" />
          Материально-техническая база в общежитии
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, i) => (
            <button 
              key={i}
              onClick={() => setActiveDocument(src)}
              className="w-full aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 block group p-0 relative focus:outline-none"
            >
              <img 
                src={src} 
                alt={`Фото общежития ${i+1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </button>
          ))}
        </div>
      </div>

      <PdfViewerModal url={activeDocument} onClose={() => setActiveDocument(null)} />

    </div>
  );
};

export default Dormitory;
