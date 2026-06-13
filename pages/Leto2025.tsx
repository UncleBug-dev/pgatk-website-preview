import React, { useState } from 'react';
import { Sun } from 'lucide-react';
import { Lightbox } from '../components/Lightbox';

export default function Leto2025() {
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    
    const galleryItem = target.closest('.gallery-item');
    if (galleryItem) {
      e.preventDefault();
      const src = galleryItem.getAttribute('data-src');
      if (!src) return;
      
      const gallery = galleryItem.closest('.grid, .flex');
      if (gallery) {
        const items = Array.from(gallery.querySelectorAll('.gallery-item'));
        const images = items.map(i => i.getAttribute('data-src')).filter(Boolean) as string[];
        const index = items.indexOf(galleryItem as Element);
        if (images.length > 0) {
          setLightboxImages(images);
          setLightboxIndex(index !== -1 ? index : 0);
        }
      } else {
        setLightboxImages([src]);
        setLightboxIndex(0);
      }
      return;
    }

    const anchor = target.closest('a');
    if (anchor && anchor.href && (anchor.href.match(/\.(jpg|jpeg|png|gif)$/i))) {
      e.preventDefault();
      setLightboxImages([anchor.href]);
      setLightboxIndex(0);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans pt-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 text-white overflow-hidden py-24 mb-12 rounded-3xl mx-4 lg:mx-8 shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6">
            <Sun className="w-5 h-5 text-yellow-200" />
            <span className="text-white font-medium">Полезная информация</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Лето 2025
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto font-medium">
            Правила безопасного и интересного отдыха во время летних каникул
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl" onClick={handleClick}>
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 mb-8 prose prose-lg max-w-none text-slate-700 prose-headings:text-slate-800 prose-a:text-blue-600 hover:prose-a:text-blue-800" dangerouslySetInnerHTML={{ __html: `<div itemprop="articleBody">

<hr/>
<p><a href="https://zubronok.by/events/respublikanskaya-aktsiya-pravilnoe-leto-/">Республиканская акция «Правильное лето»</a></p>
<p><a href="https://boiro.by/%D0%B4%D0%B5%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C/%D0%B2%D0%BE%D1%81%D0%BF%D0%B8%D1%82%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0/%D0%BE%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5">Лето оздоровление 2025</a></p>
<p><a href="https://www.mintrud.gov.by/ru/trud-molodezh-ru">Трудоустройство молодежи </a></p>
<hr/>
<p><span ><strong>Об основах системы профилактики безнадзорности и правонарушений несовершеннолетних</strong></span></p>
<ul>
<li><a href="/images/Ideologiy/ZakonIPodrostok/AdministrativnayOtvetstvennost.pdf">АДМИНИСТРАТИВНАЯ ОТВЕТСТВЕННОСТЬ</a></li>
<li><a href="/images/Ideologiy/ZakonIPodrostok/BeznadzornostIPravonarusheniy.pdf">ЗАКОН РЕСПУБЛИКИ БЕЛАРУСЬ ОБ ОСНОВАХ СИСТЕМЫ ПРОФИЛАКТИКИ БЕЗНАДЗОРНОСТИ И ПРАВОНАРУШЕНИЙ НЕСОВЕРШЕННОЛЕТНИХ</a></li>
<li><a href="/images/Ideologiy/ZakonIPodrostok/UgolovniyKodeks.pdf">УГОЛОВНЫЙ КОДЕКС РЕСПУБЛИКИ БЕЛАРУСЬ. УСЛОВИЯ УГОЛОВНОЙ ОТВЕТСТВЕННОСТИ</a></li>
</ul>
<hr/>
<p class="text-justify mb-4 text-slate-700 leading-relaxed"><span ><strong>БУДЬ ОСТОРОЖЕН НА ВОДЕ!</strong></span></p>
<hr/>
<p><strong></strong></p><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8"><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/bezopasnost_na_vode/bezopasnost_na_vode.gif"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/bezopasnost_na_vode/bezopasnost_na_vode.gif"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/bezopasnost_na_vode/bezopasnost_na_vode1.gif"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/bezopasnost_na_vode/bezopasnost_na_vode1.gif"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div></div>
<p><strong>Важно!</strong> Все находящиеся на плавсредстве должны надевать спасательные жилеты.<br/><strong>Запрещается:</strong><br/>- превышать установленное количество людей на борту;<br/>- управлять плавсредствами в состоянии алкогольного опьянения;<br/>- управляющему плавсредством заходить за обозначенные буйками акватории, отведенные для купания;<br/>- прыгать в воду с лодки;<br/>- сидеть на бортах, переходить с места на место и пересаживаться на другие катера, лодки;<br/>- выходить на воду на плавсредствах, совершенно для этого не приспособленных;<br/>- близко подплывать к плавсредствам, вблизи них возникают водовороты, волны и течения: плывущего может затянуть под них.</p>
<p class="text-justify mb-4 text-slate-700 leading-relaxed"><strong>НАДУВНЫЕ МАТРАСЫ, КАМЕРЫ и др.</strong></p>
<p class="text-justify mb-4 text-slate-700 leading-relaxed"><strong>Важно!</strong> Любые подручные надувные средства, могут выскользнуть из рук, сдуться по какой-либо причине, и человек окажется в воде.<br/><strong>Запрещается:</strong><br/>- использовать для плавания надувные матрасы, круги, камеры и др. надувные предметы, т.к. они не являются плавсредствами.</p>
<p class="text-justify mb-4 text-slate-700 leading-relaxed"><strong>ПОДРОСТКИ БЕЗ ПРИСМОТРА У ВОДЫ</strong></p>
<p class="text-justify mb-4 text-slate-700 leading-relaxed"><strong>Важно! Правила для родителей:</strong><br/>- не отпускайте ребёнка на пляж одного;<br/>- не упускайте его из виду, когда он плавает (не стоит полагаться на то, что ребёнок уже большой и отлично плавает);<br/>- выбирайте оборудованный пляж, ведь там дежурят спасатели.<span ><em><br/></em></span></p>
<p class="text-justify mb-4 text-slate-700 leading-relaxed"><strong><em>Важно! Не упускайте из виду детей, играющих у водоёмов. Лучше всего, если ребёнок будет играть на воде со взрослыми - только так можно полностью быть уверенными в его безопасности. Если вы не участвуете в играх, следите, чтобы ребёнок был в пределах вашей видимости.</em></strong></p>
<p class="text-justify mb-4 text-slate-700 leading-relaxed">Уважаемые родители! Лето замечательное время для отдыха, позитивных эмоций, ярких впечатлений. Но это и самый травмоопасный период для детей. Поэтому сделайте все, чтобы уберечь своего ребенка от неприятностей. Постарайтесь максимально обезопасить ваш отдых, будьте рядом со своими детьми и берегите их.</p>
<p class="text-justify mb-4 text-slate-700 leading-relaxed"><strong>КУПАНИЕ В НЕТРЕЗВОМ СОСТОЯНИИ</strong></p>
<p class="text-justify mb-4 text-slate-700 leading-relaxed"><strong>Важно!</strong> Нетрезвый человек не в состоянии адекватно оценивать ситуацию и может совершать поступки, которые никогда бы не совершил в трезвом виде!<br/><strong>Запрещается:</strong><br/>- купаться в водоемах в состоянии алкогольного опьянения. Алкоголь дополнительно расширяет сосуды, и после погружения в холодную воду наступает резкий спазм. В условиях открытого водоема это может стоить жизни.</p>
<p class="text-justify mb-4 text-slate-700 leading-relaxed"><strong>ПЛАВАНИЕ И НЫРЯНИЕ В НЕЗНАКОМЫХ МЕСТАХ</strong></p>
<p class="text-justify mb-4 text-slate-700 leading-relaxed"><strong>Важно!</strong> Купайтесь только на оборудованных пляжах в зоне, огороженной буйками или поплавками.<br/><strong>Запрещается:</strong><br/>- прыгать или нырять в незнакомых местах: с мостов, причалов, пристаней и др.</p>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8"><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/bezopasnost_na_vode/1/bezopasnost_na_vode3.gif"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/bezopasnost_na_vode/1/bezopasnost_na_vode3.gif"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div></div>
<hr/>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8"><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/0.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/0.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/1.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/1.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/11.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/11.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/12.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/12.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/3.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/3.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/4.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/4.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/5.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/5.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/7.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/7.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/8.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/8.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/9.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/BezopasnoeLeto/Pamytki/9.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div></div>
<p class="text-justify mb-4 text-slate-700 leading-relaxed">
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_0_c5f91ba2a7e03b17367a38fdb06b2ab5">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/gPK-YXc-JTo?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

<p class="text-justify mb-4 text-slate-700 leading-relaxed"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_1_0fdb22c2002a84eaba154b7764c13135">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/jcDaSuxQ_FQ?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

<p class="text-justify mb-4 text-slate-700 leading-relaxed"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_2_913bdb3cf4e5e437d048309fcc00a223">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/YLtVoLtSenI?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

 
<p class="text-justify mb-4 text-slate-700 leading-relaxed"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_3_d245a080d147384d651b5529cde4fbeb">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/SsCn-YEeP3Y?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

<p class="text-justify mb-4 text-slate-700 leading-relaxed">
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_4_34f70e0e5f568f7c2bc4e13e98deffe2">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/jLCJpx6nEyI?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

<hr/>
<p class="text-justify mb-4 text-slate-700 leading-relaxed"><span ><strong>СТОП! НАРКОТИКИ!</strong></span></p>
<hr/>
<p><strong>Современные наркотики. Памятка для родителей</strong></p>
<p>В последние годы, из Китая заходит непрекращающийся поток новых наркотиков, расходится по стране почтовыми отправлениями, а непосредственная торговля ведется через сеть интернет. Названия этих наркотиков на слэнге: спайсы и соли. Бороться с ними сложно, потому что их с запозданием включают в список запрещенных, а также потому что распространение происходит через интернет, и организаторы сами не прикасаются к наркотикам. Основные потребители — молодежь.</p>
<p>Наркотики эти чрезвычайно опасны, так как доступны, просты в употреблении, и действуют в первую очередь на психику.</p>
<p>Государство не способно оградить наших детей, поэтому мы обязаны защитить их сами. Кроме нас этого никто не сделает.</p>
<p>Не будьте беспечны, не думайте, что это может коснуться любого, но не вас. Запомните — наркотики не выбирают, сын учительницы или дочь генерала. И основная причина наркомании — доступность наркотиков.</p>
<p><strong>Что необходимо знать родителям</strong></p>
<p>Самые распространенные среди молодежи наркотики — курительные смеси JWH (план, дживик, спайс, микс, трава, зелень, книга, журнал, бошки, головы, палыч, твердый, мягкий, сухой, химия, пластик, сено, липкий, вишня, шоколад, россыпь, рега, дым, зеленый флаг, ляпка, плюха и т.д.) являются синтетическими аналогами каннабиноидов, но в разы сильнее.</p>
<p>Действие наркотика может длиться от 20 минут до нескольких часов.<br/><em>Сопровождается кашлем (обжигает слизистую)</em><br/><em>Сухостью во рту (требуется постоянное употребление жидкости),</em><br/><em>Мутный либо покрасневший белок глаз (важный признак! наркоманы знают, поэтому носят с собой Визин, и другие глазные капли)</em><br/><em>Нарушение координации</em><br/><em>Дефект речи (заторможенность, эффект вытянутой магнитофонной пленки)</em><br/><em>Заторможенность мышления (тупит)</em><br/><em>Неподвижность, застывание в одной позе при полном молчании (если сильно обкурился, минут на 20-30)</em><br/><em>Бледность</em><br/><em>Учащенный пульс</em><br/><em>Приступы смеха</em><br/>В связи с тем, что дозу не просчитать (разные продавцы, составы, формулы, концентрация) возможны передозировки, которые сопровождаются тошнотой, рвотой, головокружением, сильной бледностью, до потери сознания, и могут привести к смерти.</p>
<p><strong>После употребления, в течение нескольких дней и дольше:</strong></p>
<p><em>Упадок общего физического состояния</em><br/><em>Расконцентрация внимания</em><br/><em>Апатия (особенно к работе и учебе)</em><br/><em>Нарушение сна</em><br/><em>Перепады настроения (из крайности в крайность)</em></p>
<p><strong>Из опыта:</strong></p>
<p>Основная примета — подросток начинает пропускать уроки, падает успеваемость, вообще перестает ходить в школу. Все время врет. Появляются друзья, о которых не рассказывает. При разговоре с ними по телефону уходит в другую комнату, или говорит, что наберет позднее. Появляется раздражительность до ярости, уходит от любых серьезных разговоров, уходит от контакта с родителями, отключает телефоны. При постоянном употреблении становится очевидной деградация. Думает долго, неопрятен, постоянно просит деньги, залезает в долги начинает тащить из дома. Теряет чувство реальности, развивается паранойя.</p>
<p>Обкуренные подростки, зимой зачастую тусуются в подъездах и компьютерных клубах.</p>
<p>Употребление курительных смесей — частая причина подростковых суицидов. Как правило, выходят из окон. Это не значит, что подросток хотел свести счеты с жизнью, возможно, он просто хотел полетать.</p>
<p>И еще. В 99% случаев употреблять курительные смеси начинают те, кто уже курит сигареты.</p>
<p>Покупают эти наркотики или через интернет, или у сверстников. Как правило, подростки заходят на известные сайты торгующие наркотиками, набирая в поисковике несколько ключевых слов, получает контакт, списывается через скайп или аську, делает заказ, ему тут же сообщают номер счета, он оплачивает через терминалы, и ему сообщают, где забрать спрятанные наркотики.</p>
<p>На слэнге — поднять закладку, найти клад. Те же самые действия можно осуществлять ВКонтакте, одноклассниках и т.д. Зачастую, информацию считывают со стен домов, когда видят надписи: Легал, Микс, Куреха, План и т.д. и номер аськи, реже — телефон.</p>
<p>Для подростков это все представляется интересной игрой. Для того чтобы понять, что ваш ребенок покупает наркотики, достаточно проверить его переписку, они ее как правило не стирают.</p>
<p>Сверстники, одноклассники, которые начинают торговать наркотиками в школе, сразу же становятся заметны, у них появляется другие телефоны, айпады, ноуты, они лучше одеваются. К ним обращаются старшие. Они становятся негативными лидерами, и, как правило, у позитивно настроенных детей не хватает аргументации эту ситуацию переломить.</p>
<p><strong>Из опыта:</strong></p>
<p>Подросток, начавший торговать наркотиками, и использующий это занятие как способ коммуникации со старшими и самоутверждение среди сверстников, никогда не откажется от этого занятия добровольно.</p>
<p><strong>Важно.</strong></p>
<p>Алкоголь, и даже пиво, потенцирует действие наркотика. Человек дуреет, отключается вестибулярный аппарат, теряет пространственную и временную ориентацию, и напрочь отшибает память. У подростков встречается часто.</p>
<p><strong>Из опыта:</strong></p>
<p>Ни один из употребляющих курительные смеси не считает себя наркоманом. У него напрочь отсутствует самокритика, у них трудно идет мыслительный процесс, они общаются только с себе подобными, поэтому убеждены, что курят все.</p>
<p>Сначала хватает одной-двух затяжек. Затем увеличивается частота употребления. Потом доза. Разгоняются быстро. Позднее, начинают курить неразведенный реагент. С этого момента наркоман уже не может обходиться без смеси и испытывает невероятный дискомфорт и беспокойство, если наркотика нет при себе.</p>
<p>Приходят в себя очень долго. Как правило, проходит несколько месяцев, прежде чем начинают адекватно оценивать происходящее.</p>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8"><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/StopNarkotik/SrtopNarkotik.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/StopNarkotik/SrtopNarkotik.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2022/iyl/StopNarkotik/photo_2022-02-07_18-33-49.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2022/iyl/StopNarkotik/photo_2022-02-07_18-33-49.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div></div>
<p><a href="https://xn--d1acdremb9i.xn--90ais/informatsiya-po-vazhnym-voprosam/uchashcheysya-i-studencheskoy-molodyezhi/molodyezh-protiv-narkotikov/">МОЛОДЕЖЬ ПРОТИВ НАРКОТИКОВ</a></p>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8"><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/Ideologiy/STOPNARKOTIK/Moladz/1.png"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/Ideologiy/STOPNARKOTIK/Moladz/1.png"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/Ideologiy/STOPNARKOTIK/Moladz/10.png"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/Ideologiy/STOPNARKOTIK/Moladz/10.png"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/Ideologiy/STOPNARKOTIK/Moladz/11.png"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/Ideologiy/STOPNARKOTIK/Moladz/11.png"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/Ideologiy/STOPNARKOTIK/Moladz/2.png"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/Ideologiy/STOPNARKOTIK/Moladz/2.png"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/Ideologiy/STOPNARKOTIK/Moladz/4.png"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/Ideologiy/STOPNARKOTIK/Moladz/4.png"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/Ideologiy/STOPNARKOTIK/Moladz/5.png"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/Ideologiy/STOPNARKOTIK/Moladz/5.png"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/Ideologiy/STOPNARKOTIK/Moladz/6.png"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/Ideologiy/STOPNARKOTIK/Moladz/6.png"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/Ideologiy/STOPNARKOTIK/Moladz/7.png"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/Ideologiy/STOPNARKOTIK/Moladz/7.png"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/Ideologiy/STOPNARKOTIK/Moladz/8.png"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/Ideologiy/STOPNARKOTIK/Moladz/8.png"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/Ideologiy/STOPNARKOTIK/Moladz/9.png"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/Ideologiy/STOPNARKOTIK/Moladz/9.png"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div></div>
<hr/>

<table class="table table-bordered" >
<thead>
<tr>
<td colspan="3" >
<p align="center"><strong>ЛЕТО - 2024. Видеолекторий</strong></p>
</td>
</tr>
<tr>
<td >
<p align="center"><strong>Тема мероприятия</strong></p>
</td>
<td >
<p align="center"><strong>Название мероприятия</strong></p>
</td>
<td >
<p align="center"><strong>Ссылка на ресурс</strong></p>
</td>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="5" >
<p align="center"> <strong><em>Правила поведения и действия при пожаре</em></strong></p>
</td>
<td >

<p align="center">«Действия при пожаре: <br/>правила пожарной безопасности»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_5_302aad43fcf1a6adb09ae80078040613">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/VNoF88M7SfQ?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >

<p align="center">Просмотр обучающего фильма «Пожарная безопасность»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_6_2c2466228326986401a02bc97982e21c">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/6WIbMjnO0oo?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->


</td>
</tr>
<tr>
<td >
<p align="center"> «Правила поведения детей при пожаре»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_7_c6455262de1d5ff3025ab9ee849afaf4">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/cTpyJ8lQUZs?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >

<p align="center">«Первичные средства пожаротушения»</p>

</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_8_ed1a5c86b84a34f569cb84646c3834f4">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/y7mHP0ccibY?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >

<p align="center">«Пожарная безопасность» (Азбука безопасности)</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_9_831b3d0be08ddef83cfa181163d8e5b5">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/CqLfgl8gVn8?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td rowspan="2" >

<p align="center"><strong><em>Умение оказывать первую медицинскую помощь</em></strong></p>
</td>
<td >

<p align="center">«Общие правила оказания первой медицинской помощи»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_10_22acbc1de2f1eb46a3feadc96b2dee4b">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/a6JWsMKv20o?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >
<p align="center">«Правила поведения на природе»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_11_c26e131a46d0ff95afa438fb348aa05a">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/9355-gQAyKI?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td rowspan="4" >

<p align="center"><strong><em>Умение </em></strong><strong><em>ориентироваться в лесу</em></strong></p>
</td>
<td >
<p align="center"> «Человек и природа Ориентирование на местности»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_12_d350de03906aea46d0932b153d812b11">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/u1FwA2otpWU?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >
<p align="center"> «Как ориентироваться в лесу»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_13_c5b3c76fe4d5c91cab795a12381aa455">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/eMogK_nX_zU?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >
<p align="center"> «Определение сторон горизонта по народным приметам»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_14_e0ca845149ec1b3e1833bc30878a0c8f">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/XD4cRUK8Alg?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >
<p align="center">«Как не заблудиться в лесу?»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_15_b12bc26bd275b0b2592742881768fb8a">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/Wj2wXo2zB4k?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td rowspan="4" >
<p align="center"><strong><em>Знание правил дорожного движения </em></strong>и <strong><em>основ поведения на улице</em></strong></p>
</td>
<td >
<p align="center">«Правила дорожного движения для детей»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_16_4cd71f897ac6bbdc07b224d391b4e4ad">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/epFoPA5dsNc?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >
<p align="center">«Правила дорожного движения: безопасность на дороге»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_17_30db8083ee470921463be68ac0e863dd">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/U_b4A6wxLuY?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >
<p align="center">«Пешеход. Безопасность пешехода»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_18_9c60aab679c954fb22c2962fad507881">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/i6LQCpF7Fms?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >
<p align="center">«Правила поведения на улице»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_19_bd96884c9e2a33bb3d368116525551d1">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/PFyGFoeTTEU?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >
<p align="center"><strong><em>Изготовление ватно-марлевой повязки </em></strong><strong><em>для защиты от инфекционных заболеваний</em></strong></p>
</td>
<td >
<p align="center">«Как изготовить ватно- марлевую повязку»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_20_ec0347417395086343311cb34d400045">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/hELRc_rEmDM?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >
<p align="center"><strong><em>Надевание средств индивидуальной защиты</em></strong></p>
</td>
<td >
<p align="center">«Средства индивидуальной защиты»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_21_cd398da24343e2eec8a3c45639a7ec93">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/UijD45ZMNnU?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >
<p align="center"><strong><em>Действия при разливе ртути</em></strong></p>
</td>
<td >
<p align="center">«Действия при разливе ртути»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_22_c22950591e88d591240c6b6c5b5cf49b">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/OQRBxoAXbN4?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td rowspan="3" >
<p align="center"><strong><em>Знание основ здорового образа жизни</em></strong></p>
</td>
<td >
<p align="center">«Как не простыть и беречь здоровье»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_23_4cd89afbe9e7e3a3c31f9d8c864a9a32">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/XIMtJo6lmIM?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >
<p align="center">«О пользе здорового образа жизни»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_24_42000f9eaac5c309880c81fa938bc1cd">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/-VwE__DHVYc?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
<tr>
<td >
<p align="center">«Правильное питание»</p>
</td>
<td >
<p align="center"> 

<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) starts here -->
</p><div class="avPlayerWrapper avVideo">
<div class="avPlayerContainer">
<div class="avPlayerBlock" id="AVPlayerID_25_a0e33606ce92ef0ce4e1667dce6d9c28">
<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="https://www.youtube.com/embed/-9yyNUVt8W0?rel=0&amp;fs=1&amp;wmode=transparent" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div> </div>
</div>
</div>
<!-- JoomlaWorks "AllVideos" Plugin (v5.1.0) ends here -->

</td>
</tr>
</tbody>
</table>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8"><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2024/Iyl/Moshennichestvo/31211.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2024/Iyl/Moshennichestvo/31211.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2024/Iyl/Moshennichestvo/31212.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2024/Iyl/Moshennichestvo/31212.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div></div>  </div>` }} />
      </div>

      {lightboxImages.length > 0 && (
        <Lightbox 
          images={lightboxImages} 
          selectedIndex={lightboxIndex} 
          onClose={() => setLightboxImages([])} 
          onSelectIndex={setLightboxIndex} 
        />
      )}
    </div>
  );
}
