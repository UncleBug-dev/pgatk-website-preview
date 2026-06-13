import React, { useState, useRef, useEffect } from 'react';

interface AddressLinkProps {
  children: React.ReactNode;
  className?: string;
  searchQuery?: string;
}

const AddressLink: React.FC<AddressLinkProps> = ({ children, className = "", searchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const query = encodeURIComponent(searchQuery || "Пинск, улица Иркутско-Пинской дивизии, 25");

  return (
    <span className="relative inline-block" ref={dropdownRef}>
      <span 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsOpen(!isOpen); }}
        className={`cursor-pointer group relative inline ${className}`}
        title="Показать на карте"
      >
        <span className="border-b-2 border-dashed border-accent-400/50 group-hover:border-accent-500 group-hover:text-accent-500 transition-colors">
          {children}
        </span>
      </span>

      {isOpen && (
        <div className="absolute top-full left-0 sm:left-1/2 sm:-translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-slate-100 z-[9999] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-slate-50 px-4 py-2 border-b border-slate-100 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-left">
            Где мы находимся:
          </div>
          <a 
            href={`https://yandex.ru/maps/?text=${query}`} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
          >
            <div className="w-5 h-5 rounded flex-shrink-0 bg-[#FF0000] text-white flex items-center justify-center font-bold text-xs font-sans">Я</div>
            Яндекс Карты
          </a>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${query}`} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            Google Maps
          </a>
        </div>
      )}
    </span>
  );
};

export default AddressLink;
