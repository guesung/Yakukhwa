import Posting from '@/components/Posting';
import { getData } from '@/utils/firebaseController';
import { getPath } from '@/utils/getPath';

export default async function PostingContainer() {
  const { subTitle, searchParams } = getPath();
  const postingList = await getData(subTitle);
  const postingItem = postingList.find((item) => item.id === searchParams);

  return <Posting postingItem={postingItem} />;
}
