"use client";
import { DateController } from "@/utils/DateController";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

export default function ScheduleSection() {
  const pagination = 1;
  return (
    <section>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-8">
            {DateController.getDateList(new Date()).map((date) => (
              <div key={date}>{date} </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-8">
            {DateController.getDateList(new Date()).map((date) => (
              <div key={date}>{date} </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-8">
            {DateController.getDateList(new Date()).map((date) => (
              <div key={date}>{date} </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div>Day1</div> */}
    </section>
  );
}
