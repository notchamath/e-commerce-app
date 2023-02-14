import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../../store";
import { BUTTON_TYPES } from "../button/Button";
import Spinner from '../spinner/Spinner';
import FormInput from "../form-input/FormInput";
import Button from '../button/Button';

import './SignUp.scss';

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPw: ''
};

export default function SignUp() {

  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {name, email, password, confirmPw} = formFields;

  const {isLoadingAuth} = useSelector(state => {
    return state.auth;
  });

  // reset form fields to default values
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if(password.length < 6){
      toast.error('Password must be at least 6 characters', {className: 'toast-message'});
    } else if (password !== confirmPw ){
      toast.error('Passwords do not match', {className: 'toast-message'});
    } else {
      dispatch(registerUser(formFields));
      resetFormFields();
    }
  }

  // handle when fields are being typed in
  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]:value});
  }

  if(isLoadingAuth) return <Spinner/>

  return (
    <div className="signup__container">

      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>

        <div className="signup__form-group">

          <FormInput
            required 
            label="Name"
            type="name" 
            name="name" 
            id="name"
            value={name} 
            onChange={handleChange}
          />

          <FormInput
            required 
            label="Email"
            type="email" 
            name="email" 
            id="email" 
            value={email} 
            onChange={handleChange}
          />
          
          <FormInput
            required 
            label="Password"
            type="password" 
            name="password" 
            id="password" 
            value={password} 
            onChange={handleChange}
            />

          <FormInput
            required 
            label="Confirm Password"
            type="password" 
            name="confirmPw" 
            id="confirmPw" 
            value={confirmPw} 
            onChange={handleChange}
          />

        </div>

        <Button 
          className="signup__form-button" 
          buttonType={BUTTON_TYPES.BLUE}
        >
          Sign-Up
        </Button>

      </form>
    </div>
  )
}