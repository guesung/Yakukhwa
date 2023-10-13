import { getDevice } from "@/utils/getdevice";
import axios from "axios";
import { ref } from "firebase/database";
import InfoSection from "./components/main/InfoSection";
import MobileScheduleSection from "./components/main/MobileScheduleSection";
import ScheduleSection from "./components/main/ScheduleSection";
import SignSection from "./components/main/SignSection";

export default async function page() {
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
