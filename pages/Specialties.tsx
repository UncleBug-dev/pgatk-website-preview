import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  Droplet
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
  icon: React.ElementType;
  description: string;
}

// Данные на основе реальных специальностей ПГАТК
const SPECIALTIES: Specialty[] = [
  {
    id: 'build',
    title: 'Строительство зданий и сооружений',
    code: '5-04-0732-02',
    qualification: 'Техник-строитель',
    duration: '3 года 6 месяцев',
    budget: '25-30',
    paid: 0,
    image: 'images/specialties/build_spec.png',
    icon: HardHat,
    description: 'Возведение зданий и сооружений, контроль качества строительно-монтажных работ.'
  },
  {
    id: 'road',
    title: 'Строительство и эксплуатация автомобильных дорог',
    code: '5-04-0732-01',
    qualification: 'Техник-строитель',
    duration: '3 года 7 месяцев',
    budget: '25-30',
    paid: 0,
    image: 'images/specialties/road_spec.png',
    icon: Hammer,
    description: 'Проектирование, строительство, реконструкция и ремонт автомобильных дорог и транспортных объектов.'
  },
  {
    id: 'mech1',
    title: 'Техническое обслуживание и ремонт сельскохозяйственной техники',
    code: '5-04-0810-01',
    qualification: 'Техник-механик',
    duration: '3 года 6 месяцев',
    budget: '25-30',
    paid: 0,
    image: 'images/specialties/agri_repair.png',
    icon: Tractor,
    description: 'Организация эксплуатации, техобслуживания и ремонта сельскохозяйственных машин и оборудования.'
  },
  {
    id: 'mech2',
    title: 'Техническая эксплуатация подъемно-транспортных, дорожно-строительных машин и оборудования',
    code: '5-04-0715-01',
    qualification: 'Техник-механик',
    duration: '3 года 6 месяцев',
    budget: '25-30',
    paid: 0,
    image: 'images/specialties/heavy_machine.png',
    icon: Wrench,
    description: 'Технический сервис, диагностика и обслуживание тяжелой и дорожно-строительной техники.'
  },
  {
    id: 'hydro',
    title: 'Мелиорация земель',
    code: '5-04-0812-01',
    qualification: 'Гидротехник',
    duration: '3 года 6 месяцев',
    budget: 25,
    paid: 0,
    image: 'images/specialties/hydro_spec.png',
    icon: Droplet,
    description: 'Организация и проведение мелиоративных работ, эксплуатация мелиоративных систем.'
  }
];

const Specialties: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
        
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {SPECIALTIES.map((spec) => (
              <div key={spec.id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-1">
                
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/0 transition-colors z-10"></div>
                  <img 
                    src={`${import.meta.env.BASE_URL}${spec.image}`}
                    alt={spec.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg text-primary-900">
                    <spec.icon className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-4 right-4 z-20 bg-accent-500 text-primary-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md">
                    Код: {spec.code}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 leading-tight group-hover:text-accent-600 transition-colors">
                    {spec.title}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="inline-block bg-primary-50 text-primary-800 text-sm font-semibold px-3 py-1 rounded-md mb-3">
                      {spec.qualification}
                    </span>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {spec.description}
                    </p>
                  </div>

                  <div className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                    <div className="flex items-center text-sm text-slate-700">
                      <Clock className="w-4 h-4 mr-3 text-slate-400" />
                      <span className="font-medium">{spec.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-700">
                      <Users className="w-4 h-4 mr-3 text-slate-400" />
                      <span>План приема: </span>
                      <span className="ml-auto font-bold">
                        <span className="text-emerald-600">{spec.budget} бюдж.</span>
                        {spec.paid > 0 && <span className="text-slate-400 mx-1">/</span>}
                        {spec.paid > 0 && <span className="text-accent-600">{spec.paid} плат.</span>}
                      </span>
                    </div>
                  </div>
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