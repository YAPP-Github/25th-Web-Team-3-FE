'use client';
import Image from 'next/image';
import { useCafeCarousel } from '../hooks/useCafeCarousel';
import {
  MainImageCarouselAllNumber,
  MainImageCarouselContainer,
  MainImageCarouselCounts,
  MainImageCarouselCurrentNumber,
  MainImageCarouselListItem,
  MainImageCarousellList,
  titleImg,
} from './MainImageCarousel.css';

interface MainImageUrl {
  mainImageUrl: string[];
}
const DEFAULT_CAFE_MAIN_IMAGE = 'https://placehold.co/600x400?text=Cafe1';
export default function MainImageCarousel({ mainImageUrl }: MainImageUrl) {
  const { carouselRef, currentIndex } = useCafeCarousel();
  return (
    <div ref={carouselRef} className={MainImageCarouselContainer}>
      <ul className={MainImageCarousellList}>
        {mainImageUrl.map((imageUrl, index) => (
          <li className={MainImageCarouselListItem} key={index}>
            <Image
              src={imageUrl ? imageUrl : DEFAULT_CAFE_MAIN_IMAGE}
              alt={`1번 카페의 이미지`}
              width={375}
              height={260}
              className={titleImg}
            />
            <div className={MainImageCarouselCounts}>
              <span className={MainImageCarouselCurrentNumber}>{currentIndex + 1}</span>
              <span className={MainImageCarouselAllNumber}> / {mainImageUrl.length}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
