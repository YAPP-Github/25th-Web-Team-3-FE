import CafeRecommendation from '@/components/home/CafeRecommendation';
import HeroBanner from '@/components/home/HeroBanner';
import { pageContainer } from '@/components/home/Home.css';

export default function Home() {
  return (
    <div className={pageContainer}>
      <HeroBanner />
      <main>
        <CafeRecommendation />
      </main>
    </div>
  );
}
