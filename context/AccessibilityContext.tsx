import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSize = 'normal' | 'large' | 'extra';
type Contrast = 'normal' | 'bw' | 'wb' | 'blue';
type ImageMode = 'normal' | 'grayscale' | 'hidden';
type LetterSpacing = 'normal' | 'wide' | 'extra';
type LineHeight = 'normal' | 'medium' | 'large';
type AnimationsMode = 'normal' | 'disabled';

interface AccessibilityContextType {
  fontSize: FontSize;
  contrast: Contrast;
  imageMode: ImageMode;
  letterSpacing: LetterSpacing;
  lineHeight: LineHeight;
  animationsMode: AnimationsMode;
  setFontSize: (size: FontSize) => void;
  setContrast: (contrast: Contrast) => void;
  setImageMode: (mode: ImageMode) => void;
  setLetterSpacing: (spacing: LetterSpacing) => void;
  setLineHeight: (height: LineHeight) => void;
  setAnimationsMode: (mode: AnimationsMode) => void;
  resetSettings: () => void;
  isPanelOpen: boolean;
  togglePanel: () => void;
  closePanel: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Загружаем настройки из localStorage или используем дефолтные
  const [fontSize, setFontSizeState] = useState<FontSize>(() => 
    (localStorage.getItem('access-fontSize') as FontSize) || 'normal'
  );
  const [contrast, setContrastState] = useState<Contrast>(() => 
    (localStorage.getItem('access-contrast') as Contrast) || 'normal'
  );
  const [imageMode, setImageModeState] = useState<ImageMode>(() => 
    (localStorage.getItem('access-imageMode') as ImageMode) || 'normal'
  );
  const [letterSpacing, setLetterSpacingState] = useState<LetterSpacing>(() => 
    (localStorage.getItem('access-letterSpacing') as LetterSpacing) || 'normal'
  );
  const [lineHeight, setLineHeightState] = useState<LineHeight>(() => 
    (localStorage.getItem('access-lineHeight') as LineHeight) || 'normal'
  );
  const [animationsMode, setAnimationsModeState] = useState<AnimationsMode>(() => 
    (localStorage.getItem('access-animationsMode') as AnimationsMode) || 'normal'
  );
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    localStorage.setItem('access-fontSize', size);
  };

  const setContrast = (c: Contrast) => {
    setContrastState(c);
    localStorage.setItem('access-contrast', c);
  };

  const setImageMode = (mode: ImageMode) => {
    setImageModeState(mode);
    localStorage.setItem('access-imageMode', mode);
  };

  const setLetterSpacing = (spacing: LetterSpacing) => {
    setLetterSpacingState(spacing);
    localStorage.setItem('access-letterSpacing', spacing);
  };

  const setLineHeight = (height: LineHeight) => {
    setLineHeightState(height);
    localStorage.setItem('access-lineHeight', height);
  };

  const setAnimationsMode = (mode: AnimationsMode) => {
    setAnimationsModeState(mode);
    localStorage.setItem('access-animationsMode', mode);
  };

  const resetSettings = () => {
    setFontSize('normal');
    setContrast('normal');
    setImageMode('normal');
    setLetterSpacing('normal');
    setLineHeight('normal');
    setAnimationsMode('normal');
  };

  const togglePanel = () => setIsPanelOpen(prev => !prev);
  const closePanel = () => setIsPanelOpen(false);

  // Применяем классы к HTML тегу
  useEffect(() => {
    const html = document.documentElement;
    
    // Сброс классов
    html.classList.remove('font-normal', 'font-large', 'font-extra');
    html.classList.remove('theme-normal', 'theme-bw', 'theme-wb', 'theme-blue');
    html.classList.remove('img-normal', 'img-grayscale', 'img-hidden');
    html.classList.remove('tracking-normal', 'tracking-wide', 'tracking-extra');
    html.classList.remove('leading-normal', 'leading-medium', 'leading-large');
    html.classList.remove('animations-normal', 'animations-disabled');

    // Применение новых
    html.classList.add(`font-${fontSize}`);
    html.classList.add(`theme-${contrast}`);
    html.classList.add(`img-${imageMode}`);
    html.classList.add(`tracking-${letterSpacing}`);
    html.classList.add(`leading-${lineHeight}`);
    html.classList.add(`animations-${animationsMode}`);
  }, [fontSize, contrast, imageMode, letterSpacing, lineHeight, animationsMode]);

  return (
    <AccessibilityContext.Provider value={{
      fontSize, setFontSize,
      contrast, setContrast,
      imageMode, setImageMode,
      letterSpacing, setLetterSpacing,
      lineHeight, setLineHeight,
      animationsMode, setAnimationsMode,
      resetSettings,
      isPanelOpen, togglePanel, closePanel
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};