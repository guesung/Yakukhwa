import './globals.css'
import type { Metadata } from "next";
import { getDevice } from "@/utils/getdevice";
import { PropsWithChildren } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainLinkSection from "./components/Header/MainLinkSection";
import SideLinkSection from "./components/Header/SideLinkSection";
import { config } from "@/constants";

const DEFAULT_OG_TITLE = "2023 월출산국화축제";
const DEFAULT_OG_DESC = "조금 더 믿을 만한 모임을 할 수 있도록 준비했어요!";
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
      <body className="overflow-x-hidden">
        <Header />
        {device === "pc" && <MainLinkSection />}
        {device === "mobile" && <SideLinkSection />}
        {children}
        <Footer />
      </body>
    </html>
  );
}


