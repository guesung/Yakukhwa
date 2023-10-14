'use client';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Icon from '@/components/Icon';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function SignSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-slate-100">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mobile:h-400 pc:h-700"
        autoplay
      >
        <SwiperSlide>
          <Image src={`/images/main_image.jpeg`} alt="flower" fill />
        </SwiperSlide>
      </Swiper>

      <div
        className="absolute inset-x-0 bottom-30 z-10 mx-auto flex h-30 w-30 cursor-pointer items-center justify-center rounded-full bg-white"
        onClick={() => {
          scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <Icon id="arrow_down" width={16} height={16} />
      </div>

      <div ref={scrollRef} />
    </section>
  );
}
