import Image from 'next/image';
import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/routePath';
import type { Cafe } from '@/types/types';
import {
  cafeImage,
  cafeImageList,
  overflowCafeImageCount,
  cafeImageWrapper,
  cafeItemHeading,
  cafeItemName,
  cafeLocation,
  tagList,
} from './cafes.css';
import HashTag from '../common/HashTag';

interface CafeItemProps {
  cafe: Cafe;
}

export default function CafeItem({ cafe }: CafeItemProps) {
  const { cafeId, name, nearestStation, tags, previewImages } = cafe;

  return (
    <Link href={`${ROUTE_PATH.cafes}/${cafeId}`}>
      <div>
        <div className={cafeItemHeading}>
          <div className={cafeItemName}>{name}</div>
          <div className={cafeLocation}>{nearestStation}역</div>
        </div>
        <div className={tagList}>
          {tags?.map((tag, index) => (
            <HashTag key={`${name}-tag-${index}`}>{tag.name}</HashTag>
          ))}
        </div>
        <CafeImageList cafeName={name} images={previewImages} />
      </div>
    </Link>
  );
}

const MAX_IMAGE_COUNT = 3;
const DEFAULT_CAFE_IMAGE = 'https://placehold.co/200x200?text=Coffee Lounge';

function CafeImageList({ cafeName, images }: { cafeName: string; images: string[] }) {
  const overflowImageCount = images.length - MAX_IMAGE_COUNT;
  const isOverflow = overflowImageCount > 0;

  const isEmpty = images.length === 0;

  const displayingImages = isEmpty ? [DEFAULT_CAFE_IMAGE] : images.slice(0, MAX_IMAGE_COUNT);

  return (
    <div className={cafeImageList}>
      {displayingImages.map((src, index) => (
        <div className={cafeImageWrapper} key={`${cafeName}-image-${index}`}>
          <Image fill className={cafeImage} alt={`${cafeName} ${index + 1}번째 사진`} src={src} />
        </div>
      ))}
      {isOverflow && <div className={overflowCafeImageCount}>+{overflowImageCount}</div>}
    </div>
  );
}
