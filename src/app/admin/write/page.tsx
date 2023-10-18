import { ADMIN_LINK_LIST, MAIN_LINK_LIST } from '@/constants';
import { getData } from '@/utils';
import BoardForm from './components/BoardForm';
import CardForm from './components/CardForm';
import GalleryForm from './components/GalleryForm';
import ScheduleForm from './components/ScheduleForm';

interface PageProps {
  searchParams: {
    category: string;
    id: string;
  };
}

export default async function page({ searchParams: { category, id } }: PageProps) {
  const type = MAIN_LINK_LIST.flatMap((mainLink) =>
    [...mainLink.subTitle, ...ADMIN_LINK_LIST].find((sub) => sub.path === category)
  ).find((item) => item !== undefined)?.type;
  const postingList = await getData(category);
  const postingItem = postingList.find((item) => item.id === id);

  console.log(postingItem);
  return (
    <main>
      {type === 'board' && <BoardForm category={category} postingItem={postingItem} />}
      {type === 'card' && <CardForm category={category} postingItem={postingItem} />}
      {type === 'gallery' && <GalleryForm category={category} />}
      {type === 'schedule' && <ScheduleForm category={category} postingItem={postingItem} />}
    </main>
  );
}
