import { headers } from 'next/headers';

export const getDevice = () => {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');
  const isMobileView = !!userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPpc/i
  );
  return isMobileView ? 'mobile' : 'pc';
};
