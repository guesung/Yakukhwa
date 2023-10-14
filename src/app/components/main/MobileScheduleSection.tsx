'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MobileScheduleSection() {
  const router = useRouter();
  return (
    <Image
      src="/images/schedule.png"
      alt="축제일정 바로가기"
      width={450}
      height={200}
      onClick={() => router.push('/program/schedule')}
    />
  );
}
