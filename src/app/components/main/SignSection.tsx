"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Icon from "@/components/Icon";
import Image from "next/image";

export default function SignSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative bg-slate-100">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper pc:h-700 mobile:h-400"
        autoplay
      >
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <SwiperSlide key={i}>
              <Image
                src={`/images/flower.png`}
                alt="flower"
                fill
                className="brightness-[30%]"
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <div
        className="w-25 h-25 rounded-full bg-white cursor-pointer absolute inset-x-0 mx-auto bottom-30 z-10 flex justify-center items-center"
        onClick={() => {
          scrollRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <Icon id="arrow_down" width={16} height={16} />
      </div>

      <div ref={scrollRef} />
    </section>
  );
}
