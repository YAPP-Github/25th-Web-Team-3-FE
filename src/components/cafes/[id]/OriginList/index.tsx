import Brazil from '@/assets/Icon/brazil.svg';
import { orginItem, originList } from './OriginList.css';
import HashTag from '@/components/common/HashTag';

interface OriginProps {
  origins: { id: number; countryOfOrigin: string }[];
}

export default function OriginList({ origins }: OriginProps) {
  return (
    <ul className={originList}>
      {origins.map((item) => (
        <HashTag key={item.id}>
          <li className={orginItem}>
            <Brazil />
            {item.countryOfOrigin}
          </li>
        </HashTag>
      ))}
    </ul>
  );
}
