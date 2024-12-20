import { PrismaClient } from "@prisma/client";

// Ensure TypeScript type safety for the global object
const globalForPrisma = global as typeof global & {
  prisma?: PrismaClient;
};

// Initialize Prisma client
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query"] : [],
  });

// Assign Prisma to the global object in development
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
