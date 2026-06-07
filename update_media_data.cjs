const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://pgatkk.by/kolledg/mi-v-smi';

const fetchHtml = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
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
    console.log('Fetching media page...');
    const html = await fetchHtml(url);
    
    const pRegex = /<p[^>]*>(.*?)<\/p>/gi;
    
    let mediaData = [];
    let pMatch;
    
    // To avoid duplicates if same link appears multiple times
    const seenLinks = new Set();
    
    while ((pMatch = pRegex.exec(html)) !== null) {
      const content = pMatch[1];
      const linkMatch = content.match(/href=["']([^"']+)["']/i);
      if (!linkMatch) continue;
      
      let link = linkMatch[1];
      
      // Ignore some irrelevant links
      if (!link.includes('youtu.be') && !link.includes('youtube.com') && !link.includes('t.me') && !link.match(/\.(jpg|jpeg|png|pdf)$/i) && !link.includes('pinsknews') && !link.includes('p-v.by') && !link.includes('sb.by') && !link.includes('tvr.by')) {
          // If it is a local link that starts with /images, keep it
          if (!link.startsWith('/images/')) continue;
      }
      
      if (seenLinks.has(link)) continue;
      seenLinks.add(link);

      let title = "Новость";
      const titleMatch = content.match(/<a[^>]*>(.*?)<\/a>/i);
      if (titleMatch) title = titleMatch[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();

      // Extract date and source inside parenthesis
      let date = "";
      let source = "СМИ";
      const dateSourceMatch = content.match(/\(([^)]+)\)/);
      if (dateSourceMatch) {
         const parts = dateSourceMatch[1].split(',');
         if (parts.length >= 2) {
            date = parts[0].trim().replace(/&nbsp;/g, '');
            source = parts.slice(1).join(',').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, '').replace(/&quot;/g, '"').trim();
         } else if (parts.length === 1) {
            if (parts[0].match(/\d{2}\.\d{2}\.\d{4}/)) {
                date = parts[0].trim();
            } else {
                source = parts[0].replace(/<[^>]+>/g, '').trim();
            }
         }
      }

      let type = 'article';
      if (link.match(/\.(jpg|jpeg|png)$/i)) type = 'image';
      else if (link.match(/\.pdf$/i)) type = 'pdf';
      else if (link.includes('youtu.be') || link.includes('youtube.com')) type = 'video';
      else if (link.includes('t.me')) type = 'telegram';

      mediaData.push({ title, source, date, link, type });
    }

    if (mediaData.length > 0) {
        const mediaFilePath = path.join(__dirname, 'pages', 'Media.tsx');
        let tsContent = fs.readFileSync(mediaFilePath, 'utf-8');
        
        // Format to string with single quotes
        let dataStr = JSON.stringify(mediaData, null, 2);
        dataStr = dataStr.replace(/"([^"]+)":/g, '$1:');
        dataStr = dataStr.replace(/"/g, "'");
        
        const startIdx = tsContent.indexOf('const MEDIA_DATA = [');
        const endIdx = tsContent.indexOf('];', startIdx);
        
        if (startIdx !== -1 && endIdx !== -1) {
            tsContent = tsContent.substring(0, startIdx) + 'const MEDIA_DATA = ' + dataStr + ';' + tsContent.substring(endIdx + 2);
            fs.writeFileSync(mediaFilePath, tsContent);
            console.log(`Successfully updated Media.tsx with ${mediaData.length} items!`);
        } else {
            console.log('Could not find MEDIA_DATA array in Media.tsx');
        }
    } else {
        console.log('No media data found.');
    }

  } catch (err) {
    console.error(err);
  }
};
run();
