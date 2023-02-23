import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CARD_COLOR } from '../../components/product-card/ProductCard';
import useGetRandomProducts from '../../hooks/useGetRandomProducts';
import Spinner from '../../components/spinner/Spinner';
import ImageSlider from '../../components/image-slider/ImageSlider';
import HomeVideo from '../../components/home-video/HomeVideo';
import Carousel from '../../components/carousel/Carousel';
import HomeBanner from '../../components/home-banner/HomeBanner';
import HomeCategories from '../../components/home-categories/HomeCategories';

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
  
  // product promoted by banner
  const bannerProduct =  products.find(product => product.name === 'god of war ragnarök');

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

      <Carousel cardColor={CARD_COLOR.WHITE} title={'New Releases'} products={newRelease}/>

      <HomeBanner product={bannerProduct}/>

      <HomeCategories/>
    </div>
  )
}
