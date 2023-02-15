import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CategoryPage() {

    const { category } = useParams();

    const products = useSelector(state => state.products.products.filter(product => product.category.split(' ').includes(category)));

  return (
    <div className='category__container'>
        {
            products.length > 0 && products.map(product => {
                return(
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
