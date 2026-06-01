'use client';
import BookMarkIcon from '@/shared/assets/Icon/Navigation/bookmarkUsedNavigationIcon.svg';
import HomeIcon from '@/shared/assets/Icon/Navigation/homeIcon.svg';
import SearchCafesIcon from '@/shared/assets/Icon/Navigation/searchCafesIcon.svg';
import UnCheckedBookMarkIcon from '@/shared/assets/Icon/Navigation/unCheckedbookmarkUsedNavigationIcon.svg';
import UnCheckedHomeIcon from '@/shared/assets/Icon/Navigation/unCheckedHomeIcon.svg';
import UnCheckedSearchCafesIcon from '@/shared/assets/Icon/Navigation/unCheckedSearchCafesIcon.svg';
import { ROUTE_PATH } from '@/shared/config/constants/routePath';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BottomNavigationContainer,
  BottomNavigationItem,
  BottomNavigationList,
} from './BottomNavigaiton.css';

const navigationList = [
  {
    path: ROUTE_PATH.home,
    Icon: HomeIcon,
    UncheckedIcon: UnCheckedHomeIcon,
  },
  {
    path: ROUTE_PATH.cafes,
    Icon: SearchCafesIcon,
    UncheckedIcon: UnCheckedSearchCafesIcon,
  },
  {
    path: ROUTE_PATH.bookmarks,
    Icon: BookMarkIcon,
    UncheckedIcon: UnCheckedBookMarkIcon,
  },
];

export default function BottomNavigation() {
  const pathName = usePathname();

  const pageIconColor = (path: string) => pathName === path;

  return (
    <nav className={BottomNavigationContainer}>
      <ul className={BottomNavigationList}>
        {navigationList.map(({ path, Icon, UncheckedIcon }) => (
          <li key={path}>
            <Link href={path}>
              {pageIconColor(path) ? (
                <Icon className={BottomNavigationItem({ isCurrentPage: true })} />
              ) : (
                <UncheckedIcon className={BottomNavigationItem({ isCurrentPage: false })} />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
