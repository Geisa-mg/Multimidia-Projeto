//banco de dados

export type Video = {
    videoURL: string;
    imageURL: string;
    description: string;
}

const videos: Video[] = [
    {
        videoURL: "video/video03.mp4",
        imageURL: "image/chuva3.jpeg",
        description: "Quem floresce no deserto não espera por chuva."
    },
    {
        videoURL: "video/video02.mp4",
        imageURL: "image/chuva2.jpeg",
        description: "Chuva é quando o céu chora para limpar a alma."
    },
    {
        videoURL: "video/video01.mp4",
        imageURL: "image/chuva1.jpeg",
        description: "Se a tempestade não passar, dance na chuva."
    }
]

export default videos;