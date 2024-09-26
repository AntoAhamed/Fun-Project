import React, { useState, useEffect } from 'react';
import clock_img from '../../../assets/clock.jpeg'

const Alarm = (props) => {
    const { time, mode, alarmTime, setAlarmTime, message, setMessage, resetAlarm } = props;

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <img src={clock_img} alt='' className='rounded h-75 w-75' />
                </div>
                <div className='col-md-6 text-container'>
                    <div className={`border border-5 rounded text-center feature-card bg-${mode}`}>
                        <h2 className='fs-1 fw-bold'>Set Alarm</h2>
                        <p className='fs-3'>{time.toLocaleTimeString()}</p>
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
