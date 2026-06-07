import React from 'react';
import { Phone, MapPin, Send, ExternalLink, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const AbiturientLanding: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 w-full animate-in fade-in duration-500">
      <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/5 rounded-full blur-2xl -ml-10 -mb-10 group-hover:scale-110 transition-transform duration-700"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">ДОБРО ПОЖАЛОВАТЬ!</h2>
          <div className="inline-flex flex-col items-center justify-center p-6 md:p-10 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 mt-2 hover:bg-white/20 transition-all duration-300 shadow-2xl">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <Send className="w-8 h-8 text-accent-600 ml-1 mt-1" />
            </div>
            <p className="text-xl md:text-2xl font-bold font-display">У нас появился Telegram-канал!</p>
            <p className="text-lg text-white/90 mt-3 font-medium">Подписывайся! Будь в курсе новостей #ПГАТККЛЕЩЕВА!</p>
            <a href="https://t.me/pgatkk" target="_blank" rel="noopener noreferrer" className="mt-8 px-8 py-3.5 bg-white text-accent-600 font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
              Перейти в Telegram <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Prominent Admission Progress Banner (From July 20th) */}
      <div className="bg-white rounded-3xl p-1 relative overflow-hidden shadow-2xl border border-rose-100 group">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-accent-500 to-rose-500 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-accent-500 to-rose-500"></div>
        <div className="bg-white/80 backdrop-blur-sm rounded-[22px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
              <Activity className="w-8 h-8 text-rose-600 animate-pulse" />
            </div>
            <div>
              <div className="inline-block bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                С 20 июля
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-900 leading-tight">
                Информация о ходе приема документов
              </h3>
              <p className="text-slate-600 mt-2 font-medium">
                Обновляется каждые 3 часа. Следите за конкурсной ситуацией в реальном времени!
              </p>
            </div>
          </div>
          <Link 
            to="/downloads/abiturient/hod_priema.pdf" 
            className="w-full md:w-auto shrink-0 bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2 hover:-translate-y-1"
          >
            Смотреть мониторинг
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-center items-center text-center hover:shadow-xl transition-shadow">
           <div className="p-4 bg-accent-50 rounded-full mb-6 text-accent-500">
               <MapPin className="w-10 h-10" />
           </div>
           <h3 className="text-2xl font-bold text-primary-900 mb-4 font-display">Наш адрес</h3>
           <p className="text-slate-600 text-lg leading-relaxed">225710, г. Пинск, ул. Иркутско-Пинской дивизии, 25</p>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-center items-center text-center relative overflow-hidden hover:shadow-xl transition-shadow">
           <div className="absolute top-0 left-0 w-full h-1.5 bg-accent-500"></div>
           <div className="p-4 bg-accent-50 rounded-full mb-6 text-accent-500">
               <Phone className="w-10 h-10" />
           </div>
           <h3 className="text-2xl font-bold text-primary-900 mb-6 font-display">Приемная комиссия</h3>
           <div className="flex flex-col gap-3 mb-8">
             <a href="tel:80165300688" className="text-3xl font-bold text-accent-600 hover:text-accent-500 transition-colors">8 (0165) 30 06 88</a>
             <a href="tel:80165641118" className="text-2xl font-bold text-slate-700 hover:text-accent-500 transition-colors">8 (0165) 64 11 18</a>
             <a href="tel:80165650320" className="text-2xl font-bold text-slate-700 hover:text-accent-500 transition-colors">8 (0165) 65 03 20</a>
           </div>
           <div className="bg-slate-50 w-full p-4 rounded-xl">
               <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Ответственный секретарь</p>
               <p className="text-primary-900 font-bold text-lg">Макарушко Николай Николаевич</p>
           </div>
        </div>
      </div>

      {/* Banners Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <a href="https://profitest.ripo.by/public/main" target="_blank" rel="noopener noreferrer" className="block group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white flex items-center justify-center p-2 border border-slate-100">
           <img src="/images/slide/ProfiTest.jpg" alt="ProfiTest" className="w-full h-auto object-contain rounded-xl group-hover:scale-105 transition-transform duration-500" />
        </a>
        <a href="https://belta.by/society/view/logotip-goda-belorusskoj-zhenschiny-opredelen-vybrali-edinoglasno-iz-bolee-chem-100-variantov-762819-2026/" target="_blank" rel="noopener noreferrer" className="block group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col items-center justify-center p-4 border border-slate-100">
           <img src="https://img.belta.by/images/storage/news/with_archive/2026/000022_1770271104_762819_big.png" alt="2026 Год Белорусской женщины" className="w-full h-auto max-h-32 object-contain rounded-xl group-hover:scale-105 transition-transform duration-500 mb-2" />
           <span className="text-xs text-center text-primary-900 font-bold leading-tight group-hover:text-accent-600 transition-colors">Год белорусской женщины</span>
        </a>
        <a href="https://t.me/stop_extremism_bot" target="_blank" rel="noopener noreferrer" className="block group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white flex items-center justify-center p-2 border border-slate-100">
           <img src="/images/1Novosti/2025/4Aprel/stop.png" alt="Stop Extremism" className="w-full h-auto object-contain rounded-xl group-hover:scale-105 transition-transform duration-500" />
        </a>
      </div>
    </div>
  );
};

export default AbiturientLanding;
