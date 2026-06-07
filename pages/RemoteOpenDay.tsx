import React, { useState } from 'react';
import { Youtube, Instagram, MessageCircle, ExternalLink, Video, Building2, Map, Play } from 'lucide-react';
import { Lightbox } from '../components/Lightbox';
import { Link } from 'react-router-dom';

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/pgatkk', icon: <Instagram className="w-6 h-6" />, color: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500' },
  { name: 'Vkontakte', url: 'https://vk.com/pgatkk', icon: <div className="font-bold text-lg leading-none">VK</div>, color: 'bg-blue-600' },
  { name: 'Telegram', url: 'https://t.me/pgatkk', icon: <MessageCircle className="w-6 h-6" />, color: 'bg-sky-500' },
  { name: 'Ютуб-канал', url: 'https://www.youtube.com/channel/UCx3boiuvaRX1PA-yEXi5hZw?view_as=subscriber', icon: <Youtube className="w-6 h-6" />, color: 'bg-red-600' }
];


const videos = [
  "d7x3GJDbCog", "5Iw7e3-bnhc", "ugnf9ktxT7A", "eoCz6juBVxQ", "LTD55q0O30M", "PlNEkwMbAfw", "_xaioza_EDI", "D4ubiKWSX2A", "rjba0P6fp-I"
];

const mtbImages = [
  "1.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "18.jpg", "19.jpg", 
  "2.jpg", "3.1.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.1.jpg", "7.jpg", "8.jpg", "9.jpg"
];

const postImages = [
  "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "7_1.png"
];

