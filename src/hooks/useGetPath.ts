import { usePathname } from 'next/navigation';

export function useGetPath() {
  const pathname = usePathname();
  const mainTitle = pathname.split('/')[1];
  const subTitle = pathname.split('/')[2].split('?')[0];
  return { mainTitle, subTitle };
}
