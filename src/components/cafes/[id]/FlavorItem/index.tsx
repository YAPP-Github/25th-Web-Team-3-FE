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

export const flavorNames: FlavorListProps = {
  fruity: '과일',
  floral: '꽃',
  sweet: '달콤한',
  spices: '향신료',
  roasted: '구운',
  green: '그린',
  sour: '시큼',
  nutty: '견과',
  other: '기타',
};

// FlavorList 컴포넌트 수정
export const FlavorList = ({ flavors }: { flavors: Array<keyof FlavorListProps> }) => {
  return (
    <ul className={flavorList}>
      {flavors.map((flavor) => (
        <li key={flavor} className={flavorItem}>
          <span className={dot({ flavor })}></span>
          {flavorNames[flavor]}
        </li>
      ))}
    </ul>
  );
};
