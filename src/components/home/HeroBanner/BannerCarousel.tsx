'use client';

import Image from 'next/image';
import React from 'react';
import {
  bannerDescription,
  bannerLength,
  bannerOrder,
  bannerText,
  carouselImage,
  carouselSnap,
} from './HeroBanner.css';
import Carousel from './Carousel';

export default function BannerCarousel({
  banners,
}: {
  banners: { text: string; image: string }[];
}) {
  return (
    <Carousel>
      {banners.map((banner, index) => (
        <Carousel.Slide key={banner.text}>
          <div className={carouselSnap}>
            <Image
              className={carouselImage}
              src={banner.image}
              alt={banner.text}
              width="316"
              height="316"
            />
            <span className={bannerOrder}>
              {index + 1}
              <span className={bannerLength}> / {banners.length}</span>
            </span>
          </div>
          <div className={bannerDescription}>
            <span className={bannerText}>{banner.text}</span>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
