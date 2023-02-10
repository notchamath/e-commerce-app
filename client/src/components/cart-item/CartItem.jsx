import './CartItem.scss';

export default function CartItem({item}) {
  return (
    <div className='cart-item__container'>
      <img src={item.image} />

      <div className="cart-item__details">
        <div className="cart-item__name">{item.name}</div>

        <div className='cart-item__more-info'>
          <div className="cart-item__price">${item.price}</div>
          <div>X</div>
          <div className="cart-item__quantity">{item.quantity}</div>
        </div>
      </div>
    </div>
  )
}
