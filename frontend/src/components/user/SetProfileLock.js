import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SetProfileLock(props) {
    const navigate = useNavigate()

    const { auth, setAuth } = props

    const [currentPin, setCurrentPin] = useState('')
    const [newPin, setNewPin] = useState('')
    const [message, setMessage] = useState('')

    const authCheck = () => {
        const toolbox = JSON.parse(localStorage.getItem("toolbox"));

        if (toolbox.auth.token !== '' && toolbox.auth.isToken === '') {
            navigate('/unlock')
        }
    }

    useEffect(() => {
        authCheck()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (newPin !== '') {
            if (auth.token === '') {
                setAuth({ token: newPin, isToken: newPin })
                alert("PIN changed")
                navigate('/dashboard')
            } else {
                if (auth.token === currentPin) {
                    setAuth({ token: newPin, isToken: newPin })
                    alert("PIN changed")
                    navigate('/dashboard')
                }else{
                    setMessage("Current PIN not matched!")
                }
            }
        }else{
            setMessage("Empty field can't be submitted!")
        }
    }

    return (
        <div className='border rounded p-5 bg-light text-dark' style={{ margin: '5% 20%' }}>
            <h1 className='fs-1 fw-bold mb-3'>Set Profile Lock</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label'>PIN (Ex: xxxxx) [If you don't have current PIN, Leave it empty.]</label>
                    <input className='form-control' type='password' value={currentPin} onChange={(e) => setCurrentPin(e.target.value)} placeholder='Enter Current PIN' maxLength={'5'} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>PIN (Ex: xxxxx)</label>
                    <input className='form-control' type='password' value={newPin} onChange={(e) => setNewPin(e.target.value)} placeholder='Enter New PIN' maxLength={'5'} />
                </div>
                <p className='fs-6 text-danger'>{message}</p>
                <p className='fs-6 text-warning'>! After you confirm PIN, You need it to unlock your toolbox.</p>
                <button type='submit' className='btn btn-success rounded-pill mb-2'>Confirm</button>
            </form>
        </div>
    )
}

export default SetProfileLock
