import { EventSchema } from "@/schemas/event.schema";
import { z } from "zod";

export type EventType = z.infer<typeof EventSchema>;
