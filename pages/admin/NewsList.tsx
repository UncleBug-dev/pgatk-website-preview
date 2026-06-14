import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Plus, Edit2, Trash2, Search, ArrowUpDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const getImageUrl = (url?: string) => {
  if (!url) return `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.webp`;
  if (url.startsWith('http') || url.startsWith('data:')) return url;
  return `${import.meta.env.BASE_URL}${url.replace(/^\//, '')}`;
};

const NewsList: React.FC = () => {
  const navigate = useNavigate();
  const { news, deleteNews } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const handleDelete = (id: string | number) => {
    if (window.confirm('Вы уверены, что хотите удалить эту новость?')) {
      deleteNews(id);
      toast.success('Новость удалена');
    }
  };

  const parseDate = (dateStr: string) => {
    const parts = dateStr.split('.');
    if (parts.length === 3) {
      return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`).getTime();
    }
    return 0;
  };

  const filteredNews = news.filter(n => {
    const searchLower = searchTerm.toLowerCase();
    const matchesTitle = n.title.toLowerCase().includes(searchLower);
    const catArray = Array.isArray(n.category) ? n.category : [n.category || 'Telegram'];
    const matchesCategory = catArray.some(c => c.toLowerCase().includes(searchLower));
    return matchesTitle || matchesCategory;
  }).sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Поиск новостей..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
        <button 
          onClick={() => navigate('/admin/news/new')}
          className="flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-medium py-2.5 px-5 rounded-xl transition-all shadow-lg shadow-primary-900/20 whitespace-nowrap"
        >
          <Plus className="w-5 h-5" />
          Создать новость
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-sm font-medium text-slate-500">
                <th className="p-4">Картинка</th>
                <th className="p-4">Заголовок</th>
                <th className="p-4">Категория</th>
                <th 
                  className="p-4 cursor-pointer hover:bg-slate-100 transition-colors flex items-center gap-2 select-none"
                  onClick={() => setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest')}
                >
                  Дата <ArrowUpDown className="w-3 h-3" />
                </th>
                <th className="p-4 text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredNews.map((newsItem) => (
                <tr key={newsItem.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-4">
                    <div className="w-16 h-12 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                      <img src={getImageUrl(newsItem.imageUrl)} alt="" className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="font-bold text-slate-800 line-clamp-1">{newsItem.title}</p>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {(Array.isArray(newsItem.category) ? newsItem.category : [newsItem.category || 'Telegram']).map((cat, idx) => (
                        <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-500 whitespace-nowrap">
                    {newsItem.date}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => navigate(`/admin/news/edit/${newsItem.id}`)}
                        className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                        title="Редактировать"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(newsItem.id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Удалить"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredNews.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    Новостей не найдено.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default NewsList;
