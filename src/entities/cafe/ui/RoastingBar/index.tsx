import { roastingBar, roastingSegment, roastingStatus, roastingText } from './RoastingBar.css';

type RoastingLevelType = 'light' | 'medium' | 'dark' | undefined;

export const RoastingBar = ({ activeLevel }: { activeLevel?: RoastingLevelType }) => {
  const currentRoastingLevel = activeLevel?.toLowerCase() as RoastingLevelType;
  return (
    <>
      <div className={roastingBar}>
        <div
          className={roastingSegment({
            roastingLevel: currentRoastingLevel === 'light' ? 'light' : undefined,
          })}
        ></div>
        <div
          className={roastingSegment({
            roastingLevel: currentRoastingLevel === 'medium' ? 'medium' : undefined,
          })}
        ></div>
        <div
          className={roastingSegment({
            roastingLevel: currentRoastingLevel === 'dark' ? 'dark' : undefined,
          })}
        ></div>
      </div>
      <div className={roastingStatus({ roastingLevel: currentRoastingLevel })}>
        <span className={roastingText({ roastingLevel: currentRoastingLevel === 'light' })}>
          라이트
        </span>
        <span className={roastingText({ roastingLevel: currentRoastingLevel === 'medium' })}>
          미디움
        </span>
        <span className={roastingText({ roastingLevel: currentRoastingLevel === 'dark' })}>
          다크
        </span>
      </div>
    </>
  );
};
