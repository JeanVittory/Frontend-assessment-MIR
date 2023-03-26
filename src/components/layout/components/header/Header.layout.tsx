import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navigationOptions } from './constants';
import { NavigationLink } from './components/navigationLink';
import { Button } from '@components/button';
import './header.layout.scss';

export default function Header(): JSX.Element {
  const navRef = useRef<HTMLSelectElement>(null);

  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('responsive__nav');
    }
  };

  return (
    <header className="header">
      <div className="wrapper">
        <h3 className="header__logo">LOGO</h3>
        <nav ref={navRef} className="nav">
          {navigationOptions.map((e) => {
            return <NavigationLink key={e} text={e} />;
          })}
          <Button
            className="nav__button nav__close-button"
            type="button"
            event={showNavBar}
          >
            <FaTimes />
          </Button>
        </nav>
        <Button
          type="button"
          event={showNavBar}
          className="nav__button nav__open-button"
        >
          <FaBars />
        </Button>
      </div>
    </header>
  );
}
