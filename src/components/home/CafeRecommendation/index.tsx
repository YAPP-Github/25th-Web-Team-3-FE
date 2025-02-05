'use client';

import RecommendedCafeList from './RecommendedCafeList';
import { cafeRecommendationItem, CafeRecommendationName } from './CafeRecommendation.css';
import { useInfiniteCafeRecommendation } from '@/hooks/server/useInfiniteCafeRecommendation';

export default function CafeRecommendation() {
  // TODO: 서버 데이터 추가 후 무한 스크롤 기능 활성화 예정입니다.
  const { data: cafeGroups } = useInfiniteCafeRecommendation();

  return (
    <main>
      {cafeGroups.map(({ name, cafes }) => (
        <section className={cafeRecommendationItem} key={name}>
          <h2 className={CafeRecommendationName}>{name}</h2>
          <RecommendedCafeList groupName={name} cafes={cafes} />
        </section>
      ))}
    </main>
  );
}
