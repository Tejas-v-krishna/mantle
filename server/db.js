import { PrismaClient } from '@prisma/client';

// Use standard Prisma instantiation which automatically picks up DATABASE_URL from process.env
// dotenv/config is already imported in index.js, ensuring variables are loaded.
const prisma = new PrismaClient();

export default prisma;
