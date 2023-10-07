import { PropsWithChildren } from "react";
import Footer from "./components/Footer";
import MainLinkSection from "./components/Header/MainLinkSection";
import Header from "./components/Header";

export default function layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <MainLinkSection />
      {children}
      <Footer />
    </>
  );
}
