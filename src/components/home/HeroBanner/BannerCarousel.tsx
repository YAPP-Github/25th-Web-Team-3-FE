'use client';

import Image from 'next/image';
import React from 'react';
import { bannerDescription, bannerText, carouselImage, carouselSnap } from './HeroBanner.css';
import Carousel from './Carousel';

export default function BannerCarousel({
  banners,
}: {
  banners: { text: string; image: string }[];
}) {
  return (
    <Carousel>
      {banners.map((banner) => (
        <Carousel.Slide key={banner.text}>
          <div className={carouselSnap}>
            <Image
              className={carouselImage}
              src={banner.image}
              alt={banner.text}
              width="269"
              height="268"
            />
            <div className={bannerDescription}>
              <span className={bannerText}>{banner.text}</span>
              {/* TODO: 슬라이드 순서를 표시하는 영역은 디자인 픽스 후 추가하겠습니다. */}
              {/*
              <span className={bannerOrder}>
                {currentOrder}
                <span className={bannerLength}>/{banners.length}</span>
              </span>
              */}
            </div>
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
