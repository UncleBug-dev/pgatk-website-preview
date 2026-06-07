import React from 'react';
import { Truck, Users, MapPin, Phone, Car, Flame, Wrench, ShieldAlert, Send } from 'lucide-react';

const Retraining: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500 w-full space-y-8">
      
      {/* Header section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-white/20 p-5 rounded-2xl backdrop-blur-sm border border-white/30 hidden md:block">
            <Truck className="w-16 h-16 text-white" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4 backdrop-blur-sm border border-white/30">
              <span className="text-sm font-bold uppercase tracking-wider text-white">Образовательный процесс</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Подготовка и переподготовка кадров</h2>
            <p className="text-lg text-blue-100 max-w-3xl leading-relaxed">
              Обучение водителей механических транспортных средств, трактористов-машинистов, специалистов по перевозке опасных грузов и другие востребованные профессии.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column - Info & Pricing */}
        <div className="space-y-8">
          
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
              <Car className="w-6 h-6 text-sky-600" />
              Подготовка и переподготовка
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                <span className="text-slate-700">водителей механических транспортных средств категории «В», с «В» на «С»;</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                <span className="text-slate-700">водителей механических транспортных средств категории «СЕ»;</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                <span className="text-slate-700">водителей механических транспортных средств категории «D»;</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0"></div>
                <span className="text-slate-700 font-bold">трактористов-машинистов категории «B,D,F»;</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">водителей, осуществляющих перевозку опасных грузов автомобильным транспортом (АDR);</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">специалистов по вопросам безопасности перевозки опасных грузов автомобильным транспортом;</span>
              </li>
              <li className="flex items-start gap-3">
                <Wrench className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">слесарей по ремонту автомобилей; стропальщиков;</span>
              </li>
              <li className="flex items-start gap-3">
                <Flame className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">машинистов (кочегаров), операторов котельной.</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-primary-900 mt-8 mb-4">Оказываем услуги:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                трактором, фронтальным погрузчиком;
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                перевозка пассажиров автобусом;
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                перевозка грузов.
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-lg font-bold text-primary-900 mb-4 text-center">
              Расчет расходов на топливо для переподготовки трактористов-машинистов
            </h3>
            <p className="text-center text-sm text-slate-500 mb-6">категории "В", "D", "F" (по состоянию на 01.02.2022)</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-200 text-slate-800">
                    <th className="p-4 rounded-tl-xl font-bold">Категория</th>
                    <th className="p-4 rounded-tr-xl font-bold text-right">Стоимость обучения</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">категория "В"</td>
                    <td className="p-4 font-bold text-sky-700 text-right">420,00 руб</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">категория "D"</td>
                    <td className="p-4 font-bold text-sky-700 text-right">420,00 руб</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700">категория "F"</td>
                    <td className="p-4 font-bold text-sky-700 text-right">420,00 руб</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700 font-medium">категория "В", "D", "F"</td>
                    <td className="p-4 font-bold text-sky-700 text-right">650,00 руб</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700 font-medium">категория "D", "F"</td>
                    <td className="p-4 font-bold text-sky-700 text-right">570,00 руб</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700 font-medium">категория "В", "D"</td>
                    <td className="p-4 font-bold text-sky-700 text-right">570,00 руб</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-700 font-medium">категория "В", "F"</td>
                    <td className="p-4 font-bold text-sky-700 text-right">570,00 руб</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column - Contacts & Form */}
        <div className="space-y-8">
          
          <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-indigo-600">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <p className="font-bold text-indigo-900 text-lg">Наш адрес:</p>
              <p className="text-indigo-800">Брестская область, г. Пинск, ул. Революционная, 12, каб. 207</p>
              <div className="mt-3 space-y-1">
                <p className="flex items-center gap-2 font-bold text-indigo-900">
                  <Phone className="w-4 h-4 text-indigo-500" /> +375 29 131-76-07
                </p>
                <p className="flex items-center gap-2 font-bold text-indigo-900">
                  <Phone className="w-4 h-4 text-indigo-500" /> +375 33 625-77-81
                </p>
                <p className="flex items-center gap-2 font-medium text-indigo-800">
                  <Phone className="w-4 h-4 text-indigo-500" /> 8 (0165) 64-11-18
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full -z-10"></div>
            <h3 className="text-2xl font-bold text-sky-600 mb-2">Запись на курсы онлайн!</h3>
            <p className="text-slate-500 mb-8">
              Подайте заявку на обучение, не выходя из дома! В течение дня с Вами свяжется специалист для уточнения данных.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Ваше ФИО <span className="text-rose-500">*</span></label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                  placeholder="Иванов Иван Иванович"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Телефон <span className="text-rose-500">*</span></label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    placeholder="+375 (XX) XXX-XX-XX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Выберите услугу <span className="text-rose-500">*</span></label>
                <select 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all appearance-none cursor-pointer"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>-- Выберите из списка --</option>
                  <option value="1">Водители категории «В», с «В» на «С»</option>
                  <option value="2">Водители категории «СЕ»</option>
                  <option value="3">Водители категории «D»</option>
                  <option value="4">Трактористы-машинисты категории «B,D,F»</option>
                  <option value="5">Водители, перевозка опасных грузов (АDR)</option>
                  <option value="6">Специалисты по безопасности перевозки опасных грузов</option>
                  <option value="7">Слесарь по ремонту автомобилей / стропальщик</option>
                  <option value="8">Машинист (кочегар) / оператор котельной</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Дополнительная информация</label>
                <textarea 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all resize-y min-h-[100px]"
                  placeholder="Ваши вопросы или уточнения..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3 mt-4">
                <input 
                  type="checkbox" 
                  id="consent"
                  className="mt-1 w-4 h-4 text-sky-600 rounded focus:ring-sky-500 cursor-pointer"
                  required
                />
                <label htmlFor="consent" className="text-xs text-slate-500 cursor-pointer select-none">
                  <span className="text-rose-500 font-bold text-sm">*</span> Нажимая кнопку "Записаться!", Вы подтверждаете свою осведомленность и согласие на обработку Ваших персональных данных для формирования ответа на Ваш запрос.
                </label>
              </div>

              <button 
                type="submit"
                className="w-full mt-6 flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Записаться!
              </button>
            </form>
          </div>

        </div>

      </div>

      <div className="text-center pt-8">
        <p className="text-2xl font-display font-bold text-primary-900 bg-emerald-50 text-emerald-800 px-8 py-4 rounded-full inline-block border border-emerald-200">
          Будем рады видеть Вас! 🎉
        </p>
      </div>

    </div>
  );
};

export default Retraining;
