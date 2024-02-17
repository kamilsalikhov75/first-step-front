import { API } from "../instance";
import Cookies from "js-cookie";

export const firstStepBack = new API({
  baseUrl: "https://first-step-jxuw.onrender.com/" || "http://localhost:3000",
});

export const getHeaders = () => {
  return { Authorization: `bearer ${Cookies.get("access_token")}` };
};
