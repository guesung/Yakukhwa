import Icon from "@/components/Icon";
import Image from "next/image";

export default function LinkSection() {
  return (
    <section className="flex bg-brand-1 py-10 mobile:gap-10 mobile:flex-col items-center px-30">
      <p className="text-subtitle1 grow">
        Wallchul Mountain Chrysanthemum Festival
      </p>
      <div className="flex gap-10 w-200 justify-center">
        <Icon id="facebook" width={32} height={32} />
        <Icon id="youtube" width={32} height={32} />
        <Icon id="instagram" width={32} height={32} />
      </div>
    </section>
  );
}
