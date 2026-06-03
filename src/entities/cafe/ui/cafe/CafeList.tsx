import { Cafe } from '@/types/types';
import CafeItem from './CafeItem';
import { cafeListContainer } from './cafes.css';

interface CafeListProps {
  cafeList: Cafe[];
}

export default function CafeList({ cafeList }: CafeListProps) {
  return (
    <ul className={cafeListContainer}>
      {cafeList.map((cafe) => (
        <li key={cafe.cafeId}>
          <CafeItem cafe={cafe} />
        </li>
      ))}
    </ul>
  );
}
