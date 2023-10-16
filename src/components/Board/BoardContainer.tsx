import { getData } from '@/utils';
import { getIsAdmin } from '@/utils/getIsAdmin';
import BoardList from './BoardList';
import { getPath } from '@/utils/getPath';

export default async function BoardContainer() {
  const isAdmin = getIsAdmin();
  const { subTitle } = getPath();
  const boardList = await getData(subTitle);

  return <BoardList boardList={boardList} isAdmin={isAdmin} />;
}
