'use client';
import Image from 'next/image';
import { useCafeCarousel } from '../hooks/useCafeCarousel';
import {
  mainImageCarouselAllNumber,
  mainImageCarouselContainer,
  mainImageCarouselCounts,
  mainImageCarouselCurrentNumber,
  mainImageCarouselListItem,
  mainImageCarousellList,
  titleImg,
} from './MainImageCarousel.css';
import React from 'react';

interface MainImageUrl {
  mainImageUrl: string[];
  blurImageUrl: string;
}

const DEFAULT_CAFE_MAIN_IMAGE = 'https://placehold.co/600x400?text=Cafe1';

export default function MainImageCarousel({ mainImageUrl,blurImageUrl }: MainImageUrl) {
  const { carouselRef, currentIndex } = useCafeCarousel();

  return (
    <div ref={carouselRef} className={mainImageCarouselContainer}>
      <ul className={mainImageCarousellList}>
        {mainImageUrl.map((imageUrl, index) => (
          <li className={mainImageCarouselListItem} key={index}>
            <Image
              src={imageUrl || DEFAULT_CAFE_MAIN_IMAGE}
              alt={`${index} 번의 카페 이미지`}
              width={375}
              height={260}
              className={titleImg}
              placeholder="blur"
              blurDataURL={blurImageUrl}
            />
            <div className={mainImageCarouselCounts}>
              <span className={mainImageCarouselCurrentNumber}>{currentIndex + 1}</span>
              <span className={mainImageCarouselAllNumber}> / {mainImageUrl.length}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
