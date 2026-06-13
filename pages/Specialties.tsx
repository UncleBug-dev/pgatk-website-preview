import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import SEO from '../components/SEO';
import { 
  Home as HomeIcon, 
  ChevronRight, 
  Clock, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Hammer, 
  Tractor, 
  Utensils, 
  Wrench,
  Zap,
  HardHat,
  ArrowRight,
  FileText,
  Droplet,
  CheckCircle2,
  PlusCircle,
  Video
} from 'lucide-react';

interface Specialty {
  id: string;
  title: string;
  code: string;
  qualification: string;
  duration: string;
  budget: number | string;
  paid: number;
  image: string;
  gallery?: string[];
  icon: React.ElementType;
  description: string;
  workingProfessions?: string;
  additionalProfession?: string;
  passingScore?: string;
  youtubeId?: string;
}

// Данные на основе реальных специальностей ПГАТК
const SPECIALTIES: Specialty[] = [
  {
    id: 'hydro',
    title: 'Мелиорация земель',
    code: '5-04-0811-03',
    qualification: 'гидротехник',
    duration: 'На основе общего базового образования — 3 года 6 месяцев',
    budget: '25-30',
    paid: 0,
    image: 'images/specialties/hydro_spec.png',
    gallery: [
      'images/Abiturientu/2022/Specialnosti/Melioraciy/Melioraciy.gif',
      'images/Abiturientu/2022/Specialnosti/Melioraciy/Melioraciy.png',
      'images/Abiturientu/2022/Specialnosti/Melioraciy/Melioraciy2.gif',
      'images/Abiturientu/2022/Specialnosti/Melioraciy/Melioraciy4.gif',
      'images/Abiturientu/2022/Specialnosti/Melioraciy/Melioraciy_staty.gif'
    ],
    icon: Droplet,
    description: 'Организация и проведение мелиоративных работ, эксплуатация мелиоративных систем.',
    workingProfessions: 'замерщик на топографогеодезических и маркшейдерских работах (3-4 разряда), бетонщик (3-4 разряда), осмотрщик гидротехнических сооружений (2-3 разряда)',
    additionalProfession: 'водитель автомобиля с правом управления механическими транспортными средствами категории «В» (на платной основе)',
    passingScore: '5,8'
  },
  {
    id: 'mech2',
    title: 'Техническая эксплуатация подъемно-транспортных, дорожно-строительных машин и оборудования',
    code: '5-04-0715-20',
    qualification: 'техник-механик',
    duration: 'На основе общего базового — 3 года 6 месяцев; на основе общего среднего (заочная форма) — 3 года 6 месяцев',
    budget: '25-30',
    paid: 0,
    image: 'images/specialties/heavy_machine.png',
    gallery: [
      'images/Abiturientu/2022/Specialnosti/TechichOb/TechOb.gif',
      'images/Abiturientu/2022/Specialnosti/TechichOb/TechOb2.gif',
      'images/Abiturientu/2022/Specialnosti/TechichOb/TechOb3.gif',
      'images/Abiturientu/2022/Specialnosti/TechichOb/TechOb4.gif',
      'images/Abiturientu/2022/Specialnosti/TechichOb/TechOb5.gif',
      'images/Abiturientu/2022/Specialnosti/TechichOb/TechOb6.gif',
      'images/Abiturientu/2022/Specialnosti/TechichOb/TechOb7.gif',
      'images/Abiturientu/2022/Specialnosti/TechichOb/TechOb8.gif',
      'images/Abiturientu/2022/Specialnosti/TechichOb/TechOb8-gif.png',
      'images/Abiturientu/2022/Specialnosti/TechichOb/TechOb8-gif_1.png',
      'images/Abiturientu/2022/Specialnosti/TechichOb/TechOb9-gif.png'
    ],
    icon: Wrench,
    youtubeId: '4gYupMwxmDM',
    description: 'Технический сервис, диагностика и обслуживание тяжелой и дорожно-строительной техники.',
    workingProfessions: 'слесарь по ремонту дорожно-строительных машин и тракторов (3 разряда), тракторист-машинист сельскохозяйственного производства категорий «С» и «Е» (автогрейдер), водитель автомобиля категорий «В» и «С»',
    passingScore: '6,7'
  },
  {
    id: 'mech1',
    title: 'Техническое обслуживание и ремонт сельскохозяйственной техники',
    code: '5-04-0812-01',
    qualification: 'техник-механик',
    duration: 'На основе общего базового — 3 года 6 мес.; на основе общего среднего — 2 года 6 мес.; заочная форма — 3 года 6 мес.',
    budget: '25-30',
    paid: 0,
    image: 'images/specialties/agri_repair.png',
    gallery: [
      'images/Abiturientu/2022/Specialnosti/Remontniki/remont.gif',
      'images/Abiturientu/2022/Specialnosti/Remontniki/remont2.gif',
      'images/Abiturientu/2022/Specialnosti/Remontniki/remont3.gif',
      'images/Abiturientu/2022/Specialnosti/Remontniki/remont4.gif'
    ],
    icon: Tractor,
    description: 'Организация эксплуатации, техобслуживания и ремонта сельскохозяйственных машин и оборудования.',
    workingProfessions: 'слесарь по ремонту с/х машин и оборудования (3-4 разряда), водитель категорий «В» и «С», водитель колёсных тракторов и самоходных машин категорий «С», «D», тракторист-машинист категорий «А»,«В»',
    passingScore: '6,0 (базовое), 6,9 (среднее)'
  },
  {
    id: 'build',
    title: 'Строительство зданий и сооружений',
    code: '5-04-0732-01',
    qualification: 'техник-строитель',
    duration: 'На основе общего базового — 3 года 6 мес.; на основе общего среднего — 2 года 6 мес.',
    budget: '25-30',
    paid: 0,
    image: 'images/specialties/build_spec.png',
    gallery: [
      'images/Abiturientu/2022/Specialnosti/PCS/pgs.gif',
      'images/Abiturientu/2022/Specialnosti/PCS/pgs2.gif',
      'images/Abiturientu/2022/Specialnosti/PCS/pgs4.gif',
      'images/Abiturientu/2022/Specialnosti/PCS/pgs5.gif'
    ],
    icon: HardHat,
    youtubeId: 'zuzbR3h96CA',
    description: 'Возведение зданий и сооружений, контроль качества строительно-монтажных работ.',
    workingProfessions: 'штукатур (3-4 разряд), маляр (3-4 разряд), каменщик (3-4 разряд), плотник-бетонщик (3-4 разряд), столяр (3-4 разряд), облицовщик плиточник (3-4 разряд)',
    additionalProfession: 'водитель автомобиля категории «В» (на платной основе)',
    passingScore: '6,6 (среднее)'
  },
  {
    id: 'road',
    title: 'Строительство и эксплуатация автомобильных дорог',
    code: '5-04-0732-08',
    qualification: 'техник-строитель',
    duration: 'На основе общего базового образования — 3 года 7 месяцев',
    budget: '25-30',
    paid: 0,
    image: 'images/specialties/road_spec.png',
    gallery: [
      'images/Abiturientu/2022/Specialnosti/StrDorog/StrDorog.gif',
      'images/Abiturientu/2022/Specialnosti/StrDorog/StrDorog2.gif',
      'images/Abiturientu/2022/Specialnosti/StrDorog/StrDorog3.gif'
    ],
    icon: Hammer,
    youtubeId: 'zuzbR3h96CA',
    description: 'Проектирование, строительство, реконструкция и ремонт автомобильных дорог и транспортных объектов.',
    workingProfessions: 'дорожный рабочий (3-4 разряда), асфальтобетонщик (3-4 разряда), бетонщик (3-4 разряда), замерщик по топографо-геодезических и маркшейдерских работах (3-4 разряда)',
    additionalProfession: 'водитель автомобиля категории «В»',
    passingScore: '6,4'
  }
];

