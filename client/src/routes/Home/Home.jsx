import { useSelector } from 'react-redux';
import ProductCard from "../../components/product-card/ProductCard";
import Spinner from '../../components/spinner/Spinner';
import HomeVideo from '../../components/home-video/HomeVideo';

import './Home.scss';

export default function Home() {

  const {products, isLoading} = useSelector(state => state.products);

  return (
    <div className="home__container">
      {
        isLoading ? <Spinner/> :

        <HomeVideo/>
      }
    </div>
  )
}
