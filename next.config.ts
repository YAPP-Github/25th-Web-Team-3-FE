import type { NextConfig } from 'next';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // placehold.co 도메인 추가
        pathname: '/**', // 모든 경로 허용
      },
    ],
    dangerouslyAllowSVG: true, // SVG 허용
  },
};

export default withVanillaExtract(nextConfig);
