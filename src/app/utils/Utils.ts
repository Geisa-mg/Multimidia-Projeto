export const convertTimeToString = (time: number) => {
    const minutes = Math.trunc(time/60);
<<<<<<< HEAD
    const seconds = Math.trunc(time%60);
=======
    const seconds = Math.trunc(time % 60);
>>>>>>> dbb960f1a592497c0f1e41bad37677a8019651c5
    return ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
}