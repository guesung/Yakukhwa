import LogoSection from "./LogoSection";
import SideLinkSection from "./SideLinkSection";

export default function Header() {
  return (
    <header className="flex flex-col relative h-full">
      <LogoSection />
      <SideLinkSection />
    </header>
  );
}
