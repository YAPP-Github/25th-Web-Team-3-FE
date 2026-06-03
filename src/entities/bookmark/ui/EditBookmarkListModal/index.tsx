import Modal from '@/shared/ui/Modal';
import EditBookmarkListModalContents from './EditBookmarkListModalContents';

interface EditListModalProps {
  id: string | null;
  isOpen: boolean;
  onClose: () => void;
  folderName: string;
}
export default function EditListModal({ isOpen, onClose, id, folderName }: EditListModalProps) {
  return (
    <Modal
      title={`'${folderName}' 폴더를 삭제하시겠습니까?`}
      isOpen={isOpen}
      onClose={onClose}
      closeButton={false}
    >
      <EditBookmarkListModalContents onClose={onClose} id={id} />
    </Modal>
  );
}
