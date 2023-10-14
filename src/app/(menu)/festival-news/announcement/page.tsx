import Board from '@/components/Board';
import { getData } from '@/utils/firebaseController';

interface PageProps {
  searchParams: {
    page: string;
  };
}

export default async function page({ searchParams: { page } }: PageProps) {
  const announcementList = await getData('announcement');
  return <Board list={announcementList} />;
}
