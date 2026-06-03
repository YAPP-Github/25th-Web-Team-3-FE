import { Cafe, CoffeeBean, Menu, Tag } from '@/types/types';

export interface CafeListResponse {
  cafes: Cafe[];
  hasNext: boolean;
}

export interface CafeRegion {
  code: string;
  displayName: string;
}

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
export interface CafeDetailResponse {
  cafe: CafeDetail;
  coffeeBean: CoffeeBean;
  menus: Menu[];
  tags: Tag[];
  updatedAt: string;
  description: string;
}

export interface CafeDetail extends Cafe {
  id: string;
  naverMapUrl: string;
  location: string;
  mainImageUrl: string[];
  reasonForSelection: string;
}
