import HashTag from '@/components/common/HashTag';
import { dot, flavorItem, flavorList } from './FlavorItem.css';

type FlavorCategory =
  | 'green'
  | 'fruit'
  | 'floral'
  | 'sweet'
  | 'spices'
  | 'roasted'
  | 'sour'
  | 'nutty'
  | 'other';
interface Flavors {
  name: string;
  category: string;
}
interface FlavorListProps {
  flavors: Flavors[];
}

export default function FlavorList({ flavors }: FlavorListProps) {
  return (
    <ul className={flavorList}>
      {flavors.map((flavor) => {
        //api 응답 값 오타 수정 후 코드 수정 예정입니다!
        const category = flavor.category
          ? (flavor.category.toLowerCase() as FlavorCategory)
          : ('other' as FlavorCategory);
        return (
          <HashTag key={`${flavor.name}-${flavor.category}`}>
            <li className={flavorItem}>
              <div className={dot({ flavor: category })}></div>
              {flavor.name}
            </li>
          </HashTag>
        );
      })}
    </ul>
  );
}
