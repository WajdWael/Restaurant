
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import { useRef, useState } from 'react';
import './Intro.css';


const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const handelVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    // if (playVideo) {
    //   videoRef.current.pause()
    // }
      
    playVideo ? videoRef.current.pause() : videoRef.current.play();
  }
  return (
    <section className="app__video">
      <video
        src={meal}
        ref={videoRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay-circle flex__center"
          onClick={handelVideo}
        >
          {playVideo
            ? <BsPauseFill color='#fff' fontSize={30} />
            : <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>
  </section>
  )
};

export default Intro;
