import React from 'react';

type TargetSetter = (target: Element | null) => void;

const useIntersectionObserver = (onIntersected: () => void): TargetSetter => {
  const [target, setTarget] = React.useState<Element | null>(null);

  React.useEffect(() => {
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
  }, [target]);

  return setTarget;
};

export default useIntersectionObserver;
