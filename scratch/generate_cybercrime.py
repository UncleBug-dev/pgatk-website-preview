import re
from bs4 import BeautifulSoup

def main():
    input_file = r'd:\Workspace\Web\PGATK Website\zakon-i-podrostok.html'
    output_file = r'd:\Workspace\Web\PGATK Website\pages\CybercrimePrevention.tsx'

    with open(input_file, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Clean UIkit galleries
    scopes = soup.find_all('div', class_='uk-scope')
    for scope in scopes:
        images = scope.find_all('img')
        if images:
            grid_html = '<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">'
            for img in images:
                src = img.get('src')
                if src:
                    grid_html += f'<div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="{src}"><img src="{src}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> Увеличить</span></div></div></div>'
            grid_html += '</div>'
            new_tag = BeautifulSoup(grid_html, 'html.parser')
            scope.replace_with(new_tag)
        else:
            scope.decompose()

    article_body = soup.find('div', itemprop='articleBody')
    intro_html = str(article_body) if article_body else ''

    def process_html(html):
        html = html.replace('style="text-align: justify;"', 'class="text-justify mb-4 text-slate-700 leading-relaxed"')
        html = html.replace('style="text-align: center;"', 'class="text-center mb-4 text-slate-700 leading-relaxed"')
        html = html.replace('style="text-align: left;"', 'class="text-left mb-4 text-slate-700 leading-relaxed"')
        html = html.replace('style="text-align: right;"', 'class="text-right mb-4 text-slate-700 leading-relaxed"')
        html = html.replace('<img ', '<img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" ')
        html = re.sub(r'width="\d+"', '', html)
        html = re.sub(r'height="\d+"', '', html)
        html = html.replace('<hr>', '<hr class="my-6 border-slate-200" />')
        html = re.sub(r'style="[^"]*"', '', html)
        
        def replacer(match):
            links = match.group(0)
            items = re.findall(r'<a[^>]*>.*?</a>', links, flags=re.DOTALL)
            if items:
                grid_html = '<div class="flex flex-wrap justify-center gap-6 my-8">'
                for item in items:
                    img_src_match = re.search(r'<img[^>]*src="([^"]+)"', item)
                    if img_src_match:
                        src = img_src_match.group(1)
                        item_mod = re.sub(r'<a[^>]*>', f'<div class="relative group block overflow-hidden rounded-2xl w-full sm:w-[280px] md:w-[300px] shrink-0 gallery-item cursor-pointer" data-src="{src}">', item)
                        item_mod = re.sub(r'</a>', r'<div class="absolute inset-0 bg-blue-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> Открыть</span></div></div>', item_mod)
                        grid_html += f'{item_mod}'
                    else:
                        grid_html += f'<div class="inline-block">{item}</div>'
                grid_html += '</div>'
                return grid_html
            return match.group(0)

        html = re.sub(r'(?:<p[^>]*>\s*<strong>\s*(?:<a[^>]*>\s*<img[^>]*/>\s*</a>(?:\s*&nbsp;\s*|\s*)*)+\s*</strong>\s*</p>\s*)+', replacer, html, flags=re.DOTALL)
        html = re.sub(r'(?:<p[^>]*>\s*<strong>\s*(?:<a[^>]*>\s*<img[^>]*/>\s*</a>(?:\s*&nbsp;\s*|\s*)*)+.*?\s*</strong>\s*</p>\s*)+', replacer, html, flags=re.DOTALL)
        
        # Youtube replacement
        html = re.sub(r'<iframe[^>]*src="([^"]+youtube\.com[^"]+)"[^>]*>.*?</iframe>', r'<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="\1" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>', html)

        html = re.sub(r'<a[^>]*href="([^"]+\.(jpg|png|jpeg|gif))"[^>]*>\s*<img([^>]*)>\s*</a>', r'<div class="relative group block overflow-hidden rounded-2xl w-full sm:w-[280px] md:w-[300px] shrink-0 gallery-item cursor-pointer inline-block mx-2" data-src="\1"><img\3><div class="absolute inset-0 bg-blue-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> Увеличить</span></div></div>', html, flags=re.IGNORECASE)
        html = re.sub(r'<p[^>]*>\s*</p>', '', html)
        return html.strip().replace('`', '\\`').replace('$', '\\$')

    intro_html = process_html(intro_html)

    react_code = f"""import React, {{ useState }} from 'react';
import {{ ShieldAlert }} from 'lucide-react';
import {{ Lightbox }} from '../components/Lightbox';

export default function CybercrimePrevention() {{
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleClick = (e: React.MouseEvent) => {{
    const target = e.target as HTMLElement;
    
    const galleryItem = target.closest('.gallery-item');
    if (galleryItem) {{
      e.preventDefault();
      const src = galleryItem.getAttribute('data-src');
      if (!src) return;
      
      const gallery = galleryItem.closest('.grid, .flex');
      if (gallery) {{
        const items = Array.from(gallery.querySelectorAll('.gallery-item'));
        const images = items.map(i => i.getAttribute('data-src')).filter(Boolean) as string[];
        const index = items.indexOf(galleryItem as Element);
        if (images.length > 0) {{
          setLightboxImages(images);
          setLightboxIndex(index !== -1 ? index : 0);
        }}
      }} else {{
        setLightboxImages([src]);
        setLightboxIndex(0);
      }}
      return;
    }}

    const anchor = target.closest('a');
    if (anchor && anchor.href && (anchor.href.match(/\\.(jpg|jpeg|png|gif)$/i))) {{
      e.preventDefault();
      setLightboxImages([anchor.href]);
      setLightboxIndex(0);
    }}
  }};

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans pt-12">
      {{/* Hero Section */}}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden py-24 mb-12 rounded-3xl mx-4 lg:mx-8 shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <ShieldAlert className="w-5 h-5 text-blue-300" />
            <span className="text-blue-100 font-medium">Безопасность в сети</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Профилактика киберпреступлений
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto font-medium">
            Правила безопасного поведения в интернете и защита персональных данных
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl" onClick={{handleClick}}>
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 mb-8 prose prose-lg max-w-none text-slate-700 prose-headings:text-slate-800 prose-a:text-blue-600 hover:prose-a:text-blue-800" dangerouslySetInnerHTML={{{{ __html: `{intro_html}` }}}} />
      </div>

      {{lightboxImages.length > 0 && (
        <Lightbox 
          images={{lightboxImages}} 
          selectedIndex={{lightboxIndex}} 
          onClose={{() => setLightboxImages([])}} 
          onSelectIndex={{setLightboxIndex}} 
        />
      )}}
    </div>
  );
}}
"""

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(react_code)
    
    print(f"Generated {output_file}")

if __name__ == '__main__':
    main()
