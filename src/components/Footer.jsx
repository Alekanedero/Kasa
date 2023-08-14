import logofooter from '../assets/logoFooter.png';
import '../style/footer.css';

function Footer() {
  return (
    <div className="div_footer">
      <img className="logokasa" src={logofooter} alt="Logo Kasa" />
      <p className="allRight">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
export default Footer;
