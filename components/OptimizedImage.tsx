import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  useWebp?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className, 
  fallbackSrc = '/images/placeholder.png',
  useWebp = false, 
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Пытаемся автоматически сгенерировать путь к WebP, если это локальная картинка (jpg/png)
  const webpSrc = useWebp && src && typeof src === 'string' && (src.endsWith('.jpg') || src.endsWith('.jpeg') || src.endsWith('.png'))
    ? src.replace(/\.(png|jpe?g)$/i, '.webp')
    : null;

  return (
    <div className={`relative overflow-hidden bg-gray-100 flex-shrink-0 ${className || ''}`}>
      {/* Скелетон / Плейсхолдер */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
          <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
      
      <picture className="w-full h-full block">
        {webpSrc && !error && (
          <source srcSet={webpSrc} type="image/webp" />
        )}
        <motion.img
          src={error || !src ? fallbackSrc : src}
          alt={alt || "Изображение"}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded || error ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover"
          {...props}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
