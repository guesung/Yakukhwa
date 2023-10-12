import './globals.css'
import type { Metadata } from "next";
import { getDevice } from "@/utils/getdevice";
import { PropsWithChildren } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainLinkSection from "./components/Header/MainLinkSection";
import SideLinkSection from "./components/Header/SideLinkSection";
import { config } from "@/constants";
import { cn } from "@/utils";
import Head from "next/head";

const DEFAULT_OG_TITLE = "2023 월출산국화축제";
const DEFAULT_OG_DESC = "2023 월출산국화축제";
const DEFAULT_OG_IMAGE = "/images/main_logo.png";

export const metadata = {
  metadataBase: new URL(config.BASE_WEB_URL),
  title: {
    template: `${DEFAULT_OG_TITLE} / %s `,
    default: DEFAULT_OG_TITLE,
  },
  description: DEFAULT_OG_DESC,
  openGraph: {
    title: DEFAULT_OG_TITLE,
    description: DEFAULT_OG_DESC,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: DEFAULT_OG_TITLE,
    description: DEFAULT_OG_DESC,
    images: [DEFAULT_OG_IMAGE],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  const device = getDevice();
  return (
    <html lang="ko">
      <meta
        name="google-site-verification"
        content="_wjQIw1jKiIQ5ZSQ9rChkLwbUXzy8ootBWLuClcnNUU"
      />
      <body
        className={cn("overflow-x-hidden font-[BMJUA]", {
          "min-w-1000": device === "pc",
        })}
      >
        <Header />
        {device === "pc" && <MainLinkSection />}
        {device === "mobile" && <SideLinkSection />}
        {children}
        <Footer />
      </body>
    </html>
  );
}


