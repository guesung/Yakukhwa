import GallerySection from './components/GallerySection';
import { dummyData } from '@/constants';
import PageList from '@/components/PageList';

interface PageProps {
  searchParams: {
    page: string;
  };
}
export default function page({ searchParams: { page } }: PageProps) {
  return (
    <div>
      <GallerySection galleryList={dummyData.GALLERYLIST.slice((+page - 1) * 4, +page * 4)} />
      <PageList maxPage={10} currentPage={+page} />
    </div>
  );
}
