import React from 'react';
import { Users, FileText, Activity, TrendingUp, ShieldAlert, Image as ImageIcon } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const getImageUrl = (url?: string) => {
  if (!url) return `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.webp`;
  if (url.startsWith('http') || url.startsWith('data:')) return url;
  return `${import.meta.env.BASE_URL}${url.replace(/^\//, '')}`;
};

const mockChartData = [
  { name: 'Пн', visits: 4000, views: 2400 },
  { name: 'Вт', visits: 3000, views: 1398 },
  { name: 'Ср', visits: 2000, views: 9800 },
  { name: 'Чт', visits: 2780, views: 3908 },
  { name: 'Пт', visits: 1890, views: 4800 },
  { name: 'Сб', visits: 2390, views: 3800 },
  { name: 'Вс', visits: 3490, views: 4300 },
];

const StatCard = ({ title, value, icon: Icon, trend }: any) => (
  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
    <div className="p-3 bg-primary-50 rounded-xl text-primary-600">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
      <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
      {trend && (
        <p className="text-xs font-medium text-emerald-500 mt-2 flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          {trend} за месяц
        </p>
      )}
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const { news, importantDocs } = useData();
  const navigate = useNavigate();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Сводка */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Всего новостей" 
          value={news.length} 
          icon={FileText} 
          trend="+12" 
        />
        <StatCard 
          title="Важных документов" 
          value={importantDocs.length} 
          icon={ShieldAlert}
        />
        <StatCard 
          title="Уникальных посетителей" 
          value="1,240" 
          icon={Users} 
          trend="+5%" 
        />
        <StatCard 
          title="Просмотров страниц" 
          value="8,532" 
          icon={Activity} 
          trend="+14%" 
        />
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-800">Активность посетителей за неделю</h3>
          <p className="text-sm text-slate-500">Просмотры страниц и уникальные визиты</p>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0284c7" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0284c7" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="visits" name="Визиты" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorVisits)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Быстрые действия и Последние новости */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Последние новости */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-800">Последние добавленные новости</h3>
            <button onClick={() => navigate('/admin/news')} className="text-sm text-primary-600 hover:text-primary-700 font-medium">Смотреть все</button>
          </div>
          
          <div className="space-y-4 flex-1">
            {news.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                  <ImageIcon className="w-8 h-8 text-slate-300" />
                </div>
                <h4 className="text-slate-800 font-bold">Пока нет новостей</h4>
                <p className="text-slate-500 text-sm mt-1 max-w-sm">Вы еще не добавили ни одной новости. Создайте первую новость, чтобы она появилась на главной странице.</p>
                <button 
                  onClick={() => navigate('/admin/news/new')}
                  className="mt-6 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-colors font-medium text-sm"
                >
                  Добавить новость
                </button>
              </div>
            ) : (
              news.slice(0, 3).map((newsItem) => (
                <div key={newsItem.id} onClick={() => navigate(`/admin/news/edit/${newsItem.id}`)} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                    <img src={getImageUrl(newsItem.imageUrl)} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 truncate group-hover:text-primary-600 transition-colors">{newsItem.title}</h4>
                    <p className="text-sm text-slate-500 truncate mt-1">
                      {newsItem.date} • {Array.isArray(newsItem.category) ? newsItem.category.join(', ') : newsItem.category}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Быстрые действия */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Быстрые действия</h3>
          <div className="space-y-3">
            <button onClick={() => navigate('/admin/news/new')} className="w-full flex items-center gap-3 p-4 bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-xl transition-colors font-medium">
              <FileText className="w-5 h-5" />
              Добавить новость
            </button>
            <button onClick={() => navigate('/admin/important/new')} className="w-full flex items-center gap-3 p-4 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-xl transition-colors font-medium">
              <Activity className="w-5 h-5" />
              Загрузить приказ
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
