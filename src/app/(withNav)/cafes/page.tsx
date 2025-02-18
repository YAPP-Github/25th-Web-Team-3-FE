import { getCafeRegions } from '@/apis/cafe';
import CafesPage from '@/components/cafes/CafesPage';

export default async function Page() {
  const regions = await getCafeRegions();

  return <CafesPage availableRegions={regions} />;
}
