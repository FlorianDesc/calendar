"use server";

import prisma from "@/lib/prisma";
import { CalendarType } from "@/types/calendar.type";
import { revalidatePath } from "next/cache";
import { getSession } from "./auth.action";

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

export async function createCalendar(calendar: CalendarType) {
  const user = await getSession();

  if (!user) {
    return;
  }

  const createdCalendar = await prisma.calendar.create({
    data: {
      creatorId: user?.id,
      title: calendar.title,
      categoryId: calendar.categoryId,
    },
  });

  revalidatePath("/");

  return createdCalendar;
}
