import { qrCode, qrDescription, qrNotification, brewloungeQr } from './layout.css';
import BrewloungeQRImage from '@/assets/brewLoungeQR.svg';

export default function BrewloungeQR() {
  return (
    <div className={brewloungeQr}>
      <BrewloungeQRImage className={qrCode} />
      <p className={qrDescription}>
        모바일로 어디서든
        <br />
        브루라운지를 <br />
        이용해보세요
      </p>
      <p className={qrNotification}>QR코드를 스캔해보세요</p>
    </div>
  );
}
