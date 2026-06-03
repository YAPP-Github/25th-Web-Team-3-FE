'use client';

import React from 'react';
import CafeList from '@/entities/cafe/ui/cafe/CafeList';
import RegionSelectModal from '@/shared/ui/RegionSelectModal';
import RegionSelectButtons from '@/entities/cafe/ui/RegionSelectButtons/RegionSelectButtons';
import { useInfiniteCafes } from '@/shared/hooks/server/useInfiniteCafes';
import { IntersectionDetector } from '@/shared/ui/IntersectionDetector';

import { useRestoreScroll } from '@/shared/hooks/client/useRestoreScroll';
import { CafeRegion } from '../../model/types';
import { pageContainer } from './cafes.css';

interface CafesPageProps {
  availableRegions: CafeRegion[];
}

export default function CafesPage({ availableRegions }: CafesPageProps) {
  useRestoreScroll('cafes');

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [region, setRegion] = React.useState<CafeRegion>(availableRegions[0]);
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
