import { dummyData } from '@/constants';
import PageList from '@/components/PageList';
import GalleryList from './GalleryList';
import { getPath } from '@/utils/getPath';

export default function GalleryContainer() {
  const { mainTitle, subTitle, searchParams } = getPath();
  const page = searchParams?.page || '1';

  return (
    <main>
      <GalleryList galleryList={dummyData.GALLERYLIST.slice((+page - 1) * 4, +page * 4)} />
      <PageList maxPage={10} currentPage={+page} />
    </main>
  );
}
