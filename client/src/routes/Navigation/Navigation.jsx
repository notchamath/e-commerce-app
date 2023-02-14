import { Outlet } from 'react-router-dom';

import MobileNavbar from '../../components/navbar-mobile/MobileNavbar';
import LargeNavbar from '../../components/navbar-large-screen/LargeNavbar';

import './Navigation.scss';

export default function Navigation() {

  return (
    <>
      <div className="nav__container">

        {/* mobile navbar */}
        <MobileNavbar/>

        {/* large screen navbar */}
        <LargeNavbar/>

      </div>

      <Outlet/>
    </>
  )
}

