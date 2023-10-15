import { MAINLINKLIST } from '@/constants';
import BoardForm from './components/BoardForm';
import CardForm from './components/CardForm';
import GalleryForm from './components/GalleryForm';

interface PageProps {
  searchParams: {
    category: string;
  };
}

export default async function page({ searchParams: { category } }: PageProps) {
  const type = MAINLINKLIST.flatMap((mainLink) =>
    mainLink.subTitle.find((sub) => sub.path === category)
  ).find((item) => item !== undefined)?.type;

  return (
    <main>
      {type === 'board' && <BoardForm category={category} />}
      {type === 'card' && <CardForm category={category} />}
      {type === 'gallery' && <GalleryForm category={category} />}
    </main>
  );
}
