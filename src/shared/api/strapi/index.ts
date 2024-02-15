import { API } from "../instance";
import Cookies from "js-cookie";

export const strapi = new API({
  baseUrl:
    import.meta.env.STRAPI_API_URL ||
    "https://inviting-wealth-c19c9dc6be.strapiapp.com/api" ||
    "http://localhost:1337/api",
});

export const getHeaders = () => {
  return { Authorization: `bearer ${Cookies.get("jwt")}` };
};
