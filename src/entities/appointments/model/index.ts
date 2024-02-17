import { createApi, createEffect, createStore } from "effector";
import { Appointment, AppointmentsStore } from "../types";
import { useUnit } from "effector-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { firstStepBack, getHeaders } from "shared/api/first-step-back";

export const createAppointment = createEffect(
  async (data: { date: Date; user: string }) => {
    await firstStepBack.request({
      method: "POST",
      url: "/appointment",
      data: data,
      headers: getHeaders(),
    });

    return data.date;
  }
);

export const getMyAppointments = createEffect(async () => {
  const { data } = await firstStepBack.request<Appointment[]>({
    method: "GET",
    url: "/appointment/user-appointments",
    headers: getHeaders(),
  });

  return data;
});

export const getAllAppointments = createEffect(async () => {
  const { data } = await firstStepBack.request<Appointment[]>({
    method: "GET",
    url: "/appointment",
    headers: getHeaders(),
  });

  console.log(data);

  return data;
});

export const initialState: AppointmentsStore = {};

export const $store = createStore(initialState)
  .on(createAppointment.doneData, (state, payload) => {
    const date = format(payload, "dd MMMM в HH:mm", { locale: ru });
    console.log(payload);

    return {
      ...state,
      errorMessage: undefined,
      successMessage: `Вы успешно записались. Ждем вас ${date}`,
    };
  })
  .on(createAppointment.failData, (state, payload: any) => {
    const errorMessage = payload.response.data.message;

    if (errorMessage) {
      return {
        ...state,
        successMessage: undefined,
        errorMessage: errorMessage,
      };
    }
    return state;
  })
  .on(getMyAppointments.doneData, (state, payload) => {
    return { ...state, items: payload };
  })
  .on(getAllAppointments.doneData, (state, payload) => {
    return { ...state, items: payload };
  });

export const { clearAppoitmentStore } = createApi($store, {
  clearAppoitmentStore: () => {
    return initialState;
  },
});

export const useAppointments = () => useUnit($store);
