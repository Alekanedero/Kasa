import logokasa from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import '../style/header.css';

function Header() {
   return (
      <header className="header">
         <img className="header__logo" src={logokasa} alt="Logo Kasa" />
         <nav className="header__nav">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
         </nav>
      </header>
   );
}

export default Header;
