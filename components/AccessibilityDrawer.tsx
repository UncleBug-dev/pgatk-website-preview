import React, { useEffect } from 'react';
import { 
  X, Type, Image as ImageIcon, MoveHorizontal, AlignJustify, Palette, PlaySquare, RotateCcw
} from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

const AccessibilityDrawer: React.FC = () => {
  const {
    isPanelOpen, closePanel,
    fontSize, setFontSize,
    contrast, setContrast,
    imageMode, setImageMode,
    letterSpacing, setLetterSpacing,
    lineHeight, setLineHeight,
    animationsMode, setAnimationsMode,
    resetSettings
  } = useAccessibility();

  // Disable body scroll when drawer is open
  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPanelOpen]);

  if (!isPanelOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end ignore-theme">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={closePanel}
      ></div>

      {/* Drawer */}
      <div className="relative w-full max-w-sm h-full bg-white shadow-2xl overflow-y-auto flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary-900">Версия для слабовидящих</h2>
          <button 
            onClick={closePanel}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 flex-1">
          
          {/* Font Size */}
          <section>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">
              <Type className="w-4 h-4 text-accent-500" /> 
              Размер шрифта
            </div>
            <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl">
              <button onClick={() => setFontSize('normal')} className={`flex-1 py-2 px-2 rounded-lg text-sm transition-all ${fontSize === 'normal' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Обычный</button>
              <button onClick={() => setFontSize('large')} className={`flex-1 py-2 px-2 rounded-lg text-base transition-all ${fontSize === 'large' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Крупный</button>
              <button onClick={() => setFontSize('extra')} className={`flex-1 py-2 px-2 rounded-lg text-lg transition-all ${fontSize === 'extra' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Очень крупный</button>
            </div>
          </section>

          {/* Color Scheme */}
          <section>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">
              <Palette className="w-4 h-4 text-accent-500" /> 
              Цветовая схема
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setContrast('normal')} className={`py-3 px-2 rounded-xl text-sm border-2 transition-all ${contrast === 'normal' ? 'border-primary-900 bg-primary-50 font-bold text-primary-900' : 'border-slate-200 text-slate-800 hover:border-primary-300'}`}>Стандартная</button>
              <button onClick={() => setContrast('bw')} className={`py-3 px-2 rounded-xl text-sm border-2 filter grayscale transition-all ${contrast === 'bw' ? 'border-black font-bold bg-white text-slate-900' : 'border-slate-200 text-slate-800 hover:border-black'}`}>Черно-белая</button>
              <button onClick={() => setContrast('wb')} className={`py-3 px-2 rounded-xl text-sm border-2 bg-black text-white transition-all ${contrast === 'wb' ? 'border-accent-500 font-bold' : 'border-black hover:border-slate-700'}`}>Обратная (тёмная)</button>
              <button onClick={() => setContrast('blue')} className={`py-3 px-2 rounded-xl text-sm border-2 bg-[#cce5ff] text-[#003366] transition-all ${contrast === 'blue' ? 'border-blue-600 font-bold' : 'border-blue-300 hover:border-blue-500'}`}>Синяя</button>
            </div>
          </section>

          {/* Images */}
          <section>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">
              <ImageIcon className="w-4 h-4 text-accent-500" /> 
              Изображения
            </div>
            <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl">
              <button onClick={() => setImageMode('normal')} className={`flex-1 py-2 px-2 rounded-lg text-sm transition-all ${imageMode === 'normal' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Включены</button>
              <button onClick={() => setImageMode('grayscale')} className={`flex-1 py-2 px-2 rounded-lg text-sm transition-all ${imageMode === 'grayscale' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Ч/Б</button>
              <button onClick={() => setImageMode('hidden')} className={`flex-1 py-2 px-2 rounded-lg text-sm transition-all ${imageMode === 'hidden' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Скрыть</button>
            </div>
          </section>

          {/* Animations */}
          <section>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">
              <PlaySquare className="w-4 h-4 text-accent-500" /> 
              Анимации и эффекты
            </div>
            <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl">
              <button onClick={() => setAnimationsMode('normal')} className={`flex-1 py-2 px-2 rounded-lg text-sm transition-all ${animationsMode === 'normal' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Включены</button>
              <button onClick={() => setAnimationsMode('disabled')} className={`flex-1 py-2 px-2 rounded-lg text-sm transition-all ${animationsMode === 'disabled' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Отключены</button>
            </div>
            <p className="text-xs text-slate-500 mt-2">Отключение анимаций полезно при нарушениях вестибулярного аппарата.</p>
          </section>

          {/* Letter Spacing */}
          <section>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">
              <MoveHorizontal className="w-4 h-4 text-accent-500" /> 
              Интервал букв
            </div>
            <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl">
              <button onClick={() => setLetterSpacing('normal')} className={`flex-1 py-2 px-2 rounded-lg text-sm transition-all ${letterSpacing === 'normal' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Обычный</button>
              <button onClick={() => setLetterSpacing('wide')} className={`flex-1 py-2 px-2 rounded-lg text-sm tracking-wide transition-all ${letterSpacing === 'wide' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Широкий</button>
              <button onClick={() => setLetterSpacing('extra')} className={`flex-1 py-2 px-2 rounded-lg text-sm tracking-[0.1em] transition-all ${letterSpacing === 'extra' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Максимум</button>
            </div>
          </section>

          {/* Line Height */}
          <section>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">
              <AlignJustify className="w-4 h-4 text-accent-500" /> 
              Интервал строк
            </div>
            <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl">
              <button onClick={() => setLineHeight('normal')} className={`flex-1 py-2 px-2 rounded-lg text-sm transition-all ${lineHeight === 'normal' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Обычный</button>
              <button onClick={() => setLineHeight('medium')} className={`flex-1 py-2 px-2 rounded-lg text-sm transition-all ${lineHeight === 'medium' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Широкий</button>
              <button onClick={() => setLineHeight('large')} className={`flex-1 py-2 px-2 rounded-lg text-sm transition-all ${lineHeight === 'large' ? 'bg-white shadow text-primary-900 font-bold' : 'text-slate-600 hover:bg-white/50'}`}>Максимум</button>
            </div>
          </section>

        </div>

        {/* Footer actions */}
        <div className="sticky bottom-0 bg-white border-t border-slate-100 p-6">
          <button 
            onClick={resetSettings}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Сбросить все настройки
          </button>
        </div>

      </div>
    </div>
  );
};

export default AccessibilityDrawer;
