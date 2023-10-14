import { headers } from 'next/headers';

export const getIsAdmin = () => {
  const header = headers();
  const isAdmin = header.get('isAdmin') === 'true';
  return isAdmin;
};
