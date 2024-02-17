import {
  clearAppoitmentStore,
  getAllAppointments,
  useAppointments,
} from "entities/appointments";
import { useAuth } from "entities/auth";
import { useEffect } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { WithLabel } from "shared/ui/with-label";

export const AdminAppointmentsPage = () => {
  const { user } = useAuth();
  const { items: appointments } = useAppointments();

  useEffect(() => {
    if (user) {
      getAllAppointments();
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
              className="grid grid-cols-1 p-4 gap-2 md:grid-cols-3 bg-green-100 border border-green-500 rounded-[10px]"
              key={appointment._id}
            >
              <WithLabel label="Дата:">{date}</WithLabel>
              <WithLabel label="Имя клиента:">
                {appointment.user.name}
              </WithLabel>
              <WithLabel label="Электронная почта:">
                {appointment.user.email}
              </WithLabel>
            </div>
          );
        })}
      </div>
    </main>
  );
};
