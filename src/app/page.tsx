import { getDevice } from "@/utils/getdevice";
import InfoSection from "./components/main/InfoSection";
import ScheduleSection from "./components/main/ScheduleSection";
import SignSection from "./components/main/SignSection";
import MobileScheduleSection from "./components/main/MobileScheduleSection";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseClient";
import { fireStore } from "@/store/firebaseStore";

export default async function page() {
  const device = getDevice();
  const querySnapshot = await getDocs(collection(fireStore, "temp"));
  console.log(querySnapshot);

  return (
    <main>
      <SignSection />
      {device === "pc" && <ScheduleSection />}
      {device === "mobile" && <MobileScheduleSection />}
      <InfoSection />
    </main>
  );
}
