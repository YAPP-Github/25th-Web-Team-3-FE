import { qrCode, qrDescription, qrNotification, serviceQr } from './layout.css';

export default function BrewLoungeQR() {
  return (
    <div className={serviceQr}>
      <div className={qrCode}></div>
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
