import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Phone, Mail, Accessibility, Info, AlertCircle } from 'lucide-react';
import { MAIN_MENU } from '../constants';
import { useData } from '../context/DataContext';

const DisabledAccess: React.FC = () => {
  const { settings } = useData();
  const currentPath = useLocation().pathname;
  const parentSection = MAIN_MENU.find(item => item.href === '/odno-okno');
  const sidebarLinks = parentSection?.submenu || [];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header Block */}
      <div className="bg-primary-900 text-white pt-10 pb-20 md:pt-14 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              Главная
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <Link to="/odno-okno" className="hover:text-white transition-colors">Одно окно</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold truncate">Посещение объекта инвалидом</span>
          </nav>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-5xl">
            Посещение объекта инвалидом
          </h1>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 md:-mt-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 order-2 lg:order-1 lg:sticky lg:top-8">
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-primary-900 px-5 py-4 border-b border-primary-800">
                <Link to="/odno-okno" className="text-white text-xs font-bold uppercase tracking-widest hover:text-accent-300 transition-colors block">
                  {parentSection?.label}
                </Link>
              </div>
              <nav className="p-2 flex flex-col space-y-1">
                {sidebarLinks.map((link) => {
                  const isActive = currentPath === link.href;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`group flex items-center justify-between px-4 py-3 mb-1 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-primary-50 text-primary-700 border-l-4 border-accent-500' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900 border-l-4 border-transparent'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <ChevronRight className="w-4 h-4 text-accent-500" />}
                    </Link>
                  );
                })}
              </nav>
              <div className="m-4 p-4 bg-primary-900 rounded-lg text-white text-center">
                <p className="text-xs text-accent-500 font-bold uppercase mb-2">Приемная комиссия</p>
                <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block">8 (0165) 30-06-88</a>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <main className="flex-1 w-full order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 border border-slate-100 min-h-[500px]">
              
              <div className="max-w-4xl mx-auto space-y-10">
                
                {/* Introduction */}
                <div className="flex items-start gap-6 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
                  <div className="bg-primary-100 p-4 rounded-full flex-shrink-0">
                    <Accessibility className="w-10 h-10 text-primary-700" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">Уважаемый гражданин!</h2>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      Если Вы относитесь к категории лиц с ограниченными возможностями здоровья или сопровождающим их лицом, для оказания сотрудниками учреждения образования более качественной и оперативной помощи при посещении колледжа просим Вас следовать простым рекомендациям.
                    </p>
                  </div>
                </div>

                {/* Instructions */}
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <Info className="w-6 h-6 text-accent-500" />
                    Что необходимо сделать:
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border-2 border-slate-100 p-6 rounded-xl hover:border-accent-200 transition-colors group">
                      <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-accent-500 group-hover:text-white transition-colors">1</div>
                      <p className="text-slate-800 font-medium text-lg">
                        Предварительно сообщить о намерении посетить учреждение образования
                      </p>
                    </div>
                    
                    <div className="bg-white border-2 border-slate-100 p-6 rounded-xl hover:border-accent-200 transition-colors group">
                      <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center font-bold text-lg mb-4 group-hover:bg-accent-500 group-hover:text-white transition-colors">2</div>
                      <p className="text-slate-800 font-medium text-lg">
                        Сообщить о характере и объёме требуемой ситуационной помощи
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-primary-900 rounded-2xl p-8 md:p-10 text-white shadow-lg relative overflow-hidden mt-12">
                  <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                    <Accessibility className="w-64 h-64" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <AlertCircle className="w-8 h-8 text-accent-400" />
                      <h3 className="text-2xl font-bold">Контакты для предварительного сообщения</h3>
                    </div>
                    
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl">
                      Предварительное сообщение с указанием Ваших контактов для обратной связи можно отправить любым удобным для Вас способом:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <a href="tel:80165639324" className="flex items-center gap-5 bg-white/10 hover:bg-white/20 transition-colors p-6 rounded-xl group">
                        <div className="bg-accent-500 text-white p-4 rounded-full group-hover:scale-110 transition-transform">
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-slate-300 text-sm font-bold uppercase tracking-wider mb-1">Тел. / Факс</p>
                          <p className="text-xl font-bold">8 (0165) 63 93 24</p>
                        </div>
                      </a>
                      
                      <a href={`mailto:${settings.email}`} className="flex items-center gap-5 bg-white/10 hover:bg-white/20 transition-colors p-6 rounded-xl group">
                        <div className="bg-accent-500 text-white p-4 rounded-full group-hover:scale-110 transition-transform">
                          <Mail className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-slate-300 text-sm font-bold uppercase tracking-wider mb-1">E-mail</p>
                          <p className="text-xl font-bold">{settings.email}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
              
            </div>
          </main>
        </div>
      </div>
      
    </div>
  );
};

export default DisabledAccess;
