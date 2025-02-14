'use client';

import RecommendedCafeList from './RecommendedCafeList';
import { cafeRecommendationItem, CafeRecommendationName } from './CafeRecommendation.css';
import { useInfiniteCafeRecommendation } from '@/hooks/server/useInfiniteCafeRecommendation';
import { IntersectionDetector } from '@/components/common/IntersectionDetector';
import { useRestoreScroll } from '@/hooks/useRestoreScroll';

export default function CafeRecommendation() {
  useRestoreScroll('home');
  const { data: cafeGroups, fetchNextPage, hasNextPage } = useInfiniteCafeRecommendation();

  return (
    <main>
      {cafeGroups.map(({ groupId, name, cafes }) => (
        <section className={cafeRecommendationItem} key={groupId}>
          <h2 className={CafeRecommendationName}>{name}</h2>
          <RecommendedCafeList groupId={groupId} cafes={cafes} />
          <IntersectionDetector onIntersected={fetchNextPage} isOff={!hasNextPage} />
        </section>
      ))}
    </main>
  );
}
