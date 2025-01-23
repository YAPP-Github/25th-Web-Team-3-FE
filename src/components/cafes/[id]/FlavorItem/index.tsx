import HashTag from '@/components/common/HashTag';
import { dot, flavorItem, flavorList } from './FlavorItem.css';
import { FLAVOR_DATA } from '@/constants/flavor';

type FlavorCategory = keyof typeof FLAVOR_DATA | 'other';

const findFlavorCategory = (flavorName: string): FlavorCategory => {
  if (flavorName in FLAVOR_DATA) {
    return flavorName as keyof typeof FLAVOR_DATA;
  }

  for (const [category, data] of Object.entries(FLAVOR_DATA)) {
    if (data.items.includes(flavorName)) {
      return category as keyof typeof FLAVOR_DATA;
    }
  }

  return 'other';
};

interface FlavorListProps {
  flavors: string[];
}

export default function FlavorList({ flavors }: FlavorListProps) {
  return (
    <ul className={flavorList}>
      {flavors.map((flavor) => {
        const category = findFlavorCategory(flavor);

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
