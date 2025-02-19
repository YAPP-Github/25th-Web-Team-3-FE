import { getCafeDetail } from '@/apis/cafeDetail';
import ChevronLeft from '@/assets/Icon/Chevron_Left.svg';
import BackButton from '@/components/cafes/[id]/BackButton';
import BookMarkButton from '@/components/cafes/[id]/BookMarkButton';
import FlavorList from '@/components/cafes/[id]/FlavorItem';
import Footer from '@/components/cafes/[id]/Footer';
import IconWithHashTag from '@/components/cafes/[id]/IconWithHashTag';
import MapButton from '@/components/cafes/[id]/MapButton';
import MenuList from '@/components/cafes/[id]/MenuList';
import { scrollContainer } from '@/components/cafes/[id]/MenuList/MenuList.css';
import OriginList from '@/components/cafes/[id]/OriginList';
import { RoastingBar } from '@/components/cafes/[id]/RoastingBar';
import Image from 'next/image';
import {
  beanCardTitle,
  cafesDetailMain,
  cafesIdLayout,
  coffeeBeanSection,
  divider,
  header,
  menuListSection,
  pickReason,
  pickReasonBox,
  pickReasonSection,
  recoCoffeeBeanBox,
  subTitle,
  title,
  titleImg,
  toggleBox,
  toggleContent,
  toggleInput,
  toggleLabel,
} from './page.css';

const DEFAULT_CAFE_MAIN_IMAGE = 'https://placehold.co/600x400?text=Cafe1';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const detailPageId = (await params).id;

  const data = await getCafeDetail(detailPageId);
  const { cafe, coffeeBean, menus, updatedAt, tags } = data;

  return (
    <div className={cafesIdLayout}>
      <header className={header}>
        <BackButton />
        <BookMarkButton cafe={cafe} />
      </header>
      <div className={title}>
        <div>
          <h1>{cafe.name}</h1>
          <div>{cafe.location}</div>
        </div>
        <MapButton naverMapUrl={cafe.naverMapUrl} />
      </div>
      <Image
        src={cafe.mainImageUrl[0] ? cafe.mainImageUrl[0] : DEFAULT_CAFE_MAIN_IMAGE}
        alt={`1번 카페의 이미지`}
        width={600}
        height={400}
        className={titleImg}
      />
      <main className={cafesDetailMain}>
        <section className={pickReasonSection}>
          <h2 className={subTitle}>선정 이유</h2>
          <article className={pickReasonBox}>
            <div className={pickReason}>{cafe.reasonForSelection}</div>
            <div className={divider}></div>
            <IconWithHashTag tags={tags} />
          </article>
        </section>
        <section className={coffeeBeanSection}>
          <h2 className={subTitle}>대표 원두</h2>
          <article className={recoCoffeeBeanBox}>
            <div>
              <div className={beanCardTitle}>{coffeeBean.engName.toUpperCase()}</div>
              <input
                type="checkbox"
                id="toggle"
                className={toggleInput}
                aria-expanded="false"
                aria-controls="toggle-content"
              />
              <div className={toggleBox}>
                <h3>{coffeeBean.name}</h3>
                <label htmlFor="toggle" className={toggleLabel}>
                  <ChevronLeft width={24} height={24} />
                </label>
              </div>
              <div className={divider}></div>
              <div id="toggle-content" className={toggleContent}>
                <p>{coffeeBean.description}</p>
              </div>
            </div>
            <div>
              <h3>향미</h3>
              <FlavorList flavors={coffeeBean.flavors} />
            </div>
            <div>
              <h3>산지</h3>
              <OriginList countryOfOrigin={coffeeBean.countryOfOrigin} />
            </div>
            <div>
              <h3>로스팅 포인트</h3>
              <RoastingBar activeLevel={coffeeBean.roastingPoint as 'medium' | 'light' | 'dark'} />
            </div>
          </article>
        </section>
        <MenuList menus={menus} />
      </main>
      <Footer updatedDate={updatedAt} />
    </div>
  );
}
