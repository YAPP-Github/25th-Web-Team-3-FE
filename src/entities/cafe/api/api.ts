import { ROUTE_PATH } from '@/shared/config/constants/routePath';
import type { QueryFunctionContext } from '@tanstack/react-query';
import {
  CafeDetailResponse,
  CafeListResponse,
  CafeRecommendationResponse,
  CafeRegion,
} from '../model/types';
async function get<T>(path: string, options?: RequestInit): Promise<T> {
  const url = `${BASE_URL}${path}`;

  const response = await fetch(url, options ? options : {});

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

export const getCafes = async (
  region?: CafeRegion,
  pageParam?: string,
): Promise<CafeListResponse> => {
  const params = new URLSearchParams();

  if (region?.code) params.append('area', region.code);
  if (pageParam) params.append('lastCafeId', pageParam);

  const query = params.toString() ? `?${params.toString()}` : '';

  const data = await get<{ data: CafeListResponse }>(`${ROUTE_PATH.cafes}${query}`);

  return data.data;
};

export const getCafeRecommendation = async ({
  pageParam,
}: QueryFunctionContext<
  ['cafes', 'recommend'],
  string | undefined
>): Promise<CafeRecommendationResponse> => {
  const query = pageParam ? `?lastGroupId=${pageParam}` : '';

  const data = await get<{ data: CafeRecommendationResponse }>(
    `${ROUTE_PATH.cafeRecommendation}${query}`,
  );

  return data.data;
};

const REGION_전체 = { displayName: '전체', code: '' };

export const getCafeRegions = async () => {
  const data = await get<{ data: { areas: CafeRegion[] } }>('/cafes/areas');

  return [REGION_전체, ...data.data.areas];
};

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getCafeDetail = async (
  id: string,
  revalidate: number,
): Promise<CafeDetailResponse> => {
  const url = `${ROUTE_PATH.cafesDetail}/${id}`;

  const data = await get<{ data: CafeDetailResponse }>(url, {
    next: { revalidate: revalidate },
  });

  return data.data;
};
