import { Region } from '@/types';
import Modal from '../../common/Modal';
import RegionSelectModalContent from './RegionSelectModalContent';

interface RegionSelectModalProps {
  isOpen: boolean;
  region: Region;
  setRegion: (value: Region) => void;
  onClose: () => void;
}

export default function RegionSelectModal({
  isOpen,
  region,
  setRegion,
  onClose,
}: RegionSelectModalProps) {
  return (
    <Modal title="지역별" isOpen={isOpen} onClose={onClose} position="bottom">
      <RegionSelectModalContent selectedRegion={region} setRegion={setRegion} onClose={onClose} />
    </Modal>
  );
}
