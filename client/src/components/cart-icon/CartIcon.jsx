import { useSelector, useDispatch } from "react-redux";
import { SlBag } from "react-icons/sl";
import { toggleCart } from '../../store/index';
import CartDropdown from "../cart-dropdown/CartDropdown";

import './CartIcon.scss';

export default function CartIcon() {

  const dispatch = useDispatch();
  const {isCartOpen, cartItems} = useSelector(state => state.cart);

  const itemCount = useSelector(state => state.cart.cartItems.reduce((total, cartItem) => total + parseInt(cartItem.quantity), 0));

  const toggleCartDropdown = () => {
    dispatch(toggleCart(isCartOpen));
  }

  return (
    <div>
      <div onClick={toggleCartDropdown} className="cart-icon__container">
        <SlBag/>

        {
          itemCount > 0 && 
          <div className="cart-icon__item-count">{itemCount}</div>
        }

      </div>

      <CartDropdown isCartOpen={isCartOpen} cartItems={cartItems}/>
    </div>
  )
}
