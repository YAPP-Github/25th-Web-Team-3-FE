export type Tag = { id: number; name: string; imageUrl?: string };

export interface Cafe {
  cafeId: string;
  name: string;
  nearestStation: string;
  tags: { id: string; name: string }[];
  previewImages: string[];
}

export interface Menu {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export interface Country {
  name: string;
  flagImageUrl: string;
}

export interface Flavors {
  name: string;
  category: string;
}

export interface CoffeeBean {
  id: string;
  cafe: Cafe;
  mainImages: string;
  name: string;
  engName: string;
  imageUrl: string;
  description: string;
  flavors: Flavors[];
  countryOfOrigin: Country[];
  roastingPoint: string;
}

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
