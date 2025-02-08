'use client';

import RecommendedCafeList from './RecommendedCafeList';
import { cafeRecommendationItem, CafeRecommendationName } from './CafeRecommendation.css';
import { useInfiniteCafeRecommendation } from '@/hooks/server/useInfiniteCafeRecommendation';
import { IntersectionDetector } from '@/components/common/IntersectionDetector';

export default function CafeRecommendation() {
  const { data: cafeGroups, fetchNextPage } = useInfiniteCafeRecommendation();

  return (
    <main>
      {cafeGroups.map(({ name, cafes }, index) => (
        <section className={cafeRecommendationItem} key={`${name}-${index}`}>
          <h2 className={CafeRecommendationName}>{name}</h2>
          <RecommendedCafeList groupName={name} cafes={cafes} />
          <IntersectionDetector onIntersected={fetchNextPage} />
        </section>
      ))}
    </main>
  );
}
