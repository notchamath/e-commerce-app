import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux';
import { BUTTON_TYPES } from '../../components/button/Button';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import Button from '../../components/button/Button';

import './Checkout.scss';

export default function Checkout() {

  const navigate = useNavigate();

  const {cartItems} = useSelector(state => state.cart);
  const {user} = useSelector(state => state.auth);

  const CHECKOUT_URL = '/checkout-session';

  // handle pay btn click
  const payBtn = async () => {

    // stripe does not accept totals of $0.00
    if(getCartTotal() === '0.00') {
      navigate('/checkoutsuccess');
    } else {
      try{
        // send necessary fields to backend
        const items = cartItems.map(item => {
          return {
            name: item.name,
            price: (parseFloat(item.price) * 100).toFixed(2),
            quantity: item.quantity
          }
        })

        // user auth
        const config = {
          headers: {Authorization: user.token}
        };
        
        const res = await axios.post(CHECKOUT_URL, items, config);
        
        // redirect to stripe url
        window.location = res.data.url;
  
      } catch(e) {
        toast.error(e.message, {className: 'toast-message'});
        throw new Error (e);
      }
    }
  }

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
        {
          cartItems.length > 0 &&
          <Button className={'checkout__button'} buttonType={BUTTON_TYPES.PRIMARY} onClick={payBtn}>
            Pay
          </Button>
        }
      </div>
    </div>
  )
}
