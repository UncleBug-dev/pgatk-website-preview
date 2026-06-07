import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon, Phone, Printer } from 'lucide-react';
import { MAIN_MENU } from '../constants';
import Partners from '../components/Partners';

const OneWindow: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sidebarLinks = MAIN_MENU.find(item => item.label === "Одно окно")?.submenu || [];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* Header */}
      <div className="bg-primary-900 text-white pt-10 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors flex items-center hover:bg-white/10 p-1.5 rounded-full">
              <HomeIcon className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-accent-500 font-bold">Одно окно</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Одно окно
          </h1>
        </div>
      </div>

      {/* Main Layout */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 -mt-10 relative z-20">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar Fixed Width */}
          <aside className="w-full lg:w-[320px] flex-shrink-0 order-1 lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden sticky top-28">
              <div className="bg-[#0088cc] px-5 py-4 border-b border-sky-600">
                <Link to="/odno-okno" className="text-white text-sm font-bold uppercase tracking-widest hover:text-sky-100 transition-colors block">
                  Одно окно
                </Link>
              </div>
              <nav className="flex flex-col">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="group flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-[#0088cc] border-b border-slate-100 last:border-0 transition-all"
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

          {/* Content Fluid */}
          <main className="flex-1 w-full order-2">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 border border-slate-100">
              
              <div className="flex justify-end gap-4 mb-6">
                <button className="flex items-center text-xs text-slate-400 hover:text-primary-900 gap-1" onClick={() => window.print()}>
                  <Printer className="w-4 h-4" /> Печать
                </button>
              </div>

              <h2 className="text-2xl font-bold text-primary-900 mb-6 border-l-4 border-accent-500 pl-4">ПРИЕМ ГРАЖДАН</h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm text-left border-collapse border border-slate-300">
                  <thead className="bg-[#5eaaff] text-white">
                    <tr>
                      <th className="border border-slate-300 px-4 py-3 w-1/4">ФИО</th>
                      <th className="border border-slate-300 px-4 py-3 w-1/4">Должность</th>
                      <th className="border border-slate-300 px-4 py-3 w-1/4">Место и время</th>
                      <th className="border border-slate-300 px-4 py-3 w-1/4">Замещение</th>
                    </tr>
                  </thead>
                  <tbody className="align-top">
                    {/* 1. Директор */}
                    <tr className="hover:bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 font-medium">Колб Игорь Михайлович</td>
                      <td className="border border-slate-300 px-4 py-3">
                        <strong>Директор</strong><br/>
                        прием по личным вопросам: 2-й вторник месяца с 08.00 до 14.00
                      </td>
                      <td className="border border-slate-300 px-4 py-3">УК №1<br/>2 этаж, каб. 205</td>
                      <td className="border border-slate-300 px-4 py-3">Зам. директора по ПО<br/>Кулеш Игорь Леонидович</td>
                    </tr>
                    
                    {/* 2. Зам учебной */}
                    <tr className="hover:bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 font-medium">Бегер Олег Александрович</td>
                      <td className="border border-slate-300 px-4 py-3">
                        <strong>Заместитель директора по учебной работе</strong><br/>
                        прием по личным вопросам: 1-й понедельник месяца с 08.00 до 14.00
                      </td>
                      <td className="border border-slate-300 px-4 py-3">УК №1<br/>2 этаж, каб. 208</td>
                      <td className="border border-slate-300 px-4 py-3">Зам. директора по ВР<br/>Пашкевич Семен Васильевич</td>
                    </tr>
                    
                    {/* 3. Зам воспитательной */}
                    <tr className="hover:bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 font-medium">Пашкевич Семен Васильевич</td>
                      <td className="border border-slate-300 px-4 py-3">
                        <strong>Заместитель директора по воспитательной работе</strong><br/>
                        прием по личным вопросам: 2-й понедельник месяца с 08.00 до 14.00
                      </td>
                      <td className="border border-slate-300 px-4 py-3">УК №1<br/>2 этаж, каб. 203</td>
                      <td className="border border-slate-300 px-4 py-3">Педагог социальный<br/>Калюта Людмила Ивановна</td>
                    </tr>

                    {/* 4. Зам метод */}
                    <tr className="hover:bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 font-medium">Билинская Лариса Андреевна</td>
                      <td className="border border-slate-300 px-4 py-3">
                        <strong>Заместитель директора по учебно-методической работе</strong><br/>
                        прием по личным вопросам: 1-й вторник с 08.00 до 14.00
                      </td>
                      <td className="border border-slate-300 px-4 py-3">УК №1<br/>2 этаж, каб. 211</td>
                      <td className="border border-slate-300 px-4 py-3">Зам. директора по УР<br/>Бегер Олег Александрович</td>
                    </tr>

                    {/* 5. Зам ПО */}
                    <tr className="hover:bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 font-medium">Кулеш Игорь Леонидович</td>
                      <td className="border border-slate-300 px-4 py-3">
                        <strong>Заместитель директора по производственному обучению</strong><br/>
                        прием по личным вопросам: 3-й вторник месяца с 08.00 до 14.00
                      </td>
                      <td className="border border-slate-300 px-4 py-3">УК №1<br/>2 этаж, каб. 207</td>
                      <td className="border border-slate-300 px-4 py-3">Зав. учебно-производств. мастерскими<br/>Лявор Степан Антонович</td>
                    </tr>

                    {/* 6. Физ.воспитание */}
                    <tr className="hover:bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 font-medium">Пашкевич Владимир Георгиевич</td>
                      <td className="border border-slate-300 px-4 py-3">
                        <strong>Руководитель физ. воспитания, председатель профкома</strong><br/>
                        прием по личным вопросам: 1-я среда месяца с 08.00 до 14.00
                      </td>
                      <td className="border border-slate-300 px-4 py-3">УК №1<br/>3 этаж, каб. 302</td>
                      <td className="border border-slate-300 px-4 py-3">Преподаватель<br/>Пашкевич Алла Владимировна</td>
                    </tr>

                    {/* 7. Бухгалтер */}
                    <tr className="hover:bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 font-medium">Куницкая Наталия Михайловна</td>
                      <td className="border border-slate-300 px-4 py-3">
                        <strong>Главный бухгалтер колледжа</strong><br/>
                        прием по личным вопросам: 1-й четверг месяца с 08.00 до 14.00
                      </td>
                      <td className="border border-slate-300 px-4 py-3">УК №1<br/>2 этаж, каб. 215</td>
                      <td className="border border-slate-300 px-4 py-3">Зам. главного бухгалтера<br/>Хомич Татьяна Павловна</td>
                    </tr>

                    {/* 8. Зам хоз */}
                    <tr className="hover:bg-slate-50">
                      <td className="border border-slate-300 px-4 py-3 font-medium">Харитонович Дмитрий Степанович</td>
                      <td className="border border-slate-300 px-4 py-3">
                        <strong>Заместитель директора по хозяйственной работе</strong><br/>
                        прием по личным вопросам: 2-я пятница месяца с 08.00 до 14.00
                      </td>
                      <td className="border border-slate-300 px-4 py-3">УК №1<br/>2 этаж, каб. 206</td>
                      <td className="border border-slate-300 px-4 py-3">Техник по эксплуатации зданий<br/>Вильковская Раиса Иосифовна</td>
                    </tr>

                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-sm space-y-4">
                 <p><strong>Предварительная запись</strong> на личный прием директора и иных должностных лиц осуществляется секретарем Ивашковой Светланой Владимировной (в её отсутствие — Левоцкая Екатерина Витальевна) в каб. № 208 либо по номеру <strong>+375 165 61 27 91</strong>.</p>
                 <div className="grid md:grid-cols-2 gap-4 mt-4">
                   <div className="flex items-start gap-3 p-3 bg-white rounded border border-slate-200">
                      <Phone className="w-5 h-5 text-accent-500 mt-1" />
                      <div>
                        <div className="font-bold text-primary-900">Телефон "доверия"</div>
                        <div className="text-slate-600">+375 165 63-93-24 (Пашкевич С.В.)</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-3 p-3 bg-white rounded border border-slate-200">
                      <Phone className="w-5 h-5 text-accent-500 mt-1" />
                      <div>
                        <div className="font-bold text-primary-900">Телефон справочной службы</div>
                        <div className="text-slate-600">+375 165 63-92-93 (Ивашкова С.В.)</div>
                      </div>
                   </div>
                </div>
                 <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-900"><strong>ГОРЯЧАЯ ЛИНИЯ:</strong> +375 165 63-94-99</div>
                 <div className="mt-6">
                   <button onClick={() => window.history.back()} className="px-4 py-2 bg-slate-200 text-slate-700 font-bold text-xs uppercase rounded hover:bg-slate-300 transition">Назад</button>
                </div>
              </div>

              {/* Banners Placeholder */}
              <div className="mt-12 space-y-6">
                <div className="w-full h-32 bg-gradient-to-r from-red-600 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg relative overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://picsum.photos/1200/200')] opacity-30 bg-cover bg-center mix-blend-overlay"></div>
                   <span className="relative z-10 drop-shadow-md">80 ЛЕТ ПОБЕДЫ — БЕЛАРУСЬ ПОМНИТ</span>
                </div>
                
                <div className="w-full h-32 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-blue-900 font-bold text-xl border border-blue-300">
                   АНКЕТА «МОТИВЫ ВЫБОРА ПРОФЕССИИ»
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
      <Partners />
    </div>
  );
};

export default OneWindow;