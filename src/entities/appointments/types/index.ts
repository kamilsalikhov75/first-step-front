import { User } from "entities/auth/types";

export interface Appointment {
  id: number;
  attributes: {
    user: { data: { id: number; attributes: User } };
    date: string;
  };
}

export interface AppointmentsStore {
  errorMessage?: string;
  successMessage?: string;
  items?: Appointment[];
}
