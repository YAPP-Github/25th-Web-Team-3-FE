import { mapButton } from './MapButton.css';

export default function MapButton({ naverMapUrl }: { naverMapUrl: string }) {
  return (
    <button className={mapButton}>
      <a href={naverMapUrl} target="_blank" rel="noopener noreferrer">
        길찾기
      </a>
    </button>
  );
}
