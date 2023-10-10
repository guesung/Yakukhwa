import Spacing from "@/components/Spacing";
import Image from "next/image";
import { PropsWithChildren } from "react";
import { headers } from "next/headers";
import { MAINLINKLIST } from "@/constants";
export default function layout({ children }: PropsWithChildren) {
  const headersList = headers();
  const uri = headersList.get("x-url") || "";

  const mainTitle = uri.split("/")[3];
  const subTitle = MAINLINKLIST.find(
    (linkItem) => linkItem.mainTitle.path === mainTitle
  )?.subTitle;
  console.log(subTitle);

  return (
    <div className="px-50">
      <Spacing size={70} />
      <article className="relative w-full h-100 flex items-center">
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
      </article>

      <Spacing size={70} />

      {children}
    </div>
  );
}
