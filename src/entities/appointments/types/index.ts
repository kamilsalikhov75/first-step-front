import { User } from "entities/auth/types";

export interface Appointment {
  _id: number;
  user: User;
  date: string;
}

export interface AppointmentsStore {
  errorMessage?: string;
  successMessage?: string;
  items?: Appointment[];
}
