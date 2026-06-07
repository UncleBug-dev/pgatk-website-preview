import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Printer } from 'lucide-react';
import { MAIN_MENU } from '../constants';
import Partners from '../components/Partners';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sidebarLinks = MAIN_MENU.find(item => item.label === "Одно окно")?.submenu || [];

  const [courseForm, setCourseForm] = useState({
    name: '', email: '', phone: '', type: '', extra: '', agreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Ваша заявка отправлена. Специалист свяжется с вами.");
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* --- HEADER --- */}
      <div className="bg-primary-900 text-white pt-10 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <Link to="/odno-okno" className="hover:text-white transition-colors">Одно окно</Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold">Услуги населению</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Услуги населению
          </h1>
        </div>
      </div>

      {/* --- MAIN LAYOUT --- */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 relative z-20">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* --- SIDEBAR (ИДЕНТИЧНЫЙ ONE WINDOW) --- */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 order-1 lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden sticky top-28">
              <div className="bg-[#0088cc] px-5 py-4 border-b border-sky-600">
                 <Link 
                  to="/odno-okno" 
                  className="text-white text-sm font-bold uppercase tracking-widest hover:text-sky-100 transition-colors block"
                >
                  Одно окно
                </Link>
              </div>
              <nav className="flex flex-col">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`group flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 border-b border-slate-100 last:border-0 transition-all ${link.href.includes('uslugi') ? 'text-[#0088cc] bg-sky-50' : 'hover:bg-sky-50 hover:text-[#0088cc]'}`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0088cc]" />
                  </Link>
                ))}
              </nav>
              
              <div className="m-4 p-4 bg-primary-900 rounded-lg text-white text-center">
                <p className="text-xs text-accent-500 font-bold uppercase mb-2">Приемная комиссия</p>
                <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block">8 (0165) 30-06-88</a>
                </div>
            </div>
          </aside>

          {/* --- CONTENT --- */}
          <main className="flex-1 w-full order-2">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-slate-100 min-h-[600px]">
              
              <div className="flex justify-end gap-4 mb-6 print:hidden">
                <button className="flex items-center text-xs text-slate-400 hover:text-primary-900 gap-1 transition-colors" onClick={() => window.print()}>
                  <Printer className="w-4 h-4" /> Печать
                </button>
              </div>

              {/* TEXT CONTENT */}
              <div className="text-center space-y-6 mb-10 border-b-2 border-slate-100 pb-8">
                <h2 className="text-red-600 font-bold uppercase text-lg tracking-wide">
                  Подготовка и переподготовка кадров
                </h2>
                
                <div className="text-sm text-slate-700 leading-relaxed space-y-1 max-w-4xl mx-auto">
                  <p>- водителей механических транспортных средств категории «В», с «В» на «С»;</p>
                  <p>- водителей механических транспортных средств категории «СЕ»;</p>
                  <p>- водителей механических транспортных средств категории «D»;</p>
                  <p>- трактористов-машинистов категории «B,D,F»;</p>
                  <p>- водителей, осуществляющих перевозку опасных грузов автомобильным транспортом (ADR);</p>
                  <p>- специалистов, по вопросам безопасности перевозки опасных грузов автомобильным транспортом;</p>
                  <p>- слесарей по ремонту автомобилей; - стропальщиков; - машинистов (кочегаров), операторов котельной.</p>
                </div>

                <div className="pt-2">
                  <h3 className="font-bold text-slate-900 text-base mb-2">Оказываем услуги:</h3>
                  <div className="text-sm text-slate-700 space-y-1">
                    <p>- трактором, фронтальным погрузчиком;</p>
                    <p>- перевозка пассажиров автобусом;</p>
                    <p>- перевозка грузов;</p>
                  </div>
                </div>

                <div className="pt-4 font-bold text-slate-800 text-sm bg-slate-50 p-6 rounded-lg inline-block">
                  <p className="mb-2">Брестская область, г.Пинск, ул.Революционная, 12, каб. 207</p>
                  <div className="text-lg space-y-1 text-primary-900">
                    <a href="tel:375291317607" className="block hover:text-accent-600 transition-colors">+375 29 131-76-07</a>
                    <a href="tel:375336257781" className="block hover:text-accent-600 transition-colors">+375 33 625-77-81</a>
                    <a href="tel:80165641118" className="block hover:text-accent-600 transition-colors">тел: 8 (0165) 64-11-18</a>
                  </div>
                </div>
              </div>

              {/* FORM 1: COURSES */}
              <div className="mb-12 bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-2">Запись на курсы переподготовки online!</h2>
                <p className="text-sm text-slate-600 mb-6 max-w-2xl">Подай заявку на обучение не выходя из дома! В течении дня с Вами свяжется специалист для уточнения данных!</p>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <label className="text-sm font-medium text-slate-700 md:col-span-3 md:text-right">Ваше ФИО*</label>
                    <input type="text" required className="md:col-span-9 w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <label className="text-sm font-medium text-slate-700 md:col-span-3 md:text-right">Email</label>
                    <input type="email" className="md:col-span-9 w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <label className="text-sm font-medium text-slate-700 md:col-span-3 md:text-right">Телефон*</label>
                    <input type="tel" required className="md:col-span-9 w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <label className="text-sm font-medium text-slate-700 md:col-span-3 md:text-right">Выберите услугу*</label>
                    <select required className="md:col-span-9 w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none bg-white">
                      <option value="">-- Выберите курс --</option>
                      <option value="B">Категория B</option>
                      <option value="BC">C "B" на "C"</option>
                      <option value="CE">Категория CE</option>
                      <option value="D">Категория D</option>
                      <option value="ADR">ADR (Опасные грузы)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                    <label className="text-sm font-medium text-slate-700 md:col-span-3 md:text-right pt-2">Дополнительно</label>
                    <textarea rows={3} className="md:col-span-9 w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-start-4 md:col-span-9">
                       <label className="flex items-start gap-3 text-xs text-slate-600 cursor-pointer p-2 hover:bg-slate-100 rounded">
                          <input type="checkbox" required className="mt-1" />
                          <span>*Нажимая кнопку "Записаться", Вы подтверждаете свою осведомленность и согласие на обработку Ваших персональных данных.</span>
                       </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
                    <div className="md:col-start-4 md:col-span-9">
                       <button type="submit" className="bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-300 hover:bg-white text-slate-900 font-bold py-2 px-6 rounded shadow-sm text-sm transform hover:-translate-y-0.5 transition-all">
                          Записаться!
                       </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* FLYER IMAGE PLACEHOLDER */}
              <div className="my-10 p-6 md:p-8 bg-red-50 border-4 border-red-200 rounded-xl relative overflow-hidden">
                 <div className="flex flex-col items-center text-center relative z-10">
                    <h3 className="text-xl font-bold text-red-900 mb-2">Учреждение образования</h3>
                    <h4 className="text-lg md:text-xl font-bold text-black mb-4">«Пинский государственный аграрно-технический колледж имени А.Е. Клещева»</h4>
                    <p className="text-red-700 font-bold uppercase text-lg mb-4 bg-white px-3 py-1 rounded">осуществляет подготовку и переподготовку:</p>
                    
                    <ul className="text-sm text-slate-900 space-y-1 mb-6 max-w-xl mx-auto text-left list-disc pl-5 font-medium">
                       <li>водителей механических транспортных средств категории «В», с «В» на «С»;</li>
                       <li>водителей механических транспортных средств категории «CE»;</li>
                       <li>перевозка опасных грузов (ADR);</li>
                       <li>слесарей по ремонту автомобилей;</li>
                       <li>стропальщиков;</li>
                    </ul>

                    <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-red-100 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                       <p className="font-bold text-red-600 text-lg mb-1">Оказываем услуги:</p>
                       <p className="text-sm font-medium">трактором, погрузчиком, перевозка грузов</p>
                       <div className="mt-2 text-red-700 font-bold text-xl border-t border-red-100 pt-1">
                          тел: 8 (0165) 64-11-18
                       </div>
                    </div>
                 </div>
              </div>

              {/* FORM 2: SERVICES */}
              <div className="mb-12 bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-2">Услуги населению! Закажи online!</h2>
                <p className="text-sm text-red-600 font-bold mb-6">Услуги по перевозке пассажиров, перевозке грузов! Услуги трактора, фронтального погрузчика!</p>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <label className="text-sm font-medium text-slate-700 md:col-span-3 md:text-right">Ваше Ф.И.О.*</label>
                    <input type="text" required className="md:col-span-9 w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <label className="text-sm font-medium text-slate-700 md:col-span-3 md:text-right">Email</label>
                    <input type="email" className="md:col-span-9 w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <label className="text-sm font-medium text-slate-700 md:col-span-3 md:text-right">Телефон</label>
                    <input type="tel" className="md:col-span-9 w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <label className="text-sm font-medium text-slate-700 md:col-span-3 md:text-right">Выберите услугу*</label>
                    <select required className="md:col-span-9 w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none bg-white">
                      <option value="">-- Выберите услугу --</option>
                      <option value="tractor">Услуги трактора</option>
                      <option value="loader">Фронтальный погрузчик</option>
                      <option value="cargo">Перевозка грузов</option>
                      <option value="passenger">Перевозка пассажиров (Автобус)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                    <label className="text-sm font-medium text-slate-700 md:col-span-3 md:text-right pt-2">Дополнительно</label>
                    <textarea rows={3} className="md:col-span-9 w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-start-4 md:col-span-9">
                       <label className="flex items-start gap-3 text-xs text-slate-600 cursor-pointer p-2 hover:bg-slate-100 rounded">
                          <input type="checkbox" required className="mt-1" />
                          <span>*Нажимая кнопку "Сохранить", Вы подтверждаете согласие на обработку данных.</span>
                       </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
                    <div className="md:col-start-4 md:col-span-9">
                       <button type="submit" className="bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-300 hover:bg-white text-slate-900 font-bold py-2 px-6 rounded shadow-sm text-sm transform hover:-translate-y-0.5 transition-all">
                          Заказать услугу
                       </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* BACK BUTTON */}
              <div className="mb-10">
                 <button onClick={() => window.history.back()} className="px-6 py-2 bg-slate-400 text-white font-bold text-xs uppercase rounded hover:bg-slate-500 transition shadow hover:shadow-md">
                    Назад
                 </button>
              </div>

              {/* BANNERS */}
              <div className="space-y-6">
                <div className="w-full aspect-[4/1] bg-slate-200 rounded-xl overflow-hidden relative shadow-lg group cursor-pointer">
                   <img src="https://picsum.photos/1200/300?random=1" alt="80 лет победы" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-2xl uppercase tracking-widest text-shadow">
                      80 ЛЕТ ПОБЕДЫ — БЕЛАРУСЬ ПОМНИТ
                   </div>
                </div>
                
                <div className="w-full aspect-[6/1] bg-white border-2 border-blue-200 rounded-xl flex items-center justify-center p-4 shadow-md hover:shadow-lg transition-all cursor-pointer">
                   <div className="text-center">
                      <h3 className="text-purple-600 font-bold text-xl uppercase mb-1">Анкета</h3>
                      <p className="text-slate-600 text-lg font-medium">«МОТИВЫ ВЫБОРА ПРОФЕССИИ»</p>
                   </div>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
      
      {/* PARTNERS BOTTOM */}
      <Partners />
    </div>
  );
};

export default ServicesPage;