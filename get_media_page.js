const https = require('https');
const fs = require('fs');

const url = 'https://pgatkk.by/kolledg/mi-v-smi';

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
  try {
    const html = await fetchHtml(url);
    fs.writeFileSync('media_page.html', html);
    console.log('Saved media_page.html. Size: ' + html.length);
  } catch (err) {
    console.error(err);
  }
};
run();
