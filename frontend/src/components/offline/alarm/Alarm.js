import React, { useState, useEffect } from 'react';
import alarm_img from '../../../assets/alarm.jpeg'

const Alarm = () => {
    const [alarmTime, setAlarmTime] = useState("");
    const [message, setMessage] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date());

    const resetAlarm = () => {
        setAlarmTime("")
        setMessage("")
    }

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
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 image-container'>
                    
                </div>
                <div className='col-md-6 text-container'>
                    <div className='border border-5 rounded text-center feature-card'>
                        <h2 className='fs-1 fw-bold'>Set Alarm</h2>
                        <p className='fs-3'>{currentTime.toLocaleTimeString()}</p>
                        <input
                            className='form-control mb-2'
                            type="time"
                            value={alarmTime}
                            onChange={(e) => setAlarmTime(e.target.value)}
                        />
                        <button className='btn btn-primary rounded-pill' onClick={resetAlarm}>
                            Reset Alarm
                        </button>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alarm;
