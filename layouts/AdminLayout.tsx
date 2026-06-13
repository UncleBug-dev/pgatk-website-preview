import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Newspaper, Settings, LogOut, ShieldAlert, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuth');
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Дашборд', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Новости', path: '/admin/news', icon: Newspaper },
    { name: 'Важные документы', path: '/admin/important', icon: ShieldAlert },
    { name: 'Настройки', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="h-screen bg-slate-50 flex font-display overflow-hidden">
      <Toaster position="top-right" toastOptions={{ duration: 3000, style: { background: '#1e293b', color: '#fff' } }} />
      {/* Sidebar */}
      <aside className={`${isCollapsed ? 'w-20' : 'w-64'} bg-slate-900 text-slate-300 flex flex-col shadow-2xl z-20 transition-all duration-300 relative`}>
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-8 bg-slate-800 text-white rounded-full p-1 border border-slate-700 shadow-lg z-30 hover:bg-slate-700 transition-colors"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
        <div className="p-6 flex items-center justify-center gap-3 border-b border-slate-800 min-h-[88px]">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1 shadow-inner overflow-hidden shrink-0">
            <img src="/images/logo/logo_pgatkk.png" alt="ПГАТК" className="w-full h-full object-contain drop-shadow-md" />
          </div>
          {!isCollapsed && (
            <div className="whitespace-nowrap transition-opacity duration-300">
              <h2 className="text-white font-bold tracking-wider">АДМИН</h2>
              <p className="text-xs text-slate-500">ПГАТК Панель</p>
            </div>
          )}
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2 overflow-x-hidden">
          {navItems.map((item) => {
            const isActive = location.pathname.includes(item.path);
            return (
              <NavLink
                key={item.path}
                to={item.path}
                title={isCollapsed ? item.name : undefined}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/50 font-medium' 
                    : 'hover:bg-slate-800 hover:text-white'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                {!isCollapsed && <span className="whitespace-nowrap">{item.name}</span>}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800 space-y-2">
          <button 
            onClick={() => navigate('/')}
            title={isCollapsed ? 'На сайт' : undefined}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-slate-800 w-full text-left ${isCollapsed ? 'justify-center' : ''}`}
          >
            <Globe className="w-5 h-5 text-slate-400 shrink-0" />
            {!isCollapsed && <span className="whitespace-nowrap">На сайт</span>}
          </button>
          
          <button 
            onClick={handleLogout}
            title={isCollapsed ? 'Выход' : undefined}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors hover:bg-red-500/20 hover:text-red-400 w-full text-left ${isCollapsed ? 'justify-center' : ''}`}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {!isCollapsed && <span className="whitespace-nowrap">Выход</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="font-medium text-slate-400">Админ</span>
            {location.pathname.split('/').filter(p => p && p !== 'admin').map((path, idx, arr) => {
              const names: Record<string, string> = {
                'dashboard': 'Дашборд',
                'news': 'Новости',
                'important': 'Важные документы',
                'settings': 'Настройки',
                'new': 'Добавление',
                'edit': 'Редактирование'
              };
              // Skip id in paths
              if (!names[path] && idx > 0) return null;
              const name = names[path] || path;
              const isLast = idx === arr.length - 1 || (idx === arr.length - 2 && !names[arr[idx+1]]);
              
              return (
                <React.Fragment key={path}>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                  <span className={isLast ? "font-bold text-slate-800" : ""}>
                    {name}
                  </span>
                </React.Fragment>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500">Секретарь</span>
            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white shadow-sm"></div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <Outlet />
        </div>

      </main>

    </div>
  );
};

export default AdminLayout;
