"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Icon from "@/components/Icon";
import { fireStore } from "@/store";
import { addDoc, collection } from "firebase/firestore";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function SignSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState();

  const onClickUpLoadButton = async () => {
    await addDoc(collection(fireStore, `temp`), {
      value: "a",
    });
  };
  return (
    <section className="relative bg-slate-100">
      <form onSubmit={(event) => event.preventDefault()}>
        <input onChange={(event) => setValue(event.target.value)} />
        <button onClick={onClickUpLoadButton}>전송</button>
      </form>
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
