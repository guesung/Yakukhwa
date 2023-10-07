import { PropsWithChildren } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainLinkSection from "./components/Header/MainLinkSection";

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
