'use client';
import Icon from '@/components/Icon';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { GalleryType, Posting } from '@/app/type';
import Modal from '@/components/Modal';
import Spacing from '@/components/Spacing';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { InfoLinkList } from '@/constants';
import { useWindowSize } from '@/hooks';
import useSwiperController from '@/hooks/useSwipeController';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Autoplay } from 'swiper/modules';

interface InfoSectionProps {
  galleryList: GalleryType[];
  announcementList: Posting[];
  device: 'mobile' | 'pc';
}

interface AnnouncementProps {
  announcementList: InfoSectionProps['announcementList'];
}

interface GalleryProps {
  galleryList: InfoSectionProps['galleryList'];
  device: InfoSectionProps['device'];
}

export default function InfoSection({ galleryList, announcementList, device }: InfoSectionProps) {
  return (
    <section>
      <Announcement announcementList={announcementList} />
      <Gallery galleryList={galleryList} device={device} />
    </section>
  );
}

function Announcement({ announcementList }: AnnouncementProps) {
  return (
    <article className="relative h-70 bg-orange text-white">
      <Swiper
        direction="vertical"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        autoHeight={true}
        modules={[Autoplay]}
      >
        {announcementList.map((announcement) => (
          <SwiperSlide key={announcement.id} className="!h-70">
            <div className="relative flex !h-70 items-center justify-around px-50 text-center">
              <Link
                href="/festival-news/announcement?page=1"
                className="text-start text-subtitle1 mobile:w-100 pc:w-200"
              >
                행사소식
              </Link>
              <Link
                href={`/festival-news/announcement/${announcement.id}`}
                className="grow text-subtitle2"
              >
                {announcement.title}
              </Link>
              <span className="w-100 text-end text-subtitle2">{announcement.date}</span>
              <Link
                className="absolute inset-y-0 right-15 my-auto flex items-center text-title4"
                href="/festival-news/announcement?page=1"
              >
                +
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}

function Gallery({ galleryList, device }: GalleryProps) {
  const { slideRef, handlePrev, handleNext } = useSwiperController({ maxPage: Infinity });
  const [open, setOpen] = useState(false);
  const { width = 1400 } = useWindowSize();

  return (
    <article className="bg-yellow py-30 mobile:px-20 pc:px-40">
      <div className="flex">
        <div
          className={cn('text-start pc:min-w-250', {
            'min-w-150': device === 'mobile',
          })}
        >
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
              className={cn(
                'flex items-center justify-center rounded-full bg-white mobile:h-30 mobile:w-30 pc:h-40 pc:w-40'
              )}
            >
              <Icon id="arrow_left" width={20} height={20} />
            </button>
            <button
              onClick={handleNext}
              className={cn(
                'flex items-center justify-center rounded-full bg-white mobile:h-30 mobile:w-30 pc:h-40 pc:w-40'
              )}
            >
              <Icon id="arrow_right" width={20} height={20} />
            </button>
          </div>
        </div>

        <div
          className={cn('mx-auto', {
            'min-w-700 max-w-700': device === 'mobile',
            'min-w-400 max-w-1200': device === 'pc',
          })}
        >
          <Swiper
            className="mySwiper"
            slidesPerView={width > 1400 ? 3 : 2}
            ref={slideRef}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            loop={true}
          >
            {galleryList.map((gallery) => (
              <SwiperSlide key={gallery.id}>
                <Link
                  className={cn('relative block cursor-pointer mobile:min-h-200', {
                    'h-250 w-330': device === 'pc',
                  })}
                  href="/chrysanthemum-festival/gallery?page=1"
                >
                  <Image src={gallery.imageUrl} fill alt={gallery.title} className="rounded-xl" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Spacing size={30} />

      <div
        className={cn(
          'flex items-center gap-20 whitespace-nowrap rounded-xl bg-white px-30 py-20',
          { 'h-80': device === 'pc' },
          { 'flex-col overflow-x-scroll ': device === 'mobile' }
        )}
      >
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
  );
}
