import Image from 'next/image';
import { HashTag } from '@/components/common/HashTag';
import { MenuItem } from '@/components/cafes/[id]/MenuItem';
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
import { menuItemList, scrollContainer } from '@/components/cafes/[id]/MenuItem/MenuItem.css';
import { MapBtn } from '@/components/cafes/[id]/MapBtn';
import Chevron_Left from '@/assets/icon/Chevron_Left.svg';
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
        <Image src={Chevron_Left} alt="뒤로가기 아이콘" />
        <Image src={Bookmark} alt="북마크 아이콘" />
      </header>
      <div className={title}>
        <h1>
          {DETAIL_MENU.title}
          <span>{DETAIL_MENU.place}</span>
        </h1>
        <data>
          <div>{DETAIL_MENU.detailplace}</div>
          <MapBtn />
        </data>
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
          <h1 className={subTitle}>선정 이유</h1>
          <article className={pickReasonBox}>
            <p className={pickReason}>{DETAIL_MENU.reason}</p>
            <div className={divider}></div>
            <HashTag />
          </article>
        </section>
        {/* 대표 원두 */}
        <section>
          <h1 className={subTitle}>대표 원두</h1>
          <article className={recoCoffeeBeanBox}>
            <div>
              <h2>{DETAIL_MENU.recocoffebeans.title_eng}</h2>
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
                  <Image src={Chevron_Left} alt="토글 버튼" />
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
          <h1 className={subTitle}>대표 메뉴</h1>
          <div className={scrollContainer}>
            <ul className={menuItemList}>
              <MenuItem menu={DETAIL_MENU.recoMenu} />
            </ul>
          </div>
        </section>
      <Footer />
      </main>
    </>
  );
}
