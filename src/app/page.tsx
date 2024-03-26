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
    <main className="mx-auto w-[80%] mt-2">
      <div className="w-[640px]">
        <video width={640} ref={videoRef} controls src={videoURL}></video>
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
    </main>
  );
}
