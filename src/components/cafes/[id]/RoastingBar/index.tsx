import { roastingBar, roastingSegment, roastingStatus, roastingText } from './RoastingBar.css';

type RoastingLevelType = 'light' | 'medium' | 'dark' | undefined;

export const RoastingBar = ({ activeLevel }: { activeLevel: 'light' | 'medium' | 'dark' }) => {
  const roastingLevel = activeLevel.toLowerCase() as RoastingLevelType;
  return (
    <>
      <div className={roastingBar}>
        <div
          className={roastingSegment({
            isActive: roastingLevel === 'light' ? 'light' : undefined,
          })}
        ></div>
        <div
          className={roastingSegment({
            isActive: roastingLevel === 'medium' ? 'medium' : undefined,
          })}
        ></div>
        <div
          className={roastingSegment({
            isActive: roastingLevel === 'dark' ? 'dark' : undefined,
          })}
        ></div>
      </div>
      <div className={roastingStatus({ isActive: roastingLevel })}>
        <span className={roastingText({ isActive: roastingLevel === 'light' })}>라이트</span>
        <span className={roastingText({ isActive: roastingLevel === 'medium' })}>미디움</span>
        <span className={roastingText({ isActive: roastingLevel === 'dark' })}>다크</span>
      </div>
    </>
  );
};
