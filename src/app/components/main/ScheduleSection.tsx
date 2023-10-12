"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DateController } from "@/utils/DateController";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Icon from "@/components/Icon";
import Spacing from "@/components/Spacing";
import useSwiperController from "@/hooks/useSwipeController";
import { cn } from "@/utils";
import { useState } from "react";
import { festivalDateArray } from "@/constants";

const pageList = [1, 2, 3];

export default function ScheduleSection() {
  const { slideRef, handlePrev, handleNext, hasPrev, hasNext } =
    useSwiperController({ maxPage: pageList.length });
  const [numberOfDay, setNumberOfDay] = useState(1);
  const handleDate = (date: string) => {
    if (!festivalDateArray.includes(date)) return;
    setNumberOfDay(festivalDateArray.findIndex((it) => it === date) + 1);
  };

  return (
    <section className="px-30 py-20 relative">
      <article>
        <Swiper ref={slideRef} touchAngle={0}>
          {pageList.map((page) => (
            <SwiperSlide key={page}>
              <div className="pc:grid pc:grid-cols-8 overflow-hidden gap-x-10">
                {DateController.getDateList(new Date(), page).map(
                  (date, index) => (
                    <p
                      key={date.date}
                      className={cn(
                        "text-title4 text-gray-6 whitespace-nowrap",
                        {
                          "cursor-pointer text-black":
                            festivalDateArray.includes(date.date),
                          "row-start-1": index < 8,
                          "row-start-2": index >= 8,
                        }
                      )}
                      onClick={() => handleDate(date.date)}
                    >
                      {date.date + " " + date.day}
                    </p>
                  )
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute right-80 flex gap-20 top-100">
          <button
            onClick={handlePrev}
            className={cn({ "opacity-20": !hasPrev })}
          >
            <Icon id="arrow_left" />
          </button>
          <button
            onClick={handleNext}
            className={cn({ "opacity-20": !hasNext })}
          >
            <Icon id="arrow_right" fill="white" />
          </button>
        </div>
      </article>

      <article className="h-200 flex flex-col justify-center">
        <div className="h-60 flex items-center">Day {numberOfDay}</div>
        <div className="flex gap-20 justify-center">
          {[1, 2, 3, 4].map((it) => (
            <div
              className=" bg-white border flex py-10 items-center px-10"
              key={it}
            >
              <Avatar className="w-80 h-80">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <Spacing size={10} direction="horizontal" />
              <p className="text-subtitle1">
                11:00
                <br />
                영암프린지마당
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
