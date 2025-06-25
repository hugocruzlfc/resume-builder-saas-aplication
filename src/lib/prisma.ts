import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import "dotenv/config";
import { PrismaClient } from "./generated/prisma";

import ws from "ws";
neonConfig.webSocketConstructor = ws;

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaNeon({ connectionString });

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
