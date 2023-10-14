import { SUBLINKLIST } from '@/constants';
import Link from 'next/link';

export default function SubLinkSection() {
  return (
    <section className="bg-brand-300 absolute right-100 top-0 flex rounded-b-xl bg-green text-white mobile:right-0">
      {SUBLINKLIST.map((linkItem, index) => (
        <LinkItem linkItem={linkItem} key={index} />
      ))}
    </section>
  );
}

interface LinkItemProps {
  linkItem: {
    name: string;
    path: string;
  };
}
function LinkItem({ linkItem }: LinkItemProps) {
  return (
    <div className="p-10">
      <Link href={linkItem.path}>{linkItem.name}</Link>
    </div>
  );
}
