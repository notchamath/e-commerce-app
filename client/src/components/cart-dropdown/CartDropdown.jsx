import { Link } from 'react-router-dom';
import CartItem from '../cart-item/CartItem';

import './CartDropdown.scss';

export default function CartDropdown({cartItems, isCartOpen}) {

  return (
    <div className={`${isCartOpen ? 'cart-open' : ''} cart-dropdown__container`}>
      {
        cartItems.length > 0 ?
        cartItems.map(item => {
          return (
            <CartItem item={item} key={item._id}/>
          )
        }) :
        <h4>Cart is Empty</h4>
      }

      <div className="cart-dropdown__btns-container">
        <Link to="/checkout">Go to Checkout</Link>
      </div>
    </div>
  )
}
