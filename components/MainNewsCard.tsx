import React from 'react';
import { Calendar, Image as ImageIcon, Play } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { motion } from 'framer-motion';

interface Props {
  news: any;
  getImageUrl: (url?: string) => string;
}

const MainNewsCard: React.FC<Props> = ({ news, getImageUrl }) => (
  <motion.div 
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="relative h-96 rounded-2xl overflow-hidden shadow-md group hover:shadow-2xl hover:shadow-accent-500/20 transition-shadow"
  >
    {!news.imageUrl ? (
      <div className="absolute inset-0 w-full h-full bg-slate-800 flex flex-col items-center justify-center text-slate-500 transition-transform duration-700 group-hover:scale-105">
        <img src={`${import.meta.env.BASE_URL}images/logo/logo_pgatkk.webp`} alt="Логотип" className="w-16 h-16 mb-2 opacity-30 object-contain grayscale" />
        <span className="text-sm font-semibold uppercase tracking-wider opacity-50">Нет фото</span>
      </div>
    ) : (
      <OptimizedImage
        src={getImageUrl(news.imageUrl)}
        alt={news.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
    
    {news.hasVideo && (
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white p-3 rounded-full shadow-lg border border-white/10 group-hover:bg-accent-500 transition-colors duration-300">
        <Play className="w-6 h-6 fill-white translate-x-[2px]" />
      </div>
    )}
    
    <div className="absolute bottom-0 left-0 p-8 text-white w-full">
      <div className="flex flex-wrap gap-2 mb-3">
        {(Array.isArray(news.category) ? news.category : [news.category || 'Telegram']).map(
          (cat: string, idx: number) => (
            <span
              key={idx}
              className="bg-accent-500 text-primary-900 text-xs font-bold px-2 py-1 rounded inline-block"
              title={cat === 'ВПВ' ? 'Военно-патриотическое воспитание' : undefined}
            >
              {cat === 'ВПВ' ? '#ВПВ' : cat}
            </span>
          ),
        )}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold font-display mb-3 leading-tight group-hover:text-accent-400 transition-colors line-clamp-2">
        {news.title}
      </h3>
      <p className="text-slate-300 line-clamp-2 mb-4">{news.content}</p>
      <div className="flex items-center text-sm text-slate-300">
        <Calendar className="w-4 h-4 mr-2" />
        {news.date}
      </div>
    </div>
  </motion.div>
);

export default MainNewsCard;
