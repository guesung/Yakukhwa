import InfoSection from "./components/main/InfoSection";
import ScheduleSection from "./components/main/ScheduleSection";
import SignSection from "./components/main/SignSection";

export default function page() {
  return (
    <main>
      <SignSection />
      <ScheduleSection />
      <InfoSection />
    </main>
  );
}
