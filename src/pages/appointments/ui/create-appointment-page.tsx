import { clearAppoitmentStore } from "entities/appointments";
import { CreateAppointmentForm } from "features/appointments";
import { useEffect } from "react";

export const CreateAppointmentPage = () => {
  useEffect(() => {
    return () => {
      clearAppoitmentStore();
    };
  }, []);

  return (
    <main>
      <h1 className="font-bold text-2xl text-blue-900 mb-5">Запись на прием</h1>
      <CreateAppointmentForm />
    </main>
  );
};
