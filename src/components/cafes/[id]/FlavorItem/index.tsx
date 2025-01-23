import HashTag from '@/components/common/HashTag';
import { dot, flavorItem, flavorList } from './FlavorItem.css';
import { FLAVOR_DATA } from '@/constants/flavor';

type FlavorCategory = keyof typeof FLAVOR_DATA | 'other';

const getFlavor = (name: string): FlavorCategory => {
  // 카테고리 이름이나 아이템 중 일치하는 것 찾기
  //1.[fruity, {name:'과일',color:...,itmes:['사과','딸기'...]}]형태로 변환
  //2. 1번째 요소인 {name:'과일',color:...,items:['사과',...]}의 items 배열의 접근하여 name이 있는지 확인!
  //3. name이 있으면 name을 가지고있는 0번째 요소인 Key값 반환! 아니면 'other' color로 반환!
  const matchedCategory = Object.entries(FLAVOR_DATA).find(([_, flavorValue]) => {
    return flavorValue.items.includes(name);
  });
  return matchedCategory ? (matchedCategory[0] as FlavorCategory) : 'other';
};

interface FlavorListProps {
  flavors: string[];
}

export default function FlavorList({ flavors }: FlavorListProps) {
  return (
    <ul className={flavorList}>
      {flavors.map((flavor) => {
        const category = getFlavor(flavor);

        return (
          <HashTag key={flavor}>
            <li className={flavorItem}>
              <div className={dot({ flavor: category })}></div>
              {flavor}
            </li>
          </HashTag>
        );
      })}
    </ul>
  );
}
