import { NavLink } from 'react-router-dom';
import { NavigationLinks } from './types';
import { formaterlink } from './utils';
import './navigationLink.components.scss';

export default function NavigationLink({ text }: NavigationLinks) {
  const link = formaterlink(text);

  return (
    <NavLink to={`/${link}`} className="nav__a">
      {text}
    </NavLink>
  );
}
