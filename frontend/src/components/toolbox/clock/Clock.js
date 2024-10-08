import React from 'react'

function Clock(props) {
    const {time} = props;

    return (
        <div>
            <div className='d-flex justify-content-around my-2'>
                <div className='fs-4 fw-bold text-decoration-underline'>{time.toLocaleDateString()}</div>
                <div className='fs-4 fw-bold text-decoration-underline'>{time.toLocaleTimeString()}</div>
            </div>
        </div>
    )
}

export default Clock
