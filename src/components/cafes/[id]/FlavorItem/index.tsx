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
