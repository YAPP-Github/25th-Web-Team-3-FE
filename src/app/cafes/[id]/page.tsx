import Image from 'next/image';
import MenuList from '@/components/cafes/[id]/MenuList';
import {
  beanCardTitle,
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
import { scrollContainer } from '@/components/cafes/[id]/MenuList/MenuList.css';
import MapButton from '@/components/cafes/[id]/MapButton';
import ChevronLeft from '@/assets/icon/Chevron_Left.svg';
import { RoastingBar } from '@/components/cafes/[id]/RoastingBar';
import OriginList from '@/components/cafes/[id]/OriginList';
import FlavorList from '@/components/cafes/[id]/FlavorItem';
import Footer from '@/components/cafes/[id]/Footer';
import IconWithHashTag from '@/components/cafes/[id]/IconWithHashTag';
import Link from 'next/link';
import { getCafeDetail } from '@/apis/cafeDetail';
import { getCountryFlag } from '@/apis/countryFlag';
import BookMark from '@/components/cafes/[id]/BookMark';
import mockdata from '@/mock/detail.json'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const detailPageId = (await params).id;
  // const data = await getCafeDetail('36666662-6662-3031-2d64-3535662d3131');
  const data =mockdata.data
  return (
    <>
      <header className={header}>
        <Link href={'/cafes'}>
          <ChevronLeft />
        </Link>
        <BookMark bookMarkId={data.cafe.id} />
      </header>
      <div className={title}>
        <div>
          <h1>{data.cafe.name}</h1>
          <div>{data.cafe.location}</div>
        </div>
        <MapButton />
      </div>
      <Image
        src={data.coffeeBean.imageUrl}
        alt={`1번 카페의 이미지`}
        width={600}
        height={400}
        className={titleImg}
      />
      <main className={cafesDetailMain}>
        <section>
          <h2 className={subTitle}>선정 이유</h2>
          <article className={pickReasonBox}>
            <div className={pickReason}>카페를 선정한 이유들 ~~~</div>
            <div className={divider}></div>
            <IconWithHashTag />
          </article>
        </section>
        <section>
          <h2 className={subTitle}>대표 원두</h2>
          <article className={recoCoffeeBeanBox}>
            <div>
              <h3 className={beanCardTitle}>{data.coffeeBean.engName}</h3>
              <input
                type="checkbox"
                id="toggle"
                className={toggleInput}
                aria-expanded="false"
                aria-controls="toggle-content"
              />
              <div className={toggleBox}>
                <h3>{data.coffeeBean.name}</h3>
                <label htmlFor="toggle" className={toggleLabel}>
                  <ChevronLeft />
                </label>
              </div>
              <div className={divider}></div>
              <div id="toggle-content" className={toggleContent}>
                <p>{data.coffeeBean.description}</p>
              </div>
            </div>
            <div>
              <h3>향미</h3>
              <FlavorList flavors={data.coffeeBean.flavors} />
            </div>
            <div>
              <h3>산지</h3>
              <OriginList countryOfOrigin={data.coffeeBean.countryOfOrigin} />
            </div>
            <div>
              <h3>로스팅 포인트</h3>
              <RoastingBar
                activeLevel={data.coffeeBean.roastingPoint as 'medium' | 'light' | 'dark'}
              />
            </div>
          </article>
        </section>
        <section>
          <h2 className={subTitle}>대표 메뉴</h2>
          <div className={scrollContainer}>

            <MenuList menus={data.menus} />

          </div>
        </section>
        <Footer updatedDate={data.updatedAt} />
      </main>
    </>
  );
}
