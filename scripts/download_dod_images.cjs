const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// TODO: Проверьте и укажите правильный адрес вашего старого сайта, если он другой!
const BASE_URL = 'https://pgatkk.by'; 

const imagesToDownload = [
  "/images/Abiturientu/2024/PRIVETSVIE_.png",
  "/images/Abiturientu/2024/PRIVETSVIE2.png",
  "/images/1Novosti/2024/May/CelevayPodgotovka.jpg",
  "/images/VEkskursiy/VEkskursiy.gif",
  "/images/Abiturientu/2025/Buklet2025/Buklet1.png",
  "/images/Abiturientu/2025/Buklet2025/Buklet2.png",
  "/images/Abiturientu/2025/Post/1.png",
  "/images/Abiturientu/2025/Post/2.png",
  "/images/Abiturientu/2025/Post/3.png",
  "/images/Abiturientu/2025/Post/4.png",
  "/images/Abiturientu/2025/Post/4_1.png",
  "/images/Abiturientu/2025/Post/6.png",
  "/images/Abiturientu/2025/Post/7.png",
  "/images/Abiturientu/2025/Post/8.png",
  "/images/Abiturientu/2025/Post/9.png",
  "/images/Abiturientu/2025/Post/9_1.png",
  "/images/Kolledg/MTB/1.jpg",
  "/images/Kolledg/MTB/10.jpg",
  "/images/Kolledg/MTB/11.jpg",
  "/images/Kolledg/MTB/12.jpg",
  "/images/Kolledg/MTB/13.jpg",
  "/images/Kolledg/MTB/14.jpg",
  "/images/Kolledg/MTB/18.jpg",
  "/images/Kolledg/MTB/19.jpg",
  "/images/Kolledg/MTB/2.jpg",
  "/images/Kolledg/MTB/3.1.jpg",
  "/images/Kolledg/MTB/3.jpg",
  "/images/Kolledg/MTB/4.jpg",
  "/images/Kolledg/MTB/5.jpg",
  "/images/Kolledg/MTB/6.jpg",
  "/images/Kolledg/MTB/7.1.jpg",
  "/images/Kolledg/MTB/7.jpg",
  "/images/Kolledg/MTB/8.jpg",
  "/images/Kolledg/MTB/9.jpg"
];

function downloadFile(url, targetPath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(targetPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
        const redirectUrl = res.headers.location.startsWith('http') 
          ? res.headers.location 
          : new URL(res.headers.location, url).href;
        downloadFile(redirectUrl, targetPath).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download ${url}, status code: ${res.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  console.log(`Starting download from ${BASE_URL}...`);
  console.log(`Images will be saved into the 'public' directory.`);
  
  for (const imgUrl of imagesToDownload) {
    const fullUrl = BASE_URL + imgUrl;
    const targetPath = path.join(__dirname, 'public', imgUrl.replace(/^\//, ''));
    
    try {
      if (!fs.existsSync(targetPath)) {
        console.log(`Downloading: ${imgUrl}`);
        await downloadFile(fullUrl, targetPath);
      } else {
        console.log(`Skipped (already exists): ${imgUrl}`);
      }
    } catch (err) {
      console.error(`Error downloading ${imgUrl}: ${err.message}`);
    }
  }
  console.log('All downloads finished!');
}

main();
