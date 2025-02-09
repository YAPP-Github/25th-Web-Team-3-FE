import Image from 'next/image';
import {
  menuItemBox,
  menuItemContent,
  menuItemImg,
  menuItemList,
  menuItemTitleBox,
} from './MenuList.css';
import { divider } from '@/app/(detail)/cafes/[id]/page.css';
import { Menu } from '@/types';

interface MenuListProps {
  menus: Menu[];
}

export default function MenuList({ menus }: MenuListProps) {
  return (
    <ul className={menuItemList}>
      {menus.map((menuItem) => (
        <li key={menuItem.id} className={menuItemBox}>
          <div>
            <div className={menuItemTitleBox}>
              <div>{menuItem.name}</div>
              {menuItem.price === 0 ? '변동' : `${menuItem.price.toLocaleString()}원`}
            </div>
            <div className={divider}></div>
            <p className={menuItemContent}>{menuItem.description}</p>
          </div>
          <Image
            src={menuItem.imageUrl ? menuItem.imageUrl : 'https://placehold.co/600x400'}
            alt="이미지"
            width={244}
            height={244}
            className={menuItemImg}
          />
        </li>
      ))}
    </ul>
  );
}
