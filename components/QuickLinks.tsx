import React from 'react';
import { 
  Flower2, 
  Trophy, 
  Scale, 
  ShieldCheck, 
  Mail, 
  MousePointerClick 
} from 'lucide-react';
import { QuickLinkItem } from '../types';
import { Link } from 'react-router-dom';

const links: QuickLinkItem[] = [
  { label: 'Год белорусской женщины', icon: Flower2, href: '/year-of-woman', color: 'bg-rose-600' },
  { label: 'Акции, конкурсы', icon: Trophy, href: '/contests', color: 'bg-amber-500' },
  { label: 'Подросток и закон', icon: Scale, href: '/law-corner', color: 'bg-blue-600' },
  { label: 'Профилактика коррупции', icon: ShieldCheck, href: '/corruption-prevention', color: 'bg-red-600' },
  { label: 'Электронное обращение граждан', icon: Mail, href: '#', color: 'bg-sky-600' },
  { label: 'Online-услуги', icon: MousePointerClick, href: '#', color: 'bg-indigo-600' },
];

const QuickLinks: React.FC = () => {
  return (
    <div className="relative -mt-24 md:-mt-28 z-40 w-full max-w-[1600px] mx-auto px-4 md:px-8 mb-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {links.map((link) => (
          link.href?.startsWith('/') ? (
            <Link 
              key={link.label} 
              to={link.href} 
              className="group bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 md:hover:-translate-y-2 h-full justify-center"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${link.color} rounded-full flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                <link.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm md:text-base leading-tight w-full break-words">
                {link.label}
              </h3>
            </Link>
          ) : (
            <a 
              key={link.label} 
              href={link.href || '#'} 
              className="group bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 md:hover:-translate-y-2 h-full justify-center"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${link.color} rounded-full flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                <link.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm md:text-base leading-tight w-full break-words">
                {link.label}
              </h3>
            </a>
          )
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;