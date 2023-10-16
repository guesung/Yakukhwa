import Posting from './Posting';
import { getData } from '@/utils/firebaseController';
import { getPath } from '@/utils/getPath';

export default async function PostingContainer() {
  const { subTitle, params } = getPath();
  const postingList = await getData(subTitle);
  const postingItem = postingList.find((item) => item.id === params);

  return <Posting postingItem={postingItem} />;
}
