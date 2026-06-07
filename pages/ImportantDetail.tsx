import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IMPORTANT_ARTICLES } from '../data/importantData';
import { IMPORTANT_NEWS } from '../constants';
import { ArrowLeft, Calendar, FileText, X } from 'lucide-react';
import { Lightbox } from '../components/Lightbox';

const ImportantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const resolvePath = (path: string) => {
    if (path.startsWith('http')) return path;
    return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  const article = id ? IMPORTANT_ARTICLES[id] : null;
  const mockArticle = IMPORTANT_NEWS.find(n => n.id === id);

  const allImages = article 
    ? article.blocks.flatMap((b: any) => {
        if (b.type === 'image') return [resolvePath(b.url)];
        if (b.type === 'gallery') return b.images.map(resolvePath);
        return [];
      })
    : [];

  const handleImageClick = (url: string) => {
    const idx = allImages.indexOf(url);
    if (idx !== -1) setSelectedImageIndex(idx);
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 pt-24 pb-12 font-sans flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Материал готовится к публикации</h1>
        <p className="text-slate-600 mb-8 text-center max-w-md">
          {mockArticle ? mockArticle.title : 'Страница в разработке.'}
        </p>
        <Link to="/" className="px-6 py-3 bg-accent-500 text-white rounded-lg font-bold hover:bg-accent-600 transition-colors">
          Вернуться на главную
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-16 md:pt-24 pb-20 font-sans">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">
        
        {/* Navigation */}
        <Link to="/" className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          На главную
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="flex items-center text-sm text-slate-500 font-semibold mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            {article.date}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-800 leading-tight">
            {article.title}
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-12 space-y-10">
          {article.blocks.map((block: any, index: number) => {
            switch (block.type) {
              case 'html':
                return (
                  <div 
                    key={index} 
                    className="prose prose-slate max-w-none prose-p:text-slate-700 prose-headings:text-slate-800"
                    dangerouslySetInnerHTML={{ __html: block.content }}
                  />
                );
              
              case 'image':
                return (
                  <div key={index} className="rounded-xl overflow-hidden shadow-sm border border-slate-100 flex justify-center bg-slate-50">
                    <img 
                      src={resolvePath(block.url)} 
                      alt="Illustration" 
                      className="max-w-full h-auto cursor-pointer object-contain"
                      onClick={() => handleImageClick(resolvePath(block.url))}
                    />
                  </div>
                );
              
              case 'gallery':
                return (
                  <div key={index} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {block.images.map((imgUrl: string, idx: number) => (
                      <button 
                        key={idx} 
                        onClick={() => handleImageClick(resolvePath(imgUrl))}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-slate-200 bg-slate-100"
                      >
                        <img 
                          src={resolvePath(imgUrl)} 
                          alt={`Gallery ${idx}`} 
                          className="w-full h-full object-contain md:object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                      </button>
                    ))}
                  </div>
                );

              case 'pdf':
                return (
                  <a 
                    key={index}
                    href={resolvePath(block.url)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 hover:border-accent-400 hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-slate-700 group-hover:text-accent-700">
                      {block.text}
                    </span>
                  </a>
                );

              case 'youtube':
                return (
                  <div key={index} className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-black">
                    <iframe 
                      src={block.url} 
                      className="w-full h-full border-0"
                      allow="autoplay; encrypted-media" 
                      allowFullScreen
                      title="YouTube Video"
                    ></iframe>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <Lightbox 
          images={allImages}
          selectedIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onSelectIndex={setSelectedImageIndex}
        />
      )}
    </div>
  );
};

export default ImportantDetail;
