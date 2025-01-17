import { ROUTE_PATH } from '@/constants/routePath';
import type { Cafe, Region } from '@/types';
import type { QueryFunctionContext } from '@tanstack/react-query';

export interface CafeListResponse {
  result: Cafe[];
  hasNext: boolean;
}

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getCafes = async ({
  pageParam,
}: QueryFunctionContext<['cafes', Region], string | undefined>): Promise<CafeListResponse> => {
  const url = new URL(`${BASE_URL}${ROUTE_PATH.cafes}`);

  if (pageParam) {
    url.searchParams.append('lastCafeId', pageParam);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error('cafes를 불러오는 중 예기치 못한 오류가 발생했습니다.');
  }

  const data = await response.json();

  return data.data;
};
