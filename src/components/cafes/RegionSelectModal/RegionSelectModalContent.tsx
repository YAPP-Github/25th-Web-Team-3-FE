import { REGIONS } from '@/constants/region';
import type { Region } from '@/types';
import { regionItem, regionSelectModalContent } from './RegionSelectModal.css';
import CheckIcon from '@/assets/checkIcon.svg';

interface RegionSelectModalContentProps {
  selectedRegion: Region;
  setRegion: (region: Region) => void;
  onClose: () => void;
}

export default function RegionSelectModalContent({
  selectedRegion,
  setRegion,
  onClose,
}: RegionSelectModalContentProps) {
  const regions = Object.values(REGIONS);

  return (
    <div className={regionSelectModalContent}>
      <ul>
        {regions.map((region) => {
          const isSelected = region === selectedRegion;

          const handleClickRegionItem = () => {
            setRegion(region);
            onClose();
          };

          return (
            <li key={region} className={regionItem({ isSelected })} onClick={handleClickRegionItem}>
              {region}
              {isSelected && <CheckIcon />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
