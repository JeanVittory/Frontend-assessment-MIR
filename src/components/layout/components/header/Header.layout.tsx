import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navigationOptions } from './constants';
import { NavigationLink } from '../../../navigationLink';
import './header.layout.scss';

export default function Header() {
  const navRef = useRef<HTMLSelectElement>(null);

  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('responsive__nav');
    }
  };

  return (
    <header className="header">
      <h3 className="header__logo">LOGO</h3>
      <nav ref={navRef} className="nav">
        {navigationOptions.map((e) => {
          return <NavigationLink key={e} text={e} />;
        })}
        <button
          type="button"
          onClick={showNavBar}
          className="nav__button nav__close-button"
        >
          <FaTimes />
        </button>
      </nav>
      <button
        type="button"
        onClick={showNavBar}
        className="nav__button nav__open-button"
      >
        <FaBars />
      </button>
    </header>
  );
}
