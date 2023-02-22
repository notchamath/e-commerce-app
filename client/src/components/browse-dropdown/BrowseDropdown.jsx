import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function BrowseDropdown({className}) {

  const navigate = useNavigate();
  
  // get list of categories from products array, use Set to remove duplicates
  const categoriesList = useSelector( state => {
    if(state.products.products.length < 1) return [];

    let categories = ['all'];

    state.products.products.forEach(item => item.category.forEach(category => categories.push(category)));

    return [...new Set(categories)];

  });

  // handle click
  const handleNav = (category) => {
    navigate(`/categories/${category}`);
  }

  return (
    categoriesList.map((category, idx) => {
      return (
        <div key={idx} className={`${className}`} onClick={() => {handleNav(category)}}>
          {
            category === 'all' ? 'All Products' : category.replaceAll('-', ' ')
          }
        </div>
      )
    })
  )
}
