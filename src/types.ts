import { REGIONS } from '@/constants/region';
// cafe 와 detailCafe 모두 사용되는 부분이라 이렇게 재사용하면 어떨지!!??
export type Tag = { id: number; name: string };
export interface Cafe {
  cafeId: string;
  name: string;
  nearestStation: string;
  tags: { id: string; name: string }[];
  previewImages: string[];
}

export type Region = (typeof REGIONS)[keyof typeof REGIONS];

export interface Menu {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}
export interface CoffeeBean {
  id: string;
  cafe: Cafe;
  mainImages: string;
  name: string;
  imageUrl: string;
  flavor: string[];
  countryOfOrigin: string[];
  roastingPoint: string;
}
