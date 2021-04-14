import React, {useEffect, useState} from "react";

//current Time, current Width
const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState();
    useEffect(() => {
        const handler = setInterval(() => {
            const current = (new Date()).toISOString().slice(11, 19);
            setCurrentTime(current);
        }, 1000);
        return () => clearInterval(handler);
    }, []);
    return currentTime;
}

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return() => window.removeEventListener("resize", onResize);
    }, [])
    return width;
}

const App4 = () => {
    const currentTime = useCurrentTime();
    const windowWidth = useWindowWidth();
    return (
        <div>
            <h1>현재 시각</h1>
            <p>{currentTime}</p>
            <h4>Width : {windowWidth}</h4>
        </div>
    )
}

export default App4;