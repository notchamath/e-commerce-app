import { useNavigate } from 'react-router-dom';

import homeVideo from '../../assets/videos/homeVideo.mp4';

import './HomeVideo.scss';

export default function HomeVideo({product}) {
  const navigate = useNavigate();
  
  // handle click
  const handleClick = () => {
    navigate(`/products/${product?._id}`);
  }

  return (
    <section className='home-video__container'>
      <h1 onClick={handleClick}>{product?.name}</h1>
      <video
        loop
        autoPlay
        muted
        playsInline
      >
        <source src={homeVideo} type="video/mp4" />
      </video>
    </section>
  )
}
