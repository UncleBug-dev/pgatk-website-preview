const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'images', '1Novosti', '2026', 'Jznvar', 'Struktura');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const imageUrl = 'https://pgatkk.by/images/1Novosti/2026/Jznvar/Struktura/Struktura.jpg';
const dest = path.join(dir, 'Struktura.jpg');

function download() {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) {
      console.log(`[SKIP] Already exists: ${path.basename(dest)}`);
      return resolve();
    }
    const file = fs.createWriteStream(dest);
    https.get(imageUrl, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
          console.log(`[DOWNLOADED] ${path.basename(dest)}`);
        });
      } else {
        file.close();
        fs.unlink(dest, () => {});
        console.log(`[FAILED] ${path.basename(dest)} - HTTP ${response.statusCode}`);
        resolve();
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.log(`[ERROR] ${path.basename(dest)} - ${err.message}`);
      resolve();
    });
  });
}

async function main() {
  console.log('Downloading organizational structure image...');
  await download();
  console.log('Done!');
}

main();
