import { PrismaClient } from "@prisma/client";

// Storing the PrismaClient instance globally
const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

// Check if the 'prisma' property already exists on the global object to reuse it, or create new
export const prisma = globalForPrisma.prisma || new PrismaClient();

// reuse the existing global instance.
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
