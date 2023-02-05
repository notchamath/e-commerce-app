import { useSelector } from 'react-redux';
import ProductsItem from '../products-item/ProductsItem';

export default function ProductsList() {
  const {products} = useSelector(state => state.products);

  return (
    <div className="products-list__container">
      {
        products.map(product => {
          return (
            <ProductsItem key={product._id} product={product}/>
          )
        })
      }
    </div>
  )
}
