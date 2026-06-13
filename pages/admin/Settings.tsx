import React, { useState, useEffect } from 'react';
import { Save, Phone, Mail, MapPin, Flag, ShieldAlert, Database, CloudLightning } from 'lucide-react';
import { useData } from '../../context/DataContext';
import toast from 'react-hot-toast';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';

const Settings: React.FC = () => {
  const { settings: globalSettings, updateSettings } = useData();
  const [localSettings, setLocalSettings] = useState(globalSettings);
  const [isMigrating, setIsMigrating] = useState(false);

  useEffect(() => {
    setLocalSettings(globalSettings);
  }, [globalSettings]);

  const handleMigrate = async () => {
    if (!window.confirm('Вы уверены, что хотите перенести данные из localStorage в Firebase? Это может занять пару секунд.')) return;
    
    setIsMigrating(true);
    const migrateToastId = toast.loading('Начинаем миграцию данных...');
    
    try {
      // 1. Settings
      const storedSettings = localStorage.getItem('pgatk_settings');
      if (storedSettings) {
        await setDoc(doc(db, 'settings', 'global'), JSON.parse(storedSettings));
      }

      // 2. News
      const storedNews = localStorage.getItem('pgatk_news');
      if (storedNews) {
        const newsArray = JSON.parse(storedNews);
        for (const item of newsArray) {
          // Исключаем ID, чтобы Firebase сгенерировал свои
          const { id, ...itemData } = item;
          await addDoc(collection(db, 'news'), { ...itemData, createdAt: Date.now() });
        }
      }

      // 3. Docs
      const storedDocs = localStorage.getItem('pgatk_docs');
      if (storedDocs) {
        const docsArray = JSON.parse(storedDocs);
        for (const item of docsArray) {
          const { id, ...itemData } = item;
          await addDoc(collection(db, 'importantDocs'), { ...itemData, createdAt: Date.now() });
        }
      }

      toast.success('Миграция успешно завершена! Данные теперь в Firebase.', { id: migrateToastId });
    } catch (e) {
      console.error(e);
      toast.error('Ошибка при миграции. Проверьте консоль.', { id: migrateToastId });
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSave = () => {
    updateSettings(localSettings);
    toast.success('Настройки успешно сохранены!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLocalSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Настройки сайта</h2>
          <p className="text-sm text-slate-500">Управление глобальными параметрами колледжа</p>
        </div>
        <button 
          onClick={handleSave}
          className="px-6 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-all shadow-lg shadow-primary-900/20 font-medium flex items-center gap-2"
        >
          <Save className="w-5 h-5" /> Сохранить изменения
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Contacts */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Контактная информация</h3>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Телефон приемной</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                name="phone"
                value={localSettings.phone}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email (Канцелярия)</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="email" 
                name="email"
                value={localSettings.email}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Юридический адрес</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                name="address"
                value={localSettings.address}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-700"
              />
            </div>
          </div>
        </div>

        {/* Global Banners */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600">
              <Flag className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Управление баннерами</h3>
          </div>
          
          <label className="flex items-center justify-between p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors border border-slate-200">
            <div>
              <p className="font-bold text-slate-800">Баннер "Год Качества"</p>
              <p className="text-sm text-slate-500">Показывать логотип на главной странице</p>
            </div>
            <div className="relative inline-block w-12 h-6 align-middle select-none">
              <input 
                type="checkbox" 
                name="showQualityYearBanner"
                checked={localSettings.showQualityYearBanner}
                onChange={handleChange}
                className="peer absolute opacity-0 w-full h-full cursor-pointer z-20"
              />
              <div className="w-12 h-6 bg-slate-300 rounded-full peer-checked:bg-emerald-500 transition-colors duration-200"></div>
              <div className="absolute top-0 left-0 w-6 h-6 bg-white border-2 border-slate-300 rounded-full transition-transform duration-200 peer-checked:translate-x-6 peer-checked:border-emerald-500 pointer-events-none"></div>
            </div>
          </label>

          <label className="flex items-center justify-between p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors border border-slate-200">
            <div>
              <p className="font-bold text-slate-800">Баннер "Поступай к нам!"</p>
              <p className="text-sm text-slate-500">Показывать плашку вступительной кампании</p>
            </div>
            <div className="relative inline-block w-12 h-6 align-middle select-none">
              <input 
                type="checkbox" 
                name="showAdmissionBanner"
                checked={localSettings.showAdmissionBanner}
                onChange={handleChange}
                className="peer absolute opacity-0 w-full h-full cursor-pointer z-20"
              />
              <div className="w-12 h-6 bg-slate-300 rounded-full peer-checked:bg-emerald-500 transition-colors duration-200"></div>
              <div className="absolute top-0 left-0 w-6 h-6 bg-white border-2 border-slate-300 rounded-full transition-transform duration-200 peer-checked:translate-x-6 peer-checked:border-emerald-500 pointer-events-none"></div>
            </div>
          </label>

          <label className="flex items-center justify-between p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors border border-slate-200">
            <div>
              <p className="font-bold text-slate-800">Ход приема документов</p>
              <p className="text-sm text-slate-500">Показывать блок "Мониторинг" (с 20 июля)</p>
            </div>
            <div className="relative inline-block w-12 h-6 align-middle select-none">
              <input 
                type="checkbox" 
                name="showAdmissionProgress"
                checked={localSettings.showAdmissionProgress || false}
                onChange={handleChange}
                className="peer absolute opacity-0 w-full h-full cursor-pointer z-20"
              />
              <div className="w-12 h-6 bg-slate-300 rounded-full peer-checked:bg-emerald-500 transition-colors duration-200"></div>
              <div className="absolute top-0 left-0 w-6 h-6 bg-white border-2 border-slate-300 rounded-full transition-transform duration-200 peer-checked:translate-x-6 peer-checked:border-emerald-500 pointer-events-none"></div>
            </div>
          </label>
        </div>

        {/* Database Management */}
        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">База данных</h3>
          </div>
          <p className="text-sm text-slate-500">Миграция локальных данных (из памяти браузера) в Firebase Firestore. Внимание: это может создать дубликаты, если вы запустите миграцию дважды.</p>
          <button 
            onClick={handleMigrate}
            disabled={isMigrating}
            className={`px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center gap-2 ${isMigrating ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <CloudLightning className="w-4 h-4" />
            {isMigrating ? 'Миграция...' : 'Перенести в Firebase'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Settings;
