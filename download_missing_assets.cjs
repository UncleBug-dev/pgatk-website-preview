const fs = require('fs');
const path = require('path');
const https = require('https');

const baseUrl = 'https://pgatkk.by';
const targetDir = path.join(__dirname, 'public');
const pagesDir = path.join(__dirname, 'pages');

// Match ANY string literal that starts with /images/
const regex = /["'](\/images\/[^"']+)["']/g;

function ensureDirSync(dirpath) {
    if (!fs.existsSync(dirpath)) {
        fs.mkdirSync(dirpath, { recursive: true });
    }
}

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dest)) {
            console.log(`[SKIP] Already exists: ${dest}`);
            return resolve();
        }

        ensureDirSync(path.dirname(dest));

        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`[DOWNLOADED] ${url} -> ${dest}`);
                    resolve();
                });
            } else if (response.statusCode === 301 || response.statusCode === 302) {
                // handle redirect
                file.close();
                fs.unlink(dest, () => {});
                console.log(`[REDIRECT] ${response.statusCode} for ${url} -> ${response.headers.location}`);
                downloadFile(response.headers.location, dest).then(resolve).catch(reject);
            } else {
                file.close();
                fs.unlink(dest, () => {}); // Delete empty file
                console.log(`[FAILED] ${response.statusCode} for ${url}`);
                resolve(); // resolve anyway to continue
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            console.error(`[ERROR] ${err.message} for ${url}`);
            resolve();
        });
    });
}

async function main() {
    if (!fs.existsSync(pagesDir)) {
        console.error("Pages directory not found!");
        return;
    }

    const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
    const uniquePaths = new Set();

    for (const file of files) {
        const content = fs.readFileSync(path.join(pagesDir, file), 'utf8');
        let match;
        while ((match = regex.exec(content)) !== null) {
            uniquePaths.add(match[1]);
        }
    }

    console.log(`Found ${uniquePaths.size} unique /images/ paths to check/download.`);

    for (const assetPath of uniquePaths) {
        // Construct remote URL. Encode URI in case there are spaces, but usually they are already encoded or not.
        // Actually encodeURI is safer. But let's check if it already has %20.
        let safeAssetPath = assetPath;
        if (!safeAssetPath.includes('%')) {
           safeAssetPath = encodeURI(safeAssetPath);
        }
        const fileUrl = `${baseUrl}${safeAssetPath}`;
        
        const localRelativePath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
        const localDest = path.join(targetDir, decodeURIComponent(localRelativePath));

        await downloadFile(fileUrl, localDest);
    }
    
    console.log("All done!");
}

main();
