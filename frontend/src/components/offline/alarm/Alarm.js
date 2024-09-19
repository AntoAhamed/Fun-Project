import React, { useState, useEffect } from 'react';

const Alarm = () => {
    const [alarmTime, setAlarmTime] = useState("");
    const [message, setMessage] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (alarmTime && currentTime.toLocaleTimeString('en-GB').slice(0, 5) === alarmTime) {
            setMessage("Time's up! Alarm is ringing.");
        }
    }, [alarmTime, currentTime]);

    return (
        <div style={styles.container}>
            <h2>Set Alarm</h2>
            <div style={styles.timeDisplay}>{currentTime.toLocaleTimeString()}</div>
            <input
                type="time"
                value={alarmTime}
                onChange={(e) => setAlarmTime(e.target.value)}
                style={styles.input}
            />
            <button onClick={() => setAlarmTime("")} style={styles.button}>
                Reset Alarm
            </button>
            {message && <p style={styles.message}>{message}</p>}
        </div>
    );
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
        fontSize: '36px',
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        width: '80%',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    message: {
        color: 'red',
        fontWeight: 'bold',
        marginTop: '10px',
    },
};

export default Alarm;
