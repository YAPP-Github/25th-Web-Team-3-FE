import BottomNavigation from '@/shared/ui/BottomNavigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BottomNavigation />
    </>
  );
}
