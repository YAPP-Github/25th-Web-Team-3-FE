import HashTag from '@/components/common/HashTag';
import { dot, flavorItem, flavorList } from './FlavorItem.css';
import { FLAVOR_DATA } from '@/constants/flavor';

type FlavorCategory = keyof typeof FLAVOR_DATA | 'other';

const getFlavor = (name: string): FlavorCategory => {
  const matchedCategory = Object.entries(FLAVOR_DATA).find((entry) => {
    return entry[1].items.includes(name);
  });
  return matchedCategory ? (matchedCategory[0] as FlavorCategory) : 'other';
};
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
        const category = getFlavor(flavor.name);
        return (
          <HashTag key={flavor.category}>
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
