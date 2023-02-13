import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createProduct } from "../../store";
import { BUTTON_TYPES } from "../button/Button";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import './AdminProductsForm.scss'

// defualt form values
const defaultFormFields = {
  name: '',
  price: '',
  category: '',
  image: ''
};

export default function AdminProductsForm() {

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

      <h2>Add a New Product to Store</h2>

      <form onSubmit={handleSubmit}>

        <div className="products-form__form-group">

          <FormInput 
            label="Product Name"
            type="text" 
            name="name" 
            id="name" 
            value={name} 
            onChange={handleChange}
            required
          />
          
          <FormInput 
            label="Price"
            type="text" 
            name="price" 
            id="price" 
            value={price} 
            onChange={handleChange}
            required
          />

          <FormInput 
            label="Category"
            type="text" 
            name="category" 
            id="category" 
            value={category} 
            onChange={handleChange}
            required
          />

          <FormInput 
            label="ImageUrl"
            type="text" 
            name="image" 
            id="image" 
            value={image} 
            onChange={handleChange}
            required
          />

          <Button 
            buttonType={BUTTON_TYPES.PRIMARY} 
            className="products-form__form-button"
          >
            Add Product
          </Button>

        </div>

      </form>

    </div>
  )
}
