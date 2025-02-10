import { UseEmblaCarouselType } from 'embla-carousel-react';
import React from 'react';
import { autoplayProgress } from '../HeroBanner/HeroBanner.css';

type EmblaApi = UseEmblaCarouselType[1];

export const useCarouselProgress = (
  emblaApi: EmblaApi,
  progressBarRef: React.RefObject<HTMLElement>
) => {
  const timeoutIdRef = React.useRef(0);
  const rafIdRef = React.useRef(0);

  const setProgress = React.useCallback(
    (timeUntilNext: number | null) => {
      const element = progressBarRef?.current;

      if (!element) return;
      if (timeUntilNext === null) return;

      element.style.animationName = 'none';
      element.style.transform = 'translateX(-100%)';

      rafIdRef.current = window.requestAnimationFrame(() => {
        timeoutIdRef.current = window.setTimeout(() => {
          element.style.animationName = autoplayProgress;
          element.style.animationDuration = `${timeUntilNext}ms`;
        }, 0);
      });
    },
    [progressBarRef]
  );

  const startProgress = React.useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    setProgress(autoplay.timeUntilNext());
  }, [emblaApi, setProgress]);

  const pauseProgress = React.useCallback(() => {
    const element = progressBarRef?.current;

    if (element) {
      progressBarRef.current.style.animationPlayState = 'paused';
    }
  }, [progressBarRef]);

  const resumeProgress = React.useCallback(() => {
    const element = progressBarRef?.current;
    if (element) {
      progressBarRef.current.style.animationPlayState = 'running';
    }
  }, [progressBarRef]);

  React.useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    startProgress();

    emblaApi.on('autoplay:timerset', startProgress);
    emblaApi.on('pointerDown', pauseProgress);
    emblaApi.on('pointerUp', resumeProgress);

    return () => {
      emblaApi.off('autoplay:timerset', startProgress);
      emblaApi.off('pointerDown', pauseProgress);
      emblaApi.off('pointerUp', resumeProgress);
      cancelAnimationFrame(rafIdRef.current);
      clearTimeout(timeoutIdRef.current);
    };
  }, [emblaApi, startProgress, pauseProgress, resumeProgress]);
};
