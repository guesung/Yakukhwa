import Posting from '@/components/Posting';
import { getData } from '@/utils/firebaseController';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function page({ params: { id } }: PageProps) {
  const faqList = await getData('faq');
  const faqItem = faqList.find((item) => item.id === id);

  return <Posting data={faqItem} />;
}
