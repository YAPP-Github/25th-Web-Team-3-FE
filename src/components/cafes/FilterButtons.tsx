import { REGIONS } from '@/constants/region';
import type { Region } from '@/types';
import { RegionFilterButton } from './cafes.css';

interface FilterButtonsProps {
  region: Region;
  resetRegion: () => void;
  openModal: () => void;
}

export default function FilterButtons({ region, resetRegion, openModal }: FilterButtonsProps) {
  const is전체Selected = region === REGIONS.전체;

  return (
    <div>
      <button className={getRegionFilterButtonStyle(is전체Selected)} onClick={resetRegion}>
        전체
      </button>
      <button className={getRegionFilterButtonStyle(!is전체Selected)} onClick={openModal}>
        지역별
      </button>
    </div>
  );
}

function getRegionFilterButtonStyle(isSelect: boolean) {
  return isSelect ? RegionFilterButton.isSelected : RegionFilterButton.default;
}
