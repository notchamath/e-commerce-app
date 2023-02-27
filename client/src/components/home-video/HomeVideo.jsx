import {useRef, useEffect} from "react"
import { useNavigate } from 'react-router-dom';

import homeVideo from '../../assets/videos/homeVideo.mp4';

import './HomeVideo.scss';

export default function HomeVideo({product}) {
  const videoRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  
  const handleClick = () => {
    navigate(`/products/${product?._id}`);
  }

  return (
    <section className='home-video__container'>
      <h1 onClick={handleClick}>{product?.name}</h1>
      <video
        ref={videoRef}
        loop
        autoPlay
        muted
        playsInline
        preload='auto'
      >
        <source src={homeVideo} type="video/mp4" />
      </video>
    </section>
  )
}
