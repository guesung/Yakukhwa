import { SUBLINKLIST } from "@/constants";

export default function SideLinkSection() {
  return (
    <section className="absolute right-100 top-0 mobile:right-0 flex bg-brand-300 text-white rounded-b-xl bg-brand-2">
      {SUBLINKLIST.map((linkItem, index) => (
        <LinkItem linkItem={linkItem} key={index} />
      ))}
    </section>
  );
}

interface LinkItemProps {
  linkItem: {
    title: string;
  };
}
function LinkItem({ linkItem }: LinkItemProps) {
  return (
    <div className="p-10">
      <h3>{linkItem.title}</h3>
    </div>
  );
}
