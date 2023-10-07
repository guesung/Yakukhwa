import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return <div className="px-30">{children}</div>;
}
