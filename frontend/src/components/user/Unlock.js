import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Unlock() {
    const navigate = useNavigate()

    const [pin, setPin] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const toolbox = JSON.parse(localStorage.getItem("toolbox"));

        if (pin !== '') {
            if (toolbox.auth.token === pin) {
                toolbox.auth.isToken = pin
                localStorage.setItem('toolbox', JSON.stringify(toolbox))
                navigate('/')
            } else {
                setMessage("Something went wrong!")
            }
        } else {
            setMessage("Empty field can't be submitted!")
        }
    }

    {/*const authCheck = () => {
        const toolbox = JSON.parse(localStorage.getItem("toolbox"));

        if (toolbox.auth.token !== '' && toolbox.auth.isToken === '') {
            navigate('/unlock')
        }
    }

    useEffect(() => {
        authCheck()
    }, [])*/}

    return (
        <div className='border rounded p-5 bg-light text-dark' style={{ margin: '3% 17%' }}>
            <h1 className='fs-1 fw-bold mb-3'>Unlock Profile</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label'>PIN</label>
                    <input className='form-control' type='password' value={pin} onChange={(e) => setPin(e.target.value)} placeholder='Enter Your PIN Here' maxLength={'5'} />
                </div>
                <button type='submit' className='btn btn-primary rounded-pill mb-2'>Unlock</button>
                <p className='fs-6 text-danger'>{message}</p>
            </form>
        </div>
    )
}

export default Unlock
