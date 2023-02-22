import { useEffect, useRef } from "react";
import { FaAngleLeft,  FaAngleRight} from "react-icons/fa";
import ProductCard from '../product-card/ProductCard';

import './Carousel.scss';

export default function Carousel({products, title}) {

  const cardRef = useRef();
  const sliderRef = useRef();

  // slider next button
  const goToNext = () => {
    let cardWidth = parseInt(getComputedStyle(cardRef.current).getPropertyValue('width'));
    let cardsleft = parseInt(getComputedStyle(sliderRef.current).getPropertyValue('--cards-left'));
    let moveAmount = parseInt(getComputedStyle(sliderRef.current).getPropertyValue('--move-amount'));
    
    if((moveAmount * cardsleft) < (products.length - cardsleft) * cardWidth){
      moveAmount += cardWidth / cardsleft;
    } else {
      moveAmount = 0;
    }
    sliderRef.current.style.setProperty('--move-amount', `${moveAmount}px`);
  }
  
  // slider prev button
  const goToPrev = () => {
    let cardWidth = parseInt(getComputedStyle(cardRef.current).getPropertyValue('width'));
    let cardsleft = parseInt(getComputedStyle(sliderRef.current).getPropertyValue('--cards-left'));
    let moveAmount = parseInt(getComputedStyle(sliderRef.current).getPropertyValue('--move-amount'));

    if(moveAmount > 0){
      moveAmount -= cardWidth / cardsleft;
    } else {
      moveAmount = cardWidth * (products.length - cardsleft )  / cardsleft;
    }
    sliderRef.current.style.setProperty('--move-amount', `${moveAmount}px`);
  }

  // scroll the slider to beginning whenever screen is resized
  useEffect(() => {
    const handler = (e) => {
      let moveAmount = 0;
      sliderRef.current.style.setProperty('--move-amount', `${moveAmount}px`);
    }

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, [])

  return (
    <div className="carousel__container">
      <div className="carousel__title">{title}</div>
      <div className="carousel__products-container">

        <div 
          className="carousel__left-arrow"
          onClick={goToPrev}
        >
          <FaAngleLeft/>
        </div>

        <div ref={sliderRef} className="carousel__products-slider">
        {
          products.map(product => {
            return <ProductCard ref={cardRef} key={product._id} className={'carousel__product'} product={product}/>
          })
        }
        </div>

        <div 
        className="carousel__right-arrow"
        onClick={goToNext}
        >
          <FaAngleRight/>
        </div>

      </div>
    </div>
  )
}
