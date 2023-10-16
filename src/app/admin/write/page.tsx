import { ADMIN_LINK_LIST, MAIN_LINK_LIST } from '@/constants';
import BoardForm from './components/BoardForm';
import CardForm from './components/CardForm';
import GalleryForm from './components/GalleryForm';
import ScheduleForm from './components/ScheduleForm';

interface PageProps {
  searchParams: {
    category: string;
    type: string;
  };
}

export default async function page({ searchParams: { category } }: PageProps) {
  const type = MAIN_LINK_LIST.flatMap((mainLink) =>
    [...mainLink.subTitle, ...ADMIN_LINK_LIST].find((sub) => sub.path === category)
  ).find((item) => item !== undefined)?.type;

  return (
    <main>
      {type === 'board' && <BoardForm category={category} />}
      {type === 'card' && <CardForm category={category} />}
      {type === 'gallery' && <GalleryForm category={category} />}
      {type === 'schedule' && <ScheduleForm category={category} />}
    </main>
  );
}
