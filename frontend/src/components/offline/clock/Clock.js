import React, { useEffect, useState } from 'react'
import clock_img from '../../../assets/clock.jpeg'

function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 image-container'>
                    
                </div>
                <div className='col-md-6 text-container'>
                    <div className='border border-5 rounded text-center feature-card'>
                        <h2 className='fs-1 fw-bold mb-4'>Date & Time Clock</h2>
                        <div className='d-flex justify-content-between'>
                            <p className='fs-3'>{time.toLocaleDateString()}</p>
                            <p className='fs-3'>{time.toLocaleTimeString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clock
