import { useState, useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser, resetUserState } from '../../store/index';

const defaultFormFields = {
  email: '',
  password: ''
};

export default function SignIn() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const {user, isLoading, isSuccess, isError, message} = useSelector(state => {
    return state.auth;
  });

  // watch for error messages, changes in state
  useEffect(() => {
    if(isError) toast.error(message);
    if(isSuccess || user) navigate('/');
    
    dispatch(resetUserState());
  }, [user, isError, isSuccess, message]);

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

  if(isLoading) return <div>'Loading....'</div> //Replace

  return (
    <div className="signin-container">

      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label htmlFor="email">Email</label>
          <input 
            required 
            type="email" 
            name="email" 
            value={email} 
            onChange={handleChange}
          />
          
          <label htmlFor="password">Password</label>
          <input 
            required 
            type="password" 
            name="password" 
            value={password} 
            onChange={handleChange}
          />

        </div>

        <div className="form-group">
            <button className="form-button">Sign-In</button>
        </div>

      </form>
    </div>
  )
}