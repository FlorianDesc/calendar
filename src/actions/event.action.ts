"use server";

import prisma from "@/lib/prisma";
import { EventType } from "@/types/event.type";
import { endOfMonth, startOfMonth } from "date-fns";
import { revalidatePath } from "next/cache";
import { getSession } from "./auth.action";

export async function createEvent(event: EventType) {
  const user = await getSession();

  if (!user) {
    return;
  }

  const createdEvent = await prisma.event.create({
    data: {
      title: event.title,
      date: event.date,
      calendarId: event.calendarId,
      creatorId: user.id,
    },
  });

  revalidatePath("/");

  return createdEvent;
}

export async function getEventFromCalendar(calendarId: string) {
  const user = await getSession();

  if (!user) {
    return;
  }
  const now = new Date();
  const events = await prisma.event.findMany({
    where: {
      calendarId: calendarId,
      createdAt: {
        gte: startOfMonth(now),
        lte: endOfMonth(now),
      },
    },
  });

  return events;
}
