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

const pageList = [1, 2, 3];

export default function ScheduleSection() {
  const { slideRef, handlePrev, handleNext, hasPrev, hasNext } = useSwiperController({
    maxPage: pageList.length,
  });
  const [numberOfDay, setNumberOfDay] = useState(1);
  const handleDate = (date: string) => {
    if (!festivalDateArray.includes(date)) return;
    setNumberOfDay(festivalDateArray.findIndex((it) => it === date) + 1);
  };

  return (
    <section className="relative px-30 py-20">
      <article>
        <Swiper ref={slideRef} touchAngle={0}>
          {pageList.map((page) => (
            <SwiperSlide key={page}>
              <div className="gap-x-10 overflow-hidden pc:grid pc:grid-cols-8">
                {DateController.getDateList(new Date(), page).map((date, index) => (
                  <p
                    key={date.date}
                    className={cn('whitespace-nowrap text-title4 text-gray-6', {
                      'cursor-pointer text-black': festivalDateArray.includes(date.date),
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
        <div className="flex justify-center gap-20">
          {DUMMY_SCHEDULE_LIST[numberOfDay].map((schedule) => (
            <div className=" flex items-center border bg-white px-10 py-10" key={schedule.time}>
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
