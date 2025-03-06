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
export interface BookmarkCafe {
  id: string;
  name: string;
  mainImageUrl: string[];
  location: string;
  isBookmarked?: boolean;
}
