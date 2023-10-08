import { getDevice } from "@/utils/getdevice";
import { PropsWithChildren } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainLinkSection from "./components/Header/MainLinkSection";

export default function layout({ children }: PropsWithChildren) {
  const device = getDevice();

  return (
    <>
      <Header />
      {device === "pc" && <MainLinkSection />}
      {children}
      <Footer />
    </>
  );
}
