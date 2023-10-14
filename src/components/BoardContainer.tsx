import { getData } from '@/utils';
import { getIsAdmin } from '@/utils/getIsAdmin';
import Board from './Board';
import { getPath } from '@/utils/getPath';

export default async function BoardContainer() {
  const isAdmin = getIsAdmin();
  const { subTitle } = getPath();
  const boardList = await getData(subTitle || '');

  return <Board boardList={boardList} isAdmin={isAdmin} />;
}
