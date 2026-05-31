import type { CafeListResponse, CafeRegion } from '@/apis/cafe';
import type { CafeDetailResponse } from '@/apis/cafeDetail';
import cafesJson from '../../public/data/cafes.json';
import areasJson from '../../public/data/areas.json';

/**
 * SSG/빌드용 데이터 접근 — public/data 의 정적 JSON 을 직접 읽는다.
 * 클라이언트 런타임 fetch(`@/apis/*`)와 달리 HTTP·외부 서버에 의존하지 않으므로
 * `next build`(generateStaticParams·서버 컴포넌트)가 자급자족으로 통과한다.
 */

const REGION_ALL: CafeRegion = { displayName: '전체', code: '' };

export function getCafeListFromData(): CafeListResponse {
  return {
    cafes: cafesJson as unknown as CafeListResponse['cafes'],
    hasNext: false,
  };
}

export function getRegionsFromData(): CafeRegion[] {
  const { areas } = areasJson as { areas: CafeRegion[] };
  return [REGION_ALL, ...areas];
}

export async function getCafeDetailFromData(id: string): Promise<CafeDetailResponse> {
  // 템플릿 리터럴 import → 번들러가 details/*.json 전체를 컨텍스트로 포함시켜
  // 빌드·런타임 모두 fs 없이 동작한다 (Vercel serverless에서도 안전).
  const mod = await import(`../../public/data/details/${id}.json`);
  return (mod.default ?? mod) as CafeDetailResponse;
}
