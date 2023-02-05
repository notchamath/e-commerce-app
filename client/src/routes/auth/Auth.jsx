import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUserState } from "../../store";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from '../../components/sign-up/SignUp';

export default function Auth() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user} = useSelector(state => {
    return state.auth;
  });

  // watch for error messages, changes in state
  useEffect(() => {
    if(user) navigate('/');
    dispatch(resetUserState());
  }, [user]);

  return (
    <div className="auth__container">
        <SignIn/>
        <SignUp/>
    </div>
  )
}