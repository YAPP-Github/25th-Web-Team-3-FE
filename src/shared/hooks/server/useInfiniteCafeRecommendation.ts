import { CafeRecommendationResponse, getCafeRecommendation } from '@/apis/cafe';
import { DefaultError, InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

export const useInfiniteCafeRecommendation = () => {
  const queryResult = useInfiniteQuery<
    CafeRecommendationResponse,
    DefaultError,
    InfiniteData<CafeRecommendationResponse>,
    ['cafes', 'recommend'],
    string | undefined
  >({
    queryKey: ['cafes', 'recommend'],
    queryFn: getCafeRecommendation,
    initialPageParam: undefined,
    getNextPageParam: getLastGroupId,
  });

  return {
    ...queryResult,
    data: queryResult.data?.pages.flatMap((page) => page.groups) || [],
  };
};

function getLastGroupId(lastPage: CafeRecommendationResponse) {
  if (!lastPage.hasNext) {
    return;
  }

  const lastGroupId = lastPage.groups?.at(-1)?.groupId;

  return lastGroupId;
}
