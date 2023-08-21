import '../style/header.css';
import logokasa from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

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
