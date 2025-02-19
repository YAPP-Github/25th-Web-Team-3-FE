'use client'
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

export const useMenuCarousel = () => {
  const [carouselRef, carouselApi] = useEmblaCarousel();

  const logSlidesInview = () => {
    console.log(carouselApi?.slidesInView());
  };
  useEffect(() => {
    if (carouselApi) carouselApi.on('slidesInView', logSlidesInview);
  }, [carouselRef, carouselApi]);
  return { carouselRef };
};
