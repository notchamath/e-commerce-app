import { useRef } from "react";
import { FaAngleLeft,  FaAngleRight} from "react-icons/fa";
import ProductCard from '../product-card/ProductCard';

import './Carousel.scss';

export default function Carousel({products, title}) {

  const sliderRef = useRef();

  // slider next button
  const goToNext = () => {
    let sliderIndex = parseInt(getComputedStyle(sliderRef.current).getPropertyValue('--slider-index'));
    
    sliderIndex++;
    
    sliderRef.current.style.setProperty('--slider-index', sliderIndex);
  }
  
  // slider prev button
  const goToPrev = () => {
    let sliderIndex = parseInt(getComputedStyle(sliderRef.current).getPropertyValue('--slider-index'));
    
    if(sliderIndex > 0){
      sliderIndex--;
      
      sliderRef.current.style.setProperty('--slider-index', sliderIndex);
    }
  }

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
            return <ProductCard key={product._id} className={'carousel__product'} product={product}/>
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
