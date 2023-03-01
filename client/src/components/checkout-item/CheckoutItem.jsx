import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaPlaystation,  FaXbox, FaWindows } from "react-icons/fa";
import { clearCartItem } from '../../store';

import defaultImg from '../../assets/images/img-not-found.png';

import './CheckoutItem.scss';

export default function CheckoutItem({item}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // remove product from cart completely
    const clearItemFromCart = () => {
        dispatch(clearCartItem(item))
    }

    // handle clicks
    const handleNavigate = () => {
        navigate(`/products/${item._id}`)
    }

    return (
        <div className='checkout-item__container'>

            <img 
                onClick={handleNavigate}
                className='checkout-item__image' 
                src={item.image} 
                alt={item.name}
                onError={({currentTarget}) => {
                    currentTarget.onerror = null;
                    currentTarget.src = defaultImg;
                }}
            />
            <div className='checkout-item__name'>{item.name}</div>

            <div className="checkout-item__controls">
                
                <div className="checkout-item__variations">
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

                <div className="checkout-item__q-control">
                    <div className="checkout-item__q-control-btns">
                        <div className='checkout-item__quantity'>Quantity: {item.quantity}</div>
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
