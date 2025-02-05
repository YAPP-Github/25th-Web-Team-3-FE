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
  const slideCount = React.Children.count(children);

  const { containerRef, progressRate } = useCarousel(slideCount, CAROUSEL_AUTOPLAY_DELAY);

  return (
    <div className={`embla ${carousel}`} ref={containerRef}>
      <ol className={`embla__container ${carouselWrapper}`}>{children}</ol>
      <div className={progressBarContainer}>
        <div className={progressBar} style={{ width: `${progressRate}%` }}></div>
      </div>
    </div>
  );
}

function CarouselSlide({ children }: React.PropsWithChildren) {
  return <li className={`embla__slide ${carouselSlide}`}>{children}</li>;
}
