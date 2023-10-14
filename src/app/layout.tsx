import { cn } from '@/utils';
import { getDevice } from '@/utils/getdevice';
import type { Metadata } from 'next';
import { PropsWithChildren, Suspense } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainLinkSection from './components/Header/MainLinkSection';
import SideLinkSection from './components/Header/SideLinkSection';
import './globals.css';
import { BASE_WEB_URL } from '@/constants';
import Analytics from '@/components/Analytics';

const DEFAULT_OG_TITLE = '2023 월출산국화축제';
const DEFAULT_OG_DESC = '2023 월출산국화축제';
const DEFAULT_OG_IMAGE = '/images/main_logo.png';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_WEB_URL),
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
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  other: {
    'google-site-verification': '_wjQIw1jKiIQ5ZSQ9rChkLwbUXzy8ootBWLuClcnNUU',
    'naver-site-verification': '5b6bd47d800bcd7af5934122259c7694362726ab',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  const device = getDevice();
  return (
    <html lang="ko">
      <body
        className={cn('font-[BMJUA]', {
          'min-w-1000': device === 'pc',
        })}
      >
        <Suspense>
          <Analytics />
        </Suspense>
        <Header />
        {device === 'pc' && <MainLinkSection />}
        {device === 'mobile' && <SideLinkSection />}
        <div className="w-screen pc-overflow:flex pc-overflow:justify-center">
          <div className="pc:min-w-1000 pc:max-w-1400">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
