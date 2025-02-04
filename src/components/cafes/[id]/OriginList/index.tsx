import { orginItem, originList } from './OriginList.css';
import HashTag from '@/components/common/HashTag';
import { getCountryFlag } from '@/apis/countryFlag';
import Image from 'next/image';

interface OriginProps {
  countryOfOrigin: string[];
}
const DEFAULT_COUNTRY_IMAGE = 'https://placehold.co/23x18?text=Country';
export default async function OriginList({ countryOfOrigin }: OriginProps) {
  const data = await getCountryFlag();
  return (
    <ul className={originList}>
      {countryOfOrigin.map((country, idx) => {
        const countryItem = data.find((item) => country.split(' ')[0] === item.country_nm);
        const imageUrl = countryItem ? countryItem.download_url : DEFAULT_COUNTRY_IMAGE;

        return (
          <HashTag key={idx}>
            <li className={orginItem}>
              <Image src={imageUrl} alt={`${country} 국기`} width={23} height={18} />
              {country}
            </li>
          </HashTag>
        );
      })}
    </ul>
  );
}
