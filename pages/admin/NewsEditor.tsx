import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, X, Image as ImageIcon, Trash2, Check } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { AVAILABLE_CATEGORIES } from '../../constants';
import ReactQuill from 'react-quill';
import toast from 'react-hot-toast';
import 'react-quill/dist/quill.snow.css';
import { compressImage } from '../../utils/imageCompressor';

const getImageUrl = (url?: string) => {
  if (!url) return `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.png`;
  if (url.startsWith('http') || url.startsWith('data:')) return url;
  return `${import.meta.env.BASE_URL}${url.replace(/^\//, '')}`;
};

const NewsEditor: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;
  const { addNews, updateNews, getNewsById } = useData();

  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState<string[]>(['Новости']);
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && id) {
      const existingNews = getNewsById(id);
      if (existingNews) {
        setTitle(existingNews.title);
        setCategories(Array.isArray(existingNews.category) ? existingNews.category : [existingNews.category]);
        setContent(existingNews.content || '');
        if (existingNews.imageUrl && !existingNews.imageUrl.includes('placeholder')) {
          setImageUrl(existingNews.imageUrl);
        }
      }
    }
  }, [id, isEditing, getNewsById]);

  const handleSave = () => {
    if (!title.trim()) {
      toast.error('Введите заголовок!');
      return;
    }

    if (categories.length === 0) {
      toast.error('Выберите хотя бы одну категорию!');
      return;
    }

    // Since react-quill provides HTML, we don't need to manually wrap with <p>
    // However, we want to ensure it doesn't stay completely empty
    if (!content.trim() || content === '<p><br></p>') {
      toast.error('Текст новости не может быть пустым!');
      return;
    }

    if (isEditing && id) {
      updateNews(id, { title, category: categories, content, imageUrl });
      toast.success('Новость успешно обновлена!');
    } else {
      addNews({ title, category: categories, content, summary: title, imageUrl });
      toast.success('Новость успешно добавлена!');
    }
    
    navigate('/admin/news');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    processFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    processFile(file);
  };

  const processFile = async (file: File | undefined) => {
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Файл слишком большой. Максимум 5MB.');
      return;
    }

    const uploadToastId = toast.loading('Обработка и сжатие изображения...');

    try {
      // Сжимаем картинку до 1200px ширины и качества 70%
      const compressedBase64 = await compressImage(file, 1200, 0.7);
      setImageUrl(compressedBase64);
      toast.success('Изображение готово!', { id: uploadToastId });
    } catch (error) {
      console.error(error);
      toast.error('Ошибка при обработке изображения!', { id: uploadToastId });
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            {isEditing ? 'Редактирование новости' : 'Создание новой новости'}
          </h2>
          <p className="text-sm text-slate-500">Заполните поля ниже, чтобы опубликовать материал</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/admin/news')}
            className="px-4 py-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors font-medium flex items-center gap-2"
          >
            <X className="w-5 h-5" />
            Отмена
          </button>
          <button 
            onClick={handleSave}
            className="px-6 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-all shadow-lg shadow-primary-900/20 font-medium flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Опубликовать
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 space-y-8">
        
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Заголовок новости</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-2xl font-bold text-slate-800 placeholder-slate-300 border-0 border-b-2 border-slate-100 hover:border-slate-200 focus:border-primary-500 focus:ring-0 px-0 py-2 bg-transparent transition-colors"
            placeholder="Введите яркий заголовок..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Categories */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Категории (можно несколько)</label>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_CATEGORIES.map(cat => {
                const isSelected = categories.includes(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      if (isSelected) {
                        setCategories(categories.filter(c => c !== cat));
                      } else {
                        setCategories([...categories, cat]);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors flex items-center gap-1.5 ${
                      isSelected 
                        ? 'bg-accent-500 border-accent-600 text-primary-900 shadow-sm' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-accent-300 hover:bg-accent-50'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Image Upload Area */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Обложка</label>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageChange} 
              accept="image/png, image/jpeg, image/webp"
              className="hidden" 
            />
            
            {imageUrl ? (
              <div className="relative border border-slate-200 rounded-xl overflow-hidden group">
                <img src={getImageUrl(imageUrl)} alt="Обложка" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 bg-white text-slate-700 rounded-lg hover:bg-slate-100 transition-colors shadow-sm"
                    title="Заменить фото"
                  >
                    <ImageIcon className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setImageUrl('')}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-sm"
                    title="Удалить фото"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div 
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="border-2 border-dashed border-slate-200 rounded-xl h-48 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-primary-300 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">Нажмите, чтобы загрузить фото</p>
                <p className="text-xs text-slate-400 mt-1">PNG, JPG до 5MB</p>
              </div>
            )}
          </div>
        </div>

        {/* Rich Text Editor */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Текст новости</label>
          <div className="bg-white rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-primary-500 transition-all border border-slate-200 quill-container">
            <ReactQuill 
              theme="snow" 
              value={content} 
              onChange={setContent} 
              className="min-h-[300px]"
              placeholder="Начните писать здесь..."
              modules={{
                toolbar: [
                  [{ 'header': [1, 2, 3, false] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  ['link', 'video'],
                  ['clean']
                ],
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsEditor;
