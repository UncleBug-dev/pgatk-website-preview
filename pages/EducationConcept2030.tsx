import React from 'react';
import { BookOpen, FileText } from 'lucide-react';
import EducationConcept2030Content from './EducationConcept2030Content';

const EducationConcept2030: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-8">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 md:p-12 shadow-lg text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform translate-x-10 -translate-y-10">
          <BookOpen className="w-64 h-64" />
        </div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/30 border border-blue-400/30 text-blue-100 font-medium text-sm mb-6 backdrop-blur-sm">
            <FileText className="w-4 h-4" />
            <span>Официальный документ</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight max-w-4xl">
            Концепция развития системы образования Республики Беларусь до 2030 года
          </h2>
          
          <p className="text-lg text-blue-100 max-w-3xl leading-relaxed">
            Фундаментальный документ, определяющий стратегические цели, задачи и приоритетные направления развития национальной системы образования на долгосрочную перспективу.
          </p>
        </div>
      </div>

      {/* Content Rendering */}
      <EducationConcept2030Content />

    </div>
  );
};

export default EducationConcept2030;
