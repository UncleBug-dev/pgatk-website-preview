const fs = require('fs');

const lines = fs.readFileSync('C:\\Users\\Отчайнный\\.gemini\\antigravity\\brain\\2e6af04f-b692-43a8-8b42-b4ef11005e69\\.system_generated\\logs\\transcript.jsonl', 'utf8').trim().split('\n');
const lastUserStep = lines.reverse().find(l => JSON.parse(l).type === 'USER_INPUT');
const text = JSON.parse(lastUserStep).content;

const items = [];
const blocks = text.match(/<li class="mod-position">[\s\S]*?<\/li>/g) || [];

for (const block of blocks) {
  const titleMatch = block.match(/<div class="text_table">\s*([\s\S]*?)\s*<\/div>/);
  const linkMatch = block.match(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);
  
  if (titleMatch && linkMatch) {
    let link = linkMatch[1].trim();
    if (!link.startsWith('http')) link = 'https://pgatkk.by' + link;
    
    // Clean up title
    let title = titleMatch[1].trim().replace(/<[^>]+>/g, '');
    let action = linkMatch[2].trim().replace(/<[^>]+>/g, '');
    
    items.push({
      title,
      link,
      action
    });
  }
}

fs.writeFileSync('contests.json', JSON.stringify(items, null, 2));
console.log('Extracted ' + items.length + ' items');
