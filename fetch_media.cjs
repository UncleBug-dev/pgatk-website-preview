const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://pgatkk.by';
const TARGET_PAGE = 'https://pgatkk.by/kolledg/mi-v-smi';
const PUBLIC_DIR = path.join(__dirname, 'public');

// Ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExists(dirname);
  fs.mkdirSync(dirname);
};

// Download file
const downloadFile = (url, targetPath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      ensureDirectoryExists(targetPath);
      const fileStream = fs.createWriteStream(targetPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(targetPath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
};

const fetchHtml = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      },
      rejectUnauthorized: false
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

const run = async () => {
  console.log(`Fetching HTML from ${TARGET_PAGE}...`);
  
  let html;
  try {
    html = await fetchHtml(TARGET_PAGE);
  } catch (err) {
    console.error(`Failed to fetch the page. Make sure your VPN is turned OFF if pgatkk.by is blocked! Error:`, err.message);
    return;
  }

  // Find all hrefs pointing to images or pdfs
  // e.g. href="/images/1Novosti/2025/4Aprel/UrokMushestva.jpg"
  const regex = /href=["'](\/images\/[a-zA-Z0-9_\-\.\/\%]+\.(jpg|jpeg|png|pdf))["']/gi;
  
  const matches = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    matches.push(match[1]);
  }

  // Also look for src="" inside the page just in case
  const srcRegex = /src=["'](\/images\/[a-zA-Z0-9_\-\.\/\%]+\.(jpg|jpeg|png|pdf))["']/gi;
  while ((match = srcRegex.exec(html)) !== null) {
    if (!matches.includes(match[1])) {
      matches.push(match[1]);
    }
  }

  const uniqueLinks = [...new Set(matches)];
  console.log(`Found ${uniqueLinks.length} media links to download.`);

  let successCount = 0;
  let failCount = 0;

  for (const link of uniqueLinks) {
    try {
      const decodedLink = decodeURIComponent(link);
      const fileUrl = BASE_URL + link; // Use encoded for fetching
      
      // Clean up weird paths if any
      const normalizedPath = decodedLink.replace(/^\//, '').replace(/\//g, path.sep);
      const targetPath = path.join(PUBLIC_DIR, normalizedPath);

      if (fs.existsSync(targetPath)) {
        console.log(`[SKIP] Already exists: ${decodedLink}`);
        continue;
      }

      console.log(`[DOWNLOAD] ${fileUrl} -> ${targetPath}`);
      await downloadFile(fileUrl, targetPath);
      successCount++;
    } catch (e) {
      console.error(`[ERROR] Failed to download ${link}:`, e.message);
      failCount++;
    }
  }

  console.log(`\nDONE! Downloaded: ${successCount}, Failed: ${failCount}`);
};

run().catch(console.error);
