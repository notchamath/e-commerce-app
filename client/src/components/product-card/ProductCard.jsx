import { useNavigate } from 'react-router-dom';

import './ProductCard.scss';

export default function ProductCard({product}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/${product._id}`)
  }

  return (
    <div className='product-card__container' onClick={handleNavigate}>
      <img className="product-card__image" src={product.image} alt={product.name} />
      <div className="product-card__name">{product.name}</div>
      <div className="product-card__price">{product.price}</div>
      <div className="product-card__category">{product.category}</div>
    </div>
  )
}
