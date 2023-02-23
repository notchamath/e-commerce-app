import { useSelector } from 'react-redux';

import './HomeCategories.scss'

export default function HomeCategories() {

  // get list of categories
  const {categories, products} = useSelector( state => state.products);

  const getImage = (category) => {
    const categoryProducts = products.filter(product => product.category.includes(category));
    const bg = categoryProducts[Math.floor(Math.random() * categoryProducts.length)].image;

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
