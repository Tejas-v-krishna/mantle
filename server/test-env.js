import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('CWD:', process.cwd());
console.log('__dirname:', __dirname);
console.log('.env exists:', fs.existsSync(path.join(__dirname, '.env')));

if (fs.existsSync(path.join(__dirname, '.env'))) {
  const content = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
  console.log('.env content length:', content.length);
}

console.log('DATABASE_URL defined:', !!process.env.DATABASE_URL);
