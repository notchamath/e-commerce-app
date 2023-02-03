import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser, resetUserState } from "../../store";

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPw: ''
};

export default function SignUp() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {name, email, password, confirmPw} = formFields;

  const {user, isSuccess, isLoading, isError, message} = useSelector(state => {
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

    if(password !== confirmPw){
      toast.error('Passwords do not match');
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

  if(isLoading) return <div>'Loading....'</div> //Replace

  return (
    <div className="signup-container">

      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label htmlFor="name">Name</label>
          <input
            required 
            type="name" 
            name="name" 
            id="name"
            value={name} 
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            required 
            type="email" 
            name="email" 
            id="email" 
            value={email} 
            onChange={handleChange}
          />
          
          <label htmlFor="password">Password</label>
          <input
            required 
            type="password" 
            name="password" 
            id="password" 
            value={password} 
            onChange={handleChange}
          />

          <label htmlFor="confirmPw">Confirm Password</label>
          <input
            required 
            type="password" 
            name="confirmPw" 
            id="confirmPw" 
            value={confirmPw} 
            onChange={handleChange}
          />

        </div>

        <div className="form-group">
            <button className="form-button">Sign-Up</button>
        </div>

      </form>
    </div>
  )
}