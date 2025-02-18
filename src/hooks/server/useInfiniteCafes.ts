import { type CafeListResponse, CafeRegion, getCafes } from '@/apis/cafe';
import { DefaultError, InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

export const useInfiniteCafes = (region: CafeRegion) => {
  const queryResult = useInfiniteQuery<
    CafeListResponse,
    DefaultError,
    InfiniteData<CafeListResponse>,
    ['cafes', string],
    string | undefined
  >({
    queryKey: ['cafes', region.displayName],
    queryFn: ({ pageParam }) => getCafes(region, pageParam),
    getNextPageParam: getLastCafeId,
    initialPageParam: undefined,
  });

  return {
    ...queryResult,
    data: queryResult.data?.pages.flatMap((page) => page.cafes) || [],
    fetchNextPage: () => {
      if (!queryResult.isLoading && !queryResult.isFetchingNextPage) {
        queryResult.fetchNextPage();
      }
    },
  };
};

function getLastCafeId(lastPage: CafeListResponse) {
  if (!lastPage.hasNext) {
    return;
  }

  const lastCafeId = lastPage.cafes.at(-1)?.cafeId;

  return lastCafeId;
}
