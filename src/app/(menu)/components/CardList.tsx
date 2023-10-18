'use client';
import { CardType } from '@/app/type';
import Spacing from '@/components/Spacing';
import { deleteData } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

interface CardListProps {
  cardList: CardType[];
  isAdmin: boolean;
  category: string;
}

export default function CardList({ cardList, ...props }: CardListProps) {
  return (
    <section className="flex flex-wrap justify-center gap-30">
      {cardList.map((card) => (
        <CardItem key={card.id} card={card} {...props} />
      ))}
    </section>
  );
}

interface CardItemProps {
  card: CardType;
  isAdmin: boolean;
  category: string;
}

function CardItem({ card, isAdmin, category }: CardItemProps) {
  const { id, title, date, place, content, imageUrl } = card;
  const handleDeleteCard = async (id: string) => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      await deleteData(category, id);
      alert('삭제되었습니다.');
    }
  };

  return (
    <article className="flex w-380 flex-col rounded-t-xl rounded-bl-xl shadow-xl">
      <div className="relative h-200">
        {imageUrl && <Image src={imageUrl} alt={title} fill className="rounded-t-xl" />}
        {isAdmin && (
          <div className="absolute right-10 top-10 flex gap-10 text-title3">
            <Link href={`/admin/write?category=${category}&id=${id}`}>수정</Link>
            <span onClick={() => handleDeleteCard(id)}>X</span>
          </div>
        )}
      </div>
      <div className="h-200 p-20">
        <h1 className="text-subtitle1">{title}</h1>
        <Spacing size={10} />
        <div className="flex flex-col gap-10">
          <p>
            <span className="rounded-full bg-slate-400 px-10 py-5 text-white">일시</span> {date}
          </p>
          <p>
            <span className="rounded-full bg-slate-400 px-10 py-5 text-white">장소</span> {place}
          </p>
          <p>
            <span className="rounded-full bg-slate-400 px-10 py-5 text-white">내용</span> {content}
          </p>
        </div>
      </div>
    </article>
  );
}
