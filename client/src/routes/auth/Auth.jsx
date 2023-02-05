import SignIn from "../../components/sign-in/SignIn";
import SignUp from '../../components/sign-up/SignUp';

export default function Auth() {
  return (
    <div className="auth__container">
        <SignIn/>
        <SignUp/>
    </div>
  )
}