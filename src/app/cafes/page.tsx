'use client';

import { useState } from 'react';
import CafeList from '@/components/cafes/CafeList';
import MOCK_CAFE_LIST from '@/mock/cafeList.json';
import type { Region } from '@/types';
import RegionSelectModal from '@/components/cafes/RegionSelectModal';
import RegionSelectButtons from '@/components/cafes/RegionSelectButtons';
import { REGIONS } from '@/constants/region';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [region, setRegion] = useState<Region>(REGIONS.전체);

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
      <CafeList cafeList={MOCK_CAFE_LIST} />
      <RegionSelectModal
        isOpen={isModalOpen}
        region={region}
        setRegion={setRegion}
        onClose={closeModal}
      />
    </div>
  );
}
