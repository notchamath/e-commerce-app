import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductsItem from '../products-item/ProductsItem';

export default function ProductsList() {
  const {products} = useSelector(state => state.products);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }
  
  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="products-list__container">

      <input
        type="text" 
        name="search" 
        className='products-list__search'
        placeholder='Search Products by Name'
        onChange={handleSearch}
      />

      {
        products.length < 1 && <h1>No Items in Database</h1>
      }
      {
        products.length > 0 && searchTerm.length > 0 && <h1>Results for search: "{searchTerm}"</h1>
      }
      {
        filteredProducts.map(product => {
          return (
            <ProductsItem key={product._id} product={product}/>
          )
        })
      }

    </div>
  )
}
