"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import Icon from "@/components/Icon";
import Spacing from "@/components/Spacing";
import { InfoLinkList, dummyData } from "@/constants";
import useSwiperController from "@/hooks/useSwipeController";
import { cn } from "@/utils";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

import Modal from "@/components/Modal";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";
import { Autoplay } from "swiper/modules";

export default function InfoSection() {
  const { slideRef, handlePrev, handleNext } = useSwiperController({
    maxPage: 6,
  });
  const [open, setOpen] = useState(false);

  return (
    <section>
      <article className="flex text-center h-70 bg-orange items-center text-white">
        <Link
          href="/festival-news/announcement?page=1"
          className="pc:w-200 mobile:w-100 text-subtitle1"
        >
          행사소식
        </Link>
        <span className="grow text-subtitle2">
          2022 월출산국화축제 스텝 모집
        </span>
        <span className="w-100 text-subtitle2">2022-08-11</span>
        <span className="pc:w-50 mobile:w-30 text-title4">+</span>
      </article>

      <article className="bg-yellow pc:px-40 mobile:px-20 py-30">
        <div className="flex">
          <div className="pc:min-w-250 mobile:min-w-150 text-start">
            <p className="pc:text-title2 mobile:text-subtitle1">
              월출산국화축제
            </p>
            <p className="pc:text-title1 mobile:text-title3">둘러보기</p>
            <p className="pc:text-subtitle1 mobile:text-subtitle2">
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

          <div className="pc:min-w-700 mobile:min-w-500">
            <Swiper
              spaceBetween={20}
              className="mySwiper"
              slidesPerView={2.5}
              ref={slideRef}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {dummyData.GALLERYLIST.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="pc:min-h-200 pc:max-h-300 mobile:min-h-150">
                    <Image
                      src={image.image}
                      fill
                      alt="image"
                      className="rounded-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <Spacing size={30} />

        <div className="flex mobile:flex-col bg-white rounded-xl pc:h-80 mobile:py-20 items-center px-30 gap-20 mobile:overflow-x-scroll whitespace-nowrap">
          <p className="flex gap-20">
            <span className="text-title4 text-orange">행사문의</span>
            <span className="text-title4">010-3434-2323</span>
          </p>
          <div className="text-title4 flex pc:gap-20 mobile:gap-10 grow justify-center">
            {InfoLinkList.map((linkItem) => (
              <div
                className="bg-orange px-10 py-5 text-white rounded-lg cursor-pointer"
                key={linkItem.name}
              >
                {linkItem.name === "2023포스터" ? (
                  <Sheet>
                    <SheetTrigger asChild>
                      <p onClick={() => setOpen(true)}>2023포스터</p>
                    </SheetTrigger>

                    {open && (
                      <Modal setOpen={setOpen}>
                        <Image
                          src="/images/poster_2023.jpeg"
                          width={800}
                          height={1000}
                          alt="poster"
                        />
                      </Modal>
                    )}
                  </Sheet>
                ) : (
                  <Link href={linkItem.path} key={linkItem.name}>
                    {linkItem.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
