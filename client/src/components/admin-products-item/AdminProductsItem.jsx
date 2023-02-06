import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeProduct, updateProduct } from '../../store';


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
        <>
          <input 
            type="text" 
            value={editVals.name} 
            name="name"
            onChange={handleOnChange}
            required
          />

          <input 
            type="text" 
            value={editVals.price} 
            name="price"
            onChange={handleOnChange}
            required
          />

          <input 
            type="text" 
            value={editVals.category} 
            name="category"
            onChange={handleOnChange}
            required
          />

          <input 
            type="text" 
            value={editVals.image} 
            name="image"
            onChange={handleOnChange}
            required
          />

          <button onClick={handleUpdate}>Update</button>
          <button onClick={cancelUpdate}>Cancel</button>
        </>
      )

    } else {

      return(
        <>
          <div onClick={navigateHandler}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.category}</div>
          </div>
          <div onClick={editProduct}>Edit</div>
          <div onClick={deleteProduct}>delete</div>
        </>
      )

    }

  }

  return (
    <div className='products-item__container'>
      <hr />
      {
        renderItem()
      }
      <hr />
    </div>
  )
}
