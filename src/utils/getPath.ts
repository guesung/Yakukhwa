import { headers } from 'next/headers';

export const getPath = () => {
  const header = headers();
  const url = header.get('url');
  const mainTitle = url?.split('/')[3];
  const subTitle = url?.split('/')[4].split('?')[0];
  return { mainTitle, subTitle };
};
