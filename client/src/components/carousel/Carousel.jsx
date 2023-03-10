import { useEffect, useRef } from "react";
import { FaAngleLeft,  FaAngleRight} from "react-icons/fa";
import ProductCard from '../product-card/ProductCard';

import './Carousel.scss';

export default function Carousel({products, title, cardColor}) {
  
  const cardRef = useRef();
  const sliderRef = useRef();

  // slider next button
  const goToNext = () => {
    let cardWidth = parseInt(getComputedStyle(cardRef.current).getPropertyValue('width'));
    let cardMarginLeft = parseInt(getComputedStyle(cardRef.current).getPropertyValue('margin-left'));
    let cardMarginRight = parseInt(getComputedStyle(cardRef.current).getPropertyValue('margin-right'));
    let cardsleft = parseInt(getComputedStyle(sliderRef.current).getPropertyValue('--cards-left'));
    let moveAmount = parseInt(getComputedStyle(sliderRef.current).getPropertyValue('--move-amount'));

    cardWidth += cardMarginLeft + cardMarginRight;

    
    if((moveAmount * cardsleft) < (products.length - cardsleft) * cardWidth - (cardMarginLeft + cardMarginRight)){
      moveAmount += cardWidth / cardsleft;
    } else {
      moveAmount = 0;
    }
    sliderRef.current.style.setProperty('--move-amount', `${moveAmount}px`);
  }
  
  // slider prev button
  const goToPrev = () => {
    let cardWidth = parseInt(getComputedStyle(cardRef.current).getPropertyValue('width'));
    let cardMarginLeft = parseInt(getComputedStyle(cardRef.current).getPropertyValue('margin-left'));
    let cardMarginRight = parseInt(getComputedStyle(cardRef.current).getPropertyValue('margin-right'));
    let cardsleft = parseInt(getComputedStyle(sliderRef.current).getPropertyValue('--cards-left'));
    let moveAmount = parseInt(getComputedStyle(sliderRef.current).getPropertyValue('--move-amount'));

    cardWidth += cardMarginLeft + cardMarginRight;

    if(moveAmount > 0){
      moveAmount -= cardWidth / cardsleft;
    } else {
      moveAmount = cardWidth * (products.length - cardsleft )  / cardsleft;
    }
    sliderRef.current.style.setProperty('--move-amount', `${moveAmount}px`);
  }

  // scroll the slider to beginning whenever screen width is resized
  useEffect(() => {
    let windowWidth = window.innerWidth;

    const handler = (e) => {
      if(windowWidth !== window.innerWidth){
        let moveAmount = 0;
        sliderRef.current.style.setProperty('--move-amount', `${moveAmount}px`);
        windowWidth = window.innerWidth;
      }
    }

    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, [])

  return (
    <section className="carousel__container">
      <div className="carousel__title">{title}</div>
      <div className="carousel__products-container">

        <button 
          className="carousel__left-arrow"
          onClick={goToPrev}
        >
          <FaAngleLeft/>
        </button>

        <div ref={sliderRef} className="carousel__products-slider">
        {
          products.map(product => {
            return <ProductCard cardColor={cardColor} ref={cardRef} key={product._id} className={'carousel__product'} product={product}/>
          })
        }
        </div>

        <button 
        className="carousel__right-arrow"
        onClick={goToNext}
        >
          <FaAngleRight/>
        </button>

      </div>
    </section>
  )
}
