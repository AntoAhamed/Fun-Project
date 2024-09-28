import React from 'react'
import User_img from '../../assets/user.png'

function profile(props) {
    return (
        <div className='border rounded d-flex flex-column justify-content-center align-items-center mx-5 my-3 p-5 text-dark' style={{background: "aliceblue"}}>
            <img src={User_img} alt='' width={'30%'} className='mb-2' />
            <h3 className='fs-3 fw-bold mb-2'>{props.initToolbox.name}</h3>
            <p className='mb-2'>{props.initToolbox.bio === '' ? "Bio" : props.initToolbox.bio}</p>
        </div>
    )
}

export default profile
