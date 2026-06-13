import re
import os

def main():
    input_file = r'd:\Workspace\Web\PGATK Website\stop_narkotik.txt'
    output_file = r'd:\Workspace\Web\PGATK Website\pages\StopDrug.tsx'

    with open(input_file, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Clean UIkit galleries safely AND KEEP THE IMAGES
    while True:
        start_idx = html_content.find('<div class="uk-scope')
        if start_idx == -1:
            break
        script_end_idx = html_content.find('</script>', start_idx)
        if script_end_idx == -1:
            div_end_idx = html_content.find('</div>', start_idx)
            if div_end_idx == -1:
                break
            scope_block = html_content[start_idx:div_end_idx + 6]
        else:
            div_end_idx = html_content.find('</div>', script_end_idx)
            scope_block = html_content[start_idx:div_end_idx + 6]
        
        # Extract images from this block
        images = re.findall(r'<img[^>]*src="([^"]+)"[^>]*>', scope_block)
        
        if images:
            grid_html = '<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">'
            for src in images:
                grid_html += f'<div class="relative group block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300"><div class="gallery-item cursor-pointer w-full h-full" data-src="{src}"><img src="{src}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/><div class="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> Увеличить</span></div></div></div>'
            grid_html += '</div>'
            html_content = html_content[:start_idx] + grid_html + html_content[start_idx + len(scope_block):]
        else:
            html_content = html_content[:start_idx] + html_content[start_idx + len(scope_block):]

    # Clean JoomlaWorks AllVideos safely AND KEEP THE IFRAME
    while True:
        start_idx = html_content.find('<!-- JoomlaWorks')
        if start_idx == -1:
            break
        end_idx = html_content.find('ends here -->', start_idx)
        if end_idx == -1:
            break
        end_idx += len('ends here -->')
        
        block = html_content[start_idx:end_idx]
        iframe_match = re.search(r'<iframe[^>]*src="([^"]+)"[^>]*>', block)
        
        if iframe_match:
            src = iframe_match.group(1)
            iframe_html = f'<div class="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-10"><iframe src="{src}" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>'
            html_content = html_content[:start_idx] + iframe_html + html_content[end_idx:]
        else:
            html_content = html_content[:start_idx] + html_content[end_idx:]

    # Clean any leftover <script> tags just in case
    html_content = re.sub(r'<script\b[^>]*>.*?</script>', '', html_content, flags=re.DOTALL)
    
    # Strip Joomla blog headers
    html_content = re.sub(r'<div class="blog">.*?<div itemprop="articleBody">', '', html_content, flags=re.DOTALL)

    # Base HTML styling
    html_content = html_content.replace('style="text-align: justify;"', 'class="text-justify mb-4 text-slate-700 leading-relaxed"')
    html_content = html_content.replace('style="text-align: center;"', 'class="text-center mb-4 text-slate-700 leading-relaxed"')
    html_content = html_content.replace('style="text-align: left;"', 'class="text-left mb-4 text-slate-700 leading-relaxed"')
    html_content = html_content.replace('style="text-align: right;"', 'class="text-right mb-4 text-slate-700 leading-relaxed"')
    
    html_content = html_content.replace('<img ', '<img class="w-full h-auto rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 object-cover" ')
    
    html_content = html_content.replace('width="300"', '')
    html_content = html_content.replace('width="400"', '')
    html_content = html_content.replace('width="800"', '')
    html_content = html_content.replace('height="300"', '')
    html_content = html_content.replace('height="400"', '')
    html_content = html_content.replace('height="450"', '')
    html_content = html_content.replace('width="600"', '')
    html_content = html_content.replace('width="700"', '')
    
    html_content = html_content.replace('<hr>', '<hr class="my-6 border-slate-200" />')
    html_content = re.sub(r'style="[^"]*"', '', html_content)
    
    # Fix unclosed inputs, img, br
    html_content = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1/>', html_content)

    # Wrap <a><img/></a> with a nice clickable flex card and merge consecutive blocks
    def replacer(match):
        links = match.group(0)
        items = re.findall(r'<a[^>]*>.*?</a>', links, flags=re.DOTALL)
        if items:
            grid_html = '<div class="flex flex-wrap justify-center gap-6 my-8">'
            for item in items:
                # Find image src inside
                img_src_match = re.search(r'<img[^>]*src="([^"]+)"', item)
                src = img_src_match.group(1) if img_src_match else '#'
                
                # Replace <a> with <div class="gallery-item">
                item_mod = re.sub(r'<a[^>]*>', f'<div class="relative group block overflow-hidden rounded-2xl w-full sm:w-[280px] md:w-[300px] shrink-0 gallery-item cursor-pointer" data-src="{src}">', item)
                item_mod = re.sub(r'</a>', r'<div class="absolute inset-0 bg-blue-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"><span class="bg-white text-blue-900 px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> Увеличить</span></div></div>', item_mod)
                grid_html += f'{item_mod}'
            grid_html += '</div>'
            return grid_html
        return match.group(0)

    html_content = re.sub(r'(?:<p[^>]*>\s*<strong>\s*(?:<a[^>]*>\s*<img[^>]*/>\s*</a>(?:\s*&nbsp;\s*|\s*)*)+\s*</strong>\s*</p>\s*)+', replacer, html_content, flags=re.DOTALL)
    html_content = re.sub(r'(?:<p[^>]*>\s*<strong>\s*(?:<a[^>]*>\s*<img[^>]*/>\s*</a>(?:\s*&nbsp;\s*|\s*)*)+.*?\s*</strong>\s*</p>\s*)+', replacer, html_content, flags=re.DOTALL)

    content = html_content.strip().replace('`', '\\`').replace('$', '\\$')
    
    # Fix React iframe attribute case
    content = content.replace('allowfullscreen', 'allowFullScreen')

    react_code = f"""import React, {{ useState }} from 'react';
import {{ ShieldAlert }} from 'lucide-react';
import {{ Lightbox }} from '../components/Lightbox';

export default function StopDrug() {{
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
      <div className="relative bg-gradient-to-br from-red-900 via-rose-900 to-slate-900 text-white overflow-hidden py-24 mb-12 rounded-3xl mx-4 lg:mx-8 shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1624800318534-754625d97f26?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <ShieldAlert className="w-5 h-5 text-red-400" />
            <span className="text-red-100 font-medium">Важная информация</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Stop-наркотик
          </h1>
          <p className="text-xl md:text-2xl text-rose-200 mb-8 max-w-3xl mx-auto font-medium">
            Профилактика употребления психоактивных веществ и защита молодежи
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl" onClick={{handleClick}}>
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="prose max-w-none text-slate-700" dangerouslySetInnerHTML={{{{ __html: `{content}` }}}} />
        </div>
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
