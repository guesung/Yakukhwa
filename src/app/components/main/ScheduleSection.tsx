'use client';
import { festivalDateArray } from '@/constants';
import { cn, postData } from '@/utils';
import { createContext, useContext, useMemo, useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Schedule } from '@/app/type';
import Icon from '@/components/Icon';
import Spacing from '@/components/Spacing';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';

interface ScheduleSectionProps {
  scheduleList: Schedule[];
  isAdmin: boolean;
}

const DateContext = createContext<{
  numberOfDay: number;
  setNumberOfDay: React.Dispatch<React.SetStateAction<number>>;
}>({
  numberOfDay: 1,
  setNumberOfDay: () => {},
});

const useDateContext = () => useContext(DateContext);

export default function ScheduleSection({ scheduleList, isAdmin }: ScheduleSectionProps) {
  const [numberOfDay, setNumberOfDay] = useState(1);
  const context = useMemo(() => ({ numberOfDay, setNumberOfDay }), [numberOfDay, setNumberOfDay]);

  const currentScheduleList = scheduleList.find(
    (schedule) => schedule.date === festivalDateArray[numberOfDay - 1]
  );

  return (
    <section className="relative px-30 py-20">
      <DateContext.Provider value={context}>
        <FestivalDate />
        <Schedule currentScheduleList={currentScheduleList} isAdmin={isAdmin} />
      </DateContext.Provider>
    </section>
  );
}

function FestivalDate() {
  const { numberOfDay, setNumberOfDay } = useDateContext();
  const handleDate = (date: string) => {
    if (!festivalDateArray.includes(date)) return;
    setNumberOfDay(festivalDateArray.findIndex((it) => it === date) + 1);
  };
  const handlePrev = () => setNumberOfDay((prev) => (prev === 1 ? 1 : prev - 1));
  const handleNext = () => setNumberOfDay((prev) => (prev === 16 ? 16 : prev + 1));
  const hasPrev = numberOfDay !== 1;
  const hasNext = numberOfDay !== 16;

  return (
    <article>
      <div className="grid grid-cols-8 gap-x-10 overflow-hidden">
        {festivalDateArray.map((date, index) => (
          <p
            key={date}
            className={cn('cursor-pointer whitespace-nowrap text-center text-title4 text-gray-6', {
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
        <button onClick={handlePrev} className={cn('z-10', { 'opacity-20': !hasPrev })}>
          <Icon id="arrow_left" />
        </button>
        <button onClick={handleNext} className={cn('z-10', { 'opacity-20': !hasNext })}>
          <Icon id="arrow_right" fill="white" />
        </button>
      </div>
    </article>
  );
}

interface ScheduleProps {
  currentScheduleList?: Schedule;
  isAdmin: boolean;
}

function Schedule({ currentScheduleList, isAdmin }: ScheduleProps) {
  const router = useRouter();
  const { numberOfDay } = useDateContext();
  const handleEditSchedule = async () => {
    if (!currentScheduleList) {
      await postData('schedule', { date: festivalDateArray[numberOfDay - 1] });
      alert('스케줄을 추가했습니다. 다시 시도해주세요');
      router.refresh();
      return;
    }
    router.push(`/admin/write?category=schedule&id=${currentScheduleList?.id}`);
  };

  return (
    <article className="relative flex flex-col justify-center">
      <div className="flex h-60 items-center">Day {numberOfDay}</div>
      {isAdmin && (
        <button className="absolute right-0 top-60" onClick={handleEditSchedule}>
          수정하기
        </button>
      )}
      <div className="flex flex-wrap justify-center gap-40">
        {currentScheduleList?.scheduleList &&
          currentScheduleList?.scheduleList.map((schedule) => (
            <div className="flex items-center border bg-white px-20 py-10" key={schedule.time}>
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
  );
}
