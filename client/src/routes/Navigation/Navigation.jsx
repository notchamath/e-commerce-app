import { useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, resetUserState } from '../../store';
import { SlGameController } from "react-icons/sl";
import CartIcon from '../../components/cart-icon/CartIcon';

import './Navigation.scss';

export default function Navigation() {

  const menuRef = useRef(null);
  const hamBtnRef = useRef(null);
  const dispatch = useDispatch();

  const {user} = useSelector(state => state.auth)

  // Sign Out user when button is clicked
  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(resetUserState());
    toggleMenu();
  }
  
  // open menu when hamburger button is clicked (mobile size)
  const toggleMenu = () => {
    menuRef.current.classList.toggle('nav__list-open');
    hamBtnRef.current.classList.toggle('nav__ham-btn-clicked');
  }
  

  return (
    <>
      <div className="nav__container">

        {/* mobile navbar */}
        <nav className="nav__navbar-mobile">

          <ul className='nav__permanent'>

            <li className="nav__ham-btn" onClick={toggleMenu}>
                <span ref={hamBtnRef} className='nav__ham-btn-bar'></span>
            </li>

            <li className="nav__logo-container">
              <Link to='/' className='nav__link'>
                <SlGameController className='nav__logo'/>
              </Link>
            </li>

            <li className="nav__cart">
              <div className='nav__link'>
                <CartIcon/>
              </div>
            </li>

          </ul>
  
          <ul ref={menuRef} className="nav__drop-list">

            <li className="nav__auth-btn">
              {
                user ?
                <div className='nav__link' onClick={logoutHandler}>
                  Sign Out
                </div> :
                <Link to='/auth' className='nav__link' onClick={toggleMenu}>
                  Sign In
                </Link>
              } 
            </li>

          </ul>
        </nav>

        {/* large screen navbar */}
        <nav className="nav__navbar-large">

          <div className='nav__permanent'>

            <div className="nav__logo-container">
              <Link to='/' className='nav__link'>
                <SlGameController className='nav__logo'/>
              </Link>
            </div>

            <div className="nav__links-container">
              <div className="nav__browse-btn">
                <div className="nav__link">
                  Browse
                </div>
              </div>

              <div className="nav__auth-btn">
                {
                  user ?
                  <div className='nav__link' onClick={logoutHandler}>
                    Sign Out
                  </div> :
                  <Link to='/auth' className='nav__link' onClick={toggleMenu}>
                    Sign In
                  </Link>
                } 
              </div>

              <div className="nav__cart">
                <div className='nav__link'>
                  <CartIcon/>
                </div>
              </div>
            </div>

          </div>
  
        </nav>
      </div>

      <Outlet/>
    </>
  )
}

