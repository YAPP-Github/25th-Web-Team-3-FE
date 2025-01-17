import  HashTag  from '@/components/common/HashTag';
import { dot, flavorItem, flavorList } from './FlavorItem.css';
export interface FlavorListProps {
  fruity: string;
  floral: string;
  sweet: string;
  spices: string;
  roasted: string;
  green: string;
  sour: string;
  nutty: string;
  other: string;
}

export const FLAVOR_NAME = {
  fruity: '과일',
  floral: '꽃',
  sweet: '달콤한',
  spices: '향신료',
  roasted: '구운',
  green: '그린',
  sour: '시큼',
  nutty: '견과',
  other: '기타',
} as const;
export type Flavor = keyof typeof FLAVOR_NAME;

export default function FlavorList ({ flavors }: { flavors: Array<keyof FlavorListProps> })  {
  return (
    <ul className={flavorList}>
      {flavors.map((flavor) => (
        <HashTag key={flavor}>
          <li className={flavorItem}>
            <div className={dot({ flavor })}></div>
            {FLAVOR_NAME[flavor]}
          </li>
        </HashTag>
      ))}
    </ul>
  );
};
