import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useGetRandomProducts from '../../hooks/useGetRandomProducts';
import Spinner from '../../components/spinner/Spinner';
import HomeVideo from '../../components/home-video/HomeVideo';
import Carousel from '../../components/carousel/Carousel';
import ImageSlider from '../../components/image-slider/ImageSlider';

import './Home.scss';

export default function Home() {

  const getRandomProd = useGetRandomProducts();
  // Most Popular will receive random products for this project
  const [mostPopular, setMostPopular] = useState([]);
  // New Release will receive random products for this project
  const [newRelease, setNewRelease] = useState([]);

  // all products
  const {products, isLoading} = useSelector(state => state.products);
  
  // product promoted by video
  const videoProduct =  products.find(product => product.name === 'battlefield™ 2042');
  
  // get random products
  useEffect(() => {
    setMostPopular(getRandomProd(products, 8))
    setNewRelease(getRandomProd(products, 8))
  }, [products])

  return (
    <div className="home__container">

      {isLoading && <Spinner/>}

      <ImageSlider products={products}/>

      <HomeVideo product={videoProduct}/>

      <Carousel title={'Most Popular'} products={mostPopular}/>

      <Carousel title={'New Releases'} products={newRelease}/>
    </div>
  )
}
