import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Download, FileText, Image as ImageIcon } from 'lucide-react';

interface PdfViewerModalProps {
  url: string | null;
  onClose: () => void;
}

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ url, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (url) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [url, onClose]);

  if (!url) return null;

  const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(url);

  // Append #toolbar=0 to standardise iframe rendering and hide default PDF controls
  const iframeSrc = url.includes('#') ? url : `${url}#toolbar=0`;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full h-full max-w-6xl max-h-[95vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-300 border border-slate-700/20"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50 flex-shrink-0">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-rose-100 text-rose-600 rounded-lg hidden sm:block">
                 {isImage ? <ImageIcon className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
             </div>
             <div>
                 <h3 className="font-bold text-primary-900 text-sm md:text-base truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                   {isImage ? 'Просмотр фотографии' : 'Просмотр документа'}
                 </h3>
                 <p className="text-xs text-slate-500 truncate max-w-[200px] sm:max-w-xs md:max-w-md" title={url.split('/').pop()}>
                   {isImage ? 'Фотогалерея' : (url.split('/').pop() || 'Документ')}
                 </p>
             </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
             <a 
               href={url} 
               download 
               data-no-intercept="true"
               className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-accent-600 hover:bg-slate-100 transition-colors bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm"
             >
               <Download className="w-4 h-4" /> <span className="hidden md:inline">Скачать</span>
             </a>
             <a 
               href={url} 
               target="_blank" 
               rel="noopener noreferrer" 
               data-no-intercept="true"
               className="flex items-center gap-1.5 text-sm font-medium text-white bg-accent-600 hover:bg-accent-700 transition-colors px-4 py-2 rounded-lg shadow-sm"
             >
               <ExternalLink className="w-4 h-4" /> <span className="hidden md:inline">Открыть в окне</span>
             </a>
             <div className="w-px h-8 bg-slate-200 mx-1"></div>
             <button 
               onClick={onClose} 
               className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500/20"
               aria-label="Закрыть"
             >
               <X className="w-6 h-6" />
             </button>
          </div>
        </div>
        
        {/* Body (iframe or image) */}
        <div className="flex-1 w-full bg-slate-200/50 flex items-center justify-center relative overflow-hidden">
          {/* Loading spinner */}
          <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 text-slate-400">
             <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent-600 mb-4"></div>
             <p className="text-sm font-medium">Загрузка документа...</p>
          </div>
          
          {isImage ? (
            <div className="w-full h-full flex items-center justify-center p-4 bg-slate-800/5">
              <img 
                src={url} 
                alt="Просмотр" 
                className="max-w-full max-h-full object-contain rounded drop-shadow-md z-10"
              />
            </div>
          ) : (
            <iframe 
              src={iframeSrc} 
              className="w-full h-full border-none z-10 bg-white"
              title="PDF Viewer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PdfViewerModal;
