import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaPlaystation, FaXbox, FaWindows, FaTimes } from "react-icons/fa";
import { clearCartItem } from '../../store';

import './CartItem.scss';

export default function CartItem({item}) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // handle click
  const navigateHandler = () => {
    navigate(`/products/${item._id}`)
  }

  // remove btn click
  const removeItem = () => {
    dispatch(clearCartItem(item))
  }
  
  return (
    <div className='cart-item__container'>
      <div  onClick={removeItem} className="cart-item__remove-btn">
        <FaTimes color='white'/>
      </div>
      <img onClick={navigateHandler} src={item.image} />

      <div className="cart-item__details">
        <div className="cart-item__name">{item.name}</div>

        <div className="cart-items__variations">
          {
            item.variations['PS5'] &&
            <div className="cart-items__variation">
              <FaPlaystation/>
              <div>{item.variations['PS5']}</div>
            </div>
          }
          {
            item.variations['XBOXX'] &&
            <div className="cart-items__variation">
              <FaXbox/>
              <div>{item.variations['XBOXX']}</div>
            </div>
          }
          {
            item.variations['PC'] &&
            <div className="cart-items__variation">
              <FaWindows/>
              <div>{item.variations['PC']}</div>
            </div>
          }
        </div>

        <div className='cart-item__more-info'>
          <div className="cart-item__price">${item.price}</div>
          <div>X</div>
          <div className="cart-item__quantity">{item.quantity}</div>
        </div>
      </div>
    </div>
  )
}
