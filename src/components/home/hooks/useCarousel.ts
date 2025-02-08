import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { type EmblaViewportRefType } from 'embla-carousel-react';
import React from 'react';

interface UseCarouselReturn {
  containerRef: EmblaViewportRefType;
  progressRate: number;
}

export const useCarousel = (slideCount: number, autoPlayDelay: number): UseCarouselReturn => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: autoPlayDelay }),
  ]);
  const [currentOrder, setCurrentOrder] = React.useState(1);

  const progressRate = slideCount === 0 ? 0 : Math.ceil((currentOrder / slideCount) * 100);

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

  React.useEffect(() => {
    const updateCurrentOrder = () => {
      if (emblaApi) {
        const order = emblaApi.selectedScrollSnap() + 1;

        setCurrentOrder(order);
      }
    };

    emblaApi?.on('select', updateCurrentOrder);

    return () => {
      emblaApi?.off('select', updateCurrentOrder);
    };
  }, [emblaApi]);

  return {
    containerRef: emblaRef,
    progressRate,
  };
};
