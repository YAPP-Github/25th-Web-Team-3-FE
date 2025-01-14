import { REGIONS } from '@/constants/region';
import type { Region } from '@/types';
import SelectButton from '../common/SelectButton';
import { selectButtonsContainer } from './cafes.css';

interface RegionSelectButtonsProps {
  region: Region;
  resetRegion: () => void;
  openModal: () => void;
}

export default function RegionSelectButtons({
  region,
  resetRegion,
  openModal,
}: RegionSelectButtonsProps) {
  const is전체Selected = region === REGIONS.전체;
  const isRegionSelected = !is전체Selected;

  return (
    <div className={selectButtonsContainer}>
      <SelectButton isSelected={is전체Selected} onClick={resetRegion}>
        {REGIONS.전체}
      </SelectButton>
      <SelectButton isSelected={isRegionSelected} hasIcon onClick={openModal}>
        {isRegionSelected ? region : '지역별'}
      </SelectButton>
    </div>
  );
}
