const fs = require('fs');
const path = require('path');

const filesToRemoveTime = [
  'Achievements.tsx',
  'AdministrativeProcedures.tsx',
  'Contacts.tsx',
  'Facilities.tsx',
  'History.tsx',
  'Media.tsx',
  'OneWindow.tsx',
  'ServicesPage.tsx',
  'Staff.tsx',
  'WorkingHours.tsx'
];

filesToRemoveTime.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/<p className="text-\[10px\] text-slate-400 mt-1">Пн-Пт: 8:00 - 17:00<\/p>\s*/g, '');
    fs.writeFileSync(filePath, content);
    console.log('Removed time from ' + file);
  }
});

const filesToAddBlock = [
  'NotableAlumni.tsx',
  'VirtualHonorBoard.tsx',
  'OrganizationalStructure.tsx'
];

const blockToAdd = `
              <div className="m-2 p-4 bg-primary-900 rounded-lg text-white text-center">
                <p className="text-xs text-accent-500 font-bold uppercase mb-2">Приемная комиссия</p>
                <a href="tel:80165300688" className="text-lg font-bold hover:text-accent-400 transition-colors block">8 (0165) 30-06-88</a>
              </div>`;

filesToAddBlock.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('Приемная комиссия')) {
      // Find </nav> and insert after it
      content = content.replace(/(<\/nav>\s*)(<\/div>\s*<\/aside>)/g, `$1${blockToAdd}\n            $2`);
      fs.writeFileSync(filePath, content);
      console.log('Added block to ' + file);
    } else {
      console.log('Block already in ' + file);
    }
  }
});
