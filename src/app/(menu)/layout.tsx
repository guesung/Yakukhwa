import MenuLayout from "@/components/MenuLayout";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <>
      <MenuLayout />
      {children}
    </>
  );
}
