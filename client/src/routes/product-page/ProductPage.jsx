import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";
import { addItemToCart } from '../../store';
import { BUTTON_TYPES } from '../../components/button/Button';

import Button from '../../components/button/Button';

import './ProductPage.scss';

export default function ProductPage() {

  const { id } = useParams();
  const dispatch = useDispatch();

  const [active, setActive] = useState('PS5');

  const product = useSelector(state => {
    return state.products.products.find(product => product._id === id);
  });

  // handle add to cart btn
  const addToCart = () => {
    dispatch(addItemToCart({...product, variations: active}));
  }

  // handle radio btns
  const handleRadioBtns = (event) => {
    setActive(event.target.value);
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
                {category.replaceAll('-', ' ')}
              </div>
            )
          })
        }
        </div>

        {/* radio buttons */}
        <div className="product-page__btns">
          <div className="product-page__message">Choose Your Platform:</div>
          <div className="product-page__radio-btns">

            <div className='product-page__radio-btn'>
              <input 
                id='ps5'
                type="radio" 
                checked={active === 'PS5'} 
                name="gameType"
                value="PS5"
                onChange={handleRadioBtns}
              />
              <div className="product-page__radio-tile">
                <FaPlaystation/>
                <label htmlFor="ps5">PS5</label>
              </div>
            </div>

            <div className='product-page__radio-btn'>
              <input 
                id='xboxx'
                type="radio" 
                checked={active === 'XBOXX'} 
                name="gameType"
                value="XBOXX"
                onChange={handleRadioBtns}
              />
              <div className="product-page__radio-tile">
                <FaXbox/>
                <label htmlFor="xboxx">XBOXX</label>
              </div>
            </div>

            <div className='product-page__radio-btn'>
              <input 
                id='pc'
                type="radio" 
                checked={active === 'PC'} 
                name="gameType"
                value="PC"
                onChange={handleRadioBtns}
              />
              <div className="product-page__radio-tile">
                <FaWindows/>
                <label htmlFor="pc">PC</label>
              </div>
            </div>

          </div>
        </div>

        <div className="product-page__price">
          ${product.price}
        </div>

        <Button onClick={addToCart} buttonType={BUTTON_TYPES.RED}>Add To Cart</Button>

        <div className="product-page__description">
          {product.description}
        </div>
      </div>

    </div>
  )
}
