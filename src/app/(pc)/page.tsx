import { getDevice } from "@/utils/getdevice";
import InfoSection from "./components/main/InfoSection";
import ScheduleSection from "./components/main/ScheduleSection";
import SignSection from "./components/main/SignSection";
import MobileScheduleSection from "./components/main/MobileScheduleSection";

export default function page() {
  const device = getDevice();
  return (
    <main>
      <SignSection />
      {device === "pc" && <ScheduleSection />}
      {device === "mobile" && <MobileScheduleSection />}
      <InfoSection />
    </main>
  );
}
