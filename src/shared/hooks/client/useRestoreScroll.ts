import React from 'react';

export const useRestoreScroll = (key: string | number) => {
  const scrollRef = React.useRef<number>();

  React.useEffect(() => {
    const traceScroll = (e: Event) => {
      requestAnimationFrame(() => {
        const target = e.target as HTMLElement;
        scrollRef.current = target.scrollTop;
      });
    };

    document.getElementById('root')!.addEventListener('scroll', traceScroll);

    return () => {
      document.getElementById('root')!.removeEventListener('scroll', traceScroll);
      (function saveScrollPosition() {
        sessionStorage.setItem(`scroll-${key}`, String(scrollRef.current));
      })();
    };
  }, [key]);

  React.useEffect(() => {
    const restoreScrollPosition = () => {
      const savedScroll = sessionStorage.getItem(`scroll-${key}`);

      if (savedScroll && savedScroll !== 'undefined') {
        document.getElementById('root')!.scrollTo(0, parseInt(savedScroll, 10));
      }
    };

    restoreScrollPosition();
  }, [key]);
};
