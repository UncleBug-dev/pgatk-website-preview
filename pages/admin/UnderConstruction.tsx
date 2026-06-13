import React from 'react';
import { Hammer } from 'lucide-react';

const UnderConstruction: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] animate-in fade-in zoom-in duration-500">
      <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mb-6 text-amber-500">
        <Hammer className="w-12 h-12" />
      </div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Раздел в разработке</h2>
      <p className="text-slate-500 max-w-md text-center">
        Этот модуль админ-панели будет добавлен в следующих обновлениях. Спасибо за терпение!
      </p>
    </div>
  );
};

export default UnderConstruction;
