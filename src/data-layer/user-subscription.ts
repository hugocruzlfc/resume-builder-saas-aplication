import "server-only";

import prisma from "@/lib/prisma";

export async function getUserSubscription(userId: string) {
  return prisma.userSubscription.findUnique({
    where: { userId },
  });
}
