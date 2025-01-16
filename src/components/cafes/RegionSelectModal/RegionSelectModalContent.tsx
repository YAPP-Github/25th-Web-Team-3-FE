import { REGIONS } from '@/constants/region';
import type { Region } from '@/types';
import {
  closeButton,
  closeButtonWrapper,
  regionItem,
  regionSelectModalContent,
  regionSelectModalTitle,
} from './RegionSelectModal.css';
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
      <h1 className={regionSelectModalTitle}>지역별</h1>
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
      <div className={closeButtonWrapper}>
        <button className={closeButton} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}
