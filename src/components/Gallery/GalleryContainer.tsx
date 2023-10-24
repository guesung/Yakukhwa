import PageList from '@/components/PageList';
import { getPath } from '@/utils/getPath';
import GalleryList from './GalleryList';

import { getData } from '@/utils';
import { getIsAdmin } from '@/utils/getIsAdmin';

export default async function GalleryContainer() {
  const { subTitle, searchParams } = getPath();
  const page = searchParams?.page || '1';
  const isAdmin = getIsAdmin();
  const boardList = await getData(subTitle);

  return (
    <main>
      <GalleryList galleryList={boardList} isAdmin={isAdmin} category={subTitle} />
      {/* <PageList maxPage={10} currentPage={+page} /> */}
    </main>
  );
}
