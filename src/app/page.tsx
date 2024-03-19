'use client'

import { useContext } from "react";
import { HomeContext } from "./context/HomeContext";
import { FaPause, FaPlay } from "react-icons/fa";

export default function Home() {
  const {
    videoURL,
    playing,
    totalTime,
    currentTime,
    videoRef,
    playPause,
    configCurrentTime
  } = useContext(HomeContext);
  return (
    <main>
     <h1 className="font-bold text-black">
      Home {videoURL} - {playing ? "true" : "false"}
     </h1>

     <video ref={videoRef} controls src="video/video01.mp4"></video>
     <input 
        type="range"
        min={0}
        max={totalTime}
        value={currentTime}
        onChange={(e) => configCurrentTime(Number(e.target.value))}
      >

     </input>
     <button onClick={playPause}>
      
      {playing ? <FaPause /> : <FaPlay />}
      
      </button>

    </main>
  );
}
