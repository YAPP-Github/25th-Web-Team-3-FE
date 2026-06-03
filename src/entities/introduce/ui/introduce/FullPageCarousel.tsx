'use client';

import useEmblaCarousel from 'embla-carousel-react';
import * as React from 'react';
import {
  carouselContainer,
  carouselSlide,
  carouselWrapper,
  progressBar,
  progressBarContainer,
} from './introduce.css';

const FullPageCarousel = Object.assign(BaseCarousel, { Slide: CarouselSlide });

export default FullPageCarousel;

export function BaseCarousel({ children }: React.PropsWithChildren) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const slideCount = React.Children.count(children);
  const [progressRate, setProgressRate] = React.useState((1 / slideCount) * 100);

  React.useEffect(() => {
    const updateProgressRate = () => {
      const currentIndex = (emblaApi?.selectedScrollSnap() || 0) + 1;

      setProgressRate((currentIndex / slideCount) * 100);
    };

    emblaApi?.on('select', updateProgressRate);

    return () => {
      emblaApi?.off('select', updateProgressRate);
    };
  }, [emblaApi, slideCount]);

  return (
    <div>
      <div className={progressBarContainer}>
        <div className={progressBar} style={{ width: `${progressRate}%` }}></div>
      </div>
      <div className={carouselContainer} ref={emblaRef}>
        <div className={carouselWrapper}>{children}</div>
      </div>
    </div>
  );
}

export function CarouselSlide({ children }: React.PropsWithChildren) {
  return <main className={carouselSlide}>{children}</main>;
}
