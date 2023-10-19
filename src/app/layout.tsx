import { cn } from '@/utils';
import { getDevice } from '@/utils/getdevice';
import type { Metadata } from 'next';
import { PropsWithChildren, Suspense } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainLinkSection from './components/Header/MainLinkSection';
import SideLinkSection from './components/Header/SideLinkSection';
import './globals.css';
import Analytics from '@/components/Analytics';
import { config } from '@/config';

const DEFAULT_OG_TITLE = '2023 월출산국화축제';
const DEFAULT_OG_DESC = `깊어가는 가을을 맞아 '국화, 빛으로 피어나다!'라는 주제로 개최되는 이번 축제는 23종, 24만여점의 다양한 국화작품을 전시와 함께 남녀노소 누구나 즐길 수 있는 풍성하고 다채로운 프로그램을 선보일 예정이다. 특히, 축제장 곳곳에 특색있는 야간 포토존 및 조형물 등을 설치하여 야간에도 이색적인 조명 속, 빛으로 물든 아름다운 국화를 감상할 수 있다. 10월 28일부터 11월 12일까지 월출산 기찬랜드에서 개최되는 2023 월출산 국화축제에서는 1억송이 국화가 뿜어내는 짙은 가을의 향기를 느낄 수 있다.`;
const DEFAULT_OG_IMAGE = '/images/main_image.png';

export const metadata: Metadata = {
  metadataBase: new URL(config.baseUrl),
  title: {
    template: `${DEFAULT_OG_TITLE} / %s `,
    default: DEFAULT_OG_TITLE,
  },
  description: DEFAULT_OG_DESC,
  openGraph: {
    title: DEFAULT_OG_TITLE,
    description: DEFAULT_OG_DESC,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
    siteName: DEFAULT_OG_TITLE,
    url: config.baseUrl,
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
        <div
          className={cn('w-screen', {
            'overflow-hidden': device === 'mobile',
            'overflow:flex overflow:justify-center': device === 'pc',
          })}
        >
          <div className={cn({ 'min-w-1000 max-w-1400': device === 'pc' })}>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
