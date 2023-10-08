"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import Spacing from "@/components/Spacing";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import useSwiperController from "@/hooks/useSwipeController";
import { cn } from "@/utils";
import Icon from "@/components/Icon";

export default function InfoSection() {
  const { slideRef, handlePrev, handleNext, hasPrev, hasNext } =
    useSwiperController({ maxPage: 6 });

  return (
    <section>
      <article className="flex text-center h-70 bg-brand-1 items-center text-black">
        <span className="w-200 text-subtitle1">행사소식</span>
        <span className="grow text-subtitle2">
          2022 월출산국화축제 스텝 모집
        </span>
        <span className="w-100 text-subtitle2">2022-08-11</span>
        <span className="w-50 text-title4">+</span>
      </article>

      <article className="bg-brand-2 px-40 py-30">
        <div className="flex">
          <div className="min-w-250">
            <p className="text-title2">월출산국화축제</p>
            <p className="text-title1">둘러보기</p>
            <p className="text-subtitle1">
              그윽한 국화향기와
              <br />
              함께 깊어가는 가을
            </p>

            <div className="flex gap-20 top-100 p-20 py-10">
              <button
                onClick={handlePrev}
                className={cn(
                  "bg-white rounded-full w-40 h-40 flex justify-center items-center"
                )}
              >
                <Icon id="arrow_left" />
              </button>
              <button
                onClick={handleNext}
                className={cn(
                  "bg-white rounded-full w-40 h-40 flex justify-center items-center"
                )}
              >
                <Icon id="arrow_right" fill="white" />
              </button>
            </div>
          </div>

          <div className="min-w-700">
            <Swiper
              spaceBetween={20}
              className="mySwiper"
              slidesPerView={2.5}
              ref={slideRef}
            >
              {[1, 2, 3, 4, 5, 6].map((it) => (
                <SwiperSlide key={it}>
                  <div className="bg-brand-4 rounded-xl min-h-200 max-h-300">
                    Slide 1
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <Spacing size={30} />

        <div className="flex bg-white rounded-xl h-80 items-center px-30 gap-20 mobile:overflow-x-scroll whitespace-nowrap">
          <span className="text-title4">행사문의</span>
          <span className="text-title4">010-3434-2323</span>
          <div className="text-title4 flex gap-20 grow justify-center">
            {["참여프로그램", "2023포스터", "오시는 길", "여행코스"].map(
              (it) => (
                <Link
                  href={"/"}
                  className="bg-brand-4 px-10 py-5 text-white rounded-lg"
                  key={it}
                >
                  {it}
                </Link>
              )
            )}
          </div>
        </div>
      </article>
    </section>
  );
}
