import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import homeVideo from '../../assets/videos/homeVideo.mp4';

import './HomeVideo.scss';

export default function HomeVideo({product}) {
  const navigate = useNavigate();
  const videoRef = useRef();
  
  // handle click on title
  const handleClick = () => {
    navigate(`/products/${product?._id}`);
  }

  // handle click on video
  const handlePlay = () => {
    videoRef.current.play();
  }

  return (
    <section className='home-video__container'>
      <h1 onClick={handleClick}>{product?.name}</h1>

      <div className='home-video__video' onClick={handlePlay}>
        <video
          ref={videoRef}
          loop
          muted="true"
          playsInline
          autoPlay
        >
          <source src={homeVideo} type="video/mp4" />
        </video>
      </div>

    </section>
  )
}
