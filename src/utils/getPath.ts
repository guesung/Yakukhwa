import { headers } from 'next/headers';

export const getPath = () => {
  const header = headers();
  const url = header.get('url');
  if (!url) return { mainTitle: '', subTitle: '' };
  const mainTitle = url.split('/')[3];
  const subTitle = url.split('/')[4].split('?')[0];
  const params = url.split('/')[5];
  const [key, value] = url.split('?')[1].split('=');
  const searchParams = { [key]: value };
  console.log(searchParams);
  return { mainTitle, subTitle, params, searchParams };
};
