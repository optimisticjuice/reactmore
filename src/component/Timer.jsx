import { useRef, useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);
    const timerRef = useRef(null); // Ref to store the interval ID
    
    const startTimer = () => {
        // Clear any existing timer
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        
        // Start new timer
        timerRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000); // Increment every 1 second
    };
    
    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };
    
    const resetTimer = () => {
        stopTimer();
        setTime(0);
    };
    
    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);
    
    return (
        <div>
            <h2>Timer: {time} seconds</h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Timer;