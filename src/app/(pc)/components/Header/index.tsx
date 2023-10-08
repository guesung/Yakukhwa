import { getDevice } from "@/utils/getdevice";
import LogoSection from "./LogoSection";
import SideLinkSection from "./SideLinkSection";

export default function Header() {
  const device = getDevice();

  return (
    <header className="flex flex-col relative h-full">
      <LogoSection />
      {device === "pc" && <SideLinkSection />}
    </header>
  );
}
