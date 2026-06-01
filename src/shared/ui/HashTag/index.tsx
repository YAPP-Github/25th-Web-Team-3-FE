import { ReactNode } from 'react';
import { hashtag } from './HashTag.css';

export default function HashTag({ children }: { children: ReactNode }) {
  return <div className={hashtag}>{children}</div>;
}
