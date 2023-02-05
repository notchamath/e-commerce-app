import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../../store';


export default function ProductsList() {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);

  return (
    <div className="products-list__container">
      {
        products.map(product => {
          return (
            <div key={product._id}>
              <hr />
              <div>{product.name}</div>
              <div>{product.price}</div>
              <div>{product.category}</div>
              <div onClick={()=>{dispatch(removeProduct(product._id))}}>delete</div>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}
