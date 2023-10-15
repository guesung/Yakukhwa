import { MAINLINKLIST } from '@/constants';
import BoardForm from './components/BoardForm';
import CardForm from './components/CardForm';

interface PageProps {
  searchParams: {
    category: string;
  };
}

export default async function page({ searchParams: { category } }: PageProps) {
  const thisType = MAINLINKLIST.flatMap((mainLink) =>
    mainLink.subTitle.find((sub) => sub.path === category)
  ).find((item) => item !== undefined)?.type;

  return (
    <main>
      {thisType === 'board' && <BoardForm category={category} />}
      {thisType === 'card' && <CardForm category={category} />}
    </main>
  );
}
