import Spacing from "@/components/Spacing";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <div className="px-50">
      <p className="text-title2">공지사항</p>
      <p className="text-subtitle2 py-10">
        영암 월출산 국화축제에서
        <br />
        눈길을 사로잡는 작품들의 시각적 아름다움을 느껴보세요!
      </p>
      <Spacing size={20} />
      <hr />
      <Spacing size={20} />
      {children}
    </div>
  );
}
