import { REGIONS } from '@/constants/region';
export interface Cafe {
  id: number;
  name: string;
  location: string;
  tags: { id: number; name: string }[];
  images: string[];
}

export type Region = (typeof REGIONS)[keyof typeof REGIONS];
