export type Video = {
    videoURL: string;
    imageURL: string;
    description: string;
}

const videos: Video[] = [
    {
        videoURL: "video/video01.mp4",
        imageURL: "image/image01.jpg",
        description: "Elephants Dreams"
    },
    {
        videoURL: "video/video02.mp4",
        imageURL: "image/image02.jpg",
        description: "Vida animal"
    }
]
export default videos;
