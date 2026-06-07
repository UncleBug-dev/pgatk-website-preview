import asyncio
from playwright.async_api import async_playwright
import json

async def scrape():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        print("Navigating...")
        await page.goto('https://remonto.my.canva.site/dagarmjdr0s', wait_until='domcontentloaded')
        
        print("Scrolling slowly...")
        # Scroll slowly to ensure all lazy images are loaded
        last_height = 0
        for _ in range(50):
            await page.evaluate("window.scrollBy(0, 500)")
            await asyncio.sleep(0.5)
            new_height = await page.evaluate("document.body.scrollHeight")
            # We keep scrolling anyway to be sure
            
        print("Extracting elements in order...")
        # Get all visible images and text blocks from top to bottom
        elements = await page.evaluate('''() => {
            const result = [];
            const walk = (node) => {
                if (node.nodeName === 'IMG' && node.src.startsWith('http')) {
                    const rect = node.getBoundingClientRect();
                    result.push({type: 'img', src: node.src, y: rect.top + window.scrollY, x: rect.left + window.scrollX});
                }
                if (node.nodeType === 3 && node.textContent.trim().length > 3) {
                    const parent = node.parentElement;
                    if (parent && (parent.tagName === 'P' || parent.tagName === 'SPAN' || parent.tagName.match(/^H\d/))) {
                        const rect = parent.getBoundingClientRect();
                        result.push({type: 'text', text: node.textContent.trim(), y: rect.top + window.scrollY, x: rect.left + window.scrollX});
                    }
                }
                for (let child of node.childNodes) {
                    walk(child);
                }
            };
            walk(document.body);
            return result;
        }''')
        
        # Sort elements by Y coordinate (top to bottom), then by X coordinate (left to right)
        elements.sort(key=lambda e: (e['y'], e['x']))
        
        with open('canva_elements.json', 'w', encoding='utf-8') as f:
            json.dump(elements, f, ensure_ascii=False, indent=2)
            
        print(f"Extracted {len(elements)} elements.")
        await browser.close()

asyncio.run(scrape())
