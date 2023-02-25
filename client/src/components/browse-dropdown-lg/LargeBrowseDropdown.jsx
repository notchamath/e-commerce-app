import { forwardRef } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import './LargeBrowseDropdown.scss';

const LargeBrowseDropdown = forwardRef(({className}, browseRef) => {

  const navigate = useNavigate();
  
  // get list of categories
  const categoriesList = useSelector( state => state.products.categories);

  // handle click
  const handleNav = (category) => {
    navigate(`/categories/${category}`);
  }

  return (
    <div className={`nav__browse-list__container ${className}`}>
      <div ref={browseRef} className="nav__browse-list">
        {
          categoriesList.map((category, idx) => {
            return (
              <div key={idx} className='nav__browse-item' onClick={() => {handleNav(category)}}>
                {
                  category === 'all' ? 'All Products' : category.replaceAll('-', ' ')
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
})

export default LargeBrowseDropdown;