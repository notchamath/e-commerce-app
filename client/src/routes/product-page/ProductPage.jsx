import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { addItemToCart } from '../../store';
import { BUTTON_TYPES } from '../../components/button/Button';

import Button from '../../components/button/Button';

import './ProductPage.scss';

export default function ProductPage() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(state => {
    return state.products.products.find(product => product._id === id);
  });

  const addToCart = () => {
    dispatch(addItemToCart(product));
  }

  return (
    product && 
    <div className='product-page__container'>

      <img src={product.image} alt={product.name} />
      <div className="product-page__info">
        <div className='product-page__name'>{product.name}</div>
        <div className="product-page__categories">
        {
          product.category.map((category, idx) => {
            return (
              <div key={idx} className="product-page__category">
                {category}
              </div>
            )
          })
        }
        </div>
      </div>

      <Button onClick={addToCart} buttonType={BUTTON_TYPES.PRIMARY}>Add to Cart</Button>
    </div>
  )
}
