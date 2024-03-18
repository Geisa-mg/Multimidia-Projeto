'use client'

import { ReactNode, RefObject, createContext, useRef, useState } from "react";

type HomeContextData = {
    videoURL: string;
    playing: boolean;
    videoRef: RefObject<HTMLVideoElement>;
    playPause: () => void;
}

export const HomeContext =
   createContext({} as HomeContextData);

type ProviderProps = {
    children: ReactNode;    
}

const HomeContextProvider = ({children}: ProviderProps) => {
    const [videoURL, setVideoURL] = useState("video/video01.mp4");
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const playPause = ()  => {
        const video = videoRef.current;
        if (!video) return;

        if (playing) {
           video.pause();     
        }
        else {
            video.play();
        }
        setPlaying(!playing);
    }

    return (
        <HomeContext.Provider value={
            {
                videoURL,
                playing,
                videoRef,
                playPause
            }
        }>
         {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;