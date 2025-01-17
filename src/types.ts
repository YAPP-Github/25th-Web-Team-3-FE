import { REGIONS } from '@/constants/region';
export interface Cafe {
  id: string;
  name: string;
  nearestStation: string;
  tag: { id: number; name: string }[];
  previewImages: string[];
}

export type Region = (typeof REGIONS)[keyof typeof REGIONS];
