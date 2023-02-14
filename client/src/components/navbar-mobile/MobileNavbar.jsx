import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, resetUserState } from '../../store';
import { SlGameController } from "react-icons/sl";

import CartIcon from '../cart-icon/CartIcon';
import BrowseDropdown from '../browse-dropdown/BrowseDropdown';

import './MobileNavbar.scss'

export default function MobileNavbar() {

    const menuRef = useRef(null);
    const hamBtnRef = useRef(null);
    const browseRef = useRef(null);
    const dispatch = useDispatch();
  
    const {user} = useSelector(state => state.auth);
  
    // Sign Out user when button is clicked
    const logoutHandler = () => {
      dispatch(logoutUser());
      dispatch(resetUserState());
      closeMenu();
    }
    
    // open menu when hamburger button is clicked (mobile size)
    const toggleMenu = () => {
      menuRef.current.classList.toggle('nav__list-open');
      hamBtnRef.current.classList.toggle('nav__ham-btn-clicked');
      browseRef.current.classList.remove('nav__browse-open');
    }
    
    // open menu (mobile size)
    const closeMenu = () => {
      menuRef.current.classList.remove('nav__list-open');
      hamBtnRef.current.classList.remove('nav__ham-btn-clicked');
      browseRef.current.classList.remove('nav__browse-open');
    }
    
    // toggle categories dropdown list when browse is clicked
    const handleBrowse = () => {
      browseRef.current.classList.toggle('nav__browse-open');
    }

    return (
        <nav className="nav__navbar-mobile">

            <ul className='nav__permanent'>

                <li className="nav__ham-btn" onClick={toggleMenu}>
                    <span ref={hamBtnRef} className='nav__ham-btn-bar'></span>
                </li>

                <li className="nav__logo-container" onClick={closeMenu}>
                    <Link to='/' className='nav__link'>
                        <SlGameController className='nav__logo'/>
                    </Link>
                </li>

                <li className="nav__cart" onClick={closeMenu}>
                    <div className='nav__link'>
                        <CartIcon/>
                    </div>
                </li>

            </ul>

            <ul ref={menuRef} className="nav__drop-list">

                <li className="nav__browse-btn">
                    <div className="nav__link" onClick={handleBrowse}>Browse</div>
                    <div ref={browseRef} className="nav__browse-preview" onClick={closeMenu}>
                        <BrowseDropdown className={'nav__browse-item'}/>
                    </div>
                </li>

                
                {
                    user?.role === 'admin' &&
                    <li className="nav__admin-btn">
                        <div className='nav__link'>
                            <Link to='/admin' className='nav__link' onClick={closeMenu}>
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
                        <Link to='/auth' className='nav__link' onClick={closeMenu}>
                            Sign In
                        </Link>
                    } 
                    </div>
                </li>

            </ul>
        </nav>
    )
}
