import { countryImage, orginItem, originList } from './OriginList.css';
import HashTag from '@/components/common/HashTag';
import { getCountryFlag } from '@/apis/countryFlag';
import Image from 'next/image';
import { Country } from '@/types';

interface CountryOfOriginProps {
  countryOfOrigin: Country[];
}
export default async function OriginList({ countryOfOrigin }: CountryOfOriginProps) {
  return (
    <ul className={originList}>
      {countryOfOrigin.map((country, idx) => {
        return (
          <HashTag key={idx}>
            <li className={orginItem}>
              <Image
                className={countryImage}
                src={country.flagImageUrl}
                alt={`${country} 국기`}
                width={23}
                height={16}
              />
              <div>{country.name}</div>
            </li>
          </HashTag>
        );
      })}
    </ul>
  );
}
