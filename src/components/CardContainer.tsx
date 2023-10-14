import CardList from '@/app/(menu)/components/CardList';
import { DUMMYCARD_LIST, MAINLINKLIST } from '@/constants';
import { getData } from '@/utils';
import { getIsAdmin } from '@/utils/getIsAdmin';
import { getPath } from '@/utils/getPath';

export default async function CardContainer() {
  const isAdmin = getIsAdmin();
  const { mainTitle: currentMainTitle, subTitle: currentsubTitle } = getPath();
  const cardList = await getData(currentsubTitle);
  const subTitleList = MAINLINKLIST.find(
    (linkItem) => linkItem.mainTitle.path === currentMainTitle
  )?.subTitle;
  const banner = subTitleList?.find((subTitle) => subTitle.path === currentsubTitle)?.banner;

  return (
    <div>
      <h1 className="py-30 text-center text-title1">{banner}</h1>
      <CardList cardList={cardList} />
    </div>
  );
}
