export interface Cafe {
  id: number;
  name: string;
  location: string;
  tags: { id: number; name: string }[];
  images: string[];
}
