import { CafeRecommendationGroup } from '@/apis/cafe';
import RecommendedCafeList from './RecommendedCafeList';
import { cafeRecommendationItem, CafeRecommendationName } from './CafeRecommendation.css';

interface CafeRecommendationProps {
  cafeGroups: CafeRecommendationGroup[];
}

export default function CafeRecommendation({ cafeGroups }: CafeRecommendationProps) {
  return (
    <div>
      {cafeGroups.map(({ name, cafes }) => (
        <section className={cafeRecommendationItem} key={name}>
          <h2 className={CafeRecommendationName}>{name}</h2>
          <RecommendedCafeList groupName={name} cafes={cafes} />
        </section>
      ))}
    </div>
  );
}
