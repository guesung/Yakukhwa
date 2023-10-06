import { PropsWithChildren } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
