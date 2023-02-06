import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RequireAuth({allowedRoles}) {

    const location = useLocation();
    const {user} = useSelector(state => state.auth);

    // if user is logged in, get their role to compare with allowed roles
    // if user is admin, let him access admin routes, if user is not logged in send him to auth page to login, if user is logged in but is not admin, cannot access admin routes but can access checkout
    const userRole = user?.role;
  return (
    allowedRoles.includes(userRole)
    ? <Outlet/>
    : user
        ? <Navigate to="/unauthorized" state={{from: location}} replace />
        : <Navigate to="/auth" state={{from: location}} replace />
  )
}
