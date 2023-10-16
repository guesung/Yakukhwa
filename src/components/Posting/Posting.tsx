import Spacing from '../Spacing';
import { Posting } from '@/app/type';

interface PostingProps {
  postingItem: Posting;
}
export default function Posting({ postingItem }: PostingProps) {
  const { title, date, content } = postingItem;
  return (
    <section className="mobile:px-20 pc:px-50">
      <Spacing size={30} />
      <p className="text-title1">{title}</p>
      <p className="py-30 text-subtitle2">{date} </p>
      <hr />
      <div className="whitespace-pre-wrap py-30 text-subtitle1">{content}</div>
    </section>
  );
}
