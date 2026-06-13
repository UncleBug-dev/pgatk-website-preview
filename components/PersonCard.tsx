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
      <div className="p-6 flex flex-col items-center border-b border-slate-100 bg-slate-50/50">
        <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-sm flex-shrink-0 bg-slate-200 flex items-center justify-center">
          {photoUrl ? (
            <OptimizedImage src={photoUrl} alt={name} className="w-full h-full" />
          ) : (
            <User className="w-16 h-16 text-slate-400" />
          )}
        </div>
        <h3 className="text-lg font-bold text-primary-900 text-center leading-tight mb-2 font-display">
          {name}
        </h3>
        <p className="text-sm font-medium text-accent-600 text-center uppercase tracking-wide">
          {position}
        </p>
      </div>

      {/* Информация */}
      <div className="p-6 flex-grow flex flex-col space-y-4 text-sm text-slate-600">
        {(phone || email) && (
          <div className="space-y-2 pb-4 border-b border-slate-100">
            {phone && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-700">
                  <Phone className="w-4 h-4" />
                </div>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-primary-800 transition-colors font-medium">
                  {phone}
                </a>
              </div>
            )}
            {email && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-700">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${email}`} className="hover:text-primary-800 transition-colors">
                  {email}
                </a>
              </div>
            )}
          </div>
        )}

        {description && (
          <div className="pt-2">
            <p className="italic text-slate-500 leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonCard;