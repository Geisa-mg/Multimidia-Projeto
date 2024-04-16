'use client'

import { ReactNode, RefObject, createContext, useEffect, useRef, useState } from "react";
import videos, { Video } from "../data/video";
import { filters, Filter } from "../data/Filter";

type HomeContextData = {
    videoURL: string;
    playing: boolean;
    totalTime: number;
    currentTime: number;
    videoRef: RefObject<HTMLVideoElement>
    canvasRef: RefObject<HTMLCanvasElement>
    playPause: () => void;
    configCurrentTime: (time: number) => void;
    configVideo: (index: number) => void;
    changeVolume: (volume: number) => void;
    mute: boolean;
    changeIconMute: () => void;
    volume: number;
    nextVideo: () => void;
    configFilter: (index: number) => void;
    fullScreen: boolean;
    changeFullScreen: () => void;
}

export const HomeContext =
    createContext({} as HomeContextData);

type ProviderProps = {
    children: ReactNode;
}

const HomeContextProvider = ({ children }: ProviderProps) => {
    const [videoURL, setVideoURL] = useState(""); //"video/video01.mp4"
    const [videoIndex, setVideoIndex] = useState(0);
    const [filterIndex, setFilterIndex] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [totalTime, setTotalTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [volume, setVolume] = useState(0);
    const [mute, setMute] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [fullScreen, setFullScreen] = useState(false);

    useEffect(() => {
        configVideo(videoIndex);
    }, []);

    const configVideo = (index: number) => {
        const currentIndex = index % videos.length;
        const currentVideo: Video = videos[currentIndex];
        const currentVideoURL = currentVideo.videoURL;
        setVideoURL(currentVideoURL);
        setVideoIndex(currentIndex);
    }

    const configFilter = (index: number) => {
        setFilterIndex(index);
    }

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.onloadeddata = () => {
                setTotalTime(video.duration);
                setCurrentTime(video.currentTime);

                if (playing) {
                    video.play();
                }
            }

            video.ontimeupdate = () => {
                const video = videoRef.current;
                if (!video) return;
                setCurrentTime(video.currentTime);
            }

            video.onended = () => {
                configVideo(videoIndex + 1);
            }
        }
        draw();
    }, [videoURL, filterIndex])

    const configCurrentTime = (time: number) => {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = time;
        setCurrentTime(time);
    }

    const playPause = () => {
        const video = videoRef.current;
        if (!video) return;

        if (playing) {
            setPlaying(false);
            video.pause();
        } else {
            setPlaying(true);
            video.play();
            draw();
        }
        setPlaying(!playing);
    }

    const draw = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        var context = canvas.getContext("2d");
        if (!context) return;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const filter: Filter = filters[filterIndex];
        for (var i = 0; i < data.length; i += 4) {
            const red = data[i + 0];
            const green = data[i + 1];
            const blue = data[i + 2];

            filter.calc(red, green, blue);

            data[i] = filter.red;
            data[i + 1] = filter.green;
            data[i + 2] = filter.blue;
        }
        context.putImageData(imageData, 0, 0);
        requestAnimationFrame(draw);
    }

    const changeVolume = (volume: number) => {
        const video = videoRef.current;
        if (!video) return;

        if (volume > 0) {
            setMute(false);
            video.muted = false;
        }
        if (volume == 0 && video.volume > 0) {
            setMute(true);
            video.muted = true;
        }

        setVolume(volume);
        video.volume = volume;
    }

    const changeIconMute = () => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = !mute;
        video.volume = 0;

        setVolume(0);
        setMute(!mute);
    }

    const nextVideo = () => {
        configVideo(videoIndex + 1);
    }

    const changeFullScreen = () => {
        const element = document.fullscreenElement;

        if (!element) {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.requestFullscreen().then(() => {
                    setFullScreen(true);
                });
            }
        } else {
            document.exitFullscreen().then(() => {
                setFullScreen(false);
            });
        }
    }

    return (
        <HomeContext.Provider value={
            {
                videoURL,
                playing,
                totalTime,
                currentTime,
                videoRef,
                playPause,
                configCurrentTime,
                configVideo,
                changeVolume,
                mute,
                changeIconMute,
                volume,
                canvasRef,
                nextVideo,
                configFilter,
                fullScreen,
                changeFullScreen
            }
        }>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;