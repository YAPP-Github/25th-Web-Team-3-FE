import CafesPage from '@/components/cafes/CafesPage';
import { getRegionsFromData } from '@/lib/cafeData';

export default function Page() {
  const regions = getRegionsFromData();

  return <CafesPage availableRegions={regions} />;
}
