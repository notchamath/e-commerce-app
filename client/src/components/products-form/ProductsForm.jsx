import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createProduct } from "../../store";

// defualt form values
const defaultFormFields = {
  name: '',
  price: '',
  category: '',
  image: ''
};

export default function ProductsForm() {

  const dispatch = useDispatch();
  
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {name, price, category, image} = formFields;

  // reset form fields
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  // handle sumbmit
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createProduct(formFields));
    resetFormFields();
  }

  // handle when fields are being typed in
  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]:value});
  }

  return (
    <div className="products-form__container">

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label htmlFor="name">Product Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={name} 
            onChange={handleChange}
            required
          />
          
          <label htmlFor="price">Price</label>
          <input 
            type="text" 
            name="price" 
            id="price" 
            value={price} 
            onChange={handleChange}
            required
          />

          <label htmlFor="category">Category</label>
          <input 
            type="text" 
            name="category" 
            id="category" 
            value={category} 
            onChange={handleChange}
            required
          />

          <label htmlFor="image">Photo Url</label>
          <input 
            type="text" 
            name="image" 
            id="image" 
            value={image} 
            onChange={handleChange}
            required
          />

        </div>

        <div className="form-group">
            <button className="form-button">Add Product</button>
        </div>

      </form>

    </div>
  )
}
