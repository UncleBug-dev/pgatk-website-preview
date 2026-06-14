/**
 * check_firebase_images.mjs
 * Проверяет какие image-пути в Firebase и существуют ли соответствующие файлы
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { existsSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PUBLIC_DIR = resolve(__dirname, 'public');

const firebaseConfig = {
  apiKey:            "AIzaSyAO2CHmHucvoW5_SSHxbiDhFdvbvB8zXLU",
  authDomain:        "pgatkk-base.firebaseapp.com",
  projectId:         "pgatkk-base",
  storageBucket:     "pgatkk-base.firebasestorage.app",
  messagingSenderId: "439469844655",
  appId:             "1:439469844655:web:0464b721a9e71fa58e4c5a",
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

function checkFile(imagePath) {
  if (!imagePath) return 'N/A';
  // убираем ведущий слеш и составляем путь к файлу
  const rel = imagePath.replace(/^\//, '');
  const fullPath = join(PUBLIC_DIR, rel);
  return existsSync(fullPath) ? '✓ ЕСТЬ' : '✗ НЕТ';
}

async function main() {
  console.log('Проверка image-путей в Firebase importantDocs\n');
  const snap = await getDocs(collection(db, 'importantDocs'));
  snap.docs.forEach(d => {
    const data = d.data();
    const img  = data.image || '(нет поля image)';
    const status = checkFile(img);
    console.log(`[${d.id.substring(0,8)}] ${status}  "${img}"`);
  });
  console.log('\nПроверка slides:');
  const snap2 = await getDocs(collection(db, 'slides'));
  snap2.docs.forEach(d => {
    const data = d.data();
    const img  = data.image || '(нет)';
    const status = checkFile(img);
    console.log(`[${d.id}] ${status}  "${img}"`);
  });
  process.exit(0);
}

main().catch(e => { console.error(e.message); process.exit(1); });
