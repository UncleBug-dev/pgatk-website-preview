import React from 'react';
import { Image as ImageIcon, Play } from 'lucide-react';

interface Props {
  news: any;
  getImageUrl: (url?: string) => string;
}

const SideNewsCard: React.FC<Props> = ({ news, getImageUrl }) => (
  <>
    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-200">
      {!news.imageUrl ? (
        <img src={`${import.meta.env.BASE_URL}images/logo/logo_pgatkk.png`} alt="Логотип" className="w-8 h-8 opacity-50 object-contain grayscale" />
      ) : (
        <img
          src={getImageUrl(news.imageUrl)}
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}
      {news.hasVideo && (
        <div className="absolute bottom-1 right-1 bg-black/50 backdrop-blur-md text-white p-1 rounded-full shadow-lg border border-white/10 group-hover:bg-accent-500 transition-colors duration-300">
          <Play className="w-2.5 h-2.5 fill-white translate-x-[0.5px]" />
        </div>
      )}
    </div>
    <div className="flex flex-col justify-center flex-grow pr-2">
      <div className="flex items-center text-xs text-slate-500 mb-1">
        {(Array.isArray(news.category) ? news.category : [news.category || 'Telegram']).map(
          (cat: string, idx: number) => (
            <span key={idx} className="text-accent-600 font-semibold mr-2">
              {cat}
            </span>
          ),
        )}
        <span>{news.date}</span>
      </div>
      <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary-800 transition-colors line-clamp-2">
        {news.title}
      </h4>
    </div>
  </>
);

export default SideNewsCard;
