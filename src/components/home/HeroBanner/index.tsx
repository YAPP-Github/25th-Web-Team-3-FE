'use client';

import * as React from 'react';
import { bannerTypo, heroBanner } from './HeroBanner.css';
import BannerTypo from '@/shared/assets/brewloungeBannerTypo.svg';
import BannerCarousel from './BannerCarousel';
import introBannerImage from '@/shared/assets/introduce/intro-banner.jpg';

const MOCK_BANNER_DATA = [
  {
    text: '브루라운지가 큐레이팅한, 가장 맛있는 한 잔.',
    image: introBannerImage.src,
    linkTo: '/introduce',
  },
  {
    text: '브루라운지가 큐레이팅한, 가장 맛있는 두 잔.',
    image: introBannerImage.src,
    linkTo: '/introduce',
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
