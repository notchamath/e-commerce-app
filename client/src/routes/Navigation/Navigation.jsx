import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser, resetUserState } from '../../store';

export default function Navigation() {

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(resetUserState());
  }
  
  return (
    <div className="app-container">
        <div>
          <button onClick={logoutHandler}>logout</button>
        </div>
    
        <Outlet/>
    </div>
  )
}

