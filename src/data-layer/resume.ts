import "server-only";

import prisma from "@/lib/prisma";
import { resumeDataInclude } from "@/lib/types";

export async function getResumes(userId: string) {
  const [resumes, totalCount] = await Promise.all([
    prisma.resume.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
      include: resumeDataInclude,
    }),
    prisma.resume.count({
      where: {
        userId,
      },
    }),
  ]);
  return { resumes, totalCount };
}
