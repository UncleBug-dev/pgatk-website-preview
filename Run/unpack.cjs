const fs = require('fs');
const path = require('path');

const inputFile = 'report.md'; // Имя файла с отчетом

if (!fs.existsSync(inputFile)) {
    console.error(`❌ Файл ${inputFile} не найден!`);
    process.exit(1);
}

const content = fs.readFileSync(inputFile, 'utf8');
const fileRegex = /### 📄 `(.+?)`[\s\S]+?```(?:tsx|ts|json|css|html|javascript|markdown)?\s+([\s\S]+?)```/g;

let match;
let count = 0;

console.log('🚀 Начинаю распаковку проекта...');

while ((match = fileRegex.exec(content)) !== null) {
    let filePath = match[1].trim();
    let fileContent = match[2].trim();

    // Исправление путей (Windows backslashes to forward slashes)
    filePath = filePath.replace(/\\/g, '/');
    
    // Игнорируем src/vite-env.d.ts если он дублируется или создает проблемы
    if (filePath.startsWith('src/') && !fs.existsSync('src')) {
        fs.mkdirSync('src');
    }

    const dir = path.dirname(filePath);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Фикс для vite.config.ts (меняем base path для локального запуска)
    if (filePath.includes('vite.config.ts')) {
        fileContent = fileContent.replace("base: '/pgatk-website-preview/',", "base: '/',");
    }

    fs.writeFileSync(filePath, fileContent);
    console.log(`✅ Создан: ${filePath}`);
    count++;
}

console.log(`\n🎉 Готово! Распаковано файлов: ${count}`);
console.log(`👉 Теперь выполните команды:\n   npm install\n   npm run dev`);