"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function SignSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-500"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>

      <div
        className="w-20 h-20 rounded-full bg-slate-300 cursor-pointer absolute inset-x-0 mx-auto bottom-30 z-10"
        onClick={() => {
          console.log(scrollRef.current);
          scrollRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div ref={scrollRef} />
    </section>
  );
}
