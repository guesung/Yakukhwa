import Icon from "@/components/Icon";
import Image from "next/image";

export default function LinkSection() {
  return (
    <section className="h-60 flex bg-brand-1 items-center px-30">
      <p className="text-subtitle1 grow">
        Wallchul Mountain Chrysanthemum Festival
      </p>
      <div className="flex gap-10 w-200">
        <Icon id="facebook" width={32} height={32} />
        <Icon id="youtube" width={32} height={32} />
        <Icon id="instagram" width={32} height={32} />
      </div>
    </section>
  );
}
