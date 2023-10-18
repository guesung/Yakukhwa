import Posting from './Posting';
import { getData } from '@/utils/firebaseController';
import { getIsAdmin } from '@/utils/getIsAdmin';
import { getPath } from '@/utils/getPath';

export default async function PostingContainer() {
  const { subTitle, params } = getPath();
  const postingList = await getData(subTitle);
  const postingItem = postingList.find((item) => item.id === params);
  const isAdmin = getIsAdmin();

  return <Posting postingItem={postingItem} isAdmin={isAdmin} />;
}
