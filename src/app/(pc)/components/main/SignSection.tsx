"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Icon from "@/components/Icon";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function SignSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-slate-100">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper pc:h-500 mobile:h-400"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>

      <div
        className="w-25 h-25 rounded-full bg-white cursor-pointer absolute inset-x-0 mx-auto bottom-30 z-10 flex justify-center items-center"
        onClick={() => {
          console.log(scrollRef.current);
          scrollRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Icon id="arrow_down" width={16} height={16} />
      </div>

      <div ref={scrollRef} />
    </section>
  );
}
