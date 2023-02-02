import { useState } from "react";

const defaultFormFields = {
  name: '',
  price: '',
  category: '',
  image: ''
};

export default function Admin() {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {name, price, category, image} = formFields;

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
    <div className="form-container">

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label htmlFor="name">Product Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={name} 
            onChange={handleChange}
          />
          
          <label htmlFor="price">Price</label>
          <input 
            type="text" 
            name="price" 
            id="price" 
            value={price} 
            onChange={handleChange}
          />

          <label htmlFor="category">Category</label>
          <input 
            type="text" 
            name="category" 
            id="category" 
            value={category} 
            onChange={handleChange}
          />

          <label htmlFor="image">Photo Url</label>
          <input 
            type="text" 
            name="image" 
            id="image" 
            value={image} 
            onChange={handleChange}
          />

        </div>

        <div className="form-group">
            <button className="form-button">Add Product</button>
        </div>

      </form>

    </div>
  )
}
