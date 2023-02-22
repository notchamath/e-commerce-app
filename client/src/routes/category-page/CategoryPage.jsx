import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/ProductCard';

import './CategoryPage.scss';

export default function CategoryPage() {

    const { category } = useParams();

    let products = useSelector(state => state.products.products);

    if(category !== 'all') {
      products = products.filter(product => product.category.includes(category));
    }

  return (
    <div className='category__container'>

      <div className="category__name">
      {
        (category === 'all') ? 'Browse All' : category.replaceAll('-', ' ')
      }
      </div>
      <div className="category__items">
        {
          products.length > 0 && products.map(product => {
              return <ProductCard key={product._id} product={product}/>
          })
        }
      </div>
      
    </div>
  )
}
