'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from '@/components/Icon';
import 'swiper/css';
import 'swiper/css/pagination';

import Modal from '@/components/Modal';
import Spacing from '@/components/Spacing';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { InfoLinkList, dummyData } from '@/constants';
import useSwiperController from '@/hooks/useSwipeController';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { useWindowSize } from '@/hooks';

export default function InfoSection() {
  const { slideRef, handlePrev, handleNext } = useSwiperController({
    maxPage: 6,
  });
  const [open, setOpen] = useState(false);
  const { width = 1400 } = useWindowSize();

  return (
    <section>
      <article className="flex h-70 items-center bg-orange text-center text-white">
        <Link
          href="/festival-news/announcement?page=1"
          className="text-subtitle1 mobile:w-100 pc:w-200"
        >
          행사소식
        </Link>
        <span className="grow text-subtitle2">2022 월출산국화축제 스텝 모집</span>
        <span className="w-100 text-subtitle2">2022-08-11</span>
        <span className="text-title4 mobile:w-30 pc:w-50">+</span>
      </article>

      <article className="bg-yellow py-30 mobile:px-20 pc:px-40">
        <div className="flex">
          <div className="text-start mobile:min-w-150 pc:min-w-250">
            <p className="mobile:text-subtitle1 pc:text-title2">월출산국화축제</p>
            <p className="mobile:text-title3 pc:text-title1">둘러보기</p>
            <p className="mobile:text-subtitle2 pc:text-subtitle1">
              그윽한 국화향기와
              <br />
              함께 깊어가는 가을
            </p>

            <div className="top-100 flex gap-20 p-20 py-10">
              <button
                onClick={handlePrev}
                className={cn('flex h-40 w-40 items-center justify-center rounded-full bg-white')}
              >
                <Icon id="arrow_left" />
              </button>
              <button
                onClick={handleNext}
                className={cn('flex h-40 w-40 items-center justify-center rounded-full bg-white')}
              >
                <Icon id="arrow_right" fill="white" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden mobile:min-w-500 pc:min-w-700">
            <Swiper
              spaceBetween={20}
              className="mySwiper"
              slidesPerView={width > 1400 ? 3 : 2}
              ref={slideRef}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {dummyData.GALLERYLIST.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="relative mobile:min-h-150 pc:h-250 pc:w-350">
                    <Image src={image.image} fill alt="galleryImage" className="rounded-xl" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <Spacing size={30} />

        <div className="flex items-center gap-20 whitespace-nowrap rounded-xl bg-white px-30 mobile:flex-col mobile:overflow-x-scroll mobile:py-20 pc:h-80">
          <p className="flex gap-20">
            <span className="text-title4 text-orange">문의전화</span>
            <span className="text-title4">061-470-2346</span>
          </p>
          <div className="flex grow justify-center text-title4 mobile:gap-10 pc:gap-20">
            {InfoLinkList.map((linkItem) => (
              <div
                className="cursor-pointer rounded-lg bg-orange px-10 py-5 text-white"
                key={linkItem.name}
              >
                {linkItem.name === '2023포스터' ? (
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
