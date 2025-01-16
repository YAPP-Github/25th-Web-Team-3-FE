import { FooterBox, updateText } from './Footer.css';

const Footer = () => {
  const date = new Date();
  const updatedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(
    2,
    '0'
  )}.${String(date.getDate()).padStart(2, '0')}`;

  return (
    <footer className={FooterBox}>
      <div className={updateText}>{`정보 업데이트 날짜 ${updatedDate}`}</div>
      <div>메뉴와 원두는 각 매장의 사정에 따라 기재된 내용과 다를 수 있습니다. </div>
    </footer>
  );
};
export default Footer;
