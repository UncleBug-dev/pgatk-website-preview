import React, { useState } from 'react';
import { Ban, ChevronRight, BookOpen } from 'lucide-react';
import { Lightbox } from '../components/Lightbox';

export default function SmokingPrevention() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const tabs = [
    { id: 'tab-0', title: 'Курение и ответственность. Важно знать!', content: `<p><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" alt=""  src="/images/1Novosti/2024/Aprel/Kurenie.webp"  /></p>
<p><strong>Несовершеннолетние, находясь в общественных местах, в том числе на территориях учреждений образования, используют (потребляют) электронные системы курения.</strong></p>
<p>Действующим законодательством урегулированы вопросы курения (потребления) табачных изделий, использования электронных систем курения, систем для потребления табака (далее – курение), а также продажа данных товарно-материальных ценностей несовершеннолетним.</p>
<p>В соответствии с Декретом Президента Республики Беларусь от 17 декабря 2002 г. №28 «О государственном регулировании производства, оборота и потребления табачного сырья и табачных изделий» <strong>курение запрещено</strong> на территориях и в помещениях, занимаемых спортивно-оздоровительными и иными лагерями, в помещениях и на территориях, занимаемых <strong>учреждениями образования</strong>, организациями, реализующими образовательные программы послевузовского образования и др.</p>
<p>Согласно <strong>статье 41 Кодекса Республики Беларусь об образовании</strong> на учреждения образования возлагается обязанность осуществлять профилактику, пресечение и принятие мер по недопущению курения (потребления) табачных изделий, использования электронных систем курения, систем для потребления табака в помещениях и на территориях, занимаемых учреждениями образования.</p>
<p>В то же время, как показывает практика, отдельные родители даже не подозревают, что их дети курят либо используют электронные системы курения, в ряде случаев считают курение нормой поведения.</p>
<p>В этой связи нередко возникают вопросы об ответственности обучающихся за курение на территориях учреждений образования.</p>
<p>Согласно <strong>подпункту 1.8. пункта 1 статьи 118 Кодекс Республики Беларусь об образовании основанием для привлечения обучающихся к дисциплинарной ответственности </strong>является<strong> курение (потребление) табачных изделий, использования электронных систем курения, систем для потребления табака в помещениях и на территориях, занимаемых учреждением образования.</strong></p>
<p>А также <strong>статьей 17.9 Кодекса Республики Беларусь об административных правонарушениях</strong> предусмотрена <strong>административная ответственность за курение (потребление)</strong> табачных изделий в местах, где оно в соответствии с законодательными актами запрещено, - <strong>в виде штрафа до четырех базовых величин.</strong></p>` }
  ];

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
      <div className="relative bg-gradient-to-br from-red-900 via-rose-800 to-red-600 text-white overflow-hidden py-24 mb-12 rounded-3xl mx-4 lg:mx-8 shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542614471-001ccf2bb8cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Ban className="w-5 h-5 text-red-200" />
            <span className="text-red-100 font-medium">Здоровый образ жизни</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Профилактика табакокурения
          </h1>
          <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto font-medium">
            Вред курения, последствия и ответственность за курение в запрещенных местах
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl" onClick={handleClick}>
        {/* Intro Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-10 mb-8 prose prose-lg max-w-none text-slate-700 prose-headings:text-slate-800 prose-a:text-red-600 hover:prose-a:text-red-800" dangerouslySetInnerHTML={{ __html: `<p class="text-justify mb-4 text-slate-700 leading-relaxed">По данным Всемирной организации здравоохранения (далее – ВОЗ) от последствий употребления табака ежегодно гибнет более 8 миллионов человек, более 7 миллионов из них – потребители и бывшие потребители табака, и более 1,2 миллиона – некурящие, подвергающиеся воздействию вторичного табачного дыма. Все формы употребления табака вредят здоровью, и безвредной дозы табака не существует. Наиболее распространенной формой употребления табака в мире является курение сигарет. К другим видам табачной продукции относятся кальянный табак, сигары, самокруточный табак, изделия на основе нагревания табака, которые также токсичны и содержат канцерогены. Нагревание табака или активирование устройства, содержащего табак, сопровождается образованием аэрозолей, содержащих никотин и токсичные химические соединения, которые вдыхаются курильщиком и вызывают крайне высокую зависимость и негативные последствия. Особенно опасны электронные сигареты для детей и подростков. Распространяемая реклама этих продуктов вводит в заблуждение ложными заявлениями об отсутствии вреда для здоровья, как средства, способствующего отказу от курения.</p><p class="text-justify mb-4 text-slate-700 leading-relaxed">Употребление табака является наиболее предотвратимой причиной болезней и смерти. Помимо ущерба здоровья, употребление табака несёт огромные экономические затраты на здравоохранение, потерю производительности, ущерб от пожаров и экологический вред. Стратегии Рамочной конвенции ВОЗ по борьбе против табака направлены на сокращение употребления табака и связанные с ним заболевания. Положения, изложенные в конвенции, включают в себя:</p><ul>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> повышение налогообложения на табачные изделия;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> запрет курения в общественных местах;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> ограничение рекламы табачных изделий;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> запрет продажи несовершеннолетним;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> предупреждение населения об опасности употребления табака;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> помощь потребителям табака в отказе от курения;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> предложение альтернативных вариантов заработка производителям табака.</li>
</ul><p class="text-justify mb-4 text-slate-700 leading-relaxed">Основной целью профилактики вредного влияния курения на организм является полный отказ от курения.</p><p class="text-justify mb-4 text-slate-700 leading-relaxed">В целях реализации положений Рамочной конвенции ВОЗ по борьбе против табака, государственной программы «Здоровье народа и демографическая безопасность» на 2021-2025 годы, профилактики заболеваний, причинно связанных с табакокурением, в Республике Беларусь 2 раза в год проводится республиканская информационно-образовательная антитабачная акция, приуроченная к "Единым дням здоровья": 31 мая – «Всемирный день без табака», а также 16 ноября – Единый день здоровья «Всемирный день некурения. Профилактика онкологических заболеваний».</p><p class="text-justify mb-4 text-slate-700 leading-relaxed">Антитабачные акции Республики Беларусь направлены на информирование населения о пагубных последствиях для здоровья потребления табака и воздействия табачного дыма, формирование у гражданского общества устойчивых мер, направленных на борьбу с потреблением табака. Профилактика табакокурения в нашей стране осуществляется:</p><ul>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> с привлечением представителей организаций здравоохранения, учреждений образования, культуры, спорта и туризма, правоохранительных органов, общественных организаций;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> путем проведения дней открытой информации;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> путем консультирования населения в учреждениях здравоохранения, образования и на предприятиях, органами СМИ.</li>
</ul><p class="text-justify mb-4 text-slate-700 leading-relaxed">Осуществление жёсткой борьбы против табака влияет на общественное мнение. Мониторинг проблемы курения имеет решающее значение для информирования населения. Ключевым императивом является защита детей от негативного воздействия пассивного курения. Осуществляется денормализация употребления табака за счёт повышения его социальной неприемлимости. Меры, предпринятые в рамках борьбы против курения, Республикой Беларусь:</p><ul>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> требования к упаковке табачных и никотинсодержащих изделий;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> запрет рекламы и спонсорства табачными производителями массовых развлекательных мероприятий;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> ограничение продажи, в том числе через торговые автоматы, а также публичной демонстрации табачных изделий;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed">создание свободных от табачного дыма площадок на открытом воздухе (школьные территории, спортивные стадионы, парки, пляжи);</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> просвещение семей о возможностях уменьшения загрязнения воздуха внутри помещений, связанного с курением, которое подвергает детей риску;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> защита политики общественного здравоохранения от коммерческих и других интересов табачной промышленности;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> принятие ценовых и налоговых мер по сокращению спроса на табак;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed">регулирование состава табачных изделий;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> оказание помощи людям в предупреждении их привыкания к табаку;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> контроль незаконной торговли табачными изделиями;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> запрет на продажу табачных изделий несовершеннолетним.</li>
</ul><p class="text-justify mb-4 text-slate-700 leading-relaxed">Перечисленные меры дают свои результаты, и в последние годы наблюдается устойчивая динамика снижения потребления табака. Однако очень многое зависит от каждого конкретного человека, его стремлении к здоровью и отказу от вредных привычек, в том числе – потребления табачных и никотинсодержащих изделий.</p><ol>
<li><a href="https://rcheph.by/upload/documents/1_%D0%A2%D0%90%D0%91%D0%90%D0%9A%20%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F%20%D0%92%D0%9E%D0%97.pdf">Табак (информация ВОЗ);</a></li>
<li><a href="https://rcheph.by/upload/documents/2_%D0%92%D1%81%D1%91,%20%D1%87%D1%82%D0%BE%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D0%BA%D0%B0%D0%BB%D1%8C%D1%8F%D0%BD%D0%B5.pdf">Всё, что нужно знать о кальяне;</a></li>
<li><a href="https://rcheph.by/upload/documents/3_%D0%92%D1%81%D1%91,%20%D1%87%D1%82%D0%BE%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%82%D1%8B.pdf">Всё, что нужно знать про сигареты;</a></li>
<li><a href="https://rcheph.by/upload/documents/4_%D0%A1%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D1%8B%20%D0%BF%D1%80%D0%B5%D0%BE%D0%B4%D0%BE%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B8%20%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%82%D0%B0%D0%B1%D0%B0%D1%87%D0%BD%D0%BE%D0%B9%20%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8.pdf">Способы преодоления и лечения табачной зависимости;</a></li>
<li><a href="https://rcheph.by/upload/documents/5_%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA%20%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B9,%20%D0%BE%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D1%85%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%83%D1%8E%20%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%20%D0%BD%D0%B0%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8%20%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C%20%D0%BF%D1%80%D0%B8%20%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B8%20%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9.pdf">Список организаций, оказывающих консультативную помощь населению Республики Беларусь при развитии зависимостей.</a></li>
</ol><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8"><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2023/Noybr/Nekurenie/1.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2023/Noybr/Nekurenie/1.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2023/Noybr/Nekurenie/2.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2023/Noybr/Nekurenie/2.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2023/Noybr/Nekurenie/3.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2023/Noybr/Nekurenie/3.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2023/Noybr/Nekurenie/4.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2023/Noybr/Nekurenie/4.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2023/Noybr/Nekurenie/5.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2023/Noybr/Nekurenie/5.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div></div>
<p class="text-justify mb-4 text-slate-700 leading-relaxed">По данным Всемирной организации здравоохранения (далее – ВОЗ) от последствий употребления табака ежегодно гибнет более 8 миллионов человек, более 7 миллионов из них – потребители и бывшие потребители табака, и более 1,2 миллиона – некурящие, подвергающиеся воздействию вторичного табачного дыма. Все формы употребления табака вредят здоровью, и безвредной дозы табака не существует. Наиболее распространенной формой употребления табака в мире является курение сигарет. К другим видам табачной продукции относятся кальянный табак, сигары, самокруточный табак, изделия на основе нагревания табака, которые также токсичны и содержат канцерогены. Нагревание табака или активирование устройства, содержащего табак, сопровождается образованием аэрозолей, содержащих никотин и токсичные химические соединения, которые вдыхаются курильщиком и вызывают крайне высокую зависимость и негативные последствия. Особенно опасны электронные сигареты для детей и подростков. Распространяемая реклама этих продуктов вводит в заблуждение ложными заявлениями об отсутствии вреда для здоровья, как средства, способствующего отказу от курения.</p>
<p class="text-justify mb-4 text-slate-700 leading-relaxed">Употребление табака является наиболее предотвратимой причиной болезней и смерти. Помимо ущерба здоровья, употребление табака несёт огромные экономические затраты на здравоохранение, потерю производительности, ущерб от пожаров и экологический вред. Стратегии Рамочной конвенции ВОЗ по борьбе против табака направлены на сокращение употребления табака и связанные с ним заболевания. Положения, изложенные в конвенции, включают в себя:</p>
<ul>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> повышение налогообложения на табачные изделия;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> запрет курения в общественных местах;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> ограничение рекламы табачных изделий;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> запрет продажи несовершеннолетним;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> предупреждение населения об опасности употребления табака;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> помощь потребителям табака в отказе от курения;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> предложение альтернативных вариантов заработка производителям табака.</li>
</ul>
<p class="text-justify mb-4 text-slate-700 leading-relaxed">Основной целью профилактики вредного влияния курения на организм является полный отказ от курения.</p>
<p class="text-justify mb-4 text-slate-700 leading-relaxed">В целях реализации положений Рамочной конвенции ВОЗ по борьбе против табака, государственной программы «Здоровье народа и демографическая безопасность» на 2021-2025 годы, профилактики заболеваний, причинно связанных с табакокурением, в Республике Беларусь 2 раза в год проводится республиканская информационно-образовательная антитабачная акция, приуроченная к "Единым дням здоровья": 31 мая – «Всемирный день без табака», а также 16 ноября – Единый день здоровья «Всемирный день некурения. Профилактика онкологических заболеваний».</p>
<p class="text-justify mb-4 text-slate-700 leading-relaxed">Антитабачные акции Республики Беларусь направлены на информирование населения о пагубных последствиях для здоровья потребления табака и воздействия табачного дыма, формирование у гражданского общества устойчивых мер, направленных на борьбу с потреблением табака. Профилактика табакокурения в нашей стране осуществляется:</p>
<ul>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> с привлечением представителей организаций здравоохранения, учреждений образования, культуры, спорта и туризма, правоохранительных органов, общественных организаций;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> путем проведения дней открытой информации;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> путем консультирования населения в учреждениях здравоохранения, образования и на предприятиях, органами СМИ.</li>
</ul>
<p class="text-justify mb-4 text-slate-700 leading-relaxed">Осуществление жёсткой борьбы против табака влияет на общественное мнение. Мониторинг проблемы курения имеет решающее значение для информирования населения. Ключевым императивом является защита детей от негативного воздействия пассивного курения. Осуществляется денормализация употребления табака за счёт повышения его социальной неприемлимости. Меры, предпринятые в рамках борьбы против курения, Республикой Беларусь:</p>
<ul>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> требования к упаковке табачных и никотинсодержащих изделий;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> запрет рекламы и спонсорства табачными производителями массовых развлекательных мероприятий;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> ограничение продажи, в том числе через торговые автоматы, а также публичной демонстрации табачных изделий;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed">создание свободных от табачного дыма площадок на открытом воздухе (школьные территории, спортивные стадионы, парки, пляжи);</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> просвещение семей о возможностях уменьшения загрязнения воздуха внутри помещений, связанного с курением, которое подвергает детей риску;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> защита политики общественного здравоохранения от коммерческих и других интересов табачной промышленности;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> принятие ценовых и налоговых мер по сокращению спроса на табак;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed">регулирование состава табачных изделий;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> оказание помощи людям в предупреждении их привыкания к табаку;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> контроль незаконной торговли табачными изделиями;</li>
<li class="text-justify mb-4 text-slate-700 leading-relaxed"> запрет на продажу табачных изделий несовершеннолетним.</li>
</ul>
<p class="text-justify mb-4 text-slate-700 leading-relaxed">Перечисленные меры дают свои результаты, и в последние годы наблюдается устойчивая динамика снижения потребления табака. Однако очень многое зависит от каждого конкретного человека, его стремлении к здоровью и отказу от вредных привычек, в том числе – потребления табачных и никотинсодержащих изделий.</p>
<ol>
<li><a href="https://rcheph.by/upload/documents/1_%D0%A2%D0%90%D0%91%D0%90%D0%9A%20%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F%20%D0%92%D0%9E%D0%97.pdf">Табак (информация ВОЗ);</a></li>
<li><a href="https://rcheph.by/upload/documents/2_%D0%92%D1%81%D1%91,%20%D1%87%D1%82%D0%BE%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D0%BA%D0%B0%D0%BB%D1%8C%D1%8F%D0%BD%D0%B5.pdf">Всё, что нужно знать о кальяне;</a></li>
<li><a href="https://rcheph.by/upload/documents/3_%D0%92%D1%81%D1%91,%20%D1%87%D1%82%D0%BE%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%B8%D0%B3%D0%B0%D1%80%D0%B5%D1%82%D1%8B.pdf">Всё, что нужно знать про сигареты;</a></li>
<li><a href="https://rcheph.by/upload/documents/4_%D0%A1%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D1%8B%20%D0%BF%D1%80%D0%B5%D0%BE%D0%B4%D0%BE%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B8%20%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%82%D0%B0%D0%B1%D0%B0%D1%87%D0%BD%D0%BE%D0%B9%20%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8.pdf">Способы преодоления и лечения табачной зависимости;</a></li>
<li><a href="https://rcheph.by/upload/documents/5_%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA%20%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B9,%20%D0%BE%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D1%85%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D1%83%D1%8E%20%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%20%D0%BD%D0%B0%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8E%20%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8%20%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C%20%D0%BF%D1%80%D0%B8%20%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B8%20%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9.pdf">Список организаций, оказывающих консультативную помощь населению Республики Беларусь при развитии зависимостей.</a></li>
</ol>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8"><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2023/Noybr/Nekurenie/1.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2023/Noybr/Nekurenie/1.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2023/Noybr/Nekurenie/2.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2023/Noybr/Nekurenie/2.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2023/Noybr/Nekurenie/3.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2023/Noybr/Nekurenie/3.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2023/Noybr/Nekurenie/4.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2023/Noybr/Nekurenie/4.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div><div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="/images/1Novosti/2023/Noybr/Nekurenie/5.jpg"><img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/1Novosti/2023/Noybr/Nekurenie/5.jpg"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-></path></svg> Увеличить</span></div></div></div></div>` }} />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs Navigation */}
          <div className="w-full lg:w-1/3 shrink-0">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-3 sticky top-24">
              <div className="flex flex-col gap-2">
                {tabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full flex items-center justify-between text-left px-5 py-4 rounded-2xl font-medium transition-all duration-300 ${
                      activeTab === idx 
                        ? 'bg-red-600 text-white shadow-md' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-red-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className={`w-5 h-5 ${activeTab === idx ? 'text-red-200' : 'text-slate-400'}`} />
                      <span className="line-clamp-2 leading-snug">{tab.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-300 ${activeTab === idx ? 'text-white translate-x-1' : 'opacity-0 -translate-x-2'}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-10 min-h-[500px]">
              {tabs.map((tab, idx) => (
                <div 
                  key={tab.id}
                  className={`transition-all duration-500 ${
                    activeTab === idx 
                      ? 'opacity-100 translate-y-0 block' 
                      : 'opacity-0 translate-y-4 hidden'
                  }`}
                >
                  <div className="prose prose-lg max-w-none text-slate-700 prose-headings:text-slate-800 prose-a:text-red-600 hover:prose-a:text-red-800" dangerouslySetInnerHTML={{ __html: tab.content }} />
                </div>
              ))}
            </div>
          </div>
        </div>
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
