import CardList from '../../components/CardList';
import { DUMMYCARD_LIST } from '@/constants';

export default function page() {
  return (
    <div>
      <h1 className="py-30 text-center text-title1">놀GO</h1>
      <CardList cardList={DUMMYCARD_LIST} />
    </div>
  );
}
