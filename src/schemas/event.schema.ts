import { z } from "zod";

export const EventSchema = z.object({
  title: z.string().min(1, "Le titre est obligatoire"),
  date: z.date(),
  calendarId: z.string().min(1, "Le calendrier est obligatoire"),
});
