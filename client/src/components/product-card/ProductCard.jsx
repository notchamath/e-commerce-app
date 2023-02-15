import { useNavigate } from 'react-router-dom';

import './ProductCard.scss';

export default function ProductCard({product}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/${product._id}`)
  }

  return (
    <div className='product-card__container' >

      <div className="product-card__bg">
        <div className="product-card__image-container">
          <img className="product-card__image" src={product.image} alt={product.name} />
          <div className="product-card__categories">
          {
            product.category.map((category, idx) => {
              return (
                <div key={idx} className="product-card__category">
                  {category}
                </div>
              )
            })
          }
          </div>
        </div>
        <div className="product-card__name">{product.name}</div>
        <div className="product-card__description">
          {product?.description?.substring(0,300)}
        </div>

        <div onClick={handleNavigate} className="product-card__btn product-card__more">
          Find out more
        </div>
      </div>
    </div>
  )
}
