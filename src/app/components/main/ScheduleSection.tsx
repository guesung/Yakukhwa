'use client';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { DUMMY_SCHEDULE_LIST, festivalDateArray } from '@/constants';
import useSwiperController from '@/hooks/useSwipeController';
import { cn } from '@/utils';
import { DateController } from '@/utils/DateController';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Icon from '@/components/Icon';
import Spacing from '@/components/Spacing';

const pageList = [1];

export default function ScheduleSection() {
  const [numberOfDay, setNumberOfDay] = useState(1);
  const handleDate = (date: string) => {
    if (!festivalDateArray.includes(date)) return;
    setNumberOfDay(festivalDateArray.findIndex((it) => it === date) + 1);
  };
  const handlePrev = () => setNumberOfDay((prev) => (prev === 1 ? 1 : prev - 1));
  const handleNext = () => setNumberOfDay((prev) => (prev === 16 ? 16 : prev + 1));
  const hasPrev = numberOfDay !== 1;
  const hasNext = numberOfDay !== 16;

  return (
    <section className="relative px-30 py-20">
      <article>
        <Swiper touchAngle={0}>
          {pageList.map((page) => (
            <SwiperSlide key={page}>
              <div className="grid grid-cols-8 gap-x-10 overflow-hidden">
                {DateController.getDateList(new Date(), page).map((date, index) => (
                  <p
                    key={date.date}
                    className={cn('cursor-pointer whitespace-nowrap text-title4 text-gray-6', {
                      'text-black': numberOfDay === index + 1,
                      'row-start-1': index < 8,
                      'row-start-2': index >= 8,
                    })}
                    onClick={() => handleDate(date.date)}
                  >
                    {date.date + ' ' + date.day}
                  </p>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute right-80 top-100 flex gap-20">
          <button onClick={handlePrev} className={cn({ 'opacity-20': !hasPrev })}>
            <Icon id="arrow_left" />
          </button>
          <button onClick={handleNext} className={cn({ 'opacity-20': !hasNext })}>
            <Icon id="arrow_right" fill="white" />
          </button>
        </div>
      </article>

      <article className="flex h-200 flex-col justify-center">
        <div className="flex h-60 items-center">Day {numberOfDay}</div>
        <div className="flex justify-center gap-40">
          {DUMMY_SCHEDULE_LIST[numberOfDay].map((schedule) => (
            <div className="flex items-center border bg-white px-10 py-10" key={schedule.time}>
              <Avatar className="h-80 w-80">
                <AvatarImage src="https://github.com/shadcn.png" />
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
