import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, FileText, Newspaper, ChevronRight, Hash } from 'lucide-react';
import { MAIN_MENU } from '../constants';
import { useData } from '../context/DataContext';

interface SearchResult {
  id: string;
  type: 'page' | 'news';
  title: string;
  subtitle?: string;
  href: string;
  date?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Компонент для подсветки найденного текста
const Highlight = ({ text, query }: { text: string; query: string }) => {
  if (!query || !text) return <>{text}</>;
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return <>{text}</>;

  // Экранируем слова для регулярного выражения
  const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${words.map(escapeRegExp).join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        words.some(w => part.toLowerCase() === w) ? (
          <mark key={i} className="bg-yellow-200 text-slate-900 rounded px-0.5">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { news: contextNews, importantDocs } = useData();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Фокус на инпут при открытии
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery(''); // Сбрасываем запрос при новом открытии
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Сброс индекса при изменении запроса
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Управление с клавиатуры
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (results.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % results.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          const selected = results[selectedIndex];
          if (selected) {
            onClose();
            if (selected.href.startsWith('http')) {
              window.open(selected.href, '_blank');
            } else {
              navigate(selected.href);
            }
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, navigate, onClose]);

  // Автоматическая прокрутка к выбранному элементу
  useEffect(() => {
    if (resultsRef.current && results.length > 0) {
      const selectedEl = resultsRef.current.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex, results]);

  // Блокировка скролла фона
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // ЛОГИКА ПОИСКА
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchWords = query.toLowerCase().split(/\s+/).filter(Boolean);
    const foundItems: SearchResult[] = [];

    // Функция проверки, содержит ли текст ВСЕ слова из запроса
    const matches = (text: string) => {
      const lower = text.toLowerCase();
      return searchWords.every(word => lower.includes(word));
    };

    // 1. Поиск по Меню (Страницы)
    MAIN_MENU.forEach(item => {
      if (item.label && item.href && item.href !== '#') {
        if (matches(item.label)) {
          foundItems.push({
            id: `menu-${item.label}`,
            type: 'page',
            title: item.label,
            subtitle: 'Раздел меню',
            href: item.href
          });
        }
      }

      if (item.submenu) {
        item.submenu.forEach(sub => {
          if (matches(sub.label)) {
            foundItems.push({
              id: `sub-${sub.label}`,
              type: 'page',
              title: sub.label,
              subtitle: `Раздел: ${item.label}`,
              href: sub.href
            });
          }
        });
      }
    });

    // 2. Поиск по Новостям
    contextNews.forEach(newsItem => {
      if (matches(newsItem.title) || (newsItem.content && matches(newsItem.content))) {
        foundItems.push({
          id: `news-${newsItem.id}`,
          type: 'news',
          title: newsItem.title,
          subtitle: newsItem.content ? newsItem.content.replace(/<[^>]*>/g, '').slice(0, 100) + '...' : '',
          href: `/news/${newsItem.id}`,
          date: newsItem.date
        });
      }
    });

    // 3. Поиск по Важным новостям
    importantDocs.forEach(docItem => {
      if (matches(docItem.title) || (docItem.content && matches(docItem.content))) {
        foundItems.push({
          id: `imp-${docItem.id}`,
          type: 'news',
          title: docItem.title,
          subtitle: 'Важный документ',
          href: `/important/${docItem.id}`,
          date: docItem.date
        });
      }
    });

    setResults(foundItems.slice(0, 10)); // Ограничиваем выдачу до 10
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-4 sm:pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 ring-1 ring-slate-900/5 flex flex-col max-h-[85vh]">
        
        {/* Search Header */}
        <div className="relative flex items-center px-4 py-4 border-b border-slate-100 flex-shrink-0">
          <Search className="w-6 h-6 text-slate-400 ml-2" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по сайту..."
            className="w-full px-4 py-2 text-xl text-slate-800 placeholder:text-slate-400 focus:outline-none bg-transparent"
          />
          <button 
            onClick={onClose}
            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div ref={resultsRef} className="overflow-y-auto custom-scrollbar bg-slate-50 flex-1">
          {query && results.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              <Hash className="w-12 h-12 mx-auto mb-3 text-slate-300" />
              <p className="text-lg font-medium">Ничего не найдено</p>
              <p className="text-sm">Попробуйте изменить запрос</p>
            </div>
          )}

          {!query && (
            <div className="py-12 text-center text-slate-400">
              <p>Введите текст для поиска...</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Результаты поиска
              </div>
              {results.map((result, index) => {
                const isSelected = index === selectedIndex;
                const isExternal = result.href.startsWith('http');
                
                // Для внешних ссылок используем обычный тег <a>, иначе <Link>
                const Wrapper = isExternal ? 'a' : Link;
                const wrapperProps = isExternal 
                  ? { href: result.href, target: '_blank', rel: 'noopener noreferrer' } 
                  : { to: result.href };

                return (
                  <Wrapper
                    key={result.id}
                    {...wrapperProps}
                    onClick={onClose}
                    data-index={index}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex items-start gap-4 px-6 py-4 border-b border-slate-100 last:border-0 transition-colors group cursor-pointer ${
                      isSelected ? 'bg-primary-50/50 outline-none ring-2 ring-inset ring-primary-500' : 'hover:bg-white'
                    }`}
                  >
                    <div className={`mt-1 p-2 rounded-lg transition-colors ${result.type === 'news' ? 'bg-accent-100 text-accent-600' : 'bg-primary-50 text-primary-600'} ${isSelected ? 'shadow-sm' : ''}`}>
                      {result.type === 'news' ? <Newspaper className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className={`font-bold text-base transition-colors truncate ${isSelected ? 'text-primary-900' : 'text-slate-800'}`}>
                          <Highlight text={result.title} query={query} />
                        </h4>
                        {result.type === 'news' && (
                          <span className="text-xs text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded">
                            Новость
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-slate-500 line-clamp-1">
                        <Highlight text={result.subtitle || ''} query={query} />
                      </p>
                      
                      {result.date && (
                        <span className="text-xs text-slate-400 mt-1 block">
                          {result.date}
                        </span>
                      )}
                    </div>

                    <ChevronRight className={`w-5 h-5 transition-colors self-center ${isSelected ? 'text-primary-500 translate-x-1' : 'text-slate-300'}`} />
                  </Wrapper>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="bg-white border-t border-slate-100 px-4 py-3 text-xs text-slate-400 flex justify-between items-center flex-shrink-0">
          <span>Найдено результатов: <b>{results.length}</b></span>
          <span className="hidden sm:flex items-center gap-2">
            <span>Используйте <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded">↑</kbd> <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded">↓</kbd> для навигации</span>
            <span>и <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded">Enter</kbd> для перехода</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;