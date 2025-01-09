import Modal from '../common/Modal';
import {
  closeButton,
  closeButtonWrapper,
  regionItem,
  regionSelectModalContent,
  regionSelectModalTitle,
} from './cafes.css';

interface RegionSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegionSelectModal({ isOpen, onClose }: RegionSelectModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} position="bottom">
      <RegionSelectModalContent onClose={onClose} />
    </Modal>
  );
}

function RegionSelectModalContent({ onClose }: { onClose: () => void }) {
  return (
    <div className={regionSelectModalContent}>
      <h1 className={regionSelectModalTitle}>지역별</h1>
      <ul>
        <li className={regionItem}>전체</li>
        <li className={regionItem}>지역명1</li>
        <li className={regionItem}>지역명2</li>
        <li className={regionItem}>지역명3</li>
      </ul>
      <div className={closeButtonWrapper}>
        <button className={closeButton} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}
