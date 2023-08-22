import logofooter from '../assets/logoFooter.png'
import '../style/footer.css'

function Footer() {
   return (
      <div className="footer">
         <img
            className="footer__logo"
            src={logofooter}
            alt="Logo Kasa"
         />
         <p className="footer__description">
            © 2020 Kasa. All rights reserved
         </p>
      </div>
   )
}

export default Footer
