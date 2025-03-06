import Modal from '@/components/common/Modal';
import AddListModalContents from './AddListMoadalContents';

interface AddListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddListModal({ isOpen, onClose }: AddListModalProps) {
  return (
    <Modal title="새 리스트 추가" isOpen={isOpen} onClose={onClose} position="bottom">
      <AddListModalContents onClose={onClose} />
    </Modal>
  );
}
