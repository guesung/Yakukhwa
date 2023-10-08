"use client";
import { DateController } from "@/utils/DateController";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Icon from "@/components/Icon";
import useSwiperController from "@/hooks/useSwipeController";
import { cn } from "@/utils";

const pageList = [1, 2, 3];

export default function ScheduleSection() {
  const { slideRef, handlePrev, handleNext, hasPrev, hasNext } =
    useSwiperController({ maxPage: pageList.length });

  return (
    <section className="px-30 py-20 relative">
      <article>
        <Swiper ref={slideRef} touchAngle={0}>
          {pageList.map((page) => (
            <SwiperSlide key={page}>
              <div className="pc:grid pc:grid-cols-8 mobile:grid mobile:grid-rows-2 overflow-x-scroll gap-x-10">
                {DateController.getDateList(new Date(), page).map(
                  (date, index) => (
                    <p
                      key={date}
                      className={cn(
                        "text-title4 text-gray-6 whitespace-nowrap",
                        {
                          "row-start-1": index < 8,
                          "row-start-2": index >= 8,
                        }
                      )}
                    >
                      {date}
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

      <article className="h-200">
        <div className="h-60 flex items-center">Day 1</div>
        <div className="flex gap-20">
          <div className="min-w-250 h-100 bg-brand-1" />
          <div className="min-w-250 h-100 bg-brand-1" />
          <div className="min-w-250 h-100 bg-brand-1" />
          <div className="min-w-250 h-100 bg-brand-1" />
        </div>
      </article>
    </section>
  );
}
