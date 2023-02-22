import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './ProductCard.scss';

const ProductCard = forwardRef(({product, className}, ref) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/${product._id}`)
  }

  const getDesc = () => {
    const desc = product?.description;
    const subLen = 350;

    return desc.length > desc.substring(0, subLen).length ? desc.substring(0, subLen) + '...' : desc;
  }

  return (
    <div ref={ref} className={`product-card__container ${className}`} >

      <div className="product-card__bg">
        <div className="product-card__image-container">
          <img className="product-card__image" src={product.image} alt={product.name} />
          <div className="product-card__categories">
          {
            product.category.map((category, idx) => {
              return (
                <div key={idx} className="product-card__category">
                  {category.replace('-', ' ')}
                </div>
              )
            })
          }
          </div>
        </div>
        <div className="product-card__name">{product.name}</div>
        <div className="product-card__description">
          {getDesc()}
        </div>

        <div onClick={handleNavigate} className="product-card__btn product-card__more">
          Find out more
        </div>
      </div>
    </div>
  )
})

export default ProductCard;