'use client';
import { CardType } from '@/app/type';
import Spacing from '@/components/Spacing';
import { cn, deleteData } from '@/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CardListProps {
  cardList: CardType[];
  isAdmin: boolean;
  category: string;
}

export default function CardList({ cardList, ...props }: CardListProps) {
  return (
    <section className="flex flex-wrap items-center justify-center gap-30">
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
  const router = useRouter();
  const { id, title, date, place, content, imageUrl, googleFormUrl } = card;
  const handleDeleteCard = async (id: string) => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      await deleteData(category, id);
      alert('삭제되었습니다.');
    }
  };
  return (
    <article
      className={cn('relative flex w-380 shrink flex-col rounded-t-xl rounded-bl-xl shadow-xl', {
        'h-400': !!imageUrl,
        'h-200': !imageUrl,
      })}
      onClick={() => googleFormUrl && router.push(googleFormUrl)}
    >
      {!!imageUrl && (
        <div className="relative h-200">
          <Image src={imageUrl} alt={title} fill className="rounded-t-xl" />
        </div>
      )}
      {isAdmin && (
        <div className="absolute right-10 top-10 flex gap-10 text-title3">
          <div
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/admin/write?category=${category}&id=${id}`);
            }}
          >
            수정
          </div>
          <span onClick={() => handleDeleteCard(id)}>X</span>
        </div>
      )}
      <div className="p-20">
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
