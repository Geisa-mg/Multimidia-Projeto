'use client'
import videos, { Video } from "./data/video";

//alt + shift + f (para formatar)

import { useContext, useState } from "react";
import { HomeContext } from "./context/HomeContext";
<<<<<<< HEAD
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { FaExpand } from "react-icons/fa";
=======
import { FaPause, FaPlay } from "react-icons/fa";
import videos, { Video } from './data/video';
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
import { convertTimeToString } from "./utils/Utils";

export default function Home() {
  const [showFilter, setShowFilter] = useState(true);
  const {
    videoURL,
    playing,
    totalTime,
    currentTime,
    videoRef,
    canvasRef,
    playPause,
    configCurrentTime,
    configVideo,
<<<<<<< HEAD
    changeVolume,
    changeIconMute,
    mute,
    volume,
    nextVideo,
    configFilter,
    changeFullScreen

  } = useContext(HomeContext);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value);
    changeVolume(volume);
  }

  return (
    <main className="mx-auto w-[80%] mt-14 flex">
      <div className="w-[65%]">
        <video className="w-full" ref={videoRef} controls src={videoURL} hidden></video>
        <canvas className="w-full h-[380px]" ref={canvasRef} id="video"></canvas>
        <div id="playVolume" className="bg-black">
          <input
            className={"ml-5 w-[95%]"}
=======
    configFilter
  } = useContext(HomeContext);
  return (
    <main className="mx-auto w-[80%] mt-2 flex">
      <div className="w-[65%] mr-1">
        <video className="w-full" ref={videoRef} src={videoURL} hidden={showFilter}></video>
        <canvas className="w-full h-[380px]" ref={canvasRef} hidden={!showFilter}></canvas>

        <div className="bg-black">
          <input className="appearance-none
                            [&::-webkit-slider-runnable-track]:appearance-none
                            [&::-webkit-slider-thumb]:appearance-none
                            [&::-webkit-slider-runnable-track]:bg-[tomato]
                            [&::-webkit-slider-runnable-track]:h-[10px]
                            [&::-webkit-slidershowFilter-thumb]:h-[10px]
                            [&::-webkit-slider-thumb]:w-[10px]
                            [&::-webkit-slider-thumb]:bg-[green]"
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
            type="range"
            min={0}
            max={totalTime}
            value={currentTime}
            onChange={(e) => configCurrentTime(Number(e.target.value))}
          >
          </input>
<<<<<<< HEAD
          <button className="text-white ml-5 mr-1" onClick={playPause}>{playing ? <FaPause /> : <FaPlay />}</button>
          <button className="text-white ml-5 mr-1" onClick={nextVideo}>{<FaForwardStep />}</button>
          <button className="text-white ml-5 mr-1" onClick={changeIconMute}>
            {mute ? <FaVolumeMute /> : <FaVolumeHigh />}
          </button>
          <input
            type="range"
            defaultValue={1}
            min={0}
            max={1}
            step={0.1}
            value={volume}
            className="w-[10%]"
            onChange={change} />
          <span className="text-white ml-5 mr-1">
            {convertTimeToString(currentTime)} / {convertTimeToString(totalTime)}
          </span>
          <select onChange={(e) => configFilter(Number(e.target.value))} className={"ml-5 mr-1 w-[20px]"}>
            <option value={0}>Verde</option>
            <option value={1}>Azul</option>
            <option value={2}>Vermelho</option>
            <option value={3}>Preto e branco</option>
          </select>
          <button onClick={changeFullScreen} className="text-white float-right mr-5"><FaExpand /></button>
        </div>
      </div>
      <div className="w-[35%] h-[100vh] ml-[10%]" >
        {
          videos.map((video: Video, index) => {
            return (
              <div className="border border-black mb-3" id="next-video">
                <button className="w-full" onClick={(e) => configVideo(index)}>
                  <img key={index} src={video.imageURL} alt="" className="w-full h[200px] mb-1" />
                  <h1 className="text-white ml-5 mr-1">{video.description}</h1>
                </button>
              </div>
=======
          <button className="text-white" onClick={playPause}>
            {playing ? <FaPause /> : <FaPlay />}
          </button>
          <select onChange={(e) => configFilter(Number(e.target.value))} hidden={!showFilter}>
          <option selected value={0}>Sem filtro</option>
            <option value={1}>Verde</option>
            <option value={2}>Azul</option>
            <option value={3}>Vermelho</option>
            <option value={4}>Preto e branco</option>
          </select>
        <input type="checkbox" name="Filtro" onChange={()=>setShowFilter(!showFilter)}/>
          <span className="text-white">
          {convertTimeToString(currentTime)}:{convertTimeToString(totalTime)}
          </span>
        </div>
      </div>
      <div className="w-[35%] h-[100vh]">
        {
          videos.map((video:Video, index) => {
            return (
              <button className="w-full" onClick={(e) => configVideo(index)}>
                <img key={index} className="w-full h-[200px] mb-1" src={video.imageURL}></img>
              </button>
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
            )
          })
        }
      </div>
    </main>
  );
}
