'use client';

import { useState } from 'react';
import CafeList from '@/components/cafes/CafeList';
import RegionSelectModal from '@/components/cafes/RegionSelectModal';
import RegionSelectButtons from '@/components/cafes/RegionSelectButtons';
import { useInfiniteCafes } from '@/hooks/server/useInfiniteCafes';
import { IntersectionDetector } from '@/components/common/IntersectionDetector';
import { pageContainer } from '@/components/cafes/cafes.css';
import { useRestoreScroll } from '@/hooks/useRestoreScroll';
import { CafeRegion } from '@/apis/cafe';

interface CafesPageProps {
  availableRegions: CafeRegion[];
}

export default function CafesPage({ availableRegions }: CafesPageProps) {
  useRestoreScroll('cafes');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [region, setRegion] = useState<CafeRegion>(availableRegions[0]);
  const { fetchNextPage, data, hasNextPage } = useInfiniteCafes(region);

  const resetRegion = () => {
    setRegion(availableRegions[0]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={pageContainer}>
      <RegionSelectButtons region={region} resetRegion={resetRegion} openModal={openModal} />
      <CafeList cafeList={data} />
      <IntersectionDetector onIntersected={fetchNextPage} isOff={!hasNextPage} />
      <RegionSelectModal
        availableRegions={availableRegions}
        isOpen={isModalOpen}
        region={region}
        setRegion={setRegion}
        onClose={closeModal}
      />
    </div>
  );
}
