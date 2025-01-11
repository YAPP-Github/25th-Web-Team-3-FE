'use client';

import { ReactNode } from 'react';
import { mapBtn } from './MapBtn.css';

export function MapBtn({ children }: { children: ReactNode }) {
  return (
    <button
      className={mapBtn}
      onClick={() => (window.location.href = `https://map.naver.com/p/search/${'헤베커피'}`)}
    >
      {children}
    </button>
  );
}
