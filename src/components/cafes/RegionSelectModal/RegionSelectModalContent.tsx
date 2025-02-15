import { regionItem, regionSelectModalContent } from './RegionSelectModal.css';
import CheckIcon from '@/assets/checkIcon.svg';
import { CafeRegion } from '@/apis/cafe';

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
