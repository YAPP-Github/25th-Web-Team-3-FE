import CafeItem from './CafeItem';
import { cafeListContainer } from './cafes.css';
import { Cafe } from '@/types';

interface CafeListProps {
  cafeList: Cafe[];
}

export default function CafeList({ cafeList }: CafeListProps) {
  return (
    <ul className={cafeListContainer}>
      {cafeList.map((cafe) => (
        <li key={cafe.id}>
          <CafeItem cafe={cafe} />
        </li>
      ))}
    </ul>
  );
}
