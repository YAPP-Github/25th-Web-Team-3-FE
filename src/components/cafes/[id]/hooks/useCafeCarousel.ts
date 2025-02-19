'use client';
import useEmblaCarousel, { EmblaViewportRefType } from 'embla-carousel-react';
import { useEffect, useState } from 'react';

interface UseCafeCarouselReturn {
  carouselRef: EmblaViewportRefType;
  currentIndex: number;
}

export const useCafeCarousel = (): UseCafeCarouselReturn => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [carouselRef, carouselApi] = useEmblaCarousel();
  useEffect(() => {
    if (carouselApi)
      carouselApi.on('select', () => {
        setCurrentIndex(carouselApi.selectedScrollSnap);
      });
  }, [carouselApi]);
  return { carouselRef, currentIndex };
};
