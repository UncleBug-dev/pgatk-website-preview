const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'images', 'VidayshiesyVipusnkiki');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const images = [
  '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', 
  '7.png', '8.png', '9.png', '9_1.png', '9_2.png', '9_3.png', '10.png'
];

const baseUrl = 'https://pgatkk.by/images/VidayshiesyVipusnkiki/';

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) {
      console.log(`[SKIP] Already exists: ${path.basename(dest)}`);
      return resolve();
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
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
        resolve(); // Resolve anyway so promise.all doesn't fail
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.log(`[ERROR] ${path.basename(dest)} - ${err.message}`);
      resolve();
    });
  });
}

async function main() {
  console.log('Downloading alumni images...');
  const promises = images.map(img => download(baseUrl + img, path.join(dir, img)));
  await Promise.all(promises);
  console.log('Done!');
}

main();
