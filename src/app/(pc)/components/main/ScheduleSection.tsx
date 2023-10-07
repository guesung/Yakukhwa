"use client";
import { DateController } from "@/utils/DateController";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

const pageList = [1, 2, 3];

export default function ScheduleSection() {
  return (
    <section className="px-30 py-20">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
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
    </section>
  );
}
