import LogoSection from "./LogoSection";
import MainLinkSection from "./MainLinkSection";
import SideLinkSection from "./SideLinkSection";

export default function Header() {
  return (
    <header className="flex flex-col relative">
      <LogoSection />
      <SideLinkSection />
      <MainLinkSection />
    </header>
  );
}
