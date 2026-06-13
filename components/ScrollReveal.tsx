import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  duration = 0.5
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getHiddenState = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 50 };
      case 'down': return { opacity: 0, y: -50 };
      case 'left': return { opacity: 0, x: 50 };
      case 'right': return { opacity: 0, x: -50 };
      case 'none': return { opacity: 0 };
    }
  };

  const getVisibleState = () => {
    return direction === 'none' 
      ? { opacity: 1 } 
      : { opacity: 1, y: 0, x: 0 };
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getHiddenState()}
      animate={isInView ? getVisibleState() : getHiddenState()}
      transition={{ 
        duration, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Плавный ease-out cubic-bezier
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
