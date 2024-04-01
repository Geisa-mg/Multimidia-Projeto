'use client'

import { useContext } from "react";
import { HomeContext } from "./context/HomeContext";
import { FaPause, FaPlay } from "react-icons/fa";
import videos, { Video } from './data/video';

export default function Home() {
  const {
    videoURL,
    playing,
    totalTime,
    currentTime,
    videoRef,
    playPause,
    configCurrentTime,
    configVideo
  } = useContext(HomeContext);
  return (
    <main className="mx-auto w-[80%] mt-2 flex">
      <div className="w-[65%] mr-1">
        <video className="w-full" ref={videoRef} src={videoURL}></video>
        <div className="bg-black">
          <input
            type="range"
            min={0}
            max={totalTime}
            value={currentTime}
            onChange={(e) => configCurrentTime(Number(e.target.value))}
          >
          </input>
          <button className="text-white" onClick={playPause}>
            {playing ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>
      <div className="w-[35%] h-[100vh]">
        {
          videos.map((video:Video, index) => {
            return (
              <button className="w-full" onClick={(e) => configVideo(index)}>
                <img key={index} className="w-full h-[200px] mb-1" src={video.imageURL}></img>
              </button>
            )
          })
        }
      </div>
    </main>
  );
}
