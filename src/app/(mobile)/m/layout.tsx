import { PropsWithChildren } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function layout({ children }: PropsWithChildren) {
  return (
    <body className="flex h-full min-h-[100dvh] w-screen justify-center overflow-y-scroll bg-slate-50">
      <div className="relative min-h-[100dvh] w-full max-w-450 bg-white text-sign-primary">
        <Header />
        {children}
        <Footer />
      </div>
    </body>
  );
}
