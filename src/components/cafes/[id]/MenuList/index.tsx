'use client';
import Image from 'next/image';
import {
  menuItemBox,
  menuItemContent,
  menuItemImg,
  menuItemList,
  menuItemTitleBox,
  scrollContainer,
} from './MenuList.css';
import { divider, menuListSection, subTitle } from '@/app/(withoutNav)/cafes/[id]/page.css';
import { Menu } from '@/types';
import { useCafeCarousel } from '../hooks/useCafeCarousel';


interface MenuListProps {
  menus: Menu[];
}

export default function MenuList({ menus }: MenuListProps) {

  const { carouselRef } = useCafeCarousel();

  return (
    <section className={menuListSection}>
      <h2 className={subTitle}>대표 메뉴</h2>
      <div className={scrollContainer} ref={carouselRef}>
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
      </div>
    </section>
  );
}
