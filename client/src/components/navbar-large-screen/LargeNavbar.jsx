import { Link } from 'react-router-dom';
import { SlGameController } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, resetUserState } from '../../store';

import CartIcon from '../../components/cart-icon/CartIcon';
import BrowseDropdown from '../../components/browse-dropdown/BrowseDropdown';

import './LargeNavbar.scss';

export default function LargeNavbar() {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);

    // Sign Out user when button is clicked
    const logoutHandler = () => {
      dispatch(logoutUser());
      dispatch(resetUserState());
    }

    return (
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
    )
}
