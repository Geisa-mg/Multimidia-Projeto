import { ReactNode, useState } from "react";
import { createContext } from "vm";

type HomeContextData = {
    videoURL: string;
    playing: boolean;
}

export const HomeContext =
   createContext({} as HomeContextData);

type ProviderProps = {
    children: ReactNode;    
}

const HomeContextProvider = ({children}: ProviderProps) => {
    const [videoURL, setVideoURL] = useState("video/video01.mp4");
    const [playing, setPlaying] = useState(false);
    return (
        <HomeContext.Provider value={
            {
     
            }
        }>
         {children}
        </HomeContext.Provider>
    )
}

