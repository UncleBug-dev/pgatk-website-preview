const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const oldStr = '<aside className="w-full lg:w-[320px] flex-shrink-0 order-1">';
const newStr = '<aside className="w-full lg:w-[320px] flex-shrink-0 order-1 lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">';

let updated = 0;
for (const file of files) {
  const filePath = path.join(pagesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes(oldStr)) {
    fs.writeFileSync(filePath, content.replace(oldStr, newStr));
    console.log(`Updated: ${file}`);
    updated++;
  }
}
console.log(`Total files updated: ${updated}`);
