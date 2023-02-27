import { FaCheckCircle } from "react-icons/fa";
import './CheckoutSuccess.scss';

export default function CheckoutSuccess() {

  return (
    <div className='checkout-success__container'>
        <div className="checkout-success__msg">
            <h1>Order Placed <span><FaCheckCircle color="green"/></span></h1>
        </div>
    </div>
  )
}
