import CafeItem from '@/components/cafes/CafeItem';
import MOCK_CAFE_LIST from '@/mock/cafeList.json';
import { cafeList } from './page.css';

export default function page() {
  return (
    <ol className={cafeList}>
      {MOCK_CAFE_LIST.map((cafe) => (
        <li key={cafe.id}>
          <CafeItem cafe={cafe} />
        </li>
      ))}
    </ol>
  );
}
