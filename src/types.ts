import { REGIONS } from '@/constants/region';

export interface Cafe {
  cafeId: string;
  name: string;
  nearestStation: string;
  tags: { id: string; name: string }[];
  previewImages: string[];
}

export type Region = (typeof REGIONS)[keyof typeof REGIONS];
