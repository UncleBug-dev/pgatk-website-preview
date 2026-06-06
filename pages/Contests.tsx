import React from 'react';
import { Trophy, FileText, ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contests: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 md:pt-24 pb-12">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Вернуться на главную
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
            <Trophy className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Акции, конкурсы</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
            <div className="p-6 flex-grow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">
                Положение о проведении областного этапа республиканского конкурса «Хозяева земли родной»
              </h3>
              <p className="text-slate-500 text-sm mt-2">
                Ознакомьтесь с правилами и условиями участия в конкурсе.
              </p>
            </div>
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 mt-auto">
              <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Скачать положение
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contests;
