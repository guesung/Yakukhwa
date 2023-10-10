import Spacing from "@/components/Spacing";
import Image from "next/image";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="px-50">
      <p className="text-title2">공지사항</p>
      <div className="relative w-full h-100 flex items-center">
        <Image
          src="/images/subtitle_background.jpeg"
          width={1000}
          height={300}
          alt="subtitle"
        />
        <p className="text-title2 py-10 absolute text-white top-0 z-10 text-center w-full">
          영암 월출산 국화축제에서
          <br />
          눈길을 사로잡는 작품들의 시각적 아름다움을 느껴보세요!
        </p>
      </div>

      <Spacing size={70} />
      <hr />
      <Spacing size={20} />
      {children}
    </div>
  );
}
