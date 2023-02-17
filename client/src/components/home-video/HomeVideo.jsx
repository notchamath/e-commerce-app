import homeVideo from '../../assets/videos/homeVideo.mp4';

import './HomeVideo.scss';


export default function HomeVideo() {
  
  return (
    <div className='home-video__container'>
        <h1>This is the video</h1>
        <video src={homeVideo}></video>
    </div>
  )
}
