import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Briefcase, BookOpen, ArrowRight } from 'lucide-react';

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  color: string;        // bg color for icon circle
  textColor: string;   // icon & accent text color
  borderColor: string; // left border on card
  href?: string;
}

const STATS: Stat[] = [
  {
    value: 80,
    suffix: '',
    label: 'лет',
    sublabel: 'успешной работы с 1946 года',
    icon: BookOpen,
    color: 'bg-primary-100',
    textColor: 'text-primary-700',
    borderColor: 'border-primary-500',
    href: '/kolledg/istoriya',
  },
  {
    value: 5,
    suffix: '',
    label: 'специальностей',
    sublabel: 'среднего специального образования',
    icon: GraduationCap,
    color: 'bg-accent-100',
    textColor: 'text-accent-600',
    borderColor: 'border-accent-500',
    href: '/abiturientam/spetsialnosti-kvalifikatsii',
  },
  {
    value: 25000,
    suffix: '+',
    label: 'выпускников',
    sublabel: 'за всё время существования',
    icon: Users,
    color: 'bg-emerald-100',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-500',
    href: '/kolledg/istoriya',
  },
  {
    value: 100,
    suffix: '%',
    label: 'трудоустройство',
    sublabel: 'выпускников по распределению',
    icon: Briefcase,
    color: 'bg-sky-100',
    textColor: 'text-sky-700',
    borderColor: 'border-sky-500',
  },
];

// Форматирует число с пробелом-разделителем (25000 → 25 000)
const formatNumber = (n: number) =>
  n >= 1000 ? n.toLocaleString('ru-RU') : String(n);

// Хук: анимирует число от 0 до target за duration мс
function useCounter(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

// Отдельная карточка с анимацией
const StatCard: React.FC<{ stat: Stat; active: boolean; index: number }> = ({
  stat,
  active,
  index,
}) => {
  const count = useCounter(stat.value, active, 1600 + index * 100);
  const Icon = stat.icon;

  const inner = (
    <div
      className={`group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 ${stat.borderColor} p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 h-full overflow-hidden`}
    >
      {/* Фоновый орнамент */}
      <div
        className={`absolute -right-4 -bottom-4 w-16 h-16 sm:w-24 sm:h-24 rounded-full opacity-10 ${stat.color}`}
      />

      {/* Иконка */}
      <div
        className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${stat.color} ${stat.textColor} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
      </div>

      {/* Текст */}
      <div className="relative mt-1 sm:mt-0">
        <div className={`text-2xl sm:text-4xl md:text-5xl font-extrabold font-display leading-none ${stat.textColor} notranslate`} translate="no">
          {stat.prefix}{formatNumber(count)}{stat.suffix}
        </div>
        <div className="text-sm sm:text-base md:text-lg font-bold text-slate-800 mt-1 leading-tight">
          {stat.label}
        </div>
        <div className="text-[11px] sm:text-xs md:text-sm text-slate-500 mt-1 leading-snug">
          {stat.sublabel}
        </div>
      </div>

      {/* Стрелка-ссылка */}
      {stat.href && (
        <ArrowRight
          className={`absolute right-3 sm:right-5 top-4 sm:top-1/2 sm:-translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 ${stat.textColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300`}
        />
      )}
    </div>
  );

  if (stat.href) {
    return (
      <Link to={stat.href} className="block h-full">
        {inner}
      </Link>
    );
  }
  return <div className="h-full">{inner}</div>;
};

const StatsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full max-w-[1600px] mx-auto px-4 md:px-8 mb-16"
      aria-label="Статистика колледжа"
    >
      {/* Заголовок */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-10 w-1.5 rounded-full bg-gradient-to-b from-accent-500 to-primary-700" />
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-900">
            #ПГАТККЛЕЩЕВА в цифрах
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">
            80 лет подготовки востребованных специалистов Беларуси
          </p>
        </div>
      </div>

      {/* Сетка карточек */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="transition-all duration-500"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: `${i * 80}ms`,
            }}
          >
            <StatCard stat={stat} active={active} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
