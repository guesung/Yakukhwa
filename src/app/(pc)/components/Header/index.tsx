import { getDevice } from "@/utils/getdevice";
import LogoSection from "./LogoSection";
import SubLinkSection from "./SubLinkSection";

export default function Header() {
  const device = getDevice();

  return (
    <header className="flex flex-col relative h-full">
      <LogoSection />
      {device === "pc" && <SubLinkSection />}
    </header>
  );
}
