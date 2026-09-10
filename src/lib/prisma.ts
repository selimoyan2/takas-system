// Prisma client for JetSwap
// This file is ONLY used at runtime - NOT during build

import type { PrismaClient } from "@prisma/client";

// Type-only import to avoid runtime error if DATABASE_URL missing during build
const prisma = null as unknown as PrismaClient | null;

export default prisma;
export const prismaInstance = prisma;
