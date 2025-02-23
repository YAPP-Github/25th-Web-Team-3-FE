'use client';

import { Cafe } from '@/components/bookmarks/BookmarkList/hooks/useBookmarkList';

import dynamic from 'next/dynamic';
interface BookMarkButtonWrapperProps {
  cafe: Cafe;
}

const DynamicBookMarkButton = dynamic(
  () => import('@/components/cafes/[id]/BookMarkButton/index'),
  { ssr: false }
);

export default function BookMarkButtonWrapper({ cafe }: BookMarkButtonWrapperProps) {
  return <DynamicBookMarkButton cafe={cafe} />;
}
