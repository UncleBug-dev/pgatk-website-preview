import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Plus, Edit2, Trash2, Search, FileText, Folder, ArrowUpDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const getImageUrl = (url?: string) => {
  if (!url) return `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.png`;
  if (url.startsWith('http') || url.startsWith('data:')) return url;
  return `${import.meta.env.BASE_URL}${url.replace(/^\//, '')}`;
};

const ImportantDocsList: React.FC = () => {
  const navigate = useNavigate();
  const { importantDocs, deleteImportantDoc } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSection, setSelectedSection] = useState('Все');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleDelete = (id: string | number) => {
    if (window.confirm('Вы уверены, что хотите удалить этот документ?')) {
      deleteImportantDoc(id);
      toast.success('Документ удален');
    }
  };

  const sections = ['Все', ...Array.from(new Set(importantDocs.map(d => d.section).filter(Boolean)))];

  const filteredDocs = importantDocs.filter(d => {
    const title = d.title || '';
    const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSection = selectedSection === 'Все' || d.section === selectedSection;
    return matchesSearch && matchesSection;
  }).sort((a, b) => {
    const titleA = (a.title || '').toLowerCase();
    const titleB = (b.title || '').toLowerCase();
    if (sortOrder === 'asc') return titleA.localeCompare(titleB);
    return titleB.localeCompare(titleA);
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
            placeholder="Поиск важных документов..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          />
        </div>
        <button 
          onClick={() => navigate('/admin/important/new')}
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-medium py-2.5 px-5 rounded-xl transition-all shadow-lg shadow-amber-900/20 whitespace-nowrap"
        >
          <Plus className="w-5 h-5" />
          Добавить документ
        </button>
      </div>

      {/* Folder Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => setSelectedSection(sec)}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all flex items-center gap-2 ${
              selectedSection === sec
                ? 'bg-amber-600 border-amber-600 text-white shadow-md shadow-amber-900/10'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {sec !== 'Все' && <Folder className="w-4 h-4" />}
            {sec}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-sm font-medium text-slate-500">
                <th className="p-4">Обложка</th>
                <th 
                  className="p-4 cursor-pointer hover:bg-slate-100 transition-colors flex items-center gap-2 select-none"
                  onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                >
                  Название документа <ArrowUpDown className="w-3 h-3" />
                </th>
                <th className="p-4">Раздел / Папка</th>
                <th className="p-4">Дата загрузки</th>
                <th className="p-4 text-right">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredDocs.map((docItem) => (
                <tr key={docItem.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-4">
                    <div className="w-16 h-20 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200 flex items-center justify-center">
                      {docItem.image ? (
                        <img src={getImageUrl(docItem.image)} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <FileText className="w-6 h-6 text-slate-400" />
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="font-bold text-slate-800 line-clamp-2 max-w-md">{docItem.title}</p>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-100">
                      <Folder className="w-3 h-3" />
                      {docItem.section || 'Общие ресурсы'}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-500 whitespace-nowrap">
                    {docItem.date}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => navigate(`/admin/important/edit/${docItem.id}`)}
                        className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                        title="Редактировать"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(docItem.id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Удалить"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredDocs.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    Документов не найдено.
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

export default ImportantDocsList;
