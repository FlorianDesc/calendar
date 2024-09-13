import { z } from "zod";

export const CalendarSchema = z.object({
  title: z.string().min(1, "Le titre est obligatoire").max(100),
  categoryId: z.string().min(1, "le catégorie est obligatoire"),
  users: z.array(z.string()),
});
