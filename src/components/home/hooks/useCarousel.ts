import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { type EmblaViewportRefType } from 'embla-carousel-react';
import React from 'react';
import { useCarouselProgress } from './useCarouselProgress';

interface UseCarouselReturn {
  containerRef: EmblaViewportRefType;
  progressBarRef: React.RefObject<HTMLDivElement>;
}

export const useCarousel = (autoPlayDelay: number): UseCarouselReturn => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: autoPlayDelay }),
  ]);
  const progressBarRef = React.useRef<HTMLDivElement>(null);
  useCarouselProgress(emblaApi, progressBarRef);

  React.useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const restartAutoplay = () => {
      if (emblaApi) {
        emblaApi.plugins()?.autoplay?.play();
      }
    };

    emblaApi.on('pointerUp', restartAutoplay);

    return () => {
      emblaApi.off('pointerUp', restartAutoplay);
    };
  }, [emblaApi]);

  return {
    containerRef: emblaRef,
    progressBarRef,
  };
};
