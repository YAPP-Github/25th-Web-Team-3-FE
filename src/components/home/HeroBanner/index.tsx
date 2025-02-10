'use client';

import * as React from 'react';
import { bannerTypo, heroBanner } from './HeroBanner.css';
import BannerTypo from '@/assets/brewloungeBannerTypo.svg';
import BannerCarousel from './BannerCarousel';

// TODO: 실제 데이터를 받으면 대체 예정
const MOCK_BANNER_DATA = [
  {
    text: '브루라운지가 큐레이팅한, 가장 맛있는 한 잔.',
    image: 'https://github.com/user-attachments/assets/33c47a96-90a2-4f73-ba9a-002bf5523253',
  },
  {
    text: '브루라운지가 큐레이팅한, 가장 맛있는 두 잔.',
    image: 'https://github.com/user-attachments/assets/a229805a-e6e8-4b7b-9bba-b3bc132deaa0',
  },
  {
    text: '브루라운지가 큐레이팅한, 가장 맛있는 세 잔.',
    image: 'https://github.com/user-attachments/assets/33c47a96-90a2-4f73-ba9a-002bf5523253',
  },
  {
    text: '브루라운지가 큐레이팅한, 가장 맛있는 네 잔.',
    image: 'https://github.com/user-attachments/assets/a229805a-e6e8-4b7b-9bba-b3bc132deaa0',
  },
];

export default function HeroBanner() {
  return (
    <section className={heroBanner}>
      <BannerTypo className={bannerTypo} />
      <BannerCarousel banners={MOCK_BANNER_DATA} />
    </section>
  );
}
