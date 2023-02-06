import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { resetUserState } from "../../store";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from '../../components/sign-up/SignUp';

export default function Auth() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {user} = useSelector(state => state.auth);

  // where the user was navigating to before prompted to login
  const from = location.state?.from?.pathname || '/';

  // once logged in, redirect user
  useEffect(() => {
    if(user){
      navigate(from, {replace: true});
      dispatch(resetUserState());
    }
  }, [user]);

  return (
    <div className="auth__container">
        <SignIn/>
        <SignUp/>
    </div>
  )
}