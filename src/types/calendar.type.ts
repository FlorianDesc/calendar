import { CalendarSchema } from "@/schemas/calendar.schema";
import { z } from "zod";

export type CalendarType = z.infer<typeof CalendarSchema>;
