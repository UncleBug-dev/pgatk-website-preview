import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu as MenuIcon, ChevronDown, FileText, ExternalLink, ChevronRight, 
  MapPin, Phone, Mail, Building2, Printer
} from 'lucide-react';
import { MAIN_MENU } from '../constants';

const Contacts: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const parentSection = MAIN_MENU.find(item => item.href === '/kolledg');
  const sidebarLinks = parentSection?.submenu || [];
  const currentPath = '/kolledg/nashi-kontakty';

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header Block */}
      <div className="bg-primary-900 text-white pt-10 pb-20 md:pt-14 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              Главная
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <Link to="/kolledg" className="hover:text-white transition-colors">Колледж</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold truncate">Наши контакты</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-5xl">
            Наши контакты
          </h1>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 md:-mt-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 order-1 lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="lg:hidden mb-4">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full bg-white p-4 rounded-xl shadow-md border border-slate-100 flex items-center justify-between text-primary-900 font-bold"
              >
                <span className="flex items-center gap-2"><MenuIcon className="w-5 h-5" /> Навигация раздела</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className={`bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden sticky top-28 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-slate-50 px-5 py-4 border-b border-slate-100">
                <Link to="/kolledg" className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-accent-600 transition-colors block">
                  {parentSection?.label}
                </Link>
              </div>
              
              <nav className="p-2 flex flex-col space-y-1">
                {sidebarLinks.map((link) => {
                  const isActive = link.href === currentPath;
                  const isExternal = link.href.startsWith('http');
                  const isPdf = link.href.toLowerCase().endsWith('.pdf') || link.href.toLowerCase().includes('disk.yandex.');
                  
                  const LinkContent = (
                    <>
                      <span className="flex items-center gap-2 leading-snug">
                        {isPdf ? (
                          <FileText className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        ) : isExternal ? (
                          <ExternalLink className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        ) : null}
                        <span>{link.label}</span>
                      </span>
                      {isActive && <ChevronRight className="w-4 h-4 text-accent-500 flex-shrink-0 ml-2" />}
                    </>
                  );

                  const linkClass = `group flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-primary-50 text-primary-700 border-l-4 border-accent-500 translate-x-1' : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900 border-l-4 border-transparent hover:translate-x-1'}`;

                  if (isExternal) {
                    return (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {LinkContent}
                      </a>
                    );
                  }

                  return (
                    <Link key={link.href} to={link.href} className={linkClass}>
                      {LinkContent}
                    </Link>
                  );
                })}
              </nav>

              <div className="m-2 p-4 bg-primary-900 rounded-lg text-white text-center">
                <p className="text-xs text-accent-500 font-bold uppercase mb-2">Приемная комиссия</p>
                <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block">8 (0165) 30-06-88</a>
                </div>
            </div>
          </aside>

          {/* CONTENT */}
          <main className="flex-1 w-full order-2">
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-6 md:p-10">
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-900 mb-4">Свяжитесь с нами</h2>
                <p className="text-slate-600 max-w-2xl">
                  Мы всегда открыты для общения. Вы можете связаться с нами по телефону, электронной почте или приехать лично в наше учебное заведение.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                
                <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Учреждение образования</h3>
                    <p className="font-medium text-primary-900 leading-snug">«Пинский государственный аграрно-технический колледж имени А.Е.Клещева»</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Наш адрес</h3>
                    <p className="font-medium text-primary-900 leading-snug">Республика Беларусь, 225710<br />г. Пинск, улица Иркутско-Пинской дивизии, 25</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-3 w-full">
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Приёмная (тел)</h3>
                      <a href="tel:+375165639293" className="text-lg font-bold text-primary-900 hover:text-accent-500 transition-colors block">8 (0165) 63-92-93</a>
                    </div>
                    <div className="h-px bg-slate-200 w-full my-2"></div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Директор (тел-факс)</h3>
                      <a href="tel:+375165639499" className="text-lg font-bold text-primary-900 hover:text-accent-500 transition-colors flex items-center gap-2">
                        8 (0165) 63-94-99
                        <Printer className="w-4 h-4 text-slate-400" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Электронная почта</h3>
                    <a href="mailto:uo@pgatkk.by" className="text-lg font-bold text-primary-900 hover:text-accent-500 transition-colors block">uo@pgatkk.by</a>
                  </div>
                </div>

              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-6">Мы на карте</h2>
                <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-inner border border-slate-200 bg-slate-100">
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?text=Пинск,%20улица%20Иркутско-Пинской%20дивизии,%2025&z=16" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    title="Карта колледжа"
                  ></iframe>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
