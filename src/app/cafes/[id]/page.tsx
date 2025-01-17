import Image from 'next/image';
import { HashTag } from '@/components/common/HashTag';
import { MenuList } from '@/components/cafes/[id]/MenuItem';
import {
  cafesDetailMain,
  divider,
  header,
  pickReason,
  pickReasonBox,
  recoCoffeeBeanBox,
  subTitle,
  title,
  titleImg,
  toggleBox,
  toggleContent,
  toggleInput,
  toggleLabel,
} from './page.css';
import { scrollContainer } from '@/components/cafes/[id]/MenuItem/MenuItem.css';
import { MapBtn } from '@/components/cafes/[id]/MapBtn';
import ChevronLeft from '@/assets/icon/Chevron_Left.svg';
import Bookmark from '@/assets/icon/Bookmark.svg';
import DETAIL_MENU from '@/mock/detail.json';
import { RoastingBar } from '@/components/cafes/[id]/RoastingBar';

import OriginList from '@/components/cafes/[id]/OriginList';
import { FlavorList, FlavorListProps } from '@/components/cafes/[id]/FlavorItem';
import Footer from '@/components/cafes/[id]/Footer';

export default async function Page() {
  return (
    <>
      <header className={header}>
        <ChevronLeft />
        <Bookmark />
      </header>
      <div className={title}>
        <h1>
          {DETAIL_MENU.title}
          <span>{DETAIL_MENU.place}</span>
        </h1>
        <div>
          <div>{DETAIL_MENU.detailplace}</div>
          <MapBtn />
        </div>
      </div>
      <Image
        src={'https://placehold.co/600x400'}
        alt={`1번 카페의 이미지`}
        width={600}
        height={400}
        className={titleImg}
      />
      <main className={cafesDetailMain}>
        {/* 선정 이유 */}
        <section>
          <h2 className={subTitle}>선정 이유</h2>
          <article className={pickReasonBox}>
            <p className={pickReason}>{DETAIL_MENU.reason}</p>
            <div className={divider}></div>
            <HashTag />
          </article>
        </section>
        {/* 대표 원두 */}
        <section>
          <h2 className={subTitle}>대표 원두</h2>
          <article className={recoCoffeeBeanBox}>
            <div>
              <h3>{DETAIL_MENU.recocoffebeans.title_eng}</h3>
              <input
                type="checkbox"
                id="toggle"
                className={toggleInput}
                aria-expanded="false"
                aria-controls="toggle-content"
              />
              <div className={toggleBox}>
                <h3>{DETAIL_MENU.recocoffebeans.title}</h3>
                <label htmlFor="toggle" className={toggleLabel}>
                  <ChevronLeft />
                </label>
              </div>
              <div className={divider}></div>
              <div id="toggle-content" className={toggleContent}>
                <p>{DETAIL_MENU.recocoffebeans.feature}</p>
              </div>
            </div>
            <div>
              <h3>향미</h3>
              <FlavorList
                flavors={DETAIL_MENU.recocoffebeans.flavor as (keyof FlavorListProps)[]}
              />
            </div>
            <div>
              <h3>산지</h3>
              <OriginList origins={DETAIL_MENU.recocoffebeans.origins} />
            </div>
            <div>
              <h3>로스팅 포인트</h3>
              <RoastingBar
                activeLevel={DETAIL_MENU.recocoffebeans.loast_point as 'medium' | 'light' | 'dark'}
              />
            </div>
          </article>
        </section>
        {/* 대표 메뉴 */}
        <section>
          <h2 className={subTitle}>대표 메뉴</h2>
          <div className={scrollContainer}>
            <MenuList menu={DETAIL_MENU.recoMenu} />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
