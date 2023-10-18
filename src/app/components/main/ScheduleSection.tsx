'use client';
import { festivalDateArray } from '@/constants';
import { cn } from '@/utils';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Schedule } from '@/app/type';
import Icon from '@/components/Icon';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import Spacing from '@/components/Spacing';
import Link from 'next/link';

interface ScheduleSectionProps {
  scheduleList: Schedule[];
  isAdmin: boolean;
}

export default function ScheduleSection({ scheduleList, isAdmin }: ScheduleSectionProps) {
  const [numberOfDay, setNumberOfDay] = useState(1);
  const handleDate = (date: string) => {
    if (!festivalDateArray.includes(date)) return;
    setNumberOfDay(festivalDateArray.findIndex((it) => it === date) + 1);
  };
  const handlePrev = () => setNumberOfDay((prev) => (prev === 1 ? 1 : prev - 1));
  const handleNext = () => setNumberOfDay((prev) => (prev === 16 ? 16 : prev + 1));
  const hasPrev = numberOfDay !== 1;
  const hasNext = numberOfDay !== 16;
  const currentScheduleList = scheduleList.find(
    (schedule) => schedule.date === festivalDateArray[numberOfDay - 1]
  );

  return (
    <section className="relative px-30 py-20">
      <article>
        <div className="grid grid-cols-8 gap-x-10 overflow-hidden">
          {festivalDateArray.map((date, index) => (
            <p
              key={date}
              className={cn('cursor-pointer whitespace-nowrap text-title4 text-gray-6', {
                'text-black': numberOfDay === index + 1,
                'row-start-1': index < 8,
                'row-start-2': index >= 8,
              })}
              onClick={() => handleDate(date)}
            >
              {date + ' '}
            </p>
          ))}
        </div>

        <div className="absolute right-80 top-100 flex gap-20">
          <button onClick={handlePrev} className={cn({ 'opacity-20': !hasPrev })}>
            <Icon id="arrow_left" />
          </button>
          <button onClick={handleNext} className={cn({ 'opacity-20': !hasNext })}>
            <Icon id="arrow_right" fill="white" />
          </button>
        </div>
      </article>

      <article className="relative flex h-200 flex-col justify-center">
        <div className="flex h-60 items-center">Day {numberOfDay}</div>
        {isAdmin && (
          <Link
            className="absolute right-0 top-60"
            href={`/admin/write?category=schedule&id=${currentScheduleList?.id}`}
          >
            수정하기
          </Link>
        )}
        <div className="flex h-80 justify-center gap-40">
          {currentScheduleList?.scheduleList.map((schedule) => (
            <div className="flex items-center border bg-white px-10 py-10" key={schedule.time}>
              <Avatar className="h-80 w-80">
                <AvatarImage src={schedule.imageUrl} />
              </Avatar>
              <Spacing size={10} direction="horizontal" />
              <p className="text-subtitle1">
                {schedule.time}
                <br />
                {schedule.place}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
