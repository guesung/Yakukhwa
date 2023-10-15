import CardList from '@/app/(menu)/components/CardList';
import { getData } from '@/utils';
import { getIsAdmin } from '@/utils/getIsAdmin';
import { getPath } from '@/utils/getPath';

export default async function CardContainer() {
  const isAdmin = getIsAdmin();
  const { subTitle } = getPath();
  const cardList = await getData(subTitle);

  return <CardList cardList={cardList} isAdmin={isAdmin} category={subTitle} />;
}
