import { useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, resetUserState } from '../../store';
import { SlGameController } from "react-icons/sl";

import CartIcon from '../../components/cart-icon/CartIcon';
import BrowseDropdown from '../../components/browse-dropdown/BrowseDropdown';

import './Navigation.scss';

export default function Navigation() {

  const menuRef = useRef(null);
  const hamBtnRef = useRef(null);
  const browseRef = useRef(null);
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
    browseRef.current.classList.remove('nav__browse-open');
  }
  
  const handleBrowse = () => {
    browseRef.current.classList.toggle('nav__browse-open');
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

            <li className="nav__browse-btn">
              <div className="nav__link" onClick={handleBrowse}>Browse</div>
              <div ref={browseRef} className="nav__browse-preview" onClick={toggleMenu}>
                <BrowseDropdown className={'nav__browse-item'}/>
              </div>
            </li>

            
              {
                user?.role === 'admin' &&
                <li className="nav__admin-btn">
                  <div className='nav__link'>
                    <Link to='/admin' className='nav__link' onClick={toggleMenu}>
                      Admin
                    </Link>
                  </div>
                </li>
              } 
           

            <li className="nav__auth-btn">
              <div className='nav__link'>
              {
                user ?
                <span  onClick={logoutHandler} >Sign Out</span>  :
                <Link to='/auth' className='nav__link' onClick={toggleMenu}>
                Sign In
                </Link>
              } 
              </div>
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

            {
              user?.role === 'admin' &&
              <div className="nav__admin-btn">
                <Link to='/admin' className='nav__link' onClick={toggleMenu}>
                  Admin
                </Link>
              </div>
            } 

              <div className="nav__browse-btn">
                <div className="nav__link"> Browse </div>
                <div className="nav__browse-list">
                  <BrowseDropdown className={'nav__browse-item'}/>
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

