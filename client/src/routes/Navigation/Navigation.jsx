import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, resetUserState } from '../../store';

export default function Navigation() {

  const dispatch = useDispatch();

  const {user} = useSelector(state => state.auth)

  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(resetUserState());
  }

  return (
    <div className="app__container">
        {user && <div>hello {user.name}</div>}
        <div>
          <button onClick={logoutHandler}>logout</button>
        </div>
        <div>
          <Link to='/auth'>auth</Link>
        </div>
        <div>
          <Link to='/admin'>admin</Link>
        </div>
  
        <Outlet/>
    </div>
  )
}

