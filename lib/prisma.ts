import { PrismaClient } from "@prisma/client";

import * as dotenv from "dotenv";

dotenv.config(); // Load the environment variables
// Prevent multiple instances of Prisma Client in development
declare const global: { prisma?: PrismaClient };

const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
