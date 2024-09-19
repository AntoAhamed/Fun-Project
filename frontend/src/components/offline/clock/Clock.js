import React, { useEffect, useState } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    const formatDate = (now) => {
        const days = String(now.getDate()).padStart(2, '0')
        const months = String(now.getMonth()+1).padStart(2, '0')
        const years = String(now.getFullYear())
        return `${days}/${months}/${years}`
    };

    const formatTime = (now) => {
        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        const seconds = String(now.getSeconds()).padStart(2, '0')
        return `${hours}:${minutes}:${seconds} ${hours >= 12 ? 'PM' : 'AM'}`
    };

    return (
        <div style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
            <p>Date & Time Clock</p>
            <p>{formatDate(time)}</p>
            <p>{formatTime(time)}</p>
        </div>
    )
}

export default Clock
