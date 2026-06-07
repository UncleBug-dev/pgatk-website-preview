import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from 'lucide-react';

interface LightboxProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  titles?: string[];
}

export const Lightbox: React.FC<LightboxProps> = ({ 
  images, 
  selectedIndex, 
  onClose, 
  onSelectIndex,
  titles 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onSelectIndex(selectedIndex < images.length - 1 ? selectedIndex + 1 : selectedIndex);
      }
      if (e.key === 'ArrowLeft') {
        onSelectIndex(selectedIndex > 0 ? selectedIndex - 1 : selectedIndex);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    document.body.classList.add('lightbox-open');
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.classList.remove('lightbox-open');
    };
  }, [selectedIndex, images.length, onClose, onSelectIndex]);

  return createPortal(
    <div 
      className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <button 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
      >
        <X className="w-8 h-8" />
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); onSelectIndex(selectedIndex > 0 ? selectedIndex - 1 : selectedIndex); }}
        className={`absolute left-4 md:left-10 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all ${selectedIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-6xl max-h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <img 
          src={images[selectedIndex]} 
          alt={titles ? titles[selectedIndex] : `Просмотр ${selectedIndex + 1}`} 
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          {titles && titles[selectedIndex] && (
             <span className="text-white font-medium mb-1 truncate max-w-2xl px-4 text-center">{titles[selectedIndex]}</span>
          )}
          <span className="text-white/70 font-medium tracking-wider text-sm">
            {selectedIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      <button 
        onClick={(e) => { e.stopPropagation(); onSelectIndex(selectedIndex < images.length - 1 ? selectedIndex + 1 : selectedIndex); }}
        className={`absolute right-4 md:right-10 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all ${selectedIndex === images.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>
    </div>,
    document.body
  );
};
