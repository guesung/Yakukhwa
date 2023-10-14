import MenuLayout from '@/components/MenuLayout';
import { getDevice } from '@/utils/getdevice';
import { PropsWithChildren } from 'react';

export default function layout({ children }: PropsWithChildren) {
  const device = getDevice();
  return (
    <>
      {device === 'pc' && <MenuLayout />}
      {children}
    </>
  );
}
