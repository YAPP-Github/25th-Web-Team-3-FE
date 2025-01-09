'use client';

import { useState } from 'react';
import RegionSelectModal from '@/components/cafes/RegionSelectModal';
import CafeList from '@/components/cafes/CafeList';
import MOCK_CAFE_LIST from '@/mock/cafeList.json';
import type { Region } from '@/types';
import { REGIONS } from '@/constants/region';
import FilterButtons from '@/components/cafes/FilterButtons';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [region, setRegion] = useState<Region>(REGIONS.전체);

  const resetRegion = () => {
    setRegion('전체');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>현재 선택된 지역: {region}</div>
      <FilterButtons region={region} resetRegion={resetRegion} openModal={openModal} />
      <CafeList cafeList={MOCK_CAFE_LIST} />
      <RegionSelectModal isOpen={isModalOpen} setRegion={setRegion} onClose={closeModal} />
    </div>
  );
}
