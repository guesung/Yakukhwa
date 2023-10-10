import { SUBLINKLIST } from "@/constants";
import Link from "next/link";

export default function SubLinkSection() {
  return (
    <section className="absolute right-100 top-0 mobile:right-0 flex bg-brand-300 text-white rounded-b-xl bg-green">
      {SUBLINKLIST.map((linkItem, index) => (
        <LinkItem linkItem={linkItem} key={index} />
      ))}
    </section>
  );
}

interface LinkItemProps {
  linkItem: {
    title: string;
    path: string;
  };
}
function LinkItem({ linkItem }: LinkItemProps) {
  return (
    <div className="p-10">
      <Link href={linkItem.path}>{linkItem.title}</Link>
    </div>
  );
}
