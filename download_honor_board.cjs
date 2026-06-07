const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'images', 'DoskaPocheta');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const images = [
  '4L0A3275.jpg', '4L0A3286.jpg', '4L0A32911.jpg', '4L0A3300.jpg',
  '4L0A3306.jpg', '4L0A3324.jpg', '4L0A3339.jpg', '4L0A3349.jpg',
  '4L0A3359.jpg', '4L0A3365.jpg', '4L0A3372.jpg', '4L0A3373.jpg',
  '4L0A3379.jpg', '4L0A3384.jpg', '4L0A3391.jpg', '4L0A3401.jpg',
  '4L0A3411.jpg', '4L0A3415.jpg', '4L0A3422.jpg', '4L0A3430.jpg'
];

const baseUrl = 'https://pgatkk.by/images/DoskaPocheta/';

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
  console.log('Downloading honor board images...');
  const promises = images.map(img => download(baseUrl + img, path.join(dir, img)));
  await Promise.all(promises);
  console.log('Done!');
}

main();
