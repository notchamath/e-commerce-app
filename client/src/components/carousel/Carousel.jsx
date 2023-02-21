import ProductCard from '../product-card/ProductCard';

import './Carousel.scss';

export default function Carousel({products}) {
  return (
    <div className="carousel__container">
      {
        products.map(product => {
          return <ProductCard product={product}/>
        })
      }
    </div>
 
  )
}
