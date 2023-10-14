import { getClientCookie, getServerCookie } from './cookieController';
import { config } from '@/config';

export const getServerIsAdmin = async () => {
  const password = await getServerCookie('password');
  return password?.value === config.adminPassword;
};

export const getClientIsAdmin = () => {
  const password = getClientCookie('password');
  return password === config.adminPassword;
};
