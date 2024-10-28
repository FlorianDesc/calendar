"use server";

import prisma from "@/lib/prisma";
import { EventType } from "@/types/event.type";
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

  return createdEvent;
}
