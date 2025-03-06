import Modal from '@/components/common/Modal';
import SavedBookmarkListModalContents from './SavedBookmarkListModalContents';
import { BookmarkCafe } from '@/types/types';

interface SavedBookmarkListModalProps {
  cafe: BookmarkCafe;
  isOpen: boolean;
  onClose: () => void;
  showToast: (message:string,duration:number) => void;
}

export default function SavedBookmarkListModal({
  isOpen,
  onClose,
  cafe,
  showToast,
}: SavedBookmarkListModalProps) {
  return (
    <Modal title="북마크 저장" isOpen={isOpen} onClose={onClose} position="bottom">
      <SavedBookmarkListModalContents cafe={cafe} onClose={onClose} showToast={showToast} />
    </Modal>
  );
}
