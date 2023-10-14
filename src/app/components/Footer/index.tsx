import Spacing from '@/components/Spacing';
import HostSection from './HostSection';
import LinkSection from './LinkSection';

export default function Footer() {
  return (
    <main>
      <Spacing size={50} />
      <LinkSection />
      <HostSection />
    </main>
  );
}
