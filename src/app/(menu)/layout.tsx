import MenuLayout from '@/components/MenuLayout';
import Spacing from '@/components/Spacing';
import { getDevice } from '@/utils/getdevice';
import { getServerIsAdmin } from '@/utils/userController';
import { PropsWithChildren } from 'react';

export default async function layout({ children }: PropsWithChildren) {
  const device = getDevice();
  const isAdmin = await getServerIsAdmin();

  return (
    <>
      {device === 'pc' && <MenuLayout isAdmin={isAdmin} />}
      {children}
      <Spacing size={50} />
    </>
  );
}
