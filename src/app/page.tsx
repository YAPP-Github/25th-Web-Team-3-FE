'use client';

import CafeRecommendation from '@/components/home/CafeRecommendation';
import { useInfiniteCafeRecommendation } from '@/hooks/server/useInfiniteCafeRecommendation';

export default function Home() {
  const { data: cafeGroups } = useInfiniteCafeRecommendation();

  return (
    <div>
      <CafeRecommendation cafeGroups={cafeGroups} />
    </div>
  );
}
