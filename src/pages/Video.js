import React, {useRef, useState } from "react"
import Videofooter from "./components/footer/Videofooter";
import "./Video.css";
import VideoSidebar from "./components/sidebar/VideoSidebar";

function Video({likes, messages, shares, name, description, music,url}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar
      likes={likes}
      messages={messages}
      shares={shares}
      />
      <Videofooter 
      name={name}
      description={description}
      music={music}
      />
    </div>
  );
}

export default Video;
/*https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4 */