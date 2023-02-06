import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeCartItem, clearCartItem } from '../../store';

export default function Checkout() {

    const dispatch = useDispatch();

    const {cartItems} = useSelector(state => state.cart);

    // increment the number of items of a product by one
    const addItem = (item) => {
        dispatch(addItemToCart(item))
    }
    
    // decrement the number of items of a product by one
    const removeItem = (item) => {
        dispatch(removeCartItem(item))
    }
    
    // remove product from cart completely
    const clearItemFromCart = (item) => {
        dispatch(clearCartItem(item))
    }

    const getCartTotal = () => {
        if(cartItems.length < 1) return 0;
        
        const cartTotal = cartItems.reduce((total, cartItem) => total + parseFloat(cartItem.price) * parseFloat(cartItem.quantity), 0);

        return cartTotal;
    }
    
  return (
    <div className='checkout__container'>
        {
            cartItems.length > 0 && cartItems.map(item => {
                return(
                    <div key={item._id}>
                        <hr />
                        <div>{item.name}</div>
                        <div>{item.quantity}</div>
                        <div onClick={() => addItem(item)}>increase</div>
                        <div onClick={() => removeItem(item)}>decrease</div>
                        <div onClick={() => clearItemFromCart(item)}>clear</div>
                        <hr />
                    </div>
                )
            })

        }

        <h2>Total: ${getCartTotal()}</h2>

    </div>
  )
}
