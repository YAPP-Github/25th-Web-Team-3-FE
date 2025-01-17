import { type CafeListResponse, getCafes } from '@/apis/cafe';
import type { Region } from '@/types';
import { DefaultError, InfiniteData, useInfiniteQuery } from '@tanstack/react-query';

export const useInfiniteCafes = (region: Region) => {
  const queryResult = useInfiniteQuery<
    CafeListResponse,
    DefaultError,
    InfiniteData<CafeListResponse>,
    ['cafes', Region],
    string | undefined
  >({
    queryKey: ['cafes', region],
    queryFn: getCafes,
    getNextPageParam: getLastCafeId,
    initialPageParam: undefined,
    throwOnError: true,
  });

  return {
    ...queryResult,
    data: queryResult.data?.pages.flatMap((page) => page.result) || [],
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

  const lastCafeId = lastPage.result.at(-1)?.id;

  return lastCafeId;
}
