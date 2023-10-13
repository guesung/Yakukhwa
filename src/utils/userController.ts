import { config } from "@/config";
import {
  getClientCookie,
  getServerCookie
} from "./cookieController"

export const getServerIsAdmin = async () => {
  const password = await getServerCookie('password');
  return password === config.adminPassword;
}

export const getClientIsAdmin = () => {
  const password = getClientCookie('password');
  return password === config.adminPassword;
}