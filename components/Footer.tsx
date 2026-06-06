import React from 'react';
import { MapPin, Phone, Mail, FileText, ExternalLink, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Partners from './Partners';

const Footer: React.FC = () => {
  const resolvePath = (path: string) => {
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  return (
    <footer>
      <Partners />

      <div className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-accent-500 text-sm">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: Registry and Links */}
            <div>
              <div className="bg-slate-800/80 rounded-xl border border-slate-700 mb-6 p-4">
                <p className="mb-2"><strong>Официальный сайт</strong><br/>Учреждения образования «Пинский государственный аграрно-технический колледж имени А.Е.Клещева» зарегистрирован в Государственном регистре информационных ресурсов Беларуси.</p>
                <a 
                  href={resolvePath('downloads/footer/img601.jpg')} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-accent-500 hover:text-white transition-colors mt-2"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Регистрационное свидетельство №2142335835 от 21.09.2023
                </a>
              </div>
              
              <h3 className="text-white font-display font-bold text-lg mb-4 mt-6">Полезные ссылки</h3>
              <ul className="space-y-2 text-sm flex flex-col">
                <li><Link to="/contacts" className="hover:text-accent-500 transition-colors">Контакты</Link></li>
                <li><Link to="/odno-okno" className="hover:text-accent-500 transition-colors">Одно окно</Link></li>
                <li><Link to="/kolledg/rezhimraboty" className="hover:text-accent-500 transition-colors">Режим работы учреждения образования</Link></li>
              </ul>
            </div>

            {/* Column 2: Address and Contacts */}
            <div>
              <h3 className="text-white font-display font-bold text-lg mb-6">Наш адрес и контакты</h3>
              <div className="space-y-4">
                <p className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>Брестская область, г. Пинск, ул. Иркутско-Пинской дивизии, 25</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span>Приемная (факс): 8 (0165) 63-92-93<br/>Директор: 8 (0165) 63-94-99</span>
                </p>
                <p className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <a href="mailto:uo@pgatkk.by" className="hover:text-white transition-colors">uo@pgatkk.by</a>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <p className="mb-2">Разработка и сопровождение сайта:</p>
                <a href="mailto:program@pgatkk.by" className="text-accent-500 hover:text-white transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  program@pgatkk.by
                </a>
                <p className="text-xs text-slate-500 mt-1">(Форма обращения к администратору веб-сайта)</p>
              </div>

              {/* Social Networks Placeholder */}
              <div className="mt-6">
                <p className="mb-3 text-white font-bold">Официальные социальные сети:</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://vk.com/pgatkk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#0077FF] flex items-center justify-center transition-colors text-slate-300 hover:text-white group" aria-label="VK">
                    <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.32 14.15l-.26.26c-.3.3-.65.59-1.2.59h-1.2c-.4 0-.8-.15-1.1-.42-.32-.28-.53-.7-.94-1.3l-.68-.98c-.28-.39-.56-.78-.86-.96-.13-.08-.28-.13-.42-.13-.3 0-.63.2-.82.68-.2.53-.27 1.34-.27 1.6 0 .27-.08.5-.22.68-.15.19-.39.29-.68.29H8.62c-1.26 0-2.32-.42-3.14-1.24-.87-.87-1.42-2.12-1.92-3.51-1.01-2.83-1.42-6.14-1.42-6.3 0-.25.08-.47.23-.65.16-.19.38-.28.66-.28h1.8c.28 0 .5.09.68.26.17.17.27.38.3.62.06.45.28 1.48.65 2.56.76 2.21 1.76 4.07 2.96 4.07.15 0 .3-.07.42-.2.12-.13.19-.34.19-.6V8.65c0-.44.02-.92-.12-1.32-.15-.43-.45-.63-.82-.76.24-.24.57-.38.93-.38h1.65c.53 0 .86.23.97.68.08.35.12.83.12 1.4v2.75c0 .32.06.56.16.73.11.16.27.24.47.24.4 0 .9-.56 1.4-1.32.55-.83 1.02-1.89 1.4-3.14.08-.25.21-.45.38-.6.18-.15.39-.23.64-.23h2c.33 0 .6.11.8.32.2.22.25.5.15.82-.16.5-.47 1.25-1 2.1-.64 1.01-1.4 2.06-1.43 2.1-.28.38-.34.57-.34.82 0 .24.12.5.34.8l.94 1.27c.45.62.9 1.22 1.25 1.76.22.35.34.69.34 1.01 0 .42-.14.78-.41 1.06z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/pgatkk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 flex items-center justify-center transition-all text-slate-300 hover:text-white group" aria-label="Instagram">
                    <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://t.me/pgatkk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#229ED9] flex items-center justify-center transition-colors text-slate-300 hover:text-white group" aria-label="Telegram">
                    <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.181-4.686c.223-.198-.054-.31-.346-.11l-6.4 4.024-2.76-.86c-.6-.185-.615-.6.125-.89l10.793-4.159c.5-.185.951.106.78.823z"/></svg>
                  </a>
                  <a href="https://www.tiktok.com/@_pgatkk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-black hover:border hover:border-slate-700 flex items-center justify-center transition-colors text-slate-300 hover:text-white group" aria-label="TikTok">
                    <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.18-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.22-2.5.83-5.06 2.74-6.66 1.72-1.46 4.14-2.02 6.32-1.49v4.22c-1.05-.18-2.12-.17-3.11.13-1.02.32-1.87 1.02-2.39 1.93-.65 1.14-.65 2.65.01 3.79.67 1.16 2.01 1.83 3.36 1.76 1.28-.06 2.45-.73 3.08-1.83.61-1.07.82-2.3.82-3.55.01-4.48.01-8.96 0-13.44zm-7.66 6.07c.04-.02.08-.04.12-.06-.04.02-.08.04-.12.06z"/></svg>
                  </a>
                  <a href="https://youtube.com/channel/UCx3boiuvaRX1PA-yEXi5hZw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#FF0000] flex items-center justify-center transition-colors text-slate-300 hover:text-white group" aria-label="YouTube">
                    <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Terms and Privacy */}
            <div>
              <h3 className="text-white font-display font-bold text-lg mb-6">Условия использования сайта</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6 text-justify">
                Используя и/или посещая Сайт, Вы (далее "Вы", "Пользователь") соглашаетесь руководствоваться и действовать в соответствии с настоящими Условиями, нашей Политикой конфиденциальности и любыми действующими региональными, национальными и международными законодательными и нормативными актами, в том числе, но не ограничиваясь, нормами действующего законодательства Республики Беларусь. Администрация сайта оставляет за собой право в любой момент изменять эти Условия и Политику конфиденциальности.
              </p>
              <ul className="space-y-3">
                <li>
                  <a 
                    href={resolvePath('downloads/footer/politika_konfidencialnosti.pdf')} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-white transition-colors group"
                  >
                    <Shield className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5 group-hover:text-accent-400" />
                    <span>Политика в отношении обработки персональных данных<br/><span className="text-xs text-slate-500">(во исполнение требований Закона РБ от 7 мая 2021 г. № 99-3)</span></span>
                  </a>
                </li>
                <li>
                  <a 
                    href={resolvePath('downloads/footer/politika_ib.pdf')} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-white transition-colors group"
                  >
                    <FileText className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 group-hover:text-accent-400" />
                    <span>Политика информационной безопасности</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={resolvePath('downloads/footer/poloshenie_cookie.pdf')} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-white transition-colors group"
                  >
                    <FileText className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 group-hover:text-accent-400" />
                    <span>Положение о политике в отношении обработки куки</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 text-center md:text-left">
            <p className="font-semibold text-slate-400">
              &copy; {new Date().getFullYear()} Учреждение образования «Пинский государственный аграрно-технический колледж имени А.Е.Клещева»
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;