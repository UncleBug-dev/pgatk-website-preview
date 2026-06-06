const fs = require('fs');
let content = fs.readFileSync('d:/Workspace/Web/PGATK Website/constants.ts', 'utf8');

const newImages = [
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1507415492521-917f60f214ce?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1614064641913-6b71a2ec99ff?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1584308666744-24d5e4a5bd0c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1573497491765-dccce02cb704?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504194104404-433180773017?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=400&q=80'
];

for (let i = 1; i <= 20; i++) {
  const findStr = `image: 'images/important/${i}.jpg'`;
  const replaceStr = `image: '${newImages[i - 1]}'`;
  content = content.replace(findStr, replaceStr);
}

fs.writeFileSync('d:/Workspace/Web/PGATK Website/constants.ts', content);
