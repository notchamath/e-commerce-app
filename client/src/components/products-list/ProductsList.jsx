import { useSelector } from 'react-redux';

export default function ProductsList() {

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
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}
