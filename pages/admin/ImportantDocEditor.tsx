import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, X, Image as ImageIcon, Trash2 } from 'lucide-react';
import { useData } from '../../context/DataContext';
import ReactQuill from 'react-quill';
import toast from 'react-hot-toast';
import 'react-quill/dist/quill.snow.css';
import { compressImage } from '../../utils/imageCompressor';

const getImageUrl = (url?: string) => {
  if (!url) return `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.webp`;
  if (url.startsWith('http') || url.startsWith('data:')) return url;
  return `${import.meta.env.BASE_URL}${url.replace(/^\//, '')}`;
};

const ImportantDocEditor: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;
  const { addImportantDoc, updateImportantDoc, getImportantDocById, importantDocs } = useData();

  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const [section, setSection] = useState('Общие ресурсы');
  const [customSection, setCustomSection] = useState('');
  const [isCreatingNewSection, setIsCreatingNewSection] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const existingSections = Array.from(
    new Set(importantDocs.map(d => d.section).filter(Boolean))
  ) as string[];

  useEffect(() => {
    if (isEditing && id) {
      const existingDoc = getImportantDocById(id);
      if (existingDoc) {
        setTitle(existingDoc.title);
        setContent(existingDoc.content || '');
        setSection(existingDoc.section || 'Общие ресурсы');
        if (existingDoc.image && !existingDoc.image.includes('placeholder')) {
          setImageUrl(existingDoc.image);
        }
      }
    }
  }, [id, isEditing, getImportantDocById]);
  const handleSave = () => {
    if (!title.trim()) {
      toast.error('Введите название документа!');
      return;
    }

    const finalSection = isCreatingNewSection 
      ? (customSection.trim() || 'Общие ресурсы') 
      : section;

    if (isEditing && id) {
      updateImportantDoc(id, { title, image: imageUrl, content, section: finalSection });
      toast.success('Документ успешно обновлен!');
    } else {
      addImportantDoc({ title, image: imageUrl, content, section: finalSection });
      toast.success('Документ успешно добавлен!');
    }
    
    navigate('/admin/important');
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

    const uploadToastId = toast.loading('Обработка и сжатие скана...');

    try {
      // Сжимаем скан до 1200px ширины и качества 70%
      const compressedBase64 = await compressImage(file, 1200, 0.7);
      setImageUrl(compressedBase64);
      toast.success('Скан готов!', { id: uploadToastId });
    } catch (error) {
      console.error(error);
      toast.error('Ошибка при обработке скана!', { id: uploadToastId });
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            {isEditing ? 'Редактирование документа' : 'Добавление важного документа'}
          </h2>
          <p className="text-sm text-slate-500">Заполните поля ниже, чтобы опубликовать документ на главной странице</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/admin/important')}
            className="px-4 py-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors font-medium flex items-center gap-2"
          >
            <X className="w-5 h-5" />
            Отмена
          </button>
          <button 
            onClick={handleSave}
            className="px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-all shadow-lg shadow-amber-900/20 font-medium flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Сохранить
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 space-y-8">
        
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Название документа (текст приказа)</label>
          <textarea 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-xl font-bold text-slate-800 placeholder-slate-300 border-0 border-b-2 border-slate-100 hover:border-slate-200 focus:border-amber-500 focus:ring-0 px-0 py-2 bg-transparent transition-colors resize-none min-h-[100px]"
            placeholder="Введите текст документа..."
          ></textarea>
        </div>

        {/* Section (Folder) Selection */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-bold text-slate-700">Раздел / Папка документа</label>
            <button
              type="button"
              onClick={() => setIsCreatingNewSection(!isCreatingNewSection)}
              className="text-xs text-amber-600 hover:text-amber-700 font-bold"
            >
              {isCreatingNewSection ? 'Выбрать из существующих' : '+ Создать новую папку'}
            </button>
          </div>

          {isCreatingNewSection ? (
            <div>
              <input
                type="text"
                value={customSection}
                onChange={(e) => setCustomSection(e.target.value)}
                placeholder="Введите название новой папки..."
                className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-slate-700 text-sm"
              />
            </div>
          ) : (
            <div>
              <select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-slate-700 text-sm"
              >
                {existingSections.length > 0 ? (
                  existingSections.map((sect) => (
                    <option key={sect} value={sect}>{sect}</option>
                  ))
                ) : (
                  <>
                    <option value="Общие ресурсы">Общие ресурсы</option>
                    <option value="Безопасность">Безопасность</option>
                    <option value="Профилактика и психология">Профилактика и психология</option>
                    <option value="Учеба и работа">Учеба и работа</option>
                  </>
                )}
                {/* Fallbacks if not present in existingSections */}
                {!existingSections.includes('Общие ресурсы') && existingSections.length > 0 && <option value="Общие ресурсы">Общие ресурсы</option>}
                {!existingSections.includes('Безопасность') && existingSections.length > 0 && <option value="Безопасность">Безопасность</option>}
                {!existingSections.includes('Профилактика и психология') && existingSections.length > 0 && <option value="Профилактика и психология">Профилактика и психология</option>}
                {!existingSections.includes('Учеба и работа') && existingSections.length > 0 && <option value="Учеба и работа">Учеба и работа</option>}
              </select>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Upload Area */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Скан документа (обложка)</label>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageChange} 
              accept="image/png, image/jpeg, image/webp"
              className="hidden" 
            />
            
            {imageUrl ? (
              <div className="relative border border-slate-200 rounded-xl overflow-hidden group w-48 h-64 mx-auto md:mx-0">
                <img src={getImageUrl(imageUrl)} alt="Обложка" className="w-full h-full object-cover" />
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
                className="border-2 border-dashed border-slate-200 rounded-xl h-64 w-48 mx-auto md:mx-0 flex flex-col items-center justify-center text-center hover:bg-amber-50 hover:border-amber-300 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-6 h-6 text-amber-600" />
                </div>
                <p className="text-sm font-medium text-slate-700 px-4">Загрузить скан</p>
                <p className="text-xs text-slate-400 mt-1">PNG, JPG</p>
              </div>
            )}
          </div>
          
          <div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <h4 className="font-bold text-amber-800 mb-2">Памятка</h4>
              <ul className="text-sm text-amber-700 space-y-2 list-disc list-inside">
                <li>Документ появится в специальном блоке на главной странице.</li>
                <li>Рекомендуется загружать вертикальные (книжные) изображения A4.</li>
                <li>Максимальный размер файла - 5 мегабайт.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content WYSIWYG */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Содержимое документа (текст или описание)</label>
          <div className="bg-white rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-amber-500 transition-all border border-slate-200 quill-container">
            <ReactQuill 
              theme="snow" 
              value={content} 
              onChange={setContent} 
              className="min-h-[250px]"
              placeholder="Введите текст приказа или информацию для ознакомления..."
              modules={{
                toolbar: [
                  [{ 'header': [1, 2, 3, false] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  ['link', 'clean']
                ],
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ImportantDocEditor;
