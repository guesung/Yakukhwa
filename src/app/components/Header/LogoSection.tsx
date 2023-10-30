import { cn } from '@/utils';
import { getDevice } from '@/utils/getdevice';
import Image from 'next/image';
import Link from 'next/link';

function daysUntilNovember28() {
  const past = new Date('2023-10-28');
  const now = new Date();

  const timeDiff = +now - +past;
  const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
  console.log(daysDiff);
  return Math.floor(daysDiff);
}

export default function LogoSection() {
  const device = getDevice();
  const leftDay = daysUntilNovember28();

  return (
    <Link
      className={cn('flex items-center gap-10 px-20 py-20 ', {
        'w-200 justify-start': device === 'mobile',
        'justify-center': device === 'pc',
      })}
      href="/"
    >
      <Image
        src="/images/main_logo.png"
        width={device === 'mobile' ? 150 : 200}
        height={100}
        alt="로고"
      />
      <p className="rounded-md bg-[#f75454] px-5 text-subtitle1 text-white ">D+{leftDay}</p>
    </Link>
  );
}
