import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft,  FaAngleRight} from "react-icons/fa";
import useGetRandomProducts from '../../hooks/useGetRandomProducts';

import './ImageSlider.scss';

export default function ImageSlider({products}) {
  const numOfProducts = 5;
  const navigate = useNavigate();
  const getRandomProd = useGetRandomProducts();

  const[sliderProducts, setSliderProducts] = useState([]);
  const[currentIndex, setCurrentIndex] = useState(0);
  
  // Get 5 random products, can be modified to 5 best-selling products
  useEffect(() => {
    setSliderProducts(getRandomProd(products, numOfProducts));
  }, [products]);
  

  // handle click on left arrow
  const goToPrev = () => {
    let newIndex = null;
    currentIndex === 0 ? newIndex = numOfProducts - 1 : newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  // handle click on right arrow
  const goToNext = () => {
    let newIndex = null;
    currentIndex === numOfProducts - 1 ? newIndex = 0 : newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  
  // handle click on slide indicator
  const goToSlide = (index) => {
    setCurrentIndex(index);
  }

  // handle click on slide
  const goToProduct = (id) => {
    navigate(`/products/${id}`)
  }

  // change slides every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNext();
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [currentIndex]);


  return (
    <div className='image-slider__container'>

      <div 
        onClick={goToPrev}
        className="image-slider__left-arrow"
      >
        <FaAngleLeft/>
      </div>

      <div 
        onClick={goToNext}
        className="image-slider__right-arrow"
      >
        <FaAngleRight/>
      </div>

      <div 
        className="image-slider__image"
        onClick={() => goToProduct(sliderProducts[currentIndex]?._id)}
        style={{backgroundImage: `url(${sliderProducts[currentIndex]?.image})`}}
      >
      </div>

      <div className="image-slider__name">
        {sliderProducts[currentIndex]?.name}
      </div>

      <div className="image-slider__indicators-container">
        <div className="image-slider__indicators">
        {
          sliderProducts.map((product, index) => {

            return (
              <div 
                key={index}     
                className={`image-slider__indicator ${currentIndex === index ? 'active-slide' : ''}`} 
                onClick={() => goToSlide(index)}
              >
                <div 
                  className='image-slider__indicator-btn'
                  style={{backgroundImage: `url(${product?.image})`}}
                ></div>
              </div> 
            )

          })
        }
        </div>
      </div>
    </div>
  )
}
