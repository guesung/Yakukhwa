import { getDevice } from '@/utils/getdevice';
import InfoSection from './components/main/InfoSection';
import MobileScheduleSection from './components/main/MobileScheduleSection';
import ScheduleSection from './components/main/ScheduleSection';
import SignSection from './components/main/SignSection';
import { getData } from '@/utils';

export default async function page() {
  const device = getDevice();
  const galleryList = await getData('gallery');
  const announcementList = await getData('announcement');
  const mainImageList = await getData('main-image');
  const scheduleList = await getData('schedule');

  return (
    <main>
      <SignSection mainImageList={mainImageList} />
      {device === 'pc' && <ScheduleSection scheduleList={scheduleList} />}
      {device === 'mobile' && <MobileScheduleSection />}
      <InfoSection galleryList={galleryList} announcementList={announcementList} />
    </main>
  );
}
