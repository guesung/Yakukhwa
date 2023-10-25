'use client';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Icon from '@/components/Icon';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { GalleryType } from '@/app/type';
import { deleteData } from '@/utils';
import { useRouter } from 'next/navigation';

interface SignSectionProps {
  mainImageList: GalleryType[];
  isAdmin: boolean;
}

export default function SignSection({ mainImageList, isAdmin }: SignSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const handleDelete = async (id: string) => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      await deleteData('main-image', id);
      alert('삭제되었습니다.');
      router.refresh();
    }
  };

  return (
    <section>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper relative"
        autoplay
      >
        {mainImageList.map((mainImage) => (
          <SwiperSlide key={mainImage.id}>
            <Image
              src={mainImage.imageUrl}
              alt={mainImage.title}
              width={1400}
              height={1400}
              className="mx-auto"
            />
            {isAdmin && (
              <div
                className="absolute right-10 top-10 cursor-pointer text-title1 text-[#42f34d]"
                onClick={() => handleDelete(mainImage.id)}
              >
                X
              </div>
            )}
          </SwiperSlide>
        ))}

        <div
          className="absolute inset-x-0 bottom-20 z-10 mx-auto flex h-30 w-30 cursor-pointer items-center justify-center rounded-full bg-white"
          onClick={() => {
            scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Icon id="arrow_down" width={16} height={16} />
        </div>
      </Swiper>

      <div ref={scrollRef} />
    </section>
  );
}
