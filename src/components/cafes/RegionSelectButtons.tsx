import SelectButton from '../common/SelectButton';
import { selectButtonsContainer } from './cafes.css';
import { CafeRegion } from '@/apis/cafe';

interface RegionSelectButtonsProps {
  region: CafeRegion;
  resetRegion: () => void;
  openModal: () => void;
}

export default function RegionSelectButtons({
  region,
  resetRegion,
  openModal,
}: RegionSelectButtonsProps) {
  const is전체Selected = region.code === '';
  const isRegionSelected = !is전체Selected;

  return (
    <div className={selectButtonsContainer}>
      <SelectButton isSelected={is전체Selected} onClick={resetRegion}>
        전체
      </SelectButton>
      <SelectButton isSelected={isRegionSelected} hasIcon onClick={openModal}>
        {isRegionSelected ? region.displayName : '지역별'}
      </SelectButton>
    </div>
  );
}
