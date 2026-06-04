import { regionItem, regionSelectModalContent } from './RegionSelectModal.css';
import CheckIcon from '@/shared/assets/checkIcon.svg';
import type { CafeRegion } from '@/entities/cafe/model/types';

interface RegionSelectModalContentProps {
  availableRegions: CafeRegion[];
  selectedRegion: CafeRegion;
  setRegion: (region: CafeRegion) => void;
  onClose: () => void;
}

export default function RegionSelectModalContent({
  availableRegions,
  selectedRegion,
  setRegion,
  onClose,
}: RegionSelectModalContentProps) {
  return (
    <div className={regionSelectModalContent}>
      <ul>
        {availableRegions.map((region) => {
          const isSelected = region.code === selectedRegion.code;

          const handleClickRegionItem = () => {
            setRegion(region);
            onClose();
          };

          return (
            <li
              key={region.displayName}
              className={regionItem({ isSelected })}
              onClick={handleClickRegionItem}
            >
              {region.displayName}
              {isSelected && <CheckIcon />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
