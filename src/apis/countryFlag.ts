export interface CountryFlagItem {
  content_ty: null | string;
  country_eng_nm: string;
  country_iso_alp2: string;
  country_nm: string;
  download_url: string;
  origin_file_nm: string | null;
}

interface CountryFlagResponse {
  response: {
    body: {
      dataType: string;
      items: {
        item: CountryFlagItem[];
      };
    };
  };
}
// 한번의 불러올 데이터 양 (제공하는 최대 나라 수)
const SOME_MEANINGFUL_COUNT = 220 as const;

export const getCountryFlag = async (): Promise<CountryFlagItem[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_COUNTRYFLAG_API_URL}?ServiceKey=${process.env.COUNTRYFLAG_SERVICE_KEY}&numOfRows=${SOME_MEANINGFUL_COUNT}`
  );

  if (!response.ok) throw new Error('국기 이미지 불러오는데 실패하였습니다!');

  const data: CountryFlagResponse = await response.json();

  return data.response.body.items.item;
};
