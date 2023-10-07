"use client";
import { DateController } from "@/utils/DateController";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { cn } from "@/utils";
import Spacing from "@/components/Spacing";

const pageList = [1, 2, 3];

export default function ScheduleSection() {
  const slideRef = useRef<any>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const hasPrev = slideIndex > 0;
  const hasNext = slideIndex < pageList.length - 1;

  const handlePrev = useCallback(() => {
    if (!slideRef.current || !hasPrev) return;
    slideRef.current.swiper.slidePrev();
    setSlideIndex((slideIndex) => slideIndex - 1);
  }, [hasPrev]);

  const handleNext = useCallback(() => {
    if (!slideRef.current || !hasNext) return;
    slideRef.current.swiper.slideNext();
    setSlideIndex((slideIndex) => slideIndex + 1);
  }, [hasNext]);

  return (
    <section className="px-30 py-20 relative">
      <Swiper className="mySwiper" ref={slideRef}>
        {pageList.map((page) => (
          <SwiperSlide key={page}>
            <div className="grid grid-cols-8">
              {DateController.getDateList(new Date(), page).map((date) => (
                <p
                  key={date}
                  className="text-title4 text-gray-6 whitespace-nowrap"
                >
                  {date}
                </p>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <article>
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
