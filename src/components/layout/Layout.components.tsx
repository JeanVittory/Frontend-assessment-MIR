import { Outlet } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
import './layout.components.scss';

export default function Layout() {
  return (
    <>
      <div className="content-wrapper">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
