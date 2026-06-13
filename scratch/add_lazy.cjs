const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) { 
        results = results.concat(walk(file));
      } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        results.push(file);
      }
    });
  } catch (e) {
    // Ignore missing directories
  }
  return results;
}

const dirs = ['./src', './components', './pages', './layouts'];
let files = [];
dirs.forEach(d => {
  files = files.concat(walk(d));
});

let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  content = content.replace(/<img\s([^>]+)>/gi, (match, attrs) => {
    if (/loading=/i.test(attrs)) return match;
    return `<img loading="lazy" ${attrs}>`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    changedFiles++;
  }
});
console.log('Added loading=lazy to ' + changedFiles + ' files.');
