import Image from 'next/image';
import Link from 'next/link';
import { ROUTE_PATH } from '@/constants/routePath';
import type { Cafe } from '@/types';
import { cafeImageList, cafeItemHeading, cafeItemName, tagList, temporaryTag } from './cafes.css';

interface CafeItemProps {
  cafe: Cafe;
}

export default function CafeItem({ cafe }: CafeItemProps) {
  const { id, name, location, tags, images } = cafe;

  return (
    <Link href={`${ROUTE_PATH.cafe}/${id}`}>
      <div>
        <div className={cafeItemHeading}>
          <div className={cafeItemName}>{name}</div>
          <div>{location}</div>
        </div>
        <div className={tagList}>
          {tags.map((tag, index) => (
            <TemporaryTag key={`${name}-tag-${index}`} name={tag.name} />
          ))}
        </div>
        <div className={cafeImageList}>
          {images.map((src, index) => (
            <Image
              key={`${name}-image-${index}`}
              alt={`${name} ${index + 1}번째 사진`}
              src={src}
              height="200"
              width="200"
            />
          ))}
        </div>
      </div>
    </Link>
  );
}

// 유빈 공통 컴포넌트 구현 뒤 대체 예정
function TemporaryTag({ name }: { name: string }) {
  return <div className={temporaryTag}>{name}</div>;
}
