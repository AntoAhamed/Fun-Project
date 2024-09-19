import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);  // Time in seconds
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && time > 0) {
            timer = setInterval(() => {
                setTime(time => time - 1);  // Decrease time by 1 second
            }, 1000);
        } else if (time === 0) {
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, time]);

    const startTimer = () => {
        if (time > 0) {
            setIsRunning(true);
        }
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setTime(0);
        setIsRunning(false);
    };

    return (
        <div style={styles.container}>
            <h2>Timer</h2>
            <div style={styles.timeDisplay}>{formatTime(time)}</div>
            <input
                type="number"
                placeholder="Set time in seconds"
                value={time}
                onChange={(e) => setTime(parseInt(e.target.value))}
                disabled={isRunning}
                style={styles.input}
                min='0'
            />
            <div>
                <button onClick={startTimer} style={styles.button} disabled={isRunning || time === 0}>
                    Start
                </button>
                <button onClick={stopTimer} style={styles.button}>
                    Stop
                </button>
                <button onClick={resetTimer} style={styles.button}>
                    Reset
                </button>
            </div>
        </div>
    );
};

// Helper function to format the time in mm:ss
const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const styles = {
    container: {
        textAlign: 'center',
        margin: '50px auto',
        padding: '20px',
        width: '250px',
        border: '2px solid #ccc',
        borderRadius: '10px',
    },
    timeDisplay: {
        fontSize: '48px',
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        width: '80%',
        marginBottom: '20px',
    },
    button: {
        margin: '5px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default Timer;