const RemoteOpenDay: React.FC = () => {
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <div className="animate-in fade-in duration-500 w-full space-y-12 pb-12">
      
      {/* Intro section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm border border-white/30">
            <Video className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-bold uppercase tracking-wider text-white">Твой выбор, выпускник</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">Дистанционный день<br/>открытых дверей</h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <img 
          src="/images/Abiturientu/2024/PRIVETSVIE_.png" 
          alt="Приветствие 1" 
          onClick={() => {
            setLightboxImages(['/images/Abiturientu/2024/PRIVETSVIE_.png', '/images/Abiturientu/2024/PRIVETSVIE2.png']);
            setSelectedImageIndex(0);
          }}
          className="cursor-pointer hover:scale-105 transition-transform duration-300 rounded-2xl shadow-lg border border-slate-100 max-w-full md:max-w-md object-contain" 
        />
        <img 
          src="/images/Abiturientu/2024/PRIVETSVIE2.png" 
          alt="Приветствие 2" 
          onClick={() => {
            setLightboxImages(['/images/Abiturientu/2024/PRIVETSVIE_.png', '/images/Abiturientu/2024/PRIVETSVIE2.png']);
            setSelectedImageIndex(1);
          }}
          className="cursor-pointer hover:scale-105 transition-transform duration-300 rounded-2xl shadow-lg border border-slate-100 max-w-full md:max-w-md object-contain" 
        />
      </div>

      {/* Social Links */}
      <div className="bg-slate-50 rounded-3xl p-8 text-center border border-slate-100 shadow-inner">
        <h3 className="text-2xl font-bold text-primary-900 mb-6">Мы в социальных сетях</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${social.color} text-white px-6 py-3 rounded-xl flex items-center gap-3 font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              {social.icon}
              {social.name}
            </a>
          ))}
        </div>
      </div>


      {/* Banners & Links */}
      <div className="grid grid-cols-1 gap-6">
        <Link to="/abiturientam/predlozhenie-o-tselevoj-podgotovke" className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all border border-slate-100">
          <img src="/images/1Novosti/2024/May/CelevayPodgotovka.jpg" alt="Целевая подготовка" className="w-full object-cover" />
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/downloads/abiturient/prohodnie_balli.pdf" className="bg-primary-900 text-white p-8 rounded-2xl shadow-lg hover:bg-primary-800 transition-colors flex flex-col items-center justify-center text-center group">
            <span className="text-2xl font-bold font-display group-hover:scale-105 transition-transform">Проходные баллы 2025 года</span>
          </Link>
          <Link to="/abiturientam/obshechitie-abitur" className="bg-emerald-600 text-white p-8 rounded-2xl shadow-lg hover:bg-emerald-500 transition-colors flex flex-col items-center justify-center text-center group">
            <Building2 className="w-8 h-8 mb-3 text-emerald-200 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold">Всем иногородним учащимся предоставляется место в общежитии!</span>
          </Link>
        </div>

        <div className="col-span-1 md:col-span-2 mt-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
              <Play className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Виртуальная экскурсия</h2>
              <p className="text-sm text-slate-500">Прогуляйтесь по колледжу онлайн</p>
            </div>
          </div>
          
          <Link 
            to="/virtual-tour" 
            className="block group relative rounded-2xl overflow-hidden shadow-lg border-4 border-slate-100 hover:border-accent-400 transition-colors duration-300"
          >
            <img 
              src="/images/VEkskursiy/VEkskursiy.gif" 
              alt="Виртуальная экскурсия по колледжу" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-primary-900/30 group-hover:bg-primary-900/10 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm text-primary-900 font-bold py-3 px-6 rounded-full shadow-xl transform group-hover:scale-110 transition-transform duration-300 flex items-center gap-2">
                <Play className="w-5 h-5 text-accent-500 fill-accent-500" />
                Начать экскурсию
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Booklets & Posts Galleries */}
      <div className="space-y-8">
        <h3 className="text-3xl font-display font-bold text-center text-primary-900">Информационные материалы</h3>
        <div className="flex justify-center">
          <img 
            src="/images/Abiturientu/2026/Buklet2026/Buklet1.png" 
            alt="Буклет" 
            onClick={() => {
              setLightboxImages(['/images/Abiturientu/2026/Buklet2026/Buklet1.png']);
              setSelectedImageIndex(0);
            }}
            className="cursor-pointer hover:scale-[1.02] transition-transform rounded-2xl shadow-md border border-slate-100 max-w-full md:max-w-2xl" 
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {postImages.map((img, index) => (
            <div 
              key={img}
              onClick={() => {
                setLightboxImages(postImages.map(i => `/images/Abiturientu/2026/Post/${i}`));
                setSelectedImageIndex(index);
              }}
              className="cursor-pointer group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 aspect-square bg-slate-50"
            >
              <img src={`/images/Abiturientu/2026/Post/${img}`} alt={`Пост ${img}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div className="space-y-8 pt-8 border-t border-slate-100">
        <div className="text-center">
          <h3 className="text-3xl font-display font-bold text-primary-900 mb-2">Мы творческие!</h3>
          <p className="text-slate-600">Строительство зданий и сооружений. Мастер-класс в области декоративной отделки и многое другое.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((videoId) => (
            <div key={videoId} className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-black aspect-video relative group">
              <iframe 
                src={`https://www.youtube.com/embed/${videoId}?rel=0&fs=1&wmode=transparent`} 
                className="w-full h-full absolute inset-0"
                allow="autoplay; encrypted-media" 
                allowFullScreen 
                frameBorder="0" 
                title="YouTube Video"
              />
            </div>
          ))}
          {/* Virtual excursion video */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-black aspect-video relative group">
            <iframe 
              src="https://www.youtube.com/embed/OTu3lCE3zYQ?rel=0&fs=1&wmode=transparent" 
              className="w-full h-full absolute inset-0"
              allow="autoplay; encrypted-media" 
              allowFullScreen 
              frameBorder="0" 
              title="Virtual Excursion"
            />
          </div>
        </div>
      </div>

      {/* Material Base Gallery */}
      <div className="space-y-8 pt-8 border-t border-slate-100">
        <h3 className="text-3xl font-display font-bold text-center text-primary-900">Наша материально-техническая база</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {mtbImages.map((img, index) => (
            <div 
              key={img}
              onClick={() => {
                setLightboxImages(mtbImages.map(i => `/images/Kolledg/MTB/${i}`));
                setSelectedImageIndex(index);
              }}
              className="cursor-pointer group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 aspect-square bg-slate-50"
            >
              <img src={`/images/Kolledg/MTB/${img}`} alt={`База ${img}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <Lightbox 
          images={lightboxImages}
          selectedIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onSelectIndex={setSelectedImageIndex}
        />
      )}

    </div>
  );
};

export default RemoteOpenDay;
