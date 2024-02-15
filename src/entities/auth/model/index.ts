import { createApi, createEffect, createStore } from "effector";
import { useUnit } from "effector-react";
import { AuthModalMode, AuthStore, User } from "../types";
import { getHeaders, strapi } from "shared/api/strapi";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const initialState: AuthStore = { isAuth: false };

export const login = createEffect(
  async (data: { identifier: string; password: string }) => {
    const { data: responseData } = await strapi.request<{
      jwt: string;
      user: User;
    }>({
      method: "POST",
      url: "auth/local",
      data,
    });

    const tokenExpires = new Date(
      (jwtDecode(responseData.jwt).exp as number) * 1000
    );

    Cookies.set("jwt", responseData.jwt, { expires: tokenExpires });
    return responseData.user;
  }
);

export const register = createEffect(
  async (data: {
    username: string;
    email: string;
    password: string;
    name: string;
  }) => {
    const { data: responseData } = await strapi.request<{
      jwt: string;
      user: User;
    }>({
      method: "POST",
      url: "auth/local/register",
      data,
    });

    const tokenExpires = new Date(
      (jwtDecode(responseData.jwt).exp as number) * 1000
    );

    Cookies.set("jwt", responseData.jwt, { expires: tokenExpires });
    return responseData.user;
  }
);

export const getMe = createEffect(async () => {
  const { data } = await strapi.request({
    method: "GET",
    url: `/users/me`,
    params: {
      populate: "role",
    },
    headers: getHeaders(),
  });

  return data;
});

export const $store = createStore<typeof initialState>(initialState)
  .on(login.doneData, (state, user) => ({ ...state, user, isAuth: true }))
  .on(register.doneData, (state, user) => ({ ...state, user, isAuth: true }))
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
    Cookies.remove("jwt");
    return { ...state, isAuth: false, user: undefined };
  },
});
export const useAuth = () => useUnit($store);
