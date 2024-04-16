'use client'

import { ReactNode, RefObject, createContext, useEffect, useRef, useState } from "react";
import videos, { Video } from "../data/video";
<<<<<<< HEAD
import { filters, Filter } from "../data/Filter";
=======
import { Filter, GreenFilter, filters } from "../data/Filter";
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5

type HomeContextData = {
    videoURL: string;
    playing: boolean;
    totalTime: number;
    currentTime: number;
<<<<<<< HEAD
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
=======
    videoRef: RefObject<HTMLVideoElement>;
    canvasRef: RefObject<HTMLCanvasElement>;
    playPause: () => void;
    configCurrentTime: (time:number) => void;
    configVideo: (index: number) => void;
    configFilter: (index: number) => void;
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
}

export const HomeContext =
    createContext({} as HomeContextData);

type ProviderProps = {
    children: ReactNode;
}

<<<<<<< HEAD
const HomeContextProvider = ({ children }: ProviderProps) => {
    const [videoURL, setVideoURL] = useState(""); //"video/video01.mp4"
=======
const HomeContextProvider = ({children}: ProviderProps) => {
    const [videoURL, setVideoURL] = useState("");
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
    const [videoIndex, setVideoIndex] = useState(0);
    const [filterIndex, setFilterIndex] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [totalTime, setTotalTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
<<<<<<< HEAD
    const [volume, setVolume] = useState(0);
    const [mute, setMute] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [fullScreen, setFullScreen] = useState(false);

    useEffect(() => {
=======
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
        configVideo(videoIndex);
    }, []);

    const configVideo = (index: number) => {
        const currentIndex = index % videos.length;
        const currentVideo: Video = videos[currentIndex];
        const currentVideoURL = currentVideo.videoURL;
        setVideoURL(currentVideoURL);
        setVideoIndex(currentIndex);
    }
<<<<<<< HEAD

=======
    
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
    const configFilter = (index: number) => {
        setFilterIndex(index);
    }

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
<<<<<<< HEAD
            video.onloadeddata = () => {
=======
            video.onloadedmetadata = () => {
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
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
<<<<<<< HEAD
    }, [videoURL, filterIndex])
=======
    }, [videoURL, filterIndex]);
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5

    const configCurrentTime = (time: number) => {
        const video = videoRef.current;
        if (!video) return;
        video.currentTime = time;
        setCurrentTime(time);
    }

<<<<<<< HEAD
    const playPause = () => {
=======
    const playPause = ()  => {
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
        const video = videoRef.current;
        if (!video) return;

        if (playing) {
<<<<<<< HEAD
            setPlaying(false);
            video.pause();
        } else {
            setPlaying(true);
=======
           video.pause();     
        }
        else {
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
            video.play();
            draw();
        }
        setPlaying(!playing);
    }

    const draw = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;
<<<<<<< HEAD

=======
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
        var context = canvas.getContext("2d");
        if (!context) return;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
<<<<<<< HEAD
        const filter: Filter = filters[filterIndex];
        for (var i = 0; i < data.length; i += 4) {
=======
        const filter:Filter = filters[filterIndex];
        for (var i = 0; i < data.length; i+=4) {
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
            const red = data[i + 0];
            const green = data[i + 1];
            const blue = data[i + 2];

            filter.calc(red, green, blue);
<<<<<<< HEAD

            data[i] = filter.red;
            data[i + 1] = filter.green;
            data[i + 2] = filter.blue;
        }
=======
            data[i + 0] = filter.red;
            data[i + 1] = filter.green;
            data[i + 2] = filter.blue;
        }
     
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
        context.putImageData(imageData, 0, 0);
        requestAnimationFrame(draw);
    }

<<<<<<< HEAD
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

=======
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
    return (
        <HomeContext.Provider value={
            {
                videoURL,
                playing,
                totalTime,
                currentTime,
                videoRef,
<<<<<<< HEAD
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
=======
                canvasRef,
                playPause,
                configCurrentTime,
                configVideo,
                configFilter
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
            }
        }>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;