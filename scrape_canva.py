import asyncio
from playwright.async_api import async_playwright
import json
import time

async def scrape():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        print("Navigating...")
        await page.goto('https://remonto.my.canva.site/dagarmjdr0s', wait_until='networkidle', timeout=60000)
        print("Page loaded. Scrolling to load all images...")
        
        # Scroll to bottom smoothly to trigger all lazy loading
        last_height = await page.evaluate("document.body.scrollHeight")
        for _ in range(15):
            await page.evaluate("window.scrollBy(0, 1000)")
            await asyncio.sleep(1)
            
        print("Extracting images and text...")
        
        # Canva often uses nested divs. Let's just grab all images.
        images = await page.evaluate('''() => {
            return Array.from(document.querySelectorAll('img')).map(img => img.src).filter(src => src.startsWith('http'));
        }''')
        
        # Grab all texts that look like headings
        texts = await page.evaluate('''() => {
            return Array.from(document.querySelectorAll('p, h1, h2, h3, h4, span'))
                .map(el => el.innerText)
                .filter(text => text && text.trim().length > 3);
        }''')
        
        data = {
            'images': list(set(images)),
            'texts': list(set(texts))
        }
        
        with open('canva_data.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            
        print(f"Scraped {len(set(images))} images and {len(set(texts))} texts.")
        await browser.close()

asyncio.run(scrape())
