import { getDevice } from '@/utils/getdevice';
import Image from 'next/image';
import Link from 'next/link';

function daysUntilNovember28() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const november28 = new Date(currentYear, 9, 28);
  if (today > november28) {
    november28.setFullYear(currentYear + 1);
  }
  const diffTime = Math.abs(+november28 - +today);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export default function LogoSection() {
  const device = getDevice();
  const leftDay = daysUntilNovember28();

  return (
    <Link
      className="items-center px-20 py-20 mobile:w-200 mobile:justify-start pc:flex pc:justify-center"
      href="/"
    >
      <Image
        src="/images/main_logo.png"
        width={device === 'mobile' ? 150 : 200}
        height={100}
        alt="로고"
      />
      <p className="rounded-md bg-[#f75454] px-5 text-subtitle1 text-white ">D-{leftDay}</p>
    </Link>
  );
}
