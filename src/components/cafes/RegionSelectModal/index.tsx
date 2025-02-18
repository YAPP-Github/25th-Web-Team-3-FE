import Modal from '../../common/Modal';
import RegionSelectModalContent from './RegionSelectModalContent';
import { CafeRegion } from '@/apis/cafe';

interface RegionSelectModalProps {
  isOpen: boolean;
  availableRegions: CafeRegion[];
  region: CafeRegion;
  setRegion: (value: CafeRegion) => void;
  onClose: () => void;
}

export default function RegionSelectModal({
  isOpen,
  availableRegions,
  region,
  setRegion,
  onClose,
}: RegionSelectModalProps) {
  return (
    <Modal title="지역별" isOpen={isOpen} onClose={onClose} position="bottom">
      <RegionSelectModalContent
        availableRegions={availableRegions}
        selectedRegion={region}
        setRegion={setRegion}
        onClose={onClose}
      />
    </Modal>
  );
}
