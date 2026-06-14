import React from 'react';
import { Phone, Mail, User } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

export interface PersonProps {
  name: string;
  position: string;
  photoUrl?: string;
  phone?: string;
  email?: string;
  description?: string;
}

const PersonCard: React.FC<PersonProps> = ({ 
  name, 
  position, 
  photoUrl, 
  phone, 
  email, 
  description 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {/* Верхняя часть с фото */}
      <div className="p-4 md:p-6 flex flex-row md:flex-col items-center gap-4 md:gap-0 border-b border-slate-100 bg-slate-50/50">
        <div className="w-28 h-28 md:w-32 md:h-32 md:mb-4 rounded-full overflow-hidden border-2 md:border-4 border-white shadow-sm flex-shrink-0 bg-slate-200 flex items-center justify-center">
          {photoUrl ? (
            <OptimizedImage src={photoUrl} alt={name || "Фото"} className="w-full h-full object-cover" />
          ) : (
            <User className="w-12 h-12 md:w-16 md:h-16 text-slate-400" />
          )}
        </div>
        <div className="flex flex-col text-left md:text-center flex-grow">
          {name && (
            <h3 className="text-[15px] md:text-lg font-bold text-primary-900 leading-tight mb-1 md:mb-2 font-display">
              {name}
            </h3>
          )}
          <p className="text-[11px] md:text-sm font-medium text-accent-600 uppercase tracking-wide leading-snug">
            {position}
          </p>
        </div>
      </div>

      {/* Информация */}
      <div className="p-4 md:p-6 flex-grow flex flex-col space-y-3 md:space-y-4 text-sm text-slate-600">
        {(phone || email) && (
          <div className="space-y-2 pb-3 md:pb-4 border-b border-slate-100">
            {phone && (
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-700">
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-primary-800 transition-colors font-medium text-xs md:text-sm">
                  {phone}
                </a>
              </div>
            )}
            {email && (
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-700">
                  <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
                <a href={`mailto:${email}`} className="hover:text-primary-800 transition-colors text-xs md:text-sm">
                  {email}
                </a>
              </div>
            )}
          </div>
        )}

        {description && (
          <div className="pt-1 md:pt-2">
            <p className="text-[11px] md:text-sm italic text-slate-500 leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonCard;