import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return <div className="px-50">{children}</div>;
}
