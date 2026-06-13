import React from 'react';

// Базовый пульсирующий блок
const Bone: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-slate-200 rounded animate-pulse ${className}`} />
);

// Скелетон главной карточки новости (большой, 2/3 ширины)
export const MainNewsCardSkeleton: React.FC = () => (
  <div className="lg:col-span-2 rounded-2xl overflow-hidden bg-slate-100 h-96 relative animate-pulse">
    {/* Фон */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-300/80 via-slate-200/40 to-slate-100" />
    {/* Контент внизу */}
    <div className="absolute bottom-0 left-0 p-8 w-full space-y-3">
      {/* Категория-бейдж */}
      <Bone className="h-5 w-20 rounded-full" />
      {/* Заголовок */}
      <Bone className="h-7 w-4/5" />
      <Bone className="h-7 w-3/5" />
      {/* Описание */}
      <Bone className="h-4 w-full mt-1" />
      <Bone className="h-4 w-2/3" />
      {/* Дата */}
      <Bone className="h-4 w-28 mt-2" />
    </div>
  </div>
);

// Скелетон боковой карточки новости (маленькая, строчная)
export const SideNewsCardSkeleton: React.FC = () => (
  <div className="flex gap-4 bg-white p-4 rounded-xl border border-slate-100 animate-pulse">
    {/* Миниатюра */}
    <Bone className="w-24 h-24 flex-shrink-0 rounded-lg" />
    {/* Текст */}
    <div className="flex flex-col justify-center flex-grow gap-2">
      <Bone className="h-3 w-16" />
      <Bone className="h-4 w-full" />
      <Bone className="h-4 w-4/5" />
      <Bone className="h-3 w-2/3 mt-1" />
    </div>
  </div>
);

// Скелетон карточки в карусели
const CarouselCardSkeleton: React.FC = () => (
  <div className="flex-shrink-0 w-[260px] sm:w-[280px] bg-white rounded-2xl border border-slate-100 overflow-hidden animate-pulse">
    <Bone className="h-40 w-full rounded-none" />
    <div className="p-4 space-y-2">
      <Bone className="h-4 w-full" />
      <Bone className="h-4 w-4/5" />
      <Bone className="h-4 w-3/5" />
      <Bone className="h-3 w-24 mt-2" />
    </div>
  </div>
);

// Полный скелетон блока новостей — 1 главная + 3 боковые + карусель
const NewsGridSkeleton: React.FC = () => (
  <div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <MainNewsCardSkeleton />
      <div className="space-y-6">
        <SideNewsCardSkeleton />
        <SideNewsCardSkeleton />
        <SideNewsCardSkeleton />
      </div>
    </div>

    {/* Карусель-скелетон */}
    <div className="mt-10">
      <div className="flex items-center justify-between mb-5">
        <Bone className="h-4 w-24" />
        <div className="flex gap-2">
          <Bone className="h-8 w-8 rounded-full" />
          <Bone className="h-8 w-8 rounded-full" />
        </div>
      </div>
      <div className="flex gap-5 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <CarouselCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </div>
);


export default NewsGridSkeleton;
