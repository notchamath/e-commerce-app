import { useNavigate } from 'react-router-dom';
import { BUTTON_TYPES } from '../button/Button';
import CartItem from '../cart-item/CartItem';
import Button from '../button/Button';

import './CartDropdown.scss';

export default function CartDropdown({cartItems, isCartOpen}) {

  const navigate = useNavigate();
  const handleBtn = () => {
    navigate('/checkout');
  }

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
        <Button buttonType={BUTTON_TYPES.PRIMARY} onClick={handleBtn} className="cart-dropdown__btn">Go to Checkout</Button>
      </div>
    </div>
  )
}
