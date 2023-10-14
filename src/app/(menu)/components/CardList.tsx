import { CardType } from '@/app/type';
import Spacing from '@/components/Spacing';
import Image from 'next/image';

interface CardListProps {
  cardList: CardType[];
}

export default function CardList({ cardList }: CardListProps) {
  return (
    <article className="flex flex-wrap justify-center gap-30">
      {cardList.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </article>
  );
}

interface CardItemProps {
  card: CardType;
}

function CardItem({ card }: CardItemProps) {
  const { id, title, date, place, content, image } = card;

  return (
    <article className="flex w-380 flex-col rounded-t-xl rounded-bl-xl shadow-xl">
      <div className="relative h-200">
        {image && <Image src={image} alt={title} fill className="rounded-t-xl" />}
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
