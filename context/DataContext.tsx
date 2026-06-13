import React, { createContext, useContext, useState, useEffect } from 'react';
import { IMPORTANT_NEWS, DEFAULT_SLIDES, SlideData } from '../constants';
import { fetchTelegramPosts, TelegramPost } from '../utils/telegram';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, setDoc, writeBatch } from 'firebase/firestore';
import { db } from '../utils/firebase';

// Типы данных
export interface NewsItem {
  id: string | number;
  title: string;
  category: string | string[];
  date: string;
  content: string;
  imageUrl: string;
  isImportant?: boolean;
  link?: string;
  hasVideo?: boolean;
  images?: string[];
}

export interface SettingsState {
  phone: string;
  email: string;
  address: string;
  showQualityYearBanner: boolean;
  showAdmissionBanner: boolean;
  showAdmissionProgress: boolean;
}

interface DataContextType {
  news: NewsItem[];
  newsLoading: boolean;
  slides: SlideData[];
  slidesLoading: boolean;
  addSlide: (item: Omit<SlideData, 'id'>) => Promise<void>;
  updateSlide: (id: string, data: Partial<SlideData>) => Promise<void>;
  deleteSlide: (id: string) => Promise<void>;
  importantDocs: any[];
  addNews: (item: Omit<NewsItem, 'id' | 'date'>) => void;
  updateNews: (id: string | number, updatedItem: Partial<NewsItem>) => void;
  deleteNews: (id: string | number) => void;
  getNewsById: (id: string | number) => NewsItem | undefined;
  addImportantDoc: (item: any) => void;
  updateImportantDoc: (id: string | number, updatedItem: any) => void;
  deleteImportantDoc: (id: string | number) => void;
  getImportantDocById: (id: string | number) => any | undefined;
  settings: SettingsState;
  updateSettings: (newSettings: Partial<SettingsState>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [localNews, setLocalNews] = useState<NewsItem[]>([]);
  const [telegramNews, setTelegramNews] = useState<NewsItem[]>([]);
  const [importantDocs, setImportantDocs] = useState<any[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [slidesLoading, setSlidesLoading] = useState(true);
  const [settings, setSettings] = useState<SettingsState>({
    phone: '8 (0165) 63-92-93',
    email: 'uo@pgatkk.by',
    address: 'г. Пинск, улица Иркутско-Пинской дивизии, 25',
    showQualityYearBanner: true,
    showAdmissionBanner: false,
    showAdmissionProgress: false
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const getDocSection = (doc: any): string => {
    if (doc.section) return doc.section;
    
    const title = (doc.title || '').toLowerCase();
    
    if (title.includes('безопасн') || title.includes('воде') || title.includes('экстремизм') || title.includes('мошенничеств') || title.includes('кибер') || title.includes('травматизм')) {
      return 'Безопасность';
    }
    
    if (doc.id === '1' || doc.id === '3' || title.includes('насили') || title.includes('сексуальн') || title.includes('психолог') || title.includes('нарко') || title.includes('курени') || title.includes('педофил') || title.includes('понять и помочь') || title.includes('молчишь')) {
      return 'Профилактика и психология';
    }
    
    if (title.includes('стоимост') || title.includes('оплат') || title.includes('план') || title.includes('поработать') || title.includes('14')) {
      return 'Учеба и работа';
    }
    
    return 'Общие ресурсы';
  };

  // Инициализация из Firestore
  useEffect(() => {
    // Подписка на коллекцию news
    const unsubscribeNews = onSnapshot(collection(db, 'news'), (snapshot) => {
      const newsData: NewsItem[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as NewsItem[];
      setLocalNews(newsData);
      setNewsLoading(false); // первый снапшот получен
    }, (error) => {
      console.error("Firebase News Error:", error);
      setNewsLoading(false); // ошибка — тоже снимаем загрузку
    });

    // Подписка на документы
    const unsubscribeDocs = onSnapshot(collection(db, 'importantDocs'), (snapshot) => {
      const docsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setImportantDocs(docsData);
    });

    // Подписка на настройки
    const unsubscribeSettings = onSnapshot(doc(db, 'settings', 'global'), (docSnap) => {
      if (docSnap.exists()) {
        setSettings(docSnap.data() as SettingsState);
      } else {
        // Если настроек еще нет в базе (первый запуск), создаем их
        setDoc(doc(db, 'settings', 'global'), {
          phone: '8 (0165) 63-92-93',
          email: 'uo@pgatkk.by',
          address: 'г. Пинск, улица Иркутско-Пинской дивизии, 25',
          showQualityYearBanner: true,
          showAdmissionBanner: false,
          showAdmissionProgress: false
        });
      }
    });

    // Подписка на слайды Hero
    const unsubscribeSlides = onSnapshot(collection(db, 'slides'), async (snapshot) => {
      if (snapshot.empty) {
        // Первый запуск — заполняем из DEFAULT_SLIDES
        const batch = writeBatch(db);
        DEFAULT_SLIDES.forEach(slide => {
          batch.set(doc(db, 'slides', slide.id), slide);
        });
        await batch.commit();
      } else {
        const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as SlideData[];
        setSlides(data.sort((a, b) => a.order - b.order));
        setSlidesLoading(false);
      }
    }, () => setSlidesLoading(false));

    setIsLoaded(true);

    return () => {
      unsubscribeNews();
      unsubscribeDocs();
      unsubscribeSettings();
      unsubscribeSlides();
    };
  }, []);

  // Загрузка новостей из Telegram
  useEffect(() => {
    fetchTelegramPosts().then(posts => {
      // Преобразуем TelegramPost в NewsItem
      const formattedPosts: NewsItem[] = posts.map(p => ({
        id: p.id,
        title: p.title,
        category: p.category,
        date: p.date,
        content: p.summary,
        imageUrl: p.imageUrl || '',
        link: p.link,
        hasVideo: p.hasVideo,
        images: p.images,
      }));
      setTelegramNews(formattedPosts);
    });
  }, []);

  // Объединенный список новостей
  const news = [...localNews, ...telegramNews];

  // CRUD операции для новостей
  // CRUD операции для новостей
  const addNews = async (item: Omit<NewsItem, 'id' | 'date'>) => {
    const today = new Date();
    const dateStr = today.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
    
    const newItem = {
      ...item,
      date: dateStr,
      imageUrl: item.imageUrl || 'images/news/placeholder.jpg',
      createdAt: Date.now() // для надежной сортировки
    };
    
    try {
      await addDoc(collection(db, 'news'), newItem);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const updateNews = async (id: string | number, updatedItem: Partial<NewsItem>) => {
    try {
      await updateDoc(doc(db, 'news', id.toString()), updatedItem);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const deleteNews = async (id: string | number) => {
    try {
      await deleteDoc(doc(db, 'news', id.toString()));
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  // CRUD для слайдов
  const addSlide = async (item: Omit<SlideData, 'id'>) => {
    try {
      await addDoc(collection(db, 'slides'), item);
    } catch (e) { console.error('Error adding slide:', e); }
  };

  const updateSlide = async (id: string, data: Partial<SlideData>) => {
    try {
      await updateDoc(doc(db, 'slides', id), data);
    } catch (e) { console.error('Error updating slide:', e); }
  };

  const deleteSlide = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'slides', id));
    } catch (e) { console.error('Error deleting slide:', e); }
  };

  const getNewsById = (id: string | number) => {
    return news.find(item => item.id.toString() === id.toString());
  };

  // CRUD операции для важных документов
  const addImportantDoc = async (item: any) => {
    const today = new Date();
    const dateStr = today.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
    const newItem = { ...item, date: dateStr, createdAt: Date.now() };
    
    try {
      await addDoc(collection(db, 'importantDocs'), newItem);
    } catch (e) {
      console.error("Error adding doc: ", e);
    }
  };

  const updateImportantDoc = async (id: string | number, updatedItem: any) => {
    try {
      await updateDoc(doc(db, 'importantDocs', id.toString()), updatedItem);
    } catch (e) {
      console.error("Error updating doc: ", e);
    }
  };

  const deleteImportantDoc = async (id: string | number) => {
    try {
      await deleteDoc(doc(db, 'importantDocs', id.toString()));
    } catch (e) {
      console.error("Error deleting doc: ", e);
    }
  };

  const getImportantDocById = (id: string | number) => {
    return importantDocs.find(item => item.id.toString() === id.toString());
  };

  const updateSettings = async (newSettings: Partial<SettingsState>) => {
    try {
      await updateDoc(doc(db, 'settings', 'global'), newSettings);
    } catch (e) {
      console.error("Error updating settings: ", e);
    }
  };

  return (
    <DataContext.Provider value={{
      news, newsLoading,
      slides, slidesLoading, addSlide, updateSlide, deleteSlide,
      importantDocs, settings,
      addNews, updateNews, deleteNews, getNewsById,
      addImportantDoc, updateImportantDoc, deleteImportantDoc, getImportantDocById,
      updateSettings
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
