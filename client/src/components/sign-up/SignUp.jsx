import { useState } from "react";

const defaultFormFields = {
  email: '',
  password: '',
  confirmPw: ''
};

export default function SignUp() {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password, confirmPw} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formFields);
    resetFormFields();
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]:value});
  }

  return (
    <div className="signup-container">

      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

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