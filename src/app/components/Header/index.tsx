import { getDevice } from '@/utils/getdevice';
import LogoSection from './LogoSection';
import SubLinkSection from './SubLinkSection';

export default function Header() {
  const device = getDevice();

  return (
    <header className="relative flex h-full flex-col">
      <LogoSection />
      {device === 'pc' && <SubLinkSection />}
    </header>
  );
}
