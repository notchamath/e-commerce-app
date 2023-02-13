import { useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { loginUser } from '../../store/index';
import { BUTTON_TYPES } from "../button/Button";
import Spinner from '../spinner/Spinner';
import FormInput from "../form-input/FormInput";
import Button from '../button/Button';

import './SignIn.scss';

const defaultFormFields = {
  email: '',
  password: ''
};

export default function SignIn() {

  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const {isLoading} = useSelector(state => {
    return state.auth;
  });

  // reset form fields to default values
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(loginUser(formFields));
    resetFormFields();
  }

  // handle when fields are being typed in
  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]:value});
  }

  if(isLoading) return <Spinner/>

  return (
    <div className="signin__container">

      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>

        <div className="signin__form-group">
          
          <FormInput
            required 
            label="Email"
            type="email" 
            name="email" 
            value={email}
            onChange={handleChange}
          />

          <FormInput 
            required 
            label="Password"
            type="password" 
            name="password" 
            value={password} 
            onChange={handleChange}
          />

          <Button 
            className="signin__form-button" 
            buttonType={BUTTON_TYPES.BLUE}
            onClick={SubmitEvent}
          >
            Sign-In
          </Button>
        </div>

      </form>
    </div>
  )
}