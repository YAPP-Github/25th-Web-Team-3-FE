'use client';

import { useState } from 'react';
import CafeList from '@/components/cafes/CafeList';
import type { Region } from '@/types';
import RegionSelectModal from '@/components/cafes/RegionSelectModal';
import RegionSelectButtons from '@/components/cafes/RegionSelectButtons';
import { REGIONS } from '@/constants/region';
import { useInfiniteCafes } from '@/hooks/server/useInfiniteCafes';
import { IntersectionDetector } from '@/components/common/IntersectionDetector';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [region, setRegion] = useState<Region>(REGIONS.전체);
  const { fetchNextPage, data } = useInfiniteCafes(region);

  const resetRegion = () => {
    setRegion(REGIONS.전체);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <RegionSelectButtons region={region} resetRegion={resetRegion} openModal={openModal} />
      <CafeList cafeList={data} />
      <IntersectionDetector onIntersected={fetchNextPage} />
      <RegionSelectModal
        isOpen={isModalOpen}
        region={region}
        setRegion={setRegion}
        onClose={closeModal}
      />
    </div>
  );
}
