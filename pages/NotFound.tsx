import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 p-6 text-center overflow-hidden relative">
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-accent-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Giant 404 Text */}
        <div className="relative flex items-center justify-center mb-8">
          <h1 className="text-[150px] sm:text-[200px] font-black text-slate-200/80 drop-shadow-sm select-none leading-none tracking-tighter">
            4<span className="text-accent-500/20">0</span>4
          </h1>
          
          {/* UncleBug Character in the middle */}
          <div className="absolute inset-0 flex items-center justify-center pt-8">
            <div className="relative group">
              <img 
                src={`${import.meta.env.BASE_URL}images/unclebug/1.png`} 
                alt="UncleBug Lost" 
                className="w-40 sm:w-56 h-auto drop-shadow-2xl animate-[bounce_3s_infinite] group-hover:rotate-12 transition-transform duration-300"
              />
              <div className="absolute -top-6 -right-6 bg-white p-3 rounded-2xl shadow-xl transform rotate-12 scale-0 group-hover:scale-100 transition-transform origin-bottom-left">
                <p className="text-sm font-bold text-slate-800">Упс! 🛠️</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 max-w-2xl transform hover:scale-[1.02] transition-transform">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-accent-500 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl font-black text-primary-900">Упс! Вы забрели не туда...</h2>
          </div>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Кажется, этой страницы здесь нет. Возможно, она была удалена, перемещена, или наш разработчик случайно зажевал кабель во время настройки сервера.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            <Home className="w-5 h-5" />
            Срочно вернуться на главную
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
