// Prisma client initialization for JetSwap
// This file handles both build-time and runtime environments

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

// Check if DATABASE_URL is available (runtime vs build)
const hasDatabaseUrl = typeof process.env.DATABASE_URL !== "undefined" && 
                     process.env.DATABASE_URL?.startsWith("postgresql://");

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

let adapter: PrismaPg | null = null;
let prismaInstance: PrismaClient | null = null;

// Only create connection if DATABASE_URL is available (runtime)
if (hasDatabaseUrl && process.env.DATABASE_URL) {
  try {
    adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
    prismaInstance = new PrismaClient({ adapter });
    
    // In development, keep the connection alive
    if (process.env.NODE_ENV !== "production") {
      globalForPrisma.prisma = prismaInstance;
    }
  } catch (error) {
    console.warn("Failed to initialize Prisma database connection:", error);
  }
}

export const prisma = prismaInstance || null;

export default prisma;
