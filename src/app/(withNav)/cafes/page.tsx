import { getCafeRegions } from '@/entities/cafe/api/api';
import CafesPage from '@/widgets/cafe-list/ui/CafesPage';

export default async function Page() {
  const regions = await getCafeRegions();

  return <CafesPage availableRegions={regions} />;
}
