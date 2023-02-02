import { useState } from "react";

const defaultFormFields = {
  email: '',
  password: ''
};

export default function SignIn() {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

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
    <div className="signin-container">

      <h1>Sign In</h1>

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

        </div>

        <div className="form-group">
            <button className="form-button">Sign-In</button>
        </div>

      </form>
    </div>
  )
}