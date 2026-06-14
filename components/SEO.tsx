import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  type = 'website', 
  name = '#ПГАТККЛЕЩЕВА',
  image
}) => {
  const fullTitle = title ? `${title} | ${name}` : '#ПГАТККЛЕЩЕВА - Пинский государственный аграрный технологический колледж';
  const metaDescription = description || 'Официальный веб-сайт УО «Пинский государственный аграрный технологический колледж»';
  const defaultImage = `${import.meta.env.BASE_URL}images/logo/logo_pgatkk.webp`;
  const metaImage = image || defaultImage;

  return (
    <Helmet>
      {/* Стандартные теги */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      
      {/* OpenGraph теги для соцсетей */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={metaImage} />
      
      {/* Twitter теги */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;
