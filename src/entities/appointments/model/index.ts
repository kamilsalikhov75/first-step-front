import { createApi, createEffect, createStore } from "effector";
import { Appointment, AppointmentsStore } from "../types";
import { useUnit } from "effector-react";
import { getHeaders, strapi } from "shared/api/strapi";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const createAppointment = createEffect(
  async (data: { date: Date; user: number }) => {
    const { data: responseData } = await strapi.request({
      method: "POST",
      url: "/appointments",
      data: { data },
      headers: getHeaders(),
    });

    return responseData;
  }
);

export const getMyAppointments = createEffect(async (user: string) => {
  const { data } = await strapi.request<{ data: Appointment[] }>({
    method: "GET",
    url: "/appointments",
    headers: getHeaders(),
    params: {
      "filters[user][email][$eq]": user,
      "sort[0]": "date:desc",
      populate: "user",
    },
  });

  console.log(data.data);

  return data.data;
});

export const getAllAppointments = createEffect(async () => {
  const { data } = await strapi.request<{ data: Appointment[] }>({
    method: "GET",
    url: "/appointments",
    headers: getHeaders(),
    params: { populate: "user", "sort[0]": "date:desc" },
  });

  console.log(data.data);

  return data.data;
});

export const initialState: AppointmentsStore = {};

export const $store = createStore(initialState)
  .on(createAppointment.doneData, (state, payload) => {
    const date = format(payload.data.attributes.date, "PPPppp", { locale: ru });
    return {
      ...state,
      errorMessage: undefined,
      successMessage: `Вы успешно записались. Ждем вас ${date}`,
    };
  })
  .on(createAppointment.failData, (state, payload: any) => {
    if (payload.response?.data.error.details.errors[0].path.includes("date")) {
      return {
        ...state,
        successMessage: undefined,
        errorMessage: "На это время уже есть запись. Побробуйте другое время",
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
