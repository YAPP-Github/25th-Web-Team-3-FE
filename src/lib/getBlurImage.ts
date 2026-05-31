import { getPlaiceholder } from 'plaiceholder';

// 1x1 투명 PNG — 이미지를 못 받아왔을 때 placeholder="blur" 가 요구하는 유효한 blurDataURL 폴백.
const FALLBACK_BLUR =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

const getBlurImg = async (imgSrc: string): Promise<string> => {
  try {
    const buffer = await fetch(imgSrc).then(async (res) => Buffer.from(await res.arrayBuffer()));
    const { base64 } = await getPlaiceholder(buffer);
    return base64;
  } catch {
    // 빌드 시점에 외부 이미지(예: 만료된 Google Photos URL)를 못 받아도
    // 페이지 전체 빌드가 깨지지 않도록 폴백 반환.
    return FALLBACK_BLUR;
  }
};

export default getBlurImg;
