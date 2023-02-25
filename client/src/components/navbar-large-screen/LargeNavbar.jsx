import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SlGameController } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, resetUserState } from '../../store';

import CartIcon from '../../components/cart-icon/CartIcon';
import LargeBrowseDropdown from '../browse-dropdown-lg/LargeBrowseDropdown';

import './LargeNavbar.scss';

export default function LargeNavbar() {

    const browseRef = useRef();
    const browseBtnRef = useRef();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);

    // Sign Out user when button is clicked
    const logoutHandler = () => {
      dispatch(logoutUser());
      dispatch(resetUserState());
    }

    // handle browse dropdown
    const browseDropdown = () => {
        browseRef.current.classList.toggle('nav__browse-active');
    }

    // click anywhere to close the browser dropdown
    useEffect(() => {
        const handler = (e) => {
            if(!browseRef.current.contains(e.target) && !browseBtnRef.current.contains(e.target)){
                browseRef.current.classList.remove('nav__browse-active');
            }
        }

        document.addEventListener('mousedown', handler);

        return () => document.removeEventListener('mousedown', handler);
    }, [])

    return (
        <>
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
                                <Link to='/admin' className='nav__link'>
                                    Admin
                                </Link>
                            </div>
                        } 

                        <div ref={browseBtnRef} className="nav__browse-btn" onClick={browseDropdown}>
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
                            <Link to='/auth' className='nav__link'>
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

            <LargeBrowseDropdown ref={browseRef}/>
        </>
    )
}
