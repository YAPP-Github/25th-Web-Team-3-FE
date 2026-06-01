import BrewloungeQR from '@/shared/ui/layout/BrewLoungeQR';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import QueryClientProviders from '../shared/config/QueryClientProviders';
import './globals.css';
import { body, bodyInnerWrapper, rootContainer } from './layout.css';
import GoogleAnalytics from '@/shared/lib/GoogleAnalytics';
import { SpeedInsights } from '@vercel/speed-insights/next';

const pretendard = localFont({
  src: '../shared/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

const gmarketSansTTF = localFont({
  src: '../shared/fonts/GmarketSansTTF/GmarketSansTTFBold.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BrewLounge',
  description: '맛있는 커피만을 선별하는 카페 큐레이션',
  other: {
    'format-detection': 'telephone=no',
  },
};

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gmarketSansTTF.className}`}>
      <body className={`${pretendard.className} ${body}`}>
        <div className={bodyInnerWrapper}>
          <div id="root" className={`${rootContainer}`}>
            {GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
            <QueryClientProviders>{children}</QueryClientProviders>
            <SpeedInsights />
            <div id="modal-root"></div>
          </div>
          <aside>
            <BrewloungeQR />
          </aside>
        </div>
      </body>
    </html>
  );
}
