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
import { motion } from 'framer-motion';

const MotionLink = motion(Link as any);

const links: QuickLinkItem[] = [
  { label: 'Год белорусской женщины', icon: Flower2, href: '/year-of-woman', color: 'bg-rose-600' },
  { label: 'Акции, конкурсы', icon: Trophy, href: '/contests', color: 'bg-amber-500' },
  { label: 'Подросток и закон', icon: Scale, href: '/law-corner', color: 'bg-blue-600' },
  { label: 'Профилактика коррупции', icon: ShieldCheck, href: '/corruption-prevention', color: 'bg-red-600' },
  { label: 'Электронное обращение граждан', icon: Mail, href: 'https://xn--80abnmycp7evc.xn--90ais/', color: 'bg-sky-600' },
  { label: 'Online-услуги', icon: MousePointerClick, href: '/odno-okno/uslugi', color: 'bg-indigo-600' },
];

const QuickLinks: React.FC = () => {
  return (
    <div className="relative -mt-24 md:-mt-28 z-40 w-full max-w-[1600px] mx-auto px-4 md:px-8 mb-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
        {links.map((link, index) => (
          link.href?.startsWith('/') ? (
            <MotionLink 
              key={link.label} 
              to={link.href} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-slate-100 flex flex-col items-center text-center h-full justify-center"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${link.color} rounded-full flex items-center justify-center text-white mb-2 sm:mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                <link.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-slate-800 text-xs sm:text-sm md:text-base leading-tight w-full break-words">
                {link.label}
              </h3>
            </MotionLink>
          ) : (
            <motion.a 
              key={link.label} 
              href={link.href || '#'} 
              target={link.href?.startsWith('http') ? "_blank" : undefined}
              rel={link.href?.startsWith('http') ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-slate-100 flex flex-col items-center text-center h-full justify-center"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${link.color} rounded-full flex items-center justify-center text-white mb-2 sm:mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                <link.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="font-bold text-slate-800 text-xs sm:text-sm md:text-base leading-tight w-full break-words">
                {link.label}
              </h3>
            </motion.a>
          )
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;