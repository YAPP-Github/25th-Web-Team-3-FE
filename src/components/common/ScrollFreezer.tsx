import { useEffect, type PropsWithChildren } from 'react';

export default function ScrollFreezer({
  children,
  on = true,
}: PropsWithChildren<{ on?: boolean }>) {
  useEffect(() => {
    if (on) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [on]);

  return children;
}
