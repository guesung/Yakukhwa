import HostSection from "./HostSection";
import LogoSection from "./LogoSection";

interface FooterProps {}
export default function Footer() {
  return (
    <main className="flex">
      <LogoSection />
      <HostSection />
    </main>
  );
}
