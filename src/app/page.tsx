import { getDevice } from '@/utils/getdevice';
import InfoSection from './components/main/InfoSection';
import MobileScheduleSection from './components/main/MobileScheduleSection';
import ScheduleSection from './components/main/ScheduleSection';
import SignSection from './components/main/SignSection';
import { getData } from '@/utils';

export default async function page() {
  const device = getDevice();
  const galleryList = await getData('gallery');

  return (
    <main>
      <SignSection />
      {device === 'pc' && <ScheduleSection />}
      {device === 'mobile' && <MobileScheduleSection />}
      <InfoSection galleryList={galleryList} />
    </main>
  );
}
