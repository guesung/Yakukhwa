import { MAINLINKLIST } from "@/constants";

export default function MainLinkSection() {
  return (
    <section className="flex justify-center gap-30">
      {MAINLINKLIST.map((linkItem, index) => (
        <LinkItem linkItem={linkItem} key={index} />
      ))}
    </section>
  );
}

interface LinkItemProps {
  linkItem: {
    mainTitle: string;
    subTitle: string[];
  };
}
function LinkItem({ linkItem }: LinkItemProps) {
  return (
    <div>
      <h3>{linkItem.mainTitle}</h3>
      <ul>
        {linkItem.subTitle.map((subTitle, index) => (
          <li key={index}>
            <a href="#">{subTitle}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
