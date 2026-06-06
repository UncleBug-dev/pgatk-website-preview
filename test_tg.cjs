const fs = require('fs');
const https = require('https');

https.get('https://t.me/s/pgatkk', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Regex or simple parsing
    const messages = data.split('tgme_widget_message_wrap js-widget_message_wrap').slice(1);
    
    const parsed = messages.map(msg => {
      const textMatch = msg.match(/<div class="tgme_widget_message_text[^>]*>(.*?)<\/div>/s);
      const imgMatch = msg.match(/<a class="tgme_widget_message_photo_wrap[^>]*style="background-image:url\('([^']+)'\)/);
      const dateMatch = msg.match(/<time datetime="([^"]+)"/);
      const linkMatch = msg.match(/<a class="tgme_widget_message_date" href="([^"]+)"/);
      
      return {
        text: textMatch ? textMatch[1].replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '').trim() : '',
        image: imgMatch ? imgMatch[1] : null,
        date: dateMatch ? dateMatch[1] : null,
        link: linkMatch ? linkMatch[1] : null
      };
    }).filter(m => m.text || m.image);

    console.log(JSON.stringify(parsed.slice(-3), null, 2));
  });
});
