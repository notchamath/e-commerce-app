import { useSelector } from 'react-redux';
import { BUTTON_TYPES } from '../../components/button/Button';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import Button from '../../components/button/Button';

import './Checkout.scss';

export default function Checkout() {

  const {cartItems} = useSelector(state => state.cart);

  // get the cart $ total
  const getCartTotal = () => {
    if(cartItems.length < 1) return 0;
    
    const cartTotal = cartItems.reduce((total, cartItem) => total + parseFloat(cartItem.price) * parseFloat(cartItem.quantity), 0);

    return cartTotal.toFixed(2);
  }

  return (
    <div className='checkout__container'>
      <div className="checkout__text">Checkout</div>

      {
        cartItems.length > 0 ? 
        cartItems.map(item => (
          <CheckoutItem key={item._id} item={item}/> 
        )) : 
        <h1>Cart is Empty</h1>
      }
      <div className="checkout__info">
        <h2 className='checkout__total'>Total: ${getCartTotal()}</h2>
        <Button className={'checkout__button'} buttonType={BUTTON_TYPES.PRIMARY}>
          Pay
        </Button>
      </div>
    </div>
  )
}
