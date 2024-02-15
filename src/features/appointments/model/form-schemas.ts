import { z } from "zod";

export const createAppointmentSchema = z.object({
  date: z.date(),
  time: z.string(),
});
