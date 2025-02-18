import BrewloungeQR from '@/components/layout/BrewLoungeQR';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { body, bodyInnerWrapper, rootContainer } from './layout.css';
import Providers from './providers';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

const gmarketSansTTF = localFont({
  src: '../fonts/GmarketSansTTF/GmarketSansTTFBold.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BrewLounge',
  description: '맛있는 커피만을 선별하는 카페 큐레이션',
};

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
            <Providers>{children}</Providers>
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
