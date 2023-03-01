import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

import defaultImg from '../../assets/images/img-not-found.png';

import './ProductCard.scss';

export const CARD_COLOR = {
  BLACK: 'black',
  WHITE: 'white'
}

const ProductCard = forwardRef(({product, className, cardColor}, ref) => {
  const navigate = useNavigate();

  // handle onclick
  const handleNavigate = () => {
    navigate(`/products/${product._id}`)
  }

  // shorten description if needed
  const getDesc = () => {
    const desc = product?.description;
    const subLen = 150;

    return desc.length > desc.substring(0, subLen).length ? desc.substring(0, subLen) + '...' : desc;
  }

  const getCardColor = () => {
    switch(cardColor){
      case CARD_COLOR.BLACK:
        return '';

      case CARD_COLOR.WHITE:
        return 'product-card__white';

      default:
        return '';
    }
  }

  return (
    <div ref={ref} className={`product-card__container ${className} ${getCardColor()}`} >

      <div className="product-card__bg">
        <div className="product-card__image-container">
          <img className="product-card__image" 
            src={product.image} 
            alt={product.name}
            onError={({currentTarget}) => {
              currentTarget.onerror = null;
              currentTarget.src = defaultImg;
            }}
          />
          <div className="product-card__categories">
          {
            product.category.map((category, idx) => {
              return (
                <div key={idx} className="product-card__category">
                  {category.replaceAll('-', ' ')}
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