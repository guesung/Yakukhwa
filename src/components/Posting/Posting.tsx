import { Posting } from '@/app/type';
import { getPath } from '@/utils/getPath';
import Link from 'next/link';
import Spacing from '../Spacing';

interface PostingProps {
  postingItem: Posting;
  isAdmin: boolean;
}
export default function Posting({ postingItem, isAdmin }: PostingProps) {
  const { subTitle } = getPath();

  const { title, date, content, id } = postingItem;
  return (
    <section className="relative mobile:px-20 pc:px-50">
      {isAdmin && (
        <Link
          className="absolute right-0 top-0"
          href={`/admin/write?category=${subTitle}&id=${id}`}
        >
          수정하기
        </Link>
      )}
      <Spacing size={30} />
      <p className="text-title1">{title}</p>
      <p className="py-30 text-subtitle2">{date} </p>
      <hr />
      <div className="whitespace-pre-wrap py-30 text-subtitle1">{content}</div>
    </section>
  );
}
