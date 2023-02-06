import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

export default function ProductPage() {

  const { id } = useParams();

  const product = useSelector(state => {
    return state.products.products.find(product => product._id === id);
  });

  return (
    <div className='product-page__container'>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <h3>${product.price}</h3>
      <h4>{product.category}</h4>
    </div>
  )
}
