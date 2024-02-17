import {
  clearAppoitmentStore,
  getMyAppointments,
  useAppointments,
} from "entities/appointments";
import { useAuth } from "entities/auth";
import { useEffect } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const AppointmentsPage = () => {
  const { user } = useAuth();
  const { items: appointments } = useAppointments();

  useEffect(() => {
    if (user) {
      getMyAppointments();
    }

    return () => {
      clearAppoitmentStore();
    };
  }, [user]);
  return (
    <main>
      <h1 className="font-bold text-2xl text-blue-900 mb-5">Мои записи</h1>
      <div className="grid gap-3">
        {appointments?.map((appointment) => {
          const date = format(appointment.date, "dd MMMM yyyy HH:mm", {
            locale: ru,
          });
          return (
            <div
              className="p-4 bg-green-100 border border-green-500 rounded-[10px]"
              key={appointment._id}
            >
              {date}
            </div>
          );
        })}
      </div>
    </main>
  );
};
