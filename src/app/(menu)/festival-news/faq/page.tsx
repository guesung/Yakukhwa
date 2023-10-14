import Board from '@/components/Board';
import { getData } from '@/utils/firebaseController';
import { headers } from 'next/headers';

export default async function page() {
  const header = headers();
  const isAdmin = header.get('isAdmin') === 'true';
  const announcementList = await getData('faq');

  return <Board list={announcementList} isAdmin={isAdmin} />;
}
