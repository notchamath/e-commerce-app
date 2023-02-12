import { useNavigate } from 'react-router-dom';

import './CartItem.scss';

export default function CartItem({item}) {

  const navigate = useNavigate();
  
  const navigateHandler = () => {
    navigate(`/products/${item._id}`)
  }

  return (
    <div onClick={navigateHandler} className='cart-item__container'>
      <img src={item.image} />

      <div className="cart-item__details">
        <div className="cart-item__name">{item.name}</div>

        <div className='cart-item__more-info'>
          <div className="cart-item__price">${item.price}</div>
          <div>X</div>
          <div className="cart-item__quantity">{item.quantity}</div>
        </div>
      </div>
    </div>
  )
}
