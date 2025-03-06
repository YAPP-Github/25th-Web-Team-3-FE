import { ROUTE_PATH } from '@/constants/routePath';
import type { Cafe } from '@/types/types';
import type { QueryFunctionContext } from '@tanstack/react-query';

export interface CafeListResponse {
  cafes: Cafe[];
  hasNext: boolean;
}

export interface CafeRegion {
  code: string;
  displayName: string;
}

export const getCafes = async (
  region?: CafeRegion,
  pageParam?: string
): Promise<CafeListResponse> => {
  const params = new URLSearchParams();

  if (region?.code) params.append('area', region.code);
  if (pageParam) params.append('lastCafeId', pageParam);

  const query = params.toString() ? `?${params.toString()}` : '';

  const data = await get<{ data: CafeListResponse }>(`${ROUTE_PATH.cafes}${query}`);

  return data.data;
};

export interface CafeRecommendationResponse {
  groups: CafeRecommendationGroup[];
  hasNext: boolean;
}

export interface CafeRecommendationGroup {
  name: string;
  groupId: string;
  cafes: RecommendedCafe[];
}

export interface RecommendedCafe {
  id: string;
  mainImage: string;
  name: string;
  nearestStation: string;
}

export const getCafeRecommendation = async ({
  pageParam,
}: QueryFunctionContext<
  ['cafes', 'recommend'],
  string | undefined
>): Promise<CafeRecommendationResponse> => {
  const query = pageParam ? `?lastGroupId=${pageParam}` : '';

  const data = await get<{ data: CafeRecommendationResponse }>(
    `${ROUTE_PATH.cafeRecommendation}${query}`
  );

  return data.data;
};

const REGION_전체 = { displayName: '전체', code: '' };

export const getCafeRegions = async () => {
  const data = await get<{ data: { areas: CafeRegion[] } }>('/cafes/areas');

  return [REGION_전체, ...data.data.areas];
};

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function get<T>(path: string): Promise<T> {
  const url = `${BASE_URL}${path}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
  }

  return response.json();
}
