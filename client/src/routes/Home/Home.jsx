import { useSelector } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import HomeVideo from '../../components/home-video/HomeVideo';
import Carousel from '../../components/carousel/Carousel';
import ImageSlider from '../../components/image-slider/ImageSlider';

import './Home.scss';

export default function Home() {

  const {products, isLoading} = useSelector(state => state.products);

  return (
    <div className="home__container">
      <ImageSlider products={products}/>

      {
        isLoading && <Spinner/>
      }

      {/* <HomeVideo/> */}

      <Carousel title={'Most Popular'} products={products}/>
    </div>
  )
}
