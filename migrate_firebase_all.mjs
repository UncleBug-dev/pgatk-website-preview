/**
 * migrate_firebase_all.mjs
 * Обновляет пути картинок во всех коллекциях Firebase Firestore.
 * Меняет .jpg / .jpeg / .png / .gif → .webp во всех string-полях
 *
 * Запуск: node migrate_firebase_all.mjs
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

const IMG_RE = /\.(jpg|jpeg|png|gif)(\?.*)?$/i;

function toWebp(val) {
  if (typeof val === 'string' && IMG_RE.test(val)) {
    return val.replace(IMG_RE, '.webp');
  }
  return val;
}

/** Рекурсивно проходит объект и меняет все строки с расширениями картинок */
function patchObject(obj) {
  let changed = false;
  const result = {};
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === 'string') {
      const patched = toWebp(v);
      result[k] = patched;
      if (patched !== v) changed = true;
    } else if (Array.isArray(v)) {
      const arr = v.map(item => {
        if (typeof item === 'string') {
          const p = toWebp(item);
          if (p !== item) changed = true;
          return p;
        }
        if (typeof item === 'object' && item !== null) {
          const { obj: pObj, changed: c } = patchObject(item);
          if (c) changed = true;
          return pObj;
        }
        return item;
      });
      result[k] = arr;
    } else if (typeof v === 'object' && v !== null) {
      const { obj: pObj, changed: c } = patchObject(v);
      result[k] = pObj;
      if (c) changed = true;
    } else {
      result[k] = v;
    }
  }
  return { obj: result, changed };
}

async function migrateCollection(name) {
  console.log(`\n── Коллекция: ${name} ───────────────────────`);
  const col      = collection(db, name);
  const snapshot = await getDocs(col);

  if (snapshot.empty) {
    console.log('  (пусто)');
    return;
  }

  let updated = 0;
  for (const docSnap of snapshot.docs) {
    const data = docSnap.data();
    const { obj: patched, changed } = patchObject(data);

    if (!changed) {
      console.log(`  ✓ [${docSnap.id}] без изменений`);
      continue;
    }

    // Собираем только изменившиеся поля для updateDoc
    const diff = {};
    for (const k of Object.keys(patched)) {
      if (JSON.stringify(patched[k]) !== JSON.stringify(data[k])) {
        diff[k] = patched[k];
      }
    }

    await updateDoc(doc(db, name, docSnap.id), diff);
    console.log(`  ✎ [${docSnap.id}] обновлено полей: ${Object.keys(diff).join(', ')}`);
    updated++;
  }
  console.log(`  Итого обновлено: ${updated} из ${snapshot.size} документов`);
}

async function main() {
  console.log('🔄 Миграция Firebase — замена расширений картинок на .webp\n');

  for (const col of ['slides', 'news', 'importantDocs']) {
    await migrateCollection(col);
  }

  console.log('\n✅ Готово!');
  process.exit(0);
}

main().catch(err => {
  console.error('❌ Ошибка:', err.message);
  process.exit(1);
});
