import { Region } from '@/types';
import Modal from '../common/Modal';
import { REGIONS } from '../../constants/region';
import {
  closeButton,
  closeButtonWrapper,
  regionItem,
  regionSelectModalContent,
  regionSelectModalTitle,
} from './cafes.css';

interface RegionSelectModalProps {
  isOpen: boolean;
  setRegion: (value: Region) => void;
  onClose: () => void;
}

export default function RegionSelectModal({ isOpen, setRegion, onClose }: RegionSelectModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} position="bottom">
      <RegionSelectModalContent setRegion={setRegion} onClose={onClose} />
    </Modal>
  );
}

interface RegionSelectModalContentProps {
  setRegion: (region: Region) => void;
  onClose: () => void;
}

function RegionSelectModalContent({ setRegion, onClose }: RegionSelectModalContentProps) {
  return (
    <div className={regionSelectModalContent}>
      <h1 className={regionSelectModalTitle}>지역별</h1>
      <ul>
        {Object.values(REGIONS).map((region) => {
          return (
            <li
              key={region}
              onClick={() => {
                setRegion(region);
                onClose();
              }}
              className={regionItem}
            >
              {region}
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
