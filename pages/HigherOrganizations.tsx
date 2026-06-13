import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Building2, MapPin, Phone, Mail, Clock, Globe, ExternalLink } from 'lucide-react';
import { MAIN_MENU } from '../constants';

const HigherOrganizations: React.FC = () => {
  const currentPath = useLocation().pathname;
  const parentSection = MAIN_MENU.find(item => item.href === '/odno-okno');
  const sidebarLinks = parentSection?.submenu || [];

  const organizations = [
    {
      name: 'МИНИСТЕРСТВО ОБРАЗОВАНИЯ РЕСПУБЛИКИ БЕЛАРУСЬ',
      url: 'https://edu.gov.by/kontakty/telefonnyy-spravochnik/',
      schedule: 'с 9.00 до 18.00, обед с 13.00 до 14.00',
      address: 'ул. Советская, 9, 220010, г.Минск',
      email: 'root@minedu.unibel.by',
      hotline: '+375 17 222 43 12',
      website: 'https://edu.gov.by/'
    },
    {
      name: 'ГЛАВНОЕ УПРАВЛЕНИЕ ПО ОБРАЗОВАНИЮ БРЕСТСКОГО ОБЛАСТНОГО ИСПОЛНИТЕЛЬНОГО КОМИТЕТА',
      url: 'https://brest-edu.gov.by/об-управлении/структура-главного-управления-по-образованию-брестского-облисполкома',
      schedule: 'понедельник - пятница с 8.30 до 17.30, обед с 13.00 до 14.00',
      address: 'ул. Ленина, 11, 224006, г.Брест',
      email: 'uo@brest-region.gov.by',
      hotline: '8 0162 26 97 88',
      website: 'http://brest-edu.gov.by/'
    }
  ];

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
            <span className="text-accent-500 font-bold truncate">Вышестоящие организации</span>
          </nav>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-5xl">
            Вышестоящие организации
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
            <div className="space-y-8">
              {organizations.map((org, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-primary-900 p-6 md:p-8 flex items-center gap-4">
                    <div className="bg-accent-500/20 p-3 rounded-lg hidden sm:block">
                      <Building2 className="w-8 h-8 text-accent-400" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white">
                        {org.name}
                      </h2>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-slate-100 p-2.5 rounded-lg flex-shrink-0">
                          <MapPin className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Располагается</p>
                          <p className="text-slate-800 font-medium">{org.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-slate-100 p-2.5 rounded-lg flex-shrink-0">
                          <Clock className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Режим работы</p>
                          <p className="text-slate-800 font-medium">{org.schedule}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-slate-100 p-2.5 rounded-lg flex-shrink-0">
                          <Phone className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Телефон «горячей линии»</p>
                          <a href={`tel:${org.hotline.replace(/[^0-9+]/g, '')}`} className="text-slate-800 font-medium hover:text-primary-600 transition-colors">
                            {org.hotline}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-slate-100 p-2.5 rounded-lg flex-shrink-0">
                          <Mail className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Электронный адрес</p>
                          <a href={`mailto:${org.email}`} className="text-slate-800 font-medium hover:text-primary-600 transition-colors">
                            {org.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-slate-100 p-2.5 rounded-lg flex-shrink-0">
                          <Globe className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Официальный сайт</p>
                          <a href={org.website} target="_blank" rel="noopener noreferrer" className="text-primary-600 font-medium hover:text-primary-800 transition-colors inline-flex items-center gap-1.5">
                            Перейти на сайт
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 px-6 md:px-8 py-4 border-t border-slate-100">
                    <a 
                      href={org.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full md:w-auto px-6 py-2.5 bg-primary-900 text-white font-medium rounded-lg hover:bg-primary-800 transition-colors"
                    >
                      Подробнее об организации
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      
    </div>
  );
};

export default HigherOrganizations;
