import { headers } from 'next/headers';

export const getPath = () => {
  const header = headers();
  const url = header.get('url');
  if (!url) return { mainTitle: '', subTitle: '' };
  const mainTitle = url.split('/')[3];
  const subTitle = url.split('/')[4].split('?')[0];
  const searchParams = url.split('/')[5];
  return { mainTitle, subTitle, searchParams };
};