const Specialties: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
        <SEO title="Специальности" description="Информация о специальностях Пинского государственного аграрного технологического колледжа. Сроки обучения, проходные баллы и квалификации." />
        {/* Stats Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-accent-500 flex items-center gap-4">
            <div className="p-3 bg-accent-50 rounded-full text-accent-600">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900">80</div>
              <div className="text-sm text-slate-500 font-medium">Лет успешной работы</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-emerald-500 flex items-center gap-4">
            <div className="p-3 bg-emerald-50 rounded-full text-emerald-600">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900">25 000+</div>
              <div className="text-sm text-slate-500 font-medium">Выпускников</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-blue-500 flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-full text-blue-600">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-900">100%</div>
              <div className="text-sm text-slate-500 font-medium">Трудоустройство</div>
            </div>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-accent-500 mb-12 flex flex-col md:flex-row gap-8 mt-12">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-accent-600" /> База для поступления
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Прием ведется на дневную и заочную формы обучения на основе общего базового, среднего и профессионально-технического образования в соответствии с актуальными правилами приема лиц для получения высшего и среднего специального образования
            </p>
          </div>
          <div className="hidden md:block w-px bg-slate-200"></div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary-900 mb-3 flex items-center gap-2">
              <Hammer className="w-6 h-6 text-accent-600" /> Рабочие профессии
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Во время учебы учащиеся могут дополнительно получить рабочую профессию (штукатур, маляр, каменщик, плотник-бетонщик, столяр, облицовщик и другие).
            </p>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary-900 mb-8 font-display border-l-8 border-accent-500 pl-6">
            Специальности 2026
          </h2>
          
          <div className="flex flex-col gap-10">
            {SPECIALTIES.map((spec) => (
              <div key={spec.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 flex flex-col xl:flex-row hover:shadow-xl transition-shadow duration-300">
                {/* Image Section */}
                <div className="relative xl:w-5/12 min-h-[300px] shrink-0 bg-slate-100 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-primary-900/10 hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                  
                  {spec.gallery && spec.gallery.length > 0 ? (
                    <ImageSlider 
                      images={spec.gallery.map(img => `${import.meta.env.BASE_URL}${img}`)} 
                      fallbackImage={`${import.meta.env.BASE_URL}${spec.image}`}
                      altPrefix={spec.title}
                    />
                  ) : (
                    <img 
                      src={`${import.meta.env.BASE_URL}${spec.image}`}
                      alt={spec.title} 
                      className="w-full h-full object-cover"
                    />
                  )}

                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-primary-900 pointer-events-none">
                    <spec.icon className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 bg-accent-500 text-primary-900 text-sm font-bold px-4 py-2 rounded-lg shadow-md pointer-events-none">
                    Код: {spec.code}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-2xl font-bold text-primary-900 mb-3 leading-tight">
                    {spec.title}
                  </h3>
                  <div className="mb-8">
                    <span className="inline-flex items-center bg-primary-50 text-primary-800 text-sm font-semibold px-4 py-1.5 rounded-md">
                      Квалификация: {spec.qualification}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent-500" /> Срок обучения
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{spec.duration}</p>
                    </div>
                    {spec.passingScore && (
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent-500" /> Проходной балл 2025 г.
                        </h4>
                        <p className="text-slate-600 text-base font-bold text-emerald-600">{spec.passingScore}</p>
                      </div>
                    )}
                    {spec.workingProfessions && (
                      <div className="md:col-span-2">
                        <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                          <Hammer className="w-4 h-4 text-accent-500" /> Рабочая профессия
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{spec.workingProfessions}</p>
                      </div>
                    )}
                    {spec.additionalProfession && (
                      <div className="md:col-span-2">
                        <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                          <PlusCircle className="w-4 h-4 text-accent-500" /> Дополнительная профессия
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{spec.additionalProfession}</p>
                      </div>
                    )}
                  </div>
                  
                  {spec.youtubeId && (
                    <div className="mt-auto border-t border-slate-100 pt-8">
                      <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Video className="w-5 h-5 text-red-500" /> Видео о специальности
                      </h4>
                      <div className="relative w-full overflow-hidden rounded-xl bg-slate-100 shadow-inner" style={{ paddingBottom: '56.25%' }}>
                        <iframe 
                          src={`https://www.youtube.com/embed/${spec.youtubeId}?rel=0`}
                          className="absolute top-0 left-0 w-full h-full"
                          allowFullScreen
                          title="Видео о специальности"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-primary-900 rounded-3xl p-8 md:p-16 relative overflow-hidden text-center md:text-left shadow-2xl">
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Готов сделать первый шаг к карьере?
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Ознакомься с правилами приема, сроками подачи документов и проходными баллами прошлого года. Приемная комиссия ответит на все вопросы.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/abiturientam" // Можно заменить на реальную ссылку с правилами
                  className="inline-flex items-center justify-center bg-accent-500 text-primary-900 font-bold py-4 px-8 rounded-xl hover:bg-accent-400 hover:-translate-y-1 transition-all shadow-lg shadow-accent-500/20"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Правила приема
                </Link>
                <Link 
                  to="/contacts" 
                  className="inline-flex items-center justify-center bg-transparent border-2 border-slate-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-primary-900 hover:border-white hover:-translate-y-1 transition-all"
                >
                  Контакты комиссии
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Visual Badge/Icon */}
            <div className="hidden md:block relative">
              <div className="w-64 h-64 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow">
                <div className="text-center">
                  <div className="text-primary-900 font-bold text-6xl font-display mb-1">2026</div>
                  <div className="text-primary-900 font-bold uppercase tracking-widest text-sm">Приемная<br/>кампания</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
};

export default Specialties;