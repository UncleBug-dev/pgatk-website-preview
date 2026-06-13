import re
from bs4 import BeautifulSoup

def main():
    input_file = r'd:\Workspace\Web\PGATK Website\zakon-i-podrostok.html'
    output_file = r'd:\Workspace\Web\PGATK Website\pages\SmokingPrevention.tsx'

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
    
    intro_html = ""
    tabs_data = []

    if article_body:
        dl_tabs = article_body.find('dl', class_='tabs')
        if dl_tabs:
            # Everything before dl
            for sibling in dl_tabs.previous_siblings:
                if sibling.name:
                    intro_html = str(sibling) + intro_html
                elif str(sibling).strip():
                    intro_html = str(sibling) + intro_html
            
            # The first tab might be hidden and contain intro content
            dt_elements = dl_tabs.find_all('dt')
            dd_elements = dl_tabs.find_all('dd')
            for dt, dd in zip(dt_elements, dd_elements):
                title = dt.get_text(strip=True)
                content = "".join([str(c) for c in dd.children])
                
                # if dt is hidden, add its content to intro_html
                if 'display:none' in dt.get('style', '').replace(' ', ''):
                    intro_html += content
                elif title:
                    tabs_data.append({'title': title, 'content': content})

            # Check for <div class="current"><dd class="tabs">
            current_div = article_body.find('div', class_='current')
            if current_div:
                dd_current = current_div.find('dd')
                if dd_current:
                    # In Joomla, the last dt often matches this dd
                    if len(dt_elements) > len(dd_elements):
                        last_dt = dt_elements[-1]
                        title = last_dt.get_text(strip=True)
                        content = "".join([str(c) for c in dd_current.children])
                        tabs_data.append({'title': title, 'content': content})
        else:
            intro_html = str(article_body)

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
    processed_tabs = []
    for t in tabs_data:
        processed_tabs.append({
            'title': t['title'].replace('`', '\\`').replace('$', '\\$'),
            'content': process_html(t['content'])
        })

    tabs_str = ',\n    '.join([f"{{ id: 'tab-{i}', title: '{t['title']}', content: `{t['content']}` }}" for i, t in enumerate(processed_tabs)])

    react_code = f"""import React, {{ useState }} from 'react';
import {{ Ban, ChevronRight, BookOpen }} from 'lucide-react';
import {{ Lightbox }} from '../components/Lightbox';

export default function SmokingPrevention() {{
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const tabs = [
    {tabs_str}
  ];

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

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl" onClick={{handleClick}}>
        {{/* Intro Content */}}
        {f'<div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-10 mb-8 prose prose-lg max-w-none text-slate-700 prose-headings:text-slate-800 prose-a:text-red-600 hover:prose-a:text-red-800" dangerouslySetInnerHTML={{{{ __html: `{intro_html}` }}}} />' if intro_html else ''}

        {f'''<div className="flex flex-col lg:flex-row gap-8">
          {{/* Tabs Navigation */}}
          <div className="w-full lg:w-1/3 shrink-0">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-3 sticky top-24">
              <div className="flex flex-col gap-2">
                {{tabs.map((tab, idx) => (
                  <button
                    key={{tab.id}}
                    onClick={{() => setActiveTab(idx)}}
                    className={{`w-full flex items-center justify-between text-left px-5 py-4 rounded-2xl font-medium transition-all duration-300 ${{
                      activeTab === idx 
                        ? 'bg-red-600 text-white shadow-md' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-red-600'
                    }}`}}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className={{`w-5 h-5 ${{activeTab === idx ? 'text-red-200' : 'text-slate-400'}}`}} />
                      <span className="line-clamp-2 leading-snug">{{tab.title}}</span>
                    </div>
                    <ChevronRight className={{`w-4 h-4 shrink-0 transition-transform duration-300 ${{activeTab === idx ? 'text-white translate-x-1' : 'opacity-0 -translate-x-2'}}`}} />
                  </button>
                ))}}
              </div>
            </div>
          </div>

          {{/* Tab Content */}}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-10 min-h-[500px]">
              {{tabs.map((tab, idx) => (
                <div 
                  key={{tab.id}}
                  className={{`transition-all duration-500 ${{
                    activeTab === idx 
                      ? 'opacity-100 translate-y-0 block' 
                      : 'opacity-0 translate-y-4 hidden'
                  }}`}}
                >
                  <div className="prose prose-lg max-w-none text-slate-700 prose-headings:text-slate-800 prose-a:text-red-600 hover:prose-a:text-red-800" dangerouslySetInnerHTML={{{{ __html: tab.content }}}} />
                </div>
              ))}}
            </div>
          </div>
        </div>''' if tabs_data else ''}
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
