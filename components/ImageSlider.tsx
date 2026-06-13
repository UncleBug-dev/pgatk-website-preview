import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
  altPrefix?: string;
  fallbackImage?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, altPrefix = "Image", fallbackImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  // Auto-play functionality
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (images && images.length > 1 && !isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 5000); // 5 seconds interval looks better with slow pan
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [images, isHovered]);

  if (!images || images.length === 0) {
    return (
      <img 
        src={fallbackImage} 
        alt="Fallback" 
        className="w-full h-full object-cover" 
      />
    );
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setCurrentIndex(index);
  };

  const handleImageError = (index: number) => {
    setFailedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  // 4 variants of ken burns effect classes defined in index.css
  const getKenBurnsClass = (index: number) => `animate-kenburns-${index % 4}`;

  return (
    <div 
      className="relative w-full h-full overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images Layer */}
      {images.map((img, idx) => {
        const isCurrent = idx === currentIndex;
        const isFailed = failedImages.has(idx);
        const imageSource = isFailed && fallbackImage ? fallbackImage : img;
        
        return (
          <div 
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={imageSource}
              alt={`${altPrefix} ${idx + 1}`}
              className={`w-full h-full object-cover ${isCurrent ? getKenBurnsClass(idx) : 'scale-105'}`}
              onError={() => handleImageError(idx)}
            />
          </div>
        );
      })}
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button 
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-primary-900 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-primary-900 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20 flex-wrap px-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => handleDotClick(e, idx)}
                className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                  idx === currentIndex ? 'bg-accent-500 w-6' : 'bg-white/80 hover:bg-white w-2'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
