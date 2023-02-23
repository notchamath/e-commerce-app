import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function BrowseDropdown({className}) {

  const navigate = useNavigate();
  
  // get list of categories
  const categoriesList = useSelector( state => state.products.categories);

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
