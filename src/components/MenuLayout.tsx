"use client";
import Spacing from "@/components/Spacing";
import { MAINLINKLIST } from "@/constants";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function MenuLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const currentmainTitle = pathname.split("/")[1];
  const currentsubTitle = pathname.split("/")[2].split("?")[0];
  const subTitleList = MAINLINKLIST.find(
    (linkItem) => linkItem.mainTitle.path === currentmainTitle
  )?.subTitle;

  return (
    <div className="px-50">
      <Spacing size={20} />
      <article className="relative w-full h-150 flex items-center">
        <Image src="/images/subtitle_background.jpeg" fill alt="subtitle" />
        <p className="text-title2 py-10 absolute text-white top-0 z-10 text-center w-full h-full flex flex-col justify-center">
          영암 월출산 국화축제에서
          <br />
          눈길을 사로잡는 작품들의 시각적 아름다움을 느껴보세요!
        </p>
      </article>

      <article className="flex w-full h-60 justify-center border-b gap-50">
        {subTitleList?.map((subTitle) => (
          <Link
            href={`/${currentmainTitle}/${subTitle.path}`}
            key={subTitle.name}
            className={cn("text-center flex items-center text-title4", {
              "text-orange border-b-2 border-orange":
                subTitle.path.split("?")[0] === currentsubTitle,
            })}
          >
            {subTitle.name}
          </Link>
        ))}
      </article>

      {children}
    </div>
  );
}
