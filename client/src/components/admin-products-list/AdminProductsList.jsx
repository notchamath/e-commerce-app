import { useState } from 'react';
import { useSelector } from 'react-redux';

import AdminProductsItem from '../admin-products-item/AdminProductsItem';

import './AdminProductsList.scss'

export default function AdminProductsList() {
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

      <h2>Search for Exsiting Products</h2>

      <input
        type="text" 
        name="search" 
        className='products-list__search'
        placeholder='Search Products by Name'
        onChange={handleSearch}
      />

      <div className="products-list__items">
        {
          products.length < 1 && <h1 className='products-list__message'>No Items in Database</h1>
        }
        {
          products.length > 0 && searchTerm.length > 0 && <h1 className='products-list__message'>Results for search: "{searchTerm}"</h1>
        }
        {
          filteredProducts.map(product => {
            return (
              <AdminProductsItem key={product._id} product={product} />
            )
          })
        }
      </div>
     

    </div>
  )
}
