import React, { useEffect } from 'react'
import User_img from '../../assets/user.png'
import { json, useNavigate } from 'react-router-dom'

function Profile(props) {
    const { coins, setCoins, isAvailable, setIsAvailable, auth, setAuth, resetProfile } = props

    const navigate = useNavigate()

    const lockProfile = () => {
        let tAuth = auth
        tAuth.isToken = ''
        setAuth(tAuth)
        navigate('/unlock')
    }

    const buyEdit = () => {
        if (coins >= 300) {
            setCoins((prev) => prev - 300)
            let tIsAvailable = isAvailable
            tIsAvailable.edit = 1
            setIsAvailable(tIsAvailable)
            alert("Congratulations! You unlocked edit profile.")
        } else {
            alert("Insufficient Balance.")
        }
    }

    const buyLock = () => {
        if (coins >= 500) {
            setCoins((prev) => prev - 500)
            let tIsAvailable = isAvailable
            tIsAvailable.lock = 1
            setIsAvailable(tIsAvailable)
            alert("Congratulations! You unlocked lock profile.")
        } else {
            alert("Insufficient Balance.")
        }
    }

    return (
        <div className='border rounded d-flex flex-column justify-content-center align-items-center mx-5 my-3 p-5 text-dark' style={{ background: "aliceblue" }}>
            <img src={props.initToolbox.image ? props.initToolbox.image : User_img} alt='' width={'30%'} className='mb-3 rounded' />
            <h3 className='fs-3 fw-bold mb-3'>{props.initToolbox.name}</h3>
            <p className='mb-3'>{props.initToolbox.bio === '' ? "Bio" : props.initToolbox.bio}</p>
            <div className='mb-3'>
                {isAvailable?.edit === 0 ? <button className='btn btn-success rounded-pill mx-2 mb-2' onClick={buyEdit}>Buy Edit Profile With 300 Pt</button> :
                    <button className='btn btn-primary rounded-pill mx-2 mb-2' onClick={() => navigate('/edit-profile')}>Edit Profile</button>}
                {isAvailable?.lock === 0 ? <button className='btn btn-success rounded-pill mx-2 mb-2' onClick={buyLock}>Buy Lock Profile With 500 Pt</button> :
                    <button className='btn btn-warning rounded-pill mx-2 mb-2' onClick={() => navigate('/set-profile-lock')}>Set Profile Lock</button>}
                <button className='btn btn-danger rounded-pill mx-2 mb-2' onClick={resetProfile}>Reset Profile</button>
            </div>
            {auth?.isToken !== '' ?
                <div className='mb-3'>
                    <button className='btn btn-dark rounded-pill mb-2' onClick={lockProfile}>Lock Profile</button>
                </div> : ''}
            <p className='text-danger fw-bold'>After reset profile you can't undo this action.</p>
        </div>
    )
}

export default Profile
