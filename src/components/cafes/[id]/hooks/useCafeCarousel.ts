'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

export const useCafeCarousel = () => {
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
