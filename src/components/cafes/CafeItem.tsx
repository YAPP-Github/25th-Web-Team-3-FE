import Image from 'next/image';
import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/routePath';
import type { Cafe } from '@/types';
import {
  cafeImage,
  cafeImageList,
  overflowCafeImageCount,
  cafeImageWrapper,
  cafeItemHeading,
  cafeItemName,
  cafeLocation,
  tagList,
  temporaryTag,
} from './cafes.css';

interface CafeItemProps {
  cafe: Cafe;
}

export default function CafeItem({ cafe }: CafeItemProps) {
  const { id, name, location, tags, images } = cafe;

  return (
    <Link href={`${ROUTE_PATH.cafes}/${id}`}>
      <div>
        <div className={cafeItemHeading}>
          <div className={cafeItemName}>{name}</div>
          <div className={cafeLocation}>{location}</div>
        </div>
        <div className={tagList}>
          {tags.map((tag, index) => (
            <TemporaryTag key={`${name}-tag-${index}`} name={tag.name} />
          ))}
        </div>
        <CafeImageList cafeName={name} images={images} />
      </div>
    </Link>
  );
}

const MAX_IMAGE_COUNT = 3;

function CafeImageList({ cafeName, images }: { cafeName: string; images: string[] }) {
  const overflowImageCount = images.length - MAX_IMAGE_COUNT;
  const isOverflow = overflowImageCount > 0;

  const slicedImages = images.slice(0, MAX_IMAGE_COUNT);

  return (
    <div className={cafeImageList}>
      {slicedImages.map((src, index) => (
        <div className={cafeImageWrapper} key={`${cafeName}-image-${index}`}>
          <Image fill className={cafeImage} alt={`${cafeName} ${index + 1}번째 사진`} src={src} />
        </div>
      ))}
      {isOverflow && <div className={overflowCafeImageCount}>+{overflowImageCount}</div>}
    </div>
  );
}

// 유빈 공통 컴포넌트 구현 뒤 대체 예정
function TemporaryTag({ name }: { name: string }) {
  return <div className={temporaryTag}>{name}</div>;
}
