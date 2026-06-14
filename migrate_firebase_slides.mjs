/**
 * migrate_firebase_slides.mjs
 * Обновляет пути картинок в коллекции 'slides' в Firebase Firestore.
 * Меняет .jpg / .jpeg / .png / .gif → .webp
 *
 * Запуск: node migrate_firebase_slides.mjs
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, updateDoc, doc } from 'firebase/firestore';

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

function toWebp(path) {
  if (!path) return path;
  return path.replace(/\.(jpg|jpeg|png|gif)(\?.*)?$/i, '.webp');
}

async function migrate() {
  console.log('🔄 Подключаемся к Firebase...');
  const slidesCol = collection(db, 'slides');
  const snapshot  = await getDocs(slidesCol);

  if (snapshot.empty) {
    console.log('❌ Коллекция slides пуста.');
    process.exit(0);
  }

  console.log(`Найдено ${snapshot.size} слайд(ов)\n`);

  for (const docSnap of snapshot.docs) {
    const data     = docSnap.data();
    const oldImage = data.image || '';
    const newImage = toWebp(oldImage);

    if (oldImage === newImage) {
      console.log(`  ✓ [${docSnap.id}] уже .webp: ${newImage}`);
      continue;
    }

    await updateDoc(doc(db, 'slides', docSnap.id), { image: newImage });
    console.log(`  ✎ [${docSnap.id}] ${oldImage} → ${newImage}`);
  }

  console.log('\n✅ Миграция слайдов завершена!');
  process.exit(0);
}

migrate().catch(err => {
  console.error('❌ Ошибка:', err.message);
  process.exit(1);
});
