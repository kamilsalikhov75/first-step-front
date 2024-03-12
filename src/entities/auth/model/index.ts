import { createApi, createEffect, createStore } from "effector";
import { useUnit } from "effector-react";
import { AuthModalMode, AuthStore } from "../types";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { firstStepBack, getHeaders } from "shared/api/first-step-back";
import { toast } from "react-toastify";

export const initialState: AuthStore = { isAuth: false };

export const login = createEffect(
  async (data: { username: string; password: string }) => {
    const { data: responseData } = await firstStepBack.request<{
      access_token: string;
    }>({
      method: "POST",
      url: "auth/login",
      data,
    });

    const tokenExpires = new Date(
      (jwtDecode(responseData.access_token).exp as number) * 1000
    );

    Cookies.set("access_token", responseData.access_token, {
      expires: tokenExpires,
    });
  }
);

export const register = createEffect(
  async (data: { name: string; email: string; password: string }) => {
    const { data: responseData } = await firstStepBack.request<{
      access_token: string;
    }>({
      method: "POST",
      url: "/users/register",
      data,
    });

    const tokenExpires = new Date(
      (jwtDecode(responseData.access_token).exp as number) * 1000
    );

    Cookies.set("access_token", responseData.access_token, {
      expires: tokenExpires,
    });
  }
);

export const getMe = createEffect(async () => {
  const { data } = await firstStepBack.request({
    method: "GET",
    url: `/users/me`,
    headers: getHeaders(),
  });

  return data;
});

export const $store = createStore<typeof initialState>(initialState)
  .on(login.doneData, (state) => ({ ...state, isAuth: true }))
  .on(register.doneData, (state) => {
    toast.success("Вы успешно зарегистрировались!");
    return { ...state, isAuth: true };
  })
  .on(getMe.doneData, (state, user) => ({ ...state, user }));

export const { openAuthModal, closeModal, logout } = createApi($store, {
  openAuthModal: (state, mode: AuthModalMode) => ({
    ...state,
    authModal: {
      isOpen: true,
      mode,
    },
  }),
  closeModal: (state) => ({ ...state, authModal: undefined }),
  logout: (state) => {
    Cookies.remove("access_token");
    return { ...state, isAuth: false, user: undefined };
  },
});
export const useAuth = () => useUnit($store);
