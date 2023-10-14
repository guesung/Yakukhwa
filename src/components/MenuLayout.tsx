import Spacing from '@/components/Spacing';
import { MAINLINKLIST } from '@/constants';
import { cn } from '@/utils';
import { getPath } from '@/utils/getPath';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface MenuLayoutProps extends PropsWithChildren {
  isAdmin: boolean;
}

export default function MenuLayout({ isAdmin, children }: MenuLayoutProps) {
  const { mainTitle: currentmainTitle, subTitle: currentsubTitle } = getPath();
  const subTitleList = MAINLINKLIST.find(
    (linkItem) => linkItem.mainTitle.path === currentmainTitle
  )?.subTitle;

  return (
    <div className="px-50">
      <Spacing size={20} />
      <article className="relative flex h-150 w-full items-center">
        <Image src="/images/subtitle_background.jpeg" fill alt="subtitle" />
        <p className="absolute top-0 z-10 flex h-full w-full flex-col justify-center py-10 text-center text-title2 text-white">
          영암 월출산 국화축제에서
          <br />
          눈길을 사로잡는 작품들의 시각적 아름다움을 느껴보세요!
        </p>
      </article>

      <article className="relative flex h-60 w-full justify-center gap-50 border-b">
        {subTitleList?.map((subTitle) => (
          <Link
            href={`/${currentmainTitle}/${subTitle.path}`}
            key={subTitle.name}
            className={cn('flex items-center text-center text-title4', {
              'border-b-2 border-orange text-orange':
                subTitle.path.split('?')[0] === currentsubTitle,
            })}
          >
            {subTitle.name}
          </Link>
        ))}
        {isAdmin && (
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
