import { useDispatch } from 'react-redux';
import { FaAngleLeft,  FaAngleRight} from "react-icons/fa";
import { addItemToCart, removeCartItem, clearCartItem } from '../../store';

import './CheckoutItem.scss';

export default function CheckoutItem({item}) {

    const dispatch = useDispatch();

    // increment the number of items of a product by one
    const addItem = () => {
        dispatch(addItemToCart(item))
    }
    
    // decrement the number of items of a product by one
    const removeItem = () => {
        dispatch(removeCartItem(item))
    }
    
    // remove product from cart completely
    const clearItemFromCart = () => {
        dispatch(clearCartItem(item))
    }

    return (
        <div className='checkout-item__container'>

            <img className='checkout-item__image' src={item.image} />
            <div className='checkout-item__name'>{item.name}</div>

            <div className="checkout-item__controls">

                <div className="checkout-item__q-control">
                    <div className="checkout-item__q-control-btns">
                        <div onClick={removeItem}><FaAngleLeft/></div>
                        <div className='checkout-item__quantity'>{item.quantity}</div>
                        <div onClick={addItem}><FaAngleRight/></div>
                    </div>

                    <div className="checkout-item__total">
                        ${(parseFloat(item.quantity) * parseFloat(item.price)).toFixed(2)}
                    </div>
                </div>
                
                <div className="checkout-item__clear" onClick={clearItemFromCart}>
                    Clear
                </div>
            </div>

            <hr />
        </div>
    )
}
