'use client';
import Spacing from '@/components/Spacing';
import { MAINLINKLIST } from '@/constants';
import { useGetPath } from '@/hooks';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface MenuLayoutProps extends PropsWithChildren {
  isAdmin: boolean;
}

export default function MenuLayout({ isAdmin, children }: MenuLayoutProps) {
  const { mainTitle: currentmainTitle, subTitle: currentsubTitle } = useGetPath();
  const subTitleList = MAINLINKLIST.find(
    (linkItem) => linkItem.mainTitle.path === currentmainTitle
  )?.subTitle;
  const banner = subTitleList?.find((subTitle) => subTitle.path === currentsubTitle)?.banner;
  const type = subTitleList?.find((subTitle) => subTitle.path === currentsubTitle)?.type;

  return (
    <div>
      <Spacing size={20} />
      <article className="relative  items-center">
        <Image src="/images/subtitle_background.png" width={1400} height={100} alt="subtitle" />
        <p className="absolute top-0 z-10 flex h-full w-full flex-col justify-center py-10 text-center text-title2 ">
          {banner}
        </p>
      </article>

      <article className="relative flex h-60 w-full justify-center gap-50 border-b">
        {subTitleList?.map((subTitle) => (
          <Link
            href={`/${currentmainTitle}/${subTitle.path}?page=1`}
            key={subTitle.name}
            className={cn('flex items-center text-center text-title4', {
              'border-b-2 border-orange text-orange':
                subTitle.path.split('?')[0] === currentsubTitle,
            })}
          >
            {subTitle.name}
          </Link>
        ))}
        {isAdmin && type && (
          <Link
            className="absolute inset-y-0 right-0 my-auto flex items-center"
            href={`/admin/write?category=${currentsubTitle}`}
          >
            글쓰기 / 수정하기
          </Link>
        )}
      </article>

      {children}
    </div>
  );
}
