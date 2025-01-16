import { roastingBar, roastingSegment, roastingStatus } from './RoastingBar.css';

export const RoastingBar = ({ activeLevel }: { activeLevel: 'light' | 'medium' | 'dark' }) => (
  <>
    <div className={roastingBar}>
      <div
        className={roastingSegment({
          roastedLevel: activeLevel === 'light' ? 'light' : undefined,
        })}
      ></div>
      <div
        className={roastingSegment({
          roastedLevel: activeLevel === 'medium' ? 'medium' : undefined,
        })}
      ></div>
      <div
        className={roastingSegment({
          roastedLevel: activeLevel === 'dark' ? 'dark' : undefined,
        })}
      ></div>
    </div>
    <div className={roastingStatus({ roastedLevel: activeLevel })}>
      <span>라이트</span>
      <span>미디움</span>
      <span>다크</span>
    </div>
  </>
);
