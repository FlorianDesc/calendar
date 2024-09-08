"use server";

import prisma from "@/lib/prisma";

export async function getUserCategoriesAndCalendars(userId: string) {
  const userData = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      categories: true,
      calendars: true,
      sharedCalendars: true,
    },
  });

  return userData;
}
