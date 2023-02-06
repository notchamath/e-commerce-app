import { useSelector } from 'react-redux';

export default function ShoopingCart() {

  const {cartItems} = useSelector(state => state.cart);

  return (
    <div>
      <hr />
      <h2>Shopping Cart</h2>
      {
        cartItems.map(item => {
          return (
            <div key={item._id}>
              <div>{item.name}</div>
              <div>{item.quantity}</div>
            </div>
          )
        })
      }
    </div>
  )
}
