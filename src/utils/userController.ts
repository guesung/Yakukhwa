import { config } from "@/config";
import { getCookie } from "./cookieController"

export const getIsAdmin = async () => {
  const password = await getCookie('password');
  return password === config.adminPassword;
}