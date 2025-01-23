import { ROUTE_PATH } from '@/constants/routePath';
import { Cafe, CoffeeBean, Menu, Tag } from '@/types';

interface CafeDetail extends Cafe {
  location: string;
  mainImages: string;
}
interface CafeDetailResponse {
  cafe: CafeDetail;
  coffeeBean: CoffeeBean;
  menu: Menu[];
  tag: Tag[];
  updatedAt: string;
  description: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getCafeDetail = async (id: string): Promise<CafeDetailResponse> => {
  const url = `${BASE_URL}/details/${id}`;
  const response = await fetch(url);
  // if (!response.ok) throw new Error('카페 상세페이지를 불러오는 도중 에러가 발생하였습니다!');

  const data = await response.json();
  console.log(data);
  return data.result;
};
