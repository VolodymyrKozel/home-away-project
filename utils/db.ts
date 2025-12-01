// db.ts
import { PrismaClient } from "@prisma/client";

// Singleton для запобігання створенню кількох клієнтів при HMR (Next.js Dev)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export default db;
