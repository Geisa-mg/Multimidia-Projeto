'use client'

import { useContext } from "react";
import { HomeContext } from "./context/HomeContext";

export default function Home() {
  const {
    videoURL,
    playing
  } = useContext(HomeContext);
  return (
    <main>
     <h1 className="font-bold text-black">
      Home {videoURL} - {playing ? "true" : "false"}
     </h1>

     <video controls src="video/video01.mp4"></video>
    </main>
  );
}
