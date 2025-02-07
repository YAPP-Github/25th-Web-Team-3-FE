'use client';
import ChevronLeft from '@/assets/Icon/Chevron_Left.svg';
import { useRouter } from 'next/navigation';
import { backButton } from './BackButton.css';
export default function BackButton() {
  const router = useRouter();
  return (
    <div className={backButton}>
      <ChevronLeft width={32} height={32} onClick={() => router.back()} />
    </div>
  );
}
