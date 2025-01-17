import { useEffect, useState } from 'react';

type TargetSetter = (target: Element | null) => void;

const useIntersectionObserver = (onIntersected: () => void): TargetSetter => {
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onIntersected();
        }
      },
      {
        root: document.getElementById('root'),
        rootMargin: '200px',
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [target, onIntersected]);

  return setTarget;
};

export default useIntersectionObserver;
