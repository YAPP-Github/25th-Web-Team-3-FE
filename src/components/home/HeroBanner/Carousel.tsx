'use client';

import React from 'react';
import {
  carousel,
  carouselSlide,
  carouselWrapper,
  progressBar,
  progressBarContainer,
} from './HeroBanner.css';
import { useCarousel } from '../hooks/useCarousel';

const CAROUSEL_AUTOPLAY_DELAY = 3_000;

const Carousel = Object.assign(BaseCarousel, { Slide: CarouselSlide });

export default Carousel;

function BaseCarousel({ children }: React.PropsWithChildren) {
  if (React.Children.count(children) === 0) {
    throw new Error('캐러셀이 비어 있습니다.');
  }

  const { containerRef, progressBarRef } = useCarousel(CAROUSEL_AUTOPLAY_DELAY);

  return (
    <div className={`${carousel}`} ref={containerRef}>
      <ol className={`embla__container ${carouselWrapper}`}>{children}</ol>
      <div className={progressBarContainer}>
        <div ref={progressBarRef} className={progressBar}></div>
      </div>
    </div>
  );
}

function CarouselSlide({ children }: React.PropsWithChildren) {
  return <li className={` ${carouselSlide}`}>{children}</li>;
}
