import PostingContainer from '@/components/PostingContainer';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function page({ params: { id } }: PageProps) {
  return <PostingContainer />;
}
