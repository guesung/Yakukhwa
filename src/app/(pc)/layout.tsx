import { getDevice } from "@/utils/getdevice";
import { PropsWithChildren } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainLinkSection from "./components/Header/MainLinkSection";
import SideLinkSection from "./components/Header/SideLinkSection";

export default function layout({ children }: PropsWithChildren) {
  const device = getDevice();

  return (
    <>
      <Header />
      {device === "pc" && <MainLinkSection />}
      {device === "mobile" && <SideLinkSection />}
      {children}
      <Footer />
    </>
  );
}
