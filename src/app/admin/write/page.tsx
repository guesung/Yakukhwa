import BoardForm from './components/BoardForm';

interface PageProps {
  searchParams: {
    category: string;
  };
}

export default async function page({ searchParams: { category } }: PageProps) {
  return (
    <div>
      <BoardForm category={category} />
    </div>
  );
}
