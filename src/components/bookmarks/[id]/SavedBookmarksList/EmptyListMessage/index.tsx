import { ROUTE_PATH } from '@/constants/routePath';
import { nonListButton, nonListContents, nonListText, nonListTitle } from './EmptyListMessage.css';
import { useRouter } from 'next/navigation';

export default function EmptyListMessage() {
  const router = useRouter();

  return (
    <div className={nonListContents}>
      <h2 className={nonListTitle}>저장된 카페가 없어요</h2>
      <p className={nonListText}>마음에 드는 카페를 지정해보세요</p>
      <button className={nonListButton} onClick={() => router.push(ROUTE_PATH.cafes)}>
        카페 둘러보기
      </button>
    </div>
  );
}
