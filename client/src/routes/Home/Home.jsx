import { useSelector } from 'react-redux';
import Spinner from '../../components/spinner/Spinner';
import HomeVideo from '../../components/home-video/HomeVideo';
import Carousel from '../../components/carousel/Carousel';
import ImageSlider from '../../components/image-slider/ImageSlider';

import './Home.scss';

export default function Home() {

  // all products
  const {products, isLoading} = useSelector(state => state.products);

  // product promoted by video
  const videoProduct =  products.find(product => product.name === 'battlefield™ 2042');

  return (
    <div className="home__container">

      {isLoading && <Spinner/>}

      <ImageSlider products={products}/>

      <HomeVideo product={videoProduct}/>

      <Carousel title={'Most Popular'} products={products}/>
    </div>
  )
}
