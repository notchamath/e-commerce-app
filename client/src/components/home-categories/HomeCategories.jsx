import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './HomeCategories.scss'

export default function HomeCategories() {

  const navigate = useNavigate();

  // handle onClick
  const handleClick = (category) => {
    navigate(`/categories/${category}`);
  }

  // get list of categories and products
  const {categories, products} = useSelector( state => state.products);

  // return an image of a product from the given category to be used as the background image for the said category
  const getImage = (category) => {
    const categoryProducts = products.filter(product => product.category.includes(category));
    const bg = categoryProducts[Math.floor(Math.random() * categoryProducts.length)]?.image;

    return(`url(${bg})`);
  }

  return (
    <section className='home-categories__container'>
      <h1 className="home-categories__title">
        Browse
      </h1>

      <div className="home-categories__container-inner">
      {
        categories.map((category, index) => {
          return(
            (category !== 'all') && 
            <div 
              key={index} 
              className="home-categories__category" 
              onClick={() => handleClick(category)}
              style={{backgroundImage: getImage(category)}}
            >
              <div className="home-categories__name">
                {
                  category.replaceAll('-', ' ')
                }
              </div>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}
