import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { SlideData } from '../../constants';
import {
  Plus, Trash2, GripVertical, Eye, EyeOff,
  Save, ChevronUp, ChevronDown, Image as ImageIcon, ExternalLink, Link2
} from 'lucide-react';
import toast from 'react-hot-toast';

const EMPTY_SLIDE: Omit<SlideData, 'id'> = {
  title: '',
  subtitle: '',
  description: '',
  image: '',
  href: '',
  buttonLabel: 'Подробнее',
  isExternal: false,
  enabled: true,
  order: 0,
};

const SlideRow: React.FC<{
  slide: SlideData;
  index: number;
  total: number;
  onToggle: () => void;
  onDelete: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onEdit: () => void;
}> = ({ slide, index, total, onToggle, onDelete, onMoveUp, onMoveDown, onEdit }) => {
  const base = import.meta.env.BASE_URL;
  const imgSrc = slide.image.startsWith('http')
    ? slide.image
    : `${base}${slide.image.replace(/^\//, '')}`;

  return (
    <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
      slide.enabled ? 'bg-white border-slate-100 shadow-sm' : 'bg-slate-50 border-slate-200 opacity-60'
    }`}>
      {/* Drag handle / order */}
      <div className="flex flex-col items-center gap-1 text-slate-300">
        <GripVertical className="w-5 h-5" />
        <span className="text-xs font-bold">{index + 1}</span>
      </div>

      {/* Превью */}
      <div className="w-20 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
        {slide.image ? (
          <img src={imgSrc} alt={slide.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-slate-300" />
          </div>
        )}
      </div>

      {/* Текст */}
      <div className="flex-grow min-w-0">
        <p className="font-bold text-slate-800 truncate">{slide.title || <span className="text-slate-400 italic">Без заголовка</span>}</p>
        <p className="text-xs text-slate-500 truncate mt-0.5">{slide.subtitle}</p>
        {slide.href && (
          <p className="text-xs text-slate-400 truncate mt-0.5 flex items-center gap-1">
            {slide.isExternal ? <ExternalLink className="w-3 h-3" /> : <Link2 className="w-3 h-3" />}
            {slide.href}
          </p>
        )}
      </div>

      {/* Кнопки */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <button
          onClick={onMoveUp}
          disabled={index === 0}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Выше"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
        <button
          onClick={onMoveDown}
          disabled={index === total - 1}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Ниже"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
        <button
          onClick={onToggle}
          className={`p-1.5 rounded-lg transition-colors ${
            slide.enabled
              ? 'text-emerald-600 hover:bg-emerald-50'
              : 'text-slate-400 hover:bg-slate-100'
          }`}
          aria-label={slide.enabled ? 'Скрыть слайд' : 'Показать слайд'}
        >
          {slide.enabled ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
        </button>
        <button
          onClick={onEdit}
          className="px-3 py-1.5 bg-primary-50 text-primary-700 text-xs font-semibold rounded-lg hover:bg-primary-100 transition-colors"
        >
          Изменить
        </button>
        <button
          onClick={onDelete}
          className="p-1.5 rounded-lg text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors"
          aria-label="Удалить слайд"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const SlideForm: React.FC<{
  initial: SlideData | Omit<SlideData, 'id'>;
  onSave: (data: Omit<SlideData, 'id'>) => void;
  onCancel: () => void;
  isNew?: boolean;
}> = ({ initial, onSave, onCancel, isNew }) => {
  const [form, setForm] = useState<Omit<SlideData, 'id'>>({
    title: initial.title,
    subtitle: initial.subtitle,
    description: initial.description,
    image: initial.image,
    href: initial.href ?? '',
    buttonLabel: initial.buttonLabel ?? 'Подробнее',
    isExternal: initial.isExternal ?? false,
    enabled: initial.enabled,
    order: initial.order,
  });

  const set = (field: keyof typeof form, value: any) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) { toast.error('Введите заголовок слайда'); return; }
    if (!form.image.trim()) { toast.error('Введите путь к изображению'); return; }
    onSave(form);
  };

  const base = import.meta.env.BASE_URL;
  const previewSrc = form.image
    ? (form.image.startsWith('http') ? form.image : `${base}${form.image.replace(/^\//, '')}`)
    : null;

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 space-y-5">
      <h3 className="text-lg font-bold text-slate-800">
        {isNew ? '➕ Новый слайд' : '✏️ Редактировать слайд'}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Заголовок *</label>
          <input
            value={form.title}
            onChange={e => set('title', e.target.value)}
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Год белорусской женщины"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Подзаголовок (бейдж)</label>
          <input
            value={form.subtitle}
            onChange={e => set('subtitle', e.target.value)}
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Тематика 2026 года"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Описание</label>
        <textarea
          value={form.description}
          onChange={e => set('description', e.target.value)}
          rows={3}
          className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
          placeholder="Краткое описание слайда..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Путь к изображению * <span className="text-slate-400 font-normal">(относительный или https://…)</span>
        </label>
        <div className="flex gap-3 items-start">
          <input
            value={form.image}
            onChange={e => set('image', e.target.value)}
            className="flex-grow border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="images/slide/SlideYear2026.webp"
          />
          {previewSrc && (
            <img
              src={previewSrc}
              alt="preview"
              className="w-20 h-12 object-cover rounded-lg border border-slate-200 flex-shrink-0"
            />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-1">Ссылка кнопки</label>
          <input
            value={form.href}
            onChange={e => set('href', e.target.value)}
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="/abiturientam или https://..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Текст кнопки</label>
          <input
            value={form.buttonLabel}
            onChange={e => set('buttonLabel', e.target.value)}
            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Подробнее"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={form.isExternal}
            onChange={e => set('isExternal', e.target.checked)}
            className="w-4 h-4 rounded text-primary-600"
          />
          <span className="text-sm text-slate-700">Открывать в новой вкладке</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={form.enabled}
            onChange={e => set('enabled', e.target.checked)}
            className="w-4 h-4 rounded text-emerald-600"
          />
          <span className="text-sm text-slate-700">Слайд активен</span>
        </label>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-colors shadow-sm"
        >
          <Save className="w-4 h-4" />
          {isNew ? 'Добавить слайд' : 'Сохранить'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

// ── Главная страница ──────────────────────────────────────────────────────────
const SlidesList: React.FC = () => {
  const { slides, addSlide, updateSlide, deleteSlide } = useData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showNewForm, setShowNewForm] = useState(false);

  const handleToggle = async (slide: SlideData) => {
    await updateSlide(slide.id, { enabled: !slide.enabled });
    toast.success(slide.enabled ? 'Слайд скрыт' : 'Слайд включён');
  };

  const handleDelete = async (slide: SlideData) => {
    if (!window.confirm(`Удалить слайд «${slide.title}»?`)) return;
    await deleteSlide(slide.id);
    toast.success('Слайд удалён');
  };

  const handleMoveUp = async (index: number) => {
    if (index === 0) return;
    const a = slides[index], b = slides[index - 1];
    await updateSlide(a.id, { order: b.order });
    await updateSlide(b.id, { order: a.order });
  };

  const handleMoveDown = async (index: number) => {
    if (index === slides.length - 1) return;
    const a = slides[index], b = slides[index + 1];
    await updateSlide(a.id, { order: b.order });
    await updateSlide(b.id, { order: a.order });
  };

  const handleSaveNew = async (data: Omit<SlideData, 'id'>) => {
    await addSlide({ ...data, order: slides.length });
    toast.success('Слайд добавлен!');
    setShowNewForm(false);
  };

  const handleSaveEdit = async (id: string, data: Omit<SlideData, 'id'>) => {
    await updateSlide(id, data);
    toast.success('Слайд сохранён!');
    setEditingId(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Заголовок */}
      <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Слайды Hero</h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Управление баннерами на главной странице · {slides.filter(s => s.enabled).length} активных из {slides.length}
          </p>
        </div>
        <button
          onClick={() => { setShowNewForm(true); setEditingId(null); }}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Добавить слайд
        </button>
      </div>

      {/* Форма нового слайда */}
      {showNewForm && (
        <SlideForm
          initial={{ ...EMPTY_SLIDE, order: slides.length }}
          onSave={handleSaveNew}
          onCancel={() => setShowNewForm(false)}
          isNew
        />
      )}

      {/* Список слайдов */}
      <div className="space-y-3">
        {slides.length === 0 ? (
          <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-12 text-center">
            <ImageIcon className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-semibold">Слайдов нет</p>
            <p className="text-slate-400 text-sm mt-1">Нажмите «Добавить слайд» чтобы создать первый баннер.</p>
          </div>
        ) : (
          slides.map((slide, i) => (
            <div key={slide.id}>
              {editingId === slide.id ? (
                <SlideForm
                  initial={slide}
                  onSave={data => handleSaveEdit(slide.id, data)}
                  onCancel={() => setEditingId(null)}
                />
              ) : (
                <SlideRow
                  slide={slide}
                  index={i}
                  total={slides.length}
                  onToggle={() => handleToggle(slide)}
                  onDelete={() => handleDelete(slide)}
                  onMoveUp={() => handleMoveUp(i)}
                  onMoveDown={() => handleMoveDown(i)}
                  onEdit={() => { setEditingId(slide.id); setShowNewForm(false); }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SlidesList;
