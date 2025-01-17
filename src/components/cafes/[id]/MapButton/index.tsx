import { mapButton } from './MapButton.css';

export default function MapButton() {
  return (
    <button className={mapButton}>
      <a
        href={`https://map.naver.com/p/search/${'헤베커피'}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        길찾기
      </a>
    </button>
  );
}
