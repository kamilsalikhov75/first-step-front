import { Button, RadioGroup } from "@nextui-org/react";
import { createAppointment, useAppointments } from "entities/appointments";
import { useAuth } from "entities/auth";
import { useState } from "react";
import { TIME_SLOTS } from "shared/const";
import { DatePicker } from "shared/ui/date-picker";
import { Radio } from "shared/ui/radio";

export const CreateAppointmentForm = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const { user } = useAuth();
  const { successMessage, errorMessage } = useAppointments();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        date?.setHours(Number(time) || 0);

        createAppointment({ user: user?.id as number, date: date as Date });
      }}
      className="flex flex-col gap-4"
    >
      <DatePicker date={date} setDate={setDate} />
      <RadioGroup
        label="Выберите время"
        onValueChange={setTime}
        value={time}
        classNames={{ wrapper: "flex flex-wrap flex-row" }}
      >
        {TIME_SLOTS.map((time) => {
          return (
            <Radio key={time} value={time.toString()}>
              {time}:00
            </Radio>
          );
        })}
      </RadioGroup>
      {successMessage && (
        <span className="text-tiny text-green-500 ">{successMessage}</span>
      )}
      {errorMessage && (
        <span className="text-tiny text-danger">{errorMessage}</span>
      )}
      <Button
        disabled={!date || !time}
        type="submit"
        className="bg-green-500 text-white font-bold w-full disabled:bg-opacity-50"
      >
        Записаться
      </Button>
    </form>
  );
};
