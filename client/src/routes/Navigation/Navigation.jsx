import { useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, resetUserState } from '../../store';
import { SlGameController, SlBag } from "react-icons/sl";

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

        <nav className="nav__navbar">

          <ul className='nav__permanent'>

            <li className="nav__ham-btn" onClick={toggleMenu}>
                <span ref={hamBtnRef} className='nav__ham-btn-bar'></span>
            </li>

            <li className="nav__logo-container">
              <Link to='/' className='nav__link'>
                <SlGameController className='nav__logo'/>
              </Link>
            </li>

            <li className="nav__item nav__cart">
              <Link to='/checkout' className='nav__link'>
                <SlBag/>
              </Link>
            </li>

          </ul>
  
          <ul ref={menuRef} className="nav__drop-list">

            <li className="nav__item">
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
    
      </div>

      <Outlet/>
    </>
  )
}

