import { getCafes } from '@/entities/cafe/api/api';
import { getCafeDetail } from '@/entities/cafe/api/api';
import ChevronLeft from '@/shared/assets/Icon/Chevron_Left.svg';
import BackButton from '@/entities/cafe/ui/BackButton';
import BookMarkButton from '@/features/bookmark/ui/BookMarkButton';
import FlavorList from '@/entities/cafe/ui/FlavorItem';
import Footer from '@/entities/cafe/ui/Footer';
import IconWithHashTag from '@/entities/cafe/ui/IconWithHashTag';
import MainImageCarousel from '@/entities/cafe/ui/MainImageCarousel';
import MapButton from '@/features/open-map/ui/MapButton';
import MenuList from '@/entities/cafe/ui/MenuList';
import OriginList from '@/entities/cafe/ui/OriginList';
import { RoastingBar } from '@/entities/cafe/ui/RoastingBar';
import { CAFE_DETAIL_REVALIDATE_TIME } from '@/shared/config/constants/revalidateTime';
import {
  beanCardTitle,
  cafesDetailMain,
  cafesIdLayout,
  coffeeBeanSection,
  divider,
  header,
  pickReason,
  pickReasonBox,
  pickReasonSection,
  recoCoffeeBeanBox,
  subTitle,
  title,
  toggleBox,
  toggleContent,
  toggleInput,
  toggleLabel,
} from './page.css';
import getBlurImg from '@/shared/api/getBlurImage';

interface PageId {
  id: string;
}

export async function generateStaticParams(): Promise<PageId[]> {
  const cafesResponse = await getCafes();
  const { cafes } = cafesResponse;
  return cafes.map((cafe) => ({
    id: cafe.cafeId,
  }));
}

export default async function Page({ params }: { params: Promise<PageId> }) {
  const detailPageId = (await params).id;

  const { cafe, coffeeBean, menus, updatedAt, tags } = await getCafeDetail(
    detailPageId,
    CAFE_DETAIL_REVALIDATE_TIME,
  );

  const blurDataUrl = await getBlurImg(cafe.mainImageUrl[0]);

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
      <MainImageCarousel mainImageUrl={cafe.mainImageUrl} blurImageUrl={blurDataUrl} />

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
