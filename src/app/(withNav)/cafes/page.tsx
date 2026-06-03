import { getCafeRegions } from '@/entities/cafe/api/api';
import CafesPage from '@/entities/cafe/ui/cafe/CafesPage';

export default async function Page() {
  const regions = await getCafeRegions();

  return <CafesPage availableRegions={regions} />;
}
