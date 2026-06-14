import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tractor, HardHat, Droplet, Wrench, Hammer } from 'lucide-react';

const specialties = [
  { Icon: Tractor, label: 'Сельхозтехника' },
  { Icon: Hammer, label: 'Строительство дорог' },
  { Icon: Droplet, label: 'Мелиорация земель' },
  { Icon: Wrench, label: 'Механизация' },
  { Icon: HardHat, label: 'Возведение зданий' },
];

const PageLoader: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % specialties.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] w-full gap-8">
      {/* Custom engineering-styled loader */}
      <div className="relative w-28 h-28 flex items-center justify-center">
        
        {/* Background ambient glow */}
        <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-xl animate-pulse"></div>

        {/* Engineering dashed outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed border-primary-800/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Gear-like inner ring using SVG stroke-dasharray */}
        <motion.svg 
          viewBox="0 0 100 100" 
          className="absolute inset-1.5 w-25 h-25 text-accent-500"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <circle 
            cx="50" cy="50" r="46" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeDasharray="6 8" 
          />
        </motion.svg>

        {/* Dynamic Center Icon inside a pill/circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.5, filter: 'blur(4px)' }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="relative z-10 bg-white/90 backdrop-blur shadow-lg p-4 rounded-2xl border border-slate-100"
            >
              {React.createElement(specialties[currentIndex].Icon, { 
                className: "w-8 h-8 text-primary-900",
                strokeWidth: 1.5
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-slate-800 tracking-[0.2em] uppercase">Загрузка</span>
          <div className="flex gap-[3px] items-center mt-0.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1 h-1 bg-accent-500 rounded-full"
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
        
        {/* Animated Sub-label corresponding to the icon */}
        <div className="h-4 overflow-hidden flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] text-accent-600 uppercase tracking-widest font-bold"
            >
              {specialties[currentIndex].label}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default PageLoader;
