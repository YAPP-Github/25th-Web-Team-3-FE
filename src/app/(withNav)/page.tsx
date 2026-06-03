import CafeRecommendation from '@/entities/cafe/ui/CafeRecommendation';
import HeroBanner from '@/shared/ui/HeroBanner';
import { pageContainer } from '@/app/(withNav)/Home.css';

export default function Home() {
  return (
    <div className={pageContainer}>
      <HeroBanner />
      <CafeRecommendation />
    </div>
  );
}
