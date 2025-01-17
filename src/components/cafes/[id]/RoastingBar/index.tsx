import { roastingBar, roastingSegment, roastingStatus } from './RoastingBar.css';

export const RoastingBar = ({ activeLevel }: { activeLevel: 'light' | 'medium' | 'dark' }) => (
  <>
    <div className={roastingBar}>
      <div
        className={roastingSegment({
          isActive: activeLevel === 'light' ? 'light' : undefined,
        })}
      ></div>
      <div
        className={roastingSegment({
          isActive: activeLevel === 'medium' ? 'medium' : undefined,
        })}
      ></div>
      <div
        className={roastingSegment({
          isActive: activeLevel === 'dark' ? 'dark' : undefined,
        })}
      ></div>
    </div>
    <div className={roastingStatus({ isActive: activeLevel })}>
      <span>라이트</span>
      <span>미디움</span>
      <span>다크</span>
    </div>
  </>
);
