import { PrismaClient } from "@prisma/client";

// Storing the PrismaClient instance globally
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

// Use existing global prisma instance or create a new one to avoid multiple instances.
export const prisma = globalForPrisma.prisma || new PrismaClient();

// In non-production, store PrismaClient instance globally to reuse across hot reloads.
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
