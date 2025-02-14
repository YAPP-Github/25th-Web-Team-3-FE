import { RecommendedCafe } from '@/apis/cafe';
import { ROUTE_PATH } from '@/constants/routePath';
import Image from 'next/image';
import Link from 'next/link';
import {
  cafeImage,
  cafeItem,
  cafeName,
  cafeNearestStation,
  recommendedCafeList,
} from './CafeRecommendation.css';

interface RecommendedCafeListProps {
  groupId: string;
  cafes: RecommendedCafe[];
}

export default function RecommendedCafeList({ groupId, cafes }: RecommendedCafeListProps) {
  return (
    <ul className={recommendedCafeList}>
      {cafes.map((cafe) => (
        <CafeItem key={`${groupId}-${cafe.id}`} cafe={cafe} />
      ))}
    </ul>
  );
}

function CafeItem({ cafe }: { cafe: RecommendedCafe }) {
  return (
    <li>
      <Link className={cafeItem} href={`${ROUTE_PATH.cafes}/${cafe.id}`}>
        <Image
          className={cafeImage}
          src={cafe.mainImage}
          width="140"
          height="140"
          alt={`${cafe.name} 이미지`}
        />
        <div>
          <p className={cafeName}>{cafe.name}</p>
          <p className={cafeNearestStation}>{cafe.nearestStation} 근처</p>
        </div>
      </Link>
    </li>
  );
}
