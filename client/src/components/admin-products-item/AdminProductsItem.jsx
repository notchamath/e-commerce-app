import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeProduct, updateProduct } from '../../store';
import { BUTTON_TYPES } from '../button/Button';
import Button from '../button/Button';

import './AdminProductsItem.scss';

export default function AdminProductsItem({product}) {

  // original values
  const defaultValues = {
    id: product._id,
    name: product.name,
    price: product.price,
    category: product.category,
    image: product.image
  }

  const [isEditing, setIsEditing] = useState(false);
  const [editVals, setEditVals] = useState(defaultValues);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // delete button
  const deleteProduct = () => {
    dispatch(removeProduct(product._id));
  }
  
  // edit button
  const editProduct = () => {
    setEditVals(defaultValues);
    setIsEditing(true);
  }
  
  // update button
  const handleUpdate = () => {
    dispatch(updateProduct(editVals));
    setIsEditing(false);
  }

  // cancel button
  const cancelUpdate = () => {
    setIsEditing(false);
  }

  // handle values when fields are being typed on
  const handleOnChange = (event) => {
    const {name, value} = event.target;

    setEditVals({
      ...editVals,
      [name]: value
    })
  }

  
  const navigateHandler = () => {
    navigate(`/products/${product._id}`)
  }


  const renderItem = () => {

    if(isEditing){

      return (
        <div className='products-item__form'>
          <input
            className='products-item__input' 
            type="text" 
            value={editVals.name} 
            name="name"
            placeholder='Name'
            onChange={handleOnChange}
            required
          />

          <input
            className='products-item__input' 
            type="text" 
            value={editVals.price} 
            name="price"
            placeholder='Price'
            onChange={handleOnChange}
            required
          />

          <input
            className='products-item__input' 
            type="text" 
            value={editVals.category} 
            name="category"
            placeholder='Category'
            onChange={handleOnChange}
            required
          />

          <input
            className='products-item__input' 
            type="text" 
            value={editVals.image} 
            name="image"
            placeholder='Image URL'
            onChange={handleOnChange}
            required
          />

          <div className="products-item__form-btns">

            <Button 
              onClick={handleUpdate} 
              buttonType={BUTTON_TYPES.GREEN} 
              className="products-item__form-btn"
            >
              Update
            </Button>

            <Button 
              onClick={cancelUpdate} 
              buttonType={BUTTON_TYPES.RED} 
              className="products-item__form-btn"
            >
              Cancel
            </Button>

          </div>
        </div>
      )

    } else {

      return(
        <>
          <div onClick={navigateHandler} className="products-item__info">

            <img src={product.image} />
            <div className="products-item__details">
              <div>{product.name}</div>
              <div>${product.price}</div>
              <div>{product.category}</div>
            </div>

          </div>

          <div className="products-item__btns">
            <Button 
              buttonType={BUTTON_TYPES.BLUE} 
              onClick={editProduct}
              className="products-item__btn"
            >
              Edit
            </Button>
            <Button 
              buttonType={BUTTON_TYPES.RED} 
              onClick={deleteProduct}
              className="products-item__btn"
            >
              Delete
            </Button>
          </div>
        </>
      )

    }

  }

  return (
    <div className='products-item__container'>
      {
        renderItem()
      }
    </div>
  )
}
