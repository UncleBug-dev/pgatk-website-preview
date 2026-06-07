const https = require('https');

const urls = [
  'https://pgatkk.by/images/Ideologiy/Obchechitie/Vospitateli/1.png',
  'https://pgatkk.by/images/Ideologiy/Obchechitie/Vospitateli/1.jpg',
  'https://pgatkk.by/images/Ideologiy/Obchechitie/VRObsh/VRvObsheshitii.png',
  'https://pgatkk.by/images/Ideologiy/Obchechitie/VRObsh/VRvObsheshitii.jpg',
  'https://pgatkk.by/images/Ideologiy/Obchechitie/doc/doc.png',
  'https://pgatkk.by/images/Ideologiy/Obchechitie/doc/doc.jpg',
  'https://pgatkk.by/images/Ideologiy/Obchechitie/2_1.png',
  'https://pgatkk.by/images/Ideologiy/Obchechitie/2_1.jpg'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${res.statusCode} -> ${url}`);
  }).on('error', (e) => {
    console.log(`Error ${e.message} -> ${url}`);
  });
});
