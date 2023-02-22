import { useNavigate } from 'react-router-dom';
import homeVideo from '../../assets/videos/homeVideo.mp4';

import './HomeVideo.scss';


export default function HomeVideo({product}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product?._id}`);
  }

  return (
    <div className='home-video__container' onClick={handleClick}>
        <h1>{product?.name}</h1>
        <video src={homeVideo} autoPlay loop muted></video>
    </div>
  )
}
