"use server";

import prisma from "@/lib/prisma";

export async function getCategoryFromUser(userId: string) {
  const categories = await prisma.category.findMany({
    where: {
      userId,
    },
  });

  return categories;
}
