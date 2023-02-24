import { Outlet } from 'react-router-dom';

import MobileNavbar from '../../components/navbar-mobile/MobileNavbar';
import LargeNavbar from '../../components/navbar-large-screen/LargeNavbar';
import Footer from '../../components/footer/Footer';

import './Navigation.scss';

export default function Navigation() {

  return (
    <>
      <nav className="nav__container">

        {/* mobile navbar */}
        <MobileNavbar/>

        {/* large screen navbar */}
        <LargeNavbar/>

      </nav>

      <main className='content'>
        <Outlet/>
      </main>

      <Footer/>
    </>
  )
}

