'use client';
import React from 'react';
import useEmblaCarousel, { EmblaViewportRefType } from 'embla-carousel-react';

interface UseCafeCarouselReturn {
  carouselRef: EmblaViewportRefType;
  currentIndex: number;
}

export const useCafeCarousel = (): UseCafeCarouselReturn => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [carouselRef, carouselApi] = useEmblaCarousel();
  React.useEffect(() => {
    if (carouselApi)
      carouselApi.on('select', () => {
        setCurrentIndex(carouselApi.selectedScrollSnap);
      });
  }, [carouselApi]);
  return { carouselRef, currentIndex };
};
